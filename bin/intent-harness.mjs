#!/usr/bin/env node
// Installs the Intent Harness and the Intent Format on this computer and wires the current folder to them.
//   npx github:intentstudiodev/intent-harness init      install or update both into ~/.intent/, add the one line to ./AGENTS.md
//   npx github:intentstudiodev/intent-harness update    install or update only; touch nothing in the current folder
//   npx github:intentstudiodev/intent-harness where     print the paths
// Options: --dir <path> (default ~/.intent) · --no-wire (init without writing AGENTS.md / CLAUDE.md)
// No dependencies. Needs git signed in to GitHub while the repositories are private. Never overwrites a file of yours.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const REPOS = [
  { name: 'intent-harness', url: 'https://github.com/intentstudiodev/intent-harness.git' },
  { name: 'intent-format', url: 'https://github.com/intentstudiodev/intent-format.git' },
];
const args = process.argv.slice(2);
const cmd = args.find((a) => !a.startsWith('--')) || 'init';
const dirArg = args[args.indexOf('--dir') + 1];
const HOME = path.resolve(args.includes('--dir') && dirArg ? dirArg.replace(/^~/, os.homedir()) : path.join(os.homedir(), '.intent'));
const wire = cmd === 'init' && !args.includes('--no-wire');
const git = (argv, cwd) => execFileSync('git', argv, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const version = (dir) => { try { return fs.readFileSync(path.join(dir, 'VERSION'), 'utf8').trim(); } catch { return '?'; } };
const say = (s) => console.log(s);

if (!['init', 'update', 'where', 'help'].includes(cmd)) { say(`usage: intent-harness [init|update|where] [--dir <path>] [--no-wire]`); process.exit(2); }
if (cmd === 'help') { say(fs.readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(1, 7).map((l) => l.replace(/^\/\/ ?/, '')).join('\n')); process.exit(0); }
if (cmd === 'where') { for (const r of REPOS) say(`${r.name}  ${path.join(HOME, r.name)}  ${version(path.join(HOME, r.name))}`); process.exit(0); }

try { git(['--version']); } catch { say('✗ git is needed: https://git-scm.com'); process.exit(1); }
fs.mkdirSync(HOME, { recursive: true });

// 1. Install or update both, one copy per computer.
for (const r of REPOS) {
  const dir = path.join(HOME, r.name);
  try {
    if (fs.existsSync(path.join(dir, '.git'))) { git(['pull', '-q', '--ff-only'], dir); say(`✓ ${r.name} ${version(dir)} updated in ${dir}`); }
    else { git(['clone', '-q', '--depth', '1', r.url, dir]); say(`✓ ${r.name} ${version(dir)} installed in ${dir}`); }
  } catch (e) {
    say(`✗ could not get ${r.name} from ${r.url}\n  ${String(e.stderr || e.message).trim().split('\n')[0]}\n  While the repositories are private, git must be signed in to GitHub on this computer.`);
    process.exit(1);
  }
}
// 2. An untouched copy of the harness: the Factory that core/verify.mjs compares against.
const factory = path.join(HOME, 'factory', 'intent-harness');
fs.rmSync(factory, { recursive: true, force: true });
fs.cpSync(path.join(HOME, 'intent-harness'), factory, { recursive: true, filter: (s) => path.basename(s) !== '.git' && path.basename(s) !== 'tweaks' });
say(`✓ factory copy in ${factory}`);

// 3. Wire the current folder: one line, never an overwrite.
if (wire) {
  const here = process.cwd();
  const line = `Read ${path.join(HOME, 'intent-harness', 'ENTRY.md')} first.`;
  const agents = path.join(here, 'AGENTS.md'), claude = path.join(here, 'CLAUDE.md');
  if (!fs.existsSync(agents)) { fs.writeFileSync(agents, line + '\n'); say(`✓ AGENTS.md written in ${here}`); }
  else if (!fs.readFileSync(agents, 'utf8').includes('intent-harness')) { fs.appendFileSync(agents, `\n${line}\n`); say(`✓ one line added to your AGENTS.md`); }
  else say(`· AGENTS.md already points at the harness`);
  if (!fs.existsSync(claude)) { fs.writeFileSync(claude, '@AGENTS.md\n'); say(`✓ CLAUDE.md written (imports AGENTS.md)`); }
  else say(`· CLAUDE.md kept as it is${fs.readFileSync(claude, 'utf8').includes('AGENTS.md') ? '' : ' — add a line that imports AGENTS.md if your agent needs it'}`);
  say(`\nNow open this folder in your coding agent and say hello.`);
} else say(`\nDone. In a project folder, run \`npx github:intentstudiodev/intent-harness init\` to wire it in.`);
