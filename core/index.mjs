#!/usr/bin/env node
// Regenerates the index at the end of ENTRY.md: one line per file, pipe-delimited, from each file's first heading or description.
//   node core/index.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const walk = (dir, base = dir, out = []) => { for (const n of fs.readdirSync(dir).sort()) { if (n.startsWith('.') || n === 'tweaks' || n === 'examples' || n === 'node_modules') continue; const p = path.join(dir, n); if (fs.statSync(p).isDirectory()) walk(p, base, out); else if (/\.(md|mjs|yml)$/.test(n)) out.push(path.relative(base, p)); } return out; };
const first = (p) => {
  const s = fs.readFileSync(path.join(root, p), 'utf8');
  const fm = s.match(/^---\n([\s\S]*?)\n---/); if (fm) { const d = fm[1].match(/^description:\s*(.+)$/m); if (d) return d[1].trim(); const t = fm[1].match(/^(template|role):\s*(.+)$/m); const sc = fm[1].match(/^(scope|runs as):\s*(.+)$/m); if (t) return `${t[1]} ${t[2].trim()}` + (sc ? ` | ${sc[1]} ${sc[2].trim()}` : ""); }
  const c = s.match(/^\/\/\s*(.+)$/m); if (p.endsWith('.mjs') && c) return c[1].trim();
  const h = s.match(/^#\s+(.+)$/m); const sub = s.split('\n').find(l => l.trim() && !l.startsWith('#') && !l.startsWith('---') && !l.startsWith('<!--'));
  return (h ? h[1] : '') + (sub ? ' | ' + sub.trim().slice(0, 110) : '');
};
const lines = walk(root).filter(f => f !== 'ENTRY.md' && f !== 'LICENSE').map(f => `${f} | ${first(f).replace(/\s+/g, ' ').slice(0, 140)}`);
const entry = path.join(root, 'ENTRY.md');
const s = fs.readFileSync(entry, 'utf8');
const out = s.replace(/<!-- index:start -->[\s\S]*<!-- index:end -->/, '<!-- index:start -->\n```\n' + lines.join('\n') + '\n```\n<!-- index:end -->');
fs.writeFileSync(entry, out);
console.log(`index: ${lines.length} files, ${Buffer.byteLength(out)} bytes in ENTRY.md`);
