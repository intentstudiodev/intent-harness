#!/usr/bin/env node
// Compares this harness with the Factory (the untouched copy) file by file.
//   node core/verify.mjs <factory-path> [--restore <relative-file>]
// Lists: adjusted (differs), missing (in factory, not here), added (here, not in factory). tweaks/ is ignored. Never writes unless --restore.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const factory = path.resolve(process.argv[2] || '');
if (!factory || !fs.existsSync(factory)) { console.error('usage: node core/verify.mjs <factory-path> [--restore <file>]'); process.exit(2); }
const ri = process.argv.indexOf('--restore');
const walk = (dir, base = dir, out = []) => { for (const n of fs.readdirSync(dir)) { if (n === 'tweaks' || n === '.git' || n === 'node_modules') continue; const p = path.join(dir, n); if (fs.statSync(p).isDirectory()) walk(p, base, out); else out.push(path.relative(base, p)); } return out; };
const hash = (p) => crypto.createHash('sha1').update(fs.readFileSync(p)).digest('hex');

if (ri > 0) { const f = process.argv[ri + 1]; const src = path.join(factory, f), dst = path.join(here, f); if (!fs.existsSync(src)) { console.error('not in factory: ' + f); process.exit(2); } fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.copyFileSync(src, dst); console.log('restored ' + f); process.exit(0); }

const a = new Set(walk(here)), b = new Set(walk(factory));
const adjusted = [...a].filter(f => b.has(f) && hash(path.join(here, f)) !== hash(path.join(factory, f)));
const missing = [...b].filter(f => !a.has(f));
const added = [...a].filter(f => !b.has(f));
const vh = (fs.existsSync(path.join(here, 'VERSION')) ? fs.readFileSync(path.join(here, 'VERSION'), 'utf8') : '?').trim();
const vf = (fs.existsSync(path.join(factory, 'VERSION')) ? fs.readFileSync(path.join(factory, 'VERSION'), 'utf8') : '?').trim();
console.log(`harness ${vh} vs factory ${vf}`);
const show = (t, l) => { console.log(`${t} (${l.length})`); l.forEach(f => console.log('  ' + f)); };
show('adjusted', adjusted); show('missing', missing); show('added', added);
if (!adjusted.length && !missing.length && !added.length) console.log('identical (tweaks/ not compared)');
