#!/usr/bin/env node
// Installs the Intent Harness and the Intent Format into the folder you run it in, and wires that folder to them.
//   npx github:intentstudiodev/intent-harness init      install or update here: Intent-Harness/ and Projects/, AGENTS.md and CLAUDE.md
//   npx github:intentstudiodev/intent-harness update    update the install in this folder; your tweaks and projects stay
//   npx github:intentstudiodev/intent-harness where     print the paths and versions of the install in this folder
// Options: --dir <path> (default: the current folder)
// No dependencies. Needs Node 18 or newer and git. Never overwrites a file of yours.
//
// <your folder>/
//   AGENTS.md, CLAUDE.md       the pointer: read Intent-Harness/Harness/ENTRY.md first (a relative path, so it survives a copy or a clone)
//   README.md                  what is where (only when the folder has none)
//   Intent-Harness/
//     Harness/                 the harness (its tweaks/ is yours and survives updates)
//     Format/                  the Intent Format and its tool (Format/kit/cli/intent-format.mjs)
//     Factory-Settings/        the harness exactly as installed; never edited; core/verify.mjs compares against it and restores from it
//   Projects/                  one folder per product, as many as you like
// Two installs in two folders are two independent copies, each with its own version, settings and projects.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const REPOS = [
  { name: 'Harness', title: 'Intent Harness', url: 'https://github.com/intentstudiodev/intent-harness.git' },
  { name: 'Format', title: 'Intent Format', url: 'https://github.com/intentstudiodev/intent-format.git' },
];
const args = process.argv.slice(2);
const cmd = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--dir') || 'init';
const dirArg = args.includes('--dir') ? args[args.indexOf('--dir') + 1] : null;
const ME = os.homedir();
const ROOT = path.resolve(dirArg ? dirArg.replace(/^~/, ME) : process.cwd());
const TOOLS = path.join(ROOT, 'Intent-Harness');
const OLD_HOME = path.join(ME, 'Intent'); // 1.4–1.6 installed one copy per computer here
const git = (argv, cwd) => execFileSync('git', argv, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const version = (dir) => { try { return fs.readFileSync(path.join(dir, 'VERSION'), 'utf8').trim(); } catch { return '?'; } };
const tilde = (p) => (p === ME || p.startsWith(ME + path.sep) ? '~' + p.slice(ME.length) : p);
const say = (s = '') => console.log(s);

if (!['init', 'update', 'where', 'help'].includes(cmd)) { say('usage: intent-harness [init|update|where] [--dir <path>]'); process.exit(2); }
if (cmd === 'help') { say(fs.readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(1, 7).map((l) => l.replace(/^\/\/ ?/, '')).join('\n')); process.exit(0); }
if (cmd === 'where') {
  if (!fs.existsSync(TOOLS)) { say(`No Intent Harness in ${tilde(ROOT)}. Install here: npx github:intentstudiodev/intent-harness init`); process.exit(1); }
  for (const r of REPOS) say(`${r.title.padEnd(17)} ${version(path.join(TOOLS, r.name)).padEnd(6)} ${tilde(path.join(TOOLS, r.name))}`);
  say(`${'Factory settings'.padEnd(17)} ${version(path.join(TOOLS, 'Factory-Settings')).padEnd(6)} ${tilde(path.join(TOOLS, 'Factory-Settings'))}`);
  say(`${'Projects'.padEnd(24)} ${tilde(path.join(ROOT, 'Projects'))}`);
  process.exit(0);
}
if (ROOT === ME) { say('✗ Not in your home folder. Make a folder for your product work (or open your code folder), and run this there.'); process.exit(2); }
if (path.basename(ROOT) === 'Intent-Harness' || ROOT.split(path.sep).includes('Intent-Harness')) { say('✗ This is inside an install. Run it in the folder that holds Intent-Harness/.'); process.exit(2); }
if (cmd === 'update' && !fs.existsSync(TOOLS)) { say(`✗ No Intent Harness in ${tilde(ROOT)} to update. Install it here: npx github:intentstudiodev/intent-harness init`); process.exit(1); }
try { git(['--version']); } catch { say('✗ git is needed: https://git-scm.com'); process.exit(1); }
fs.mkdirSync(TOOLS, { recursive: true });
fs.mkdirSync(path.join(ROOT, 'Projects'), { recursive: true });

// 1. Install or update both, in this folder.
for (const r of REPOS) {
  const dir = path.join(TOOLS, r.name);
  try {
    if (fs.existsSync(path.join(dir, '.git'))) { git(['fetch', '-q', '--depth', '1', 'origin', 'main'], dir); git(['reset', '-q', '--keep', 'FETCH_HEAD'], dir); }
    else git(['clone', '-q', '--depth', '1', r.url, dir]);
  } catch (e) {
    say(`✗ could not get the ${r.title} from ${r.url}\n  ${String(e.stderr || e.message).trim().split('\n')[0]}\n  Check your internet connection and that git works (git --version). If you changed files inside ${tilde(dir)}, move your changes to Harness/tweaks/ and run this again.`);
    process.exit(1);
  }
}
// 2. Factory settings: the harness exactly as installed, renewed with every install or update.
const factory = path.join(TOOLS, 'Factory-Settings');
fs.rmSync(factory, { recursive: true, force: true });
fs.cpSync(path.join(TOOLS, 'Harness'), factory, { recursive: true, filter: (s) => !['.git', 'tweaks'].includes(path.basename(s)) });

// 3. The pointer: a relative path, so the folder still works after a copy, a move or a git clone by a teammate.
const ENTRY = 'Intent-Harness/Harness/ENTRY.md';
const pointer = (rel) => `This folder uses the Intent Harness. Read \`${rel}\` first.\nIf that file does not exist, tell the user and offer to install it here: \`npx github:intentstudiodev/intent-harness init\`.`;
const OLDLINE = /^This folder uses the Intent Harness\. Read `[^`]*ENTRY\.md` first\.\nIf that file does not exist[^\n]*$/m;
const wireFolder = (here) => {
  const rel = path.relative(here, path.join(ROOT, ENTRY)).split(path.sep).join('/');
  const agents = path.join(here, 'AGENTS.md'), claude = path.join(here, 'CLAUDE.md');
  if (!fs.existsSync(agents)) fs.writeFileSync(agents, pointer(rel) + '\n');
  else {
    const t = fs.readFileSync(agents, 'utf8');
    if (OLDLINE.test(t)) { if (!t.includes(`\`${rel}\``)) fs.writeFileSync(agents, t.replace(OLDLINE, pointer(rel))); }
    else fs.appendFileSync(agents, `\n${pointer(rel)}\n`);
  }
  if (!fs.existsSync(claude)) fs.writeFileSync(claude, '@AGENTS.md\n');
  else if (!fs.readFileSync(claude, 'utf8').includes('AGENTS.md')) say(`· ${tilde(claude)} does not import AGENTS.md: add the line @AGENTS.md if your agent needs it`);
};
if (cmd === 'init') wireFolder(ROOT);
// projects already here point at this install too (their AGENTS.md is written by the format, the pointer added by the harness)
for (const p of fs.readdirSync(path.join(ROOT, 'Projects'))) { const d = path.join(ROOT, 'Projects', p); if (fs.existsSync(path.join(d, 'AGENTS.md'))) wireFolder(d); }
const table = `| Folder | What it holds | Who changes it |\n|---|---|---|\n| \`Projects/\` | each product's knowledge, one folder per product | you, with your agent |\n| \`Intent-Harness/Harness/\` | the Intent Harness | updates; your own changes go in \`Intent-Harness/Harness/tweaks/\` |\n| \`Intent-Harness/Format/\` | the Intent Format and its tool | updates |\n| \`Intent-Harness/Factory-Settings/\` | the harness exactly as installed, to compare and restore | updates only |\n\nOpen this folder in your coding agent and say hello.\nUpdate: \`npx github:intentstudiodev/intent-harness update\` (run it here)\n`;
const readme = path.join(ROOT, 'README.md');
if (!fs.existsSync(readme)) fs.writeFileSync(readme, `# Product knowledge\n\nKept by the Intent Harness.\n\n${table}`);
fs.writeFileSync(path.join(TOOLS, 'README.md'), `# Intent Harness\n\nInstalled here by \`npx github:intentstudiodev/intent-harness init\`.\n\n${table}`);

