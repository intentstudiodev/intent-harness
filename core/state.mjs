#!/usr/bin/env node
// Reads a project folder and says where it stands, which use case is next and which files to load, in order.
//   node core/state.mjs <project> [--json]
// The one "read next": it takes the route from ENTRY.md's table and hands the format's steps to intent-format next. Never writes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const harness = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = path.resolve(process.argv[2] || '.');
const json = process.argv.includes('--json');
const ex = (p) => fs.existsSync(path.join(root, p));
const ls = (p) => { try { return fs.readdirSync(path.join(root, p)).filter(n => !n.startsWith('.')); } catch { return []; } };
const read = (p) => { try { return fs.readFileSync(path.join(root, p), 'utf8'); } catch { return ''; } };
const hread = (p) => { try { return fs.readFileSync(path.join(harness, p), 'utf8'); } catch { return ''; } };
const files = (p) => ls(p).filter(n => { try { return fs.statSync(path.join(root, p, n)).isFile(); } catch { return false; } });

if (!fs.existsSync(root)) { console.error('no such folder: ' + root); process.exit(2); }

// the KB
const versions = ls('.').filter(n => /^V\d+(\.\d+)*(-[a-z0-9-]+)?$/.test(n) && fs.statSync(path.join(root, n)).isDirectory()).sort();
const kb = versions.map(v => {
  const types = ls(v).filter(t => fs.statSync(path.join(root, v, t)).isDirectory());
  const cards = {}; let total = 0;
  for (const t of types) { const n = ls(path.join(v, t)).filter(f => f.endsWith('.md') && !f.startsWith('_')).length; if (n) { cards[t] = n; total += n; } }
  if (ex(path.join(v, 'project.md'))) { cards.project = 1; total += 1; }
  return { version: v, cards, total };
});
const cardsNow = kb.length ? kb[kb.length - 1].total : 0;
// the product's lifecycle on the project card decides which start applies (knowledge/start-project.md, Which start)
const projectCard = versions.length ? read(path.join(versions[versions.length - 1], 'project.md')) : '';
const lifecycle = (projectCard.match(/^status:\s*(.+)$/m) || [, '—'])[1].trim();
const startFor = (l) => l === 'Live' ? 'Map what exists' : /^(In design|Approved|In build)$/.test(l) ? 'Catch up' : 'Start a project';
// the format's own files at the root
const inputs = files('inputs').filter(n => n !== 'links.md').length;
const proposal = ex('proposal');
const report = ex('report.md');
const kickoff = ex('inputs/kickoff-answers.md');
// what is open in the KB itself: [ask: …] markers and open decisions (intent-format open prints the full list)
const cardTexts = [];
for (const v of versions) for (const t of ls(v)) { const dir = path.join(v, t); if (!fs.statSync(path.join(root, dir)).isDirectory()) continue; for (const f of ls(dir)) if (f.endsWith('.md') && !f.startsWith('_')) cardTexts.push(read(path.join(dir, f))); }
if (versions.length && ex(path.join(versions[versions.length - 1], 'project.md'))) cardTexts.push(read(path.join(versions[versions.length - 1], 'project.md')));
let asksOpen = 0, asksLater = 0, asksDue = 0, openDecisions = 0;
const AGAIN_DAYS = 2; // the format's ask.again: a "later" ask older than this is due
for (const t of cardTexts) {
  for (const m of t.matchAll(/\[ask: [^\]]+?(?: · later (\d{4}-\d{2}-\d{2}))?\]/g)) { if (!m[1]) asksOpen++; else { asksLater++; if ((Date.now() - Date.parse(m[1])) / 86400000 >= AGAIN_DAYS) asksDue++; } }
  if (/^type: decision$/m.test(t) && /^status: (Open|Proposed)$/m.test(t)) openDecisions++;
}
// inputs no card cites yet
const inputFiles = files('inputs').filter(n => n !== 'links.md');
const uncited = inputFiles.filter(n => !cardTexts.some(t => t.includes(n))).length;
// the sandbox: working memory, never truth
const nb = ex('sandbox');
const openLines = (text, prefix) => {
  const asked = new Set(), fated = new Set();
  for (const m of text.matchAll(new RegExp(`^\\s*[-*]\\s+${prefix}(\\d+)\\s*(·|→)`, 'gm'))) (m[2] === '→' ? fated : asked).add(m[1]);
  return [...asked].filter(n => !fated.has(n)).length;
};
const ideas = openLines(read('sandbox/ideas.md'), 'I');
const notes = files('sandbox/notes').filter(f => f.endsWith('.md')).sort();
const research = files('sandbox/research').length, specs = files('sandbox/specs').length, plans = files('sandbox/plans').length, reports = files('sandbox/reports').length;
const tweaks = ex('sandbox/tweaks.md');
const improvement = read('sandbox/improvement-notes.md');
const unsent = (improvement.match(/^\s*[-*]\s+(?!.*\[sent)/gm) || []).length;
// the harness: set up on this computer? (once per computer, proof in tweaks/)
const setupText = hread('tweaks/setup-record.md');
const setup = !!setupText;
const drift = [];
for (const m of setupText.matchAll(/^\s*[-*]\s*found:\s*`?(.+?)`?\s*(?:—|$)/gm)) { // the path runs up to " — "; spaces are part of it
  const p = m[1].trim();
  if (!/^(\/|\.|~)/.test(p)) continue;
  const abs = p.startsWith('~') ? path.join(process.env.HOME || '', p.slice(1)) : path.resolve(harness, p);
  if (!fs.existsSync(abs)) drift.push(p);
}

// the route: one use case, its files from ENTRY.md's table
const entry = hread('ENTRY.md');
const routes = new Map();
for (const row of entry.split('\n')) {
  const m = /^\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$/.exec(row);
  if (!m || m[2] === 'Use case' || /^-+$/.test(m[2])) continue;
  routes.set(m[2], [...m[3].matchAll(/`([^`]+\.md)`/g)].map(x => x[1]));
}
let useCase, why, format = null;
if (!setup) { useCase = 'Harness cold start'; why = 'no tweaks/setup-record.md in the harness (once per computer; say "skip" to run on defaults)'; }
else if (!versions.length) { useCase = 'Start a project'; why = 'no KB yet — the hello asks where the product stands (Which start)'; format = 'intent-format next ' + root; }
else if (cardsNow <= 1 || (proposal && !report)) { useCase = startFor(lifecycle); why = (cardsNow <= 1 ? 'the KB holds no cards beyond the project card' : 'the format\'s cold start is under way (proposal/ exists, report.md does not)') + (lifecycle === '—' ? '; the project card has no status yet — the hello asks where the product stands' : ` · project status ${lifecycle}`); format = useCase === 'Start a project' ? 'intent-format next ' + root : null; }
else if (asksDue || asksOpen + openDecisions > 5) { useCase = 'Answer questions'; why = `${asksOpen} question(s) to the owner${asksDue ? `, ${asksDue} said later and due again` : ''} and ${openDecisions} open decision(s) in the KB (intent-format open lists them)`; }
else { useCase = 'Pick up'; why = 'a KB exists; read the latest notes, then ask what the user wants'; }
const readNext = routes.get(useCase) || [];
const working = notes.length ? 'sandbox/notes/' + notes[notes.length - 1] : null;

const out = {
  project: root, kb, format: { inputs, uncited, proposal, report, kickoff }, open: { asks: asksOpen, asksLater, asksDue, openDecisions },
  sandbox: nb ? { working: true, ideas, research, specs, plans, reports, notes: notes.length, tweaks, unsentImprovementNotes: unsent } : null,
  harness: { setupRecord: setup, drift },
  useCase, why, readNext, then: format ? `${format}  (the format's steps; intent-format next keeps the place)` : null, workingNotes: working,
};
if (json) { console.log(JSON.stringify(out, null, 2)); process.exit(0); }

const line = (k, v) => console.log(k.padEnd(20) + v);
console.log('# Project state: ' + path.basename(root));
if (!versions.length) line('KB', 'none'); else for (const k of kb) line('KB ' + k.version, k.total ? Object.entries(k.cards).map(([t, n]) => `${t} ${n}`).join(' · ') : 'empty');
line('Evidence', `inputs ${inputs}${uncited ? ` (${uncited} not yet cited)` : ''}${kickoff ? ' · kickoff answers' : ''}${proposal ? ' · proposal/' : ''}${report ? ' · report.md' : ''}`);
if (versions.length) line('Open in the KB', `questions to the owner ${asksOpen}${asksLater ? ` (+${asksLater} later${asksDue ? `, ${asksDue} due` : ''})` : ''} · open decisions ${openDecisions} — intent-format open lists them`);
line('Sandbox (working)', nb ? `ideas ${ideas} open · notes ${notes.length} · research ${research} · specs ${specs} · plans ${plans} · reports ${reports}` : 'none');
line('Project tweaks', tweaks ? 'yes' : 'no');
if (unsent) line('Improvement notes', `${unsent} unsent`);
line('Harness set up', setup ? 'yes (tweaks/setup-record.md)' : 'no');
if (drift.length) line('Drift', 'missing: ' + drift.join(', '));
console.log('');
line('Use case', `${useCase} — ${why}`);
line('Load, in order', readNext.length ? readNext.join(' · ') : '(see the route table in ENTRY.md)');
if (out.then) line('Then', out.then);
if (working) line('Working notes', working + ' (sandbox: not truth)');
