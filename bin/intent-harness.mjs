#!/usr/bin/env node
// Installs the Intent Harness and the Intent Format on this computer, in one visible folder, and wires the current folder to them.
//   npx github:intentstudiodev/intent-harness init      install or update ~/Intent/ (Harness, Format, Projects), add the pointer to ./AGENTS.md
//   npx github:intentstudiodev/intent-harness update    install or update only; touch nothing in the current folder
//   npx github:intentstudiodev/intent-harness where     print the paths and versions
// Options: --dir <path> (default ~/Intent) · --no-wire (init without writing AGENTS.md / CLAUDE.md here)
// No dependencies. Needs git signed in to GitHub while the repositories are private. Never overwrites a file of yours.
//
// ~/Intent/
//   Harness/     the harness, one copy for all projects (tweaks/ is yours and survives updates)
//   Format/      the Intent Format and its CLI (Format/kit/cli/intent-format.mjs)
//   Projects/    each product's knowledge, one folder per product (the default; a project may live anywhere)
//   .factory/    an untouched copy of the harness that core/verify.mjs compares against
//   AGENTS.md    so a chat opened in ~/Intent starts with the harness and its project menu
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
const ROOT = path.resolve(dirArg ? dirArg.replace(/^~/, ME) : path.join(ME, 'Intent'));
const OLD = path.join(ME, '.intent'); // 1.3 and earlier installed here
const wire = cmd === 'init' && !args.includes('--no-wire');
const git = (argv, cwd) => execFileSync('git', argv, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const version = (dir) => { try { return fs.readFileSync(path.join(dir, 'VERSION'), 'utf8').trim(); } catch { return '?'; } };
const tilde = (p) => (p === ME || p.startsWith(ME + path.sep) ? '~' + p.slice(ME.length) : p);
const say = (s = '') => console.log(s);

if (!['init', 'update', 'where', 'help'].includes(cmd)) { say('usage: intent-harness [init|update|where] [--dir <path>] [--no-wire]'); process.exit(2); }
if (cmd === 'help') { say(fs.readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(1, 7).map((l) => l.replace(/^\/\/ ?/, '')).join('\n')); process.exit(0); }
if (cmd === 'where') { for (const r of REPOS) say(`${r.title.padEnd(15)} ${version(path.join(ROOT, r.name)).padEnd(6)} ${path.join(ROOT, r.name)}`); say(`${'Projects'.padEnd(22)} ${path.join(ROOT, 'Projects')}`); process.exit(0); }

try { git(['--version']); } catch { say('✗ git is needed: https://git-scm.com'); process.exit(1); }
fs.mkdirSync(path.join(ROOT, 'Projects'), { recursive: true });

// 1. Install or update both, one copy per computer.
for (const r of REPOS) {
  const dir = path.join(ROOT, r.name);
  try {
    if (fs.existsSync(path.join(dir, '.git'))) git(['pull', '-q', '--ff-only'], dir);
    else git(['clone', '-q', '--depth', '1', r.url, dir]);
  } catch (e) {
    say(`✗ could not get the ${r.title} from ${r.url}\n  ${String(e.stderr || e.message).trim().split('\n')[0]}\n  While the repositories are private, git must be signed in to GitHub on this computer.`);
    process.exit(1);
  }
}
// 2. The Factory: an untouched copy of the harness that core/verify.mjs compares against.
const factory = path.join(ROOT, '.factory', 'Harness');
fs.rmSync(factory, { recursive: true, force: true });
fs.cpSync(path.join(ROOT, 'Harness'), factory, { recursive: true, filter: (s) => !['.git', 'tweaks'].includes(path.basename(s)) });

// 3. Moving from ~/.intent (1.3 and earlier): your tweaks come along; the old folder is left for you to delete.
let moved = 0;
const oldTweaks = path.join(OLD, 'intent-harness', 'tweaks'), newTweaks = path.join(ROOT, 'Harness', 'tweaks');
if (ROOT !== OLD && fs.existsSync(oldTweaks)) for (const f of fs.readdirSync(oldTweaks)) {
  if (f === 'README.md' || fs.existsSync(path.join(newTweaks, f))) continue;
  fs.cpSync(path.join(oldTweaks, f), path.join(newTweaks, f), { recursive: true }); moved++;
}

// 4. The pointer: what every wired folder says. Portable (~), and it tells a newcomer's agent what to do without the harness.
const entry = tilde(path.join(ROOT, 'Harness', 'ENTRY.md'));
const pointer = `This folder uses the Intent Harness. Read \`${entry}\` first.\nIf that file does not exist on this computer, tell the user and offer to install it: \`npx github:intentstudiodev/intent-harness init\`.`;
const OLDLINE = /^Read \S*\.intent\/intent-harness\/ENTRY\.md first\.$/m;
const wireFolder = (here, quiet) => {
  const agents = path.join(here, 'AGENTS.md'), claude = path.join(here, 'CLAUDE.md');
  if (!fs.existsSync(agents)) fs.writeFileSync(agents, pointer + '\n');
  else {
    const t = fs.readFileSync(agents, 'utf8');
    if (OLDLINE.test(t)) fs.writeFileSync(agents, t.replace(OLDLINE, pointer));
    else if (!t.includes(entry)) fs.appendFileSync(agents, `\n${pointer}\n`);
  }
  if (!fs.existsSync(claude)) fs.writeFileSync(claude, '@AGENTS.md\n');
  else if (!quiet && !fs.readFileSync(claude, 'utf8').includes('AGENTS.md')) say('· your CLAUDE.md does not import AGENTS.md: add the line @AGENTS.md if your agent needs it');
};
wireFolder(ROOT, true); // a chat opened in ~/Intent itself starts with the project menu
const readme = path.join(ROOT, 'README.md');
if (!fs.existsSync(readme)) fs.writeFileSync(readme, `# Intent\n\nYour product knowledge, kept by the Intent Harness.\n\n| Folder | What it holds | Who changes it |\n|---|---|---|\n| \`Projects/\` | each product's knowledge, one folder per product | you, with your agent |\n| \`Harness/\` | the Intent Harness, one copy for all projects | updates; your own changes go in \`Harness/tweaks/\` |\n| \`Format/\` | the Intent Format and its tool | updates |\n\nOpen this folder (or any project folder) in your coding agent and say hello.\nUpdate: \`npx github:intentstudiodev/intent-harness update\`\n`);
const here = process.cwd();
const wired = wire && here !== ME && here !== ROOT && !here.startsWith(path.join(ROOT, 'Harness')) && !here.startsWith(path.join(ROOT, 'Format'));
if (wired) wireFolder(here, false);

// 5. What the person (and the agent that ran this) reads.
const hv = version(path.join(ROOT, 'Harness')), fv = version(path.join(ROOT, 'Format'));
say(`
✓ The Intent Harness is ready.   Harness ${hv} · Intent Format ${fv}

  It keeps your product's knowledge: what it is, how it works, and WHY.
  You just talk. It asks, suggests, and writes the knowledge down as plain files.
  Your projects live in ${tilde(path.join(ROOT, 'Projects'))}.
${moved ? `\n  Your settings came along from ~/.intent (the old install). You can delete ~/.intent.\n` : ''}
Next: say hello. It asks where your product stands, or which project to continue.
${cmd === 'init' ? `
(For the agent that ran this: to start in this same chat, read ${entry} now and follow it; the greeting is core/welcome.md.)` : ''}
Details: npx github:intentstudiodev/intent-harness where`);