// 4. What the person (and the agent that ran this) reads.
const hv = version(path.join(TOOLS, 'Harness')), fv = version(path.join(TOOLS, 'Format'));
const old = fs.existsSync(path.join(OLD_HOME, 'Harness', 'ENTRY.md')) && OLD_HOME !== ROOT;
const oldProjects = old ? (() => { try { return fs.readdirSync(path.join(OLD_HOME, 'Projects')).filter((n) => !n.startsWith('.')); } catch { return []; } })() : [];
say(`
✓ The Intent Harness is ready in ${tilde(ROOT)}.   Harness ${hv} · Intent Format ${fv}

  It keeps your product's knowledge: what it is, how it works, and WHY.
  You just talk. It asks, suggests, and writes the knowledge down as plain files.
  Your projects live in ${tilde(path.join(ROOT, 'Projects'))}; one folder per product, as many as you like.
${old ? `\n  An older install is in ${tilde(OLD_HOME)} and stays as it is.${oldProjects.length ? ` To work on its projects here, copy them into Projects/ (${oldProjects.join(', ')}).` : ''}\n` : ''}
Next: open this folder in your coding agent and say hello.
${cmd === 'init' ? `
(For the agent that ran this: to start in this same chat, read ${tilde(path.join(ROOT, ENTRY))} now and follow it; the greeting is core/welcome.md.)` : ''}
Details: npx github:intentstudiodev/intent-harness where`);
