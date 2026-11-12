#!/usr/bin/env node
// Keeps sandbox files small without deleting anything: moves finished lines of ideas.md to sandbox/archive/<name>/<yyyy-mm>.md.
//   node core/sandbox.mjs archive <project> [--max 60] [--force]
// A line is finished when a later line gives it a fate: "- I3 · …" is open until "- I3 → …" exists. Open lines stay. Runs only when a file is over --max lines, or with --force.
import fs from 'node:fs';
import path from 'node:path';

const [cmd, projectArg] = process.argv.slice(2).filter(a => !a.startsWith('--'));
const flag = (n, d) => { const i = process.argv.indexOf('--' + n); return i > 0 ? process.argv[i + 1] : d; };
if (cmd !== 'archive' || !projectArg) { console.error('usage: node core/sandbox.mjs archive <project> [--max 60] [--force]'); process.exit(2); }
const root = path.resolve(projectArg);
const max = Number(flag('max', 60));
const force = process.argv.includes('--force');
const month = new Date().toISOString().slice(0, 7);
const FILES = { 'ideas.md': 'I' };
let moved = 0;
for (const [name, prefix] of Object.entries(FILES)) {
  const file = path.join(root, 'sandbox', name);
  if (!fs.existsSync(file)) continue;
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  if (!force && lines.length <= max) { console.log(`${name}: ${lines.length} lines, under ${max}; nothing to do`); continue; }
  const re = new RegExp(`^\\s*[-*]\\s+${prefix}(\\d+)\\s*(·|→)`);
  const fated = new Set();
  for (const l of lines) { const m = re.exec(l); if (m && m[2] === '→') fated.add(m[1]); }
  const keep = [], gone = [];
  for (const l of lines) { const m = re.exec(l); (m && fated.has(m[1]) ? gone : keep).push(l); }
  if (!gone.length) { console.log(`${name}: nothing finished to archive`); continue; }
  const dir = path.join(root, 'sandbox', 'archive', name.replace(/\.md$/, ''));
  fs.mkdirSync(dir, { recursive: true });
  const dst = path.join(dir, month + '.md');
  fs.appendFileSync(dst, (fs.existsSync(dst) ? '' : `# ${name.replace(/\.md$/, '')} — archived ${month}\n\n`) + gone.join('\n') + '\n');
  fs.writeFileSync(file, keep.join('\n').replace(/\n{3,}/g, '\n\n'));
  moved += gone.length;
  console.log(`${name}: ${gone.length} finished line(s) → ${path.relative(root, dst)}; ${keep.length} line(s) stay`);
}
console.log(`archived ${moved} line(s)`);
