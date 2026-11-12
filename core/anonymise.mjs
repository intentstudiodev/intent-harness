#!/usr/bin/env node
// Strips project content from improvement notes before they are shared. Deny by default.
//   node core/anonymise.mjs <project> [--terms a,b,c]
// Prints the anonymised unsent notes to stdout; never writes, never sends.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || '.');
const ti = process.argv.indexOf('--terms');
const file = path.join(root, 'sandbox', 'improvement-notes.md');
if (!fs.existsSync(file)) { console.error('no sandbox/improvement-notes.md'); process.exit(2); }
const text = fs.readFileSync(file, 'utf8');

// terms: from --terms, plus the project folder name, plus the KB's product card title if found
const terms = new Set((ti > 0 ? process.argv[ti + 1].split(',') : []).map(s => s.trim()).filter(Boolean));
terms.add(path.basename(root));
try { for (const v of fs.readdirSync(root).filter(n => /^V\d/.test(n))) { const pf = path.join(root, v, 'product'); if (fs.existsSync(pf)) for (const f of fs.readdirSync(pf)) { const m = fs.readFileSync(path.join(pf, f), 'utf8').match(/^title:\s*(.+)$/m); if (m) terms.add(m[1].trim()); } } } catch {}
const termsFile = path.join(root, 'sandbox', 'terms.md');
if (fs.existsSync(termsFile)) for (const m of fs.readFileSync(termsFile, 'utf8').matchAll(/^\s*[-*|]\s*\*?\*?([A-Za-z][\w -]{2,40}?)\*?\*?\s*[|:—-]/gm)) terms.add(m[1].trim());

const drop = [/https?:\/\//i, /[\w.-]+@[\w.-]+\.\w+/, /(^|[\s(])(\/|~\/|\.\.?\/)[\w./-]+/, /\b[a-z]{2}\d{6}\b/, /\b[A-Z]{2,4}-\d+\b/, /`[^`]*\/[^`]*`/];
const out = [];
for (const raw of text.split('\n')) {
  if (!/^\s*[-*]\s+/.test(raw) || /\[sent/.test(raw)) continue;
  let line = raw.replace(/^\s*[-*]\s+/, '');
  if (drop.some(re => re.test(line))) { out.push('- (a line was dropped: it held a path, link, id or address)'); continue; }
  line = line.replace(/"[^"]{3,}"/g, '"…"').replace(/“[^”]{3,}”/g, '“…”');
  for (const t of terms) if (t.length > 2) line = line.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), 'the product');
  line = line.replace(/\b([A-Z][a-z]+)\s([A-Z][a-z]+)\b/g, 'someone');
  out.push('- ' + line);
}
console.log(out.join('\n') || '(nothing unsent)');
