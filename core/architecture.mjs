#!/usr/bin/env node
// Draws the Software Architecture from a project's cards: a Mermaid diagram at C4 container level, then one line per node.
//   node core/architecture.mjs <project> [--feature <name>]
// Reads backend, api, tech and feature cards of the latest version; writes nothing.
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const fi = args.indexOf('--feature');
const feature = fi >= 0 ? (args[fi + 1] || '').toLowerCase() : null;
const root = path.resolve(args.find((a, i) => !a.startsWith('--') && (fi < 0 || i !== fi + 1)) || '.');
const isDir = (p) => { try { return fs.statSync(p).isDirectory(); } catch { return false; } };
const versions = (() => { try { return fs.readdirSync(root).filter(n => /^V\d+(\.\d+)*(-[a-z0-9-]+)?$/.test(n) && isDir(path.join(root, n))).sort(); } catch { return []; } })();
if (!versions.length) { console.error(`no knowledge base in ${root}`); process.exit(2); }
const kb = path.join(root, versions[versions.length - 1]);

const cards = (dir) => { try { return fs.readdirSync(path.join(kb, dir)).filter(n => n.endsWith('.md') && !n.startsWith('_')).map(n => ({ file: path.join(dir, n), text: fs.readFileSync(path.join(kb, dir, n), 'utf8') })); } catch { return []; } };
const fm = (t, k) => ((t.match(/^---\n([\s\S]*?)\n---/) || [, ''])[1].match(new RegExp('^' + k + ':\\s*(.+)$', 'm')) || [, ''])[1].trim();
const section = (t, h) => (t.split(new RegExp('^## ' + h + '\\s*$', 'm'))[1] || '').split(/^## /m)[0];
const refs = (s) => [...s.matchAll(/\[#([A-Z]{2}\d{6})[^\]]*\]/g)].map(m => m[1]);

const nodes = cards('backend').map(c => {
  const t = c.text;
  const tags = section(t, 'Tags').toLowerCase();
  const type = fm(t, 'backend-type');
  return {
    id: fm(t, 'id'), name: fm(t, 'name'), type, status: fm(t, 'status'),
    group: type === 'integration' ? 'Outside services' : (type === 'database' || type === 'storage') ? 'Data' : (type === 'environment' || type === 'repo') ? 'Delivery' : /\bclient\b/.test(tags) || type === 'client' ? 'Apps' : 'Services',
    connections: [...section(t, 'Connections').matchAll(/\[#(BN\d{6})[^\]]*\][^\n]*?(?:kind:\s*(\w+))?\s*(?:—\s*(.+))?$/gm)].map(m => ({ to: m[1], kind: m[2] || 'calls', note: (m[3] || '').trim() })),
    builtWith: [...section(t, 'Built with').matchAll(/\[(?:#TC\d{6}\s+)?([^\]]+)\]/g)].map(m => m[1].replace(/^~\s*/, '~ ')),
    serves: refs(section(t, '⚙ Serves')),
  };
});
if (!nodes.length) { console.log(`# Software Architecture: ${path.basename(root)}\n\nNo backend cards yet in ${versions[versions.length - 1]}/backend/. The map starts with the first node (knowledge/software-architecture.md).`); process.exit(0); }

// --feature: only the nodes the feature reaches. The feature's cards (flows, screens, APIs, rules, decisions, edge
// cases, up to three links deep) → the nodes serving its APIs or linked from those cards → the apps that call them,
// the data they store in, and the outside services those cards name. Never every connection of a shared service.
let keep = null, featureName = feature;
if (feature) {
  const all = ['features', 'screens', 'userflows', 'apis', 'components', 'rules', 'decisions', 'edge-cases'].flatMap(cards);
  const byId = new Map(all.map(c => [fm(c.text, 'id'), c]));
  const feats = all.filter(c => c.file.startsWith('features'));
  const words = feature.split(/[^a-z0-9]+/).filter(w => w.length > 2).map(w => w.replace(/s$/, ''));
  const name = (c) => fm(c.text, 'name').toLowerCase();
  const hits = feats.filter(c => fm(c.text, 'id').toLowerCase() === feature || name(c) === feature);
  const match = hits.length ? hits : feats.filter(c => name(c).includes(feature) || (words.length && words.every(w => name(c).includes(w))));
  if (match.length !== 1) {
    console.error(match.length ? `"${feature}" matches several features: ${match.map(c => fm(c.text, 'name')).join(' · ')}` : `no feature matches "${feature}". Features: ${feats.map(c => `${fm(c.text, 'id')} ${fm(c.text, 'name')}`).join(' · ')}`);
    process.exit(1);
  }
  const f = match[0]; featureName = fm(f.text, 'name');
  const seen = new Set([fm(f.text, 'id')]), queue = [f], reached = [f];
  for (let depth = 0; depth < 3 && queue.length; depth++) for (const c of queue.splice(0)) for (const id of refs(c.text)) if (!seen.has(id)) { seen.add(id); const n = byId.get(id); if (n) { queue.push(n); reached.push(n); } }
  const apis = [...seen].filter(id => id.startsWith('AP'));
  const text = reached.map(c => c.text).join('\n').toLowerCase();
  keep = new Set(nodes.filter(n => n.serves.some(a => apis.includes(a)) || seen.has(n.id)).map(n => n.id));
  const core = new Set(keep);
  for (const n of nodes) {
    if (n.group === 'Apps' && n.connections.some(c => core.has(c.to))) keep.add(n.id);
    if (n.group === 'Outside services' && (text.includes(n.name.toLowerCase()) || n.connections.some(c => core.has(c.to)) && text.includes(n.name.toLowerCase().split(/\s/)[0]))) keep.add(n.id);
  }
  for (const n of nodes) if (core.has(n.id)) for (const c of n.connections) { const to = nodes.find(x => x.id === c.to); if (to && to.group === 'Data') keep.add(to.id); }
}
const shown = nodes.filter(n => !keep || keep.has(n.id));
const nameOf = (id) => (nodes.find(n => n.id === id) || { name: id }).name;
const label = (s) => s.replace(/"/g, "'");

const order = ['Apps', 'Services', 'Data', 'Outside services', 'Delivery'];
const lines = ['```mermaid', 'flowchart LR'];
for (const g of order) {
  const inG = shown.filter(n => n.group === g); if (!inG.length) continue;
  lines.push(`  subgraph ${g.replace(/\s/g, '_')}["${g}"]`);
  for (const n of inG) lines.push(`    ${n.id}["${label(n.name)}${n.builtWith.length ? '<br/><small>' + label(n.builtWith.join(', ')) + '</small>' : ''}"]`);
  lines.push('  end');
}
for (const n of shown) for (const c of n.connections) if (!keep || keep.has(c.to)) lines.push(`  ${n.id} -->|${c.kind}${c.note ? ': ' + label(c.note) : ''}| ${c.to}`);
lines.push('```');

console.log(`# Software Architecture: ${path.basename(root)}${feature ? ' · feature ' + featureName : ''}\n`);
console.log(lines.join('\n') + '\n');
for (const g of order) for (const n of shown.filter(x => x.group === g)) {
  const conn = n.connections.filter(c => !keep || keep.has(c.to)).map(c => `${c.kind} ${nameOf(c.to)}`).join(', ');
  console.log(`- ${g} · ${n.name} (${n.type}${n.status ? ', ' + n.status : ''})${conn ? ' → ' + conn : ''}${n.builtWith.length ? ' · built with ' + n.builtWith.join(', ') : ''}${n.serves.length ? ' · serves ' + n.serves.length + ' API(s)' : ''}`);
}
