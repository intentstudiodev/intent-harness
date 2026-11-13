#!/usr/bin/env node
// Reads a project folder and says where it stands, which use case is next and which files to load, in order.
//   node core/state.mjs <folder> [--json]
// The one "read next": it takes the route from ENTRY.md's table and hands the format's steps to intent-format next. Never writes.
// <folder> is the folder the chat is in: a project, the Intent folder (the projects menu), or a product's own folder
// (its code), which leads to its project through `code:` in sandbox/where-we-stopped.md.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const harness = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const json = process.argv.includes('--json');
const opened = path.resolve(process.argv.slice(2).find(a => !a.startsWith('--')) || '.');
const HOME = process.env.HOME || '';
const untilde = (p) => p.startsWith('~') ? path.join(HOME, p.slice(1)) : p;

// the projects: <Intent>/Projects/<name>/, beside the harness (core/welcome.md, Choose a project)
const intent = path.resolve(harness, '..'), projectsDir = path.join(intent, 'Projects');
const isDir = (p) => { try { return fs.statSync(p).isDirectory(); } catch { return false; } };
const kbVersions = (dir) => { try { return fs.readdirSync(dir).filter(n => /^V\d+(\.\d+)*(-[a-z0-9-]+)?$/.test(n) && isDir(path.join(dir, n))).sort(); } catch { return []; } };
const stopOf = (dir) => {
  let text = ''; try { text = fs.readFileSync(path.join(dir, 'sandbox', 'where-we-stopped.md'), 'utf8'); } catch {}
  const get = (k) => (text.match(new RegExp(`^\\s*[-*]\\s*${k}:\\s*(.+)$`, 'm')) || [, null])[1]?.trim() || null;
  return { last: get('last'), next: get('next'), code: get('code') };
};
const projects = (isDir(projectsDir) ? fs.readdirSync(projectsDir) : []).filter(n => !n.startsWith('.') && kbVersions(path.join(projectsDir, n)).length).map(n => {
  const dir = path.join(projectsDir, n), vs = kbVersions(dir), card = (() => { try { return fs.readFileSync(path.join(dir, vs[vs.length - 1], 'project.md'), 'utf8'); } catch { return ''; } })();
  const stop = stopOf(dir);
  let touched = 0; for (const f of ['sandbox/where-we-stopped.md', vs[vs.length - 1], '.']) { try { touched = Math.max(touched, fs.statSync(path.join(dir, f)).mtimeMs); } catch {} }
  return { name: (card.match(/^name:\s*(.+)$/m) || [, n])[1].trim(), folder: dir, status: (card.match(/^status:\s*(.+)$/m) || [, '—'])[1].trim(), ...stop, touched };
}).sort((a, b) => b.touched - a.touched);
// a product's own folder (its code) leads to its project
const linked = kbVersions(opened).length ? null : projects.find(p => p.code && path.resolve(untilde(p.code)) === opened);
const root = linked ? linked.folder : opened;
const menu = !kbVersions(root).length && projects.length > 0; // no project here, projects exist: Choose a project
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
// spec tools connected to this project (sandbox/pipelines.md, build/connect-pipeline.md): files they wrote since the last
// read-back, by modification time only, depth-limited; and whether our marked block is still in their always-read file
const WATCH = { 'spec kit': ['specs'], kiro: ['.kiro/specs', '.kiro/steering'], bmad: ['_bmad-output'], openspec: ['openspec/changes', 'openspec/specs'] };
const sinceOf = (t) => { const m = /^(\d{4}-\d{2}-\d{2})(?:[ T](\d{1,2}:\d{2}))?/.exec(t || ''); if (!m) return 0; const at = Date.parse(`${m[1]}T${m[2] ? m[2].padStart(5, '0') : '00:00'}`); return m[2] ? at : at + 86400000; };
const newerThan = (dir, since, depth = 0, seen = { n: 0 }) => {
  let count = 0; if (depth > 4 || seen.n > 5000) return 0;
  let names = []; try { names = fs.readdirSync(dir); } catch { return 0; }
  for (const n of names) {
    if (n.startsWith('.') || n === 'node_modules' || n === 'intent-knowledge.md' || n.startsWith('intent-pack-')) continue;
    const p = path.join(dir, n); let st; try { st = fs.statSync(p); } catch { continue; } seen.n++;
    if (st.isDirectory()) count += newerThan(p, since, depth + 1, seen); else if (st.mtimeMs > since) count++;
  }
  return count;
};
const pipelines = [];
for (const row of ((read('sandbox/pipelines.md').split(/^## /m).find(t => t.startsWith('Connections'))) || '').split('\n')) {
  const c = row.split('|').slice(1, -1).map(t => t.trim());
  if (c.length < 7 || c[0] === 'Tool' || /^-+$/.test(c[0]) || !/^connected/i.test(c[6])) continue;
  const [tool, code, fileMarker, mode, , lastRead] = c, dir = path.resolve(root, untilde(code)), file = fileMarker.split('·')[0].trim();
  const found = isDir(dir), since = sinceOf(lastRead);
  const changed = found ? (WATCH[tool.toLowerCase()] || []).reduce((n, w) => n + newerThan(path.join(dir, w), since), 0) : 0;
  let block = false; try { block = fs.readFileSync(path.join(dir, file), 'utf8').includes('<!-- intent-harness:start -->'); } catch {}
  pipelines.push({ tool, code, mode, lastRead, found, changed, file, block });
}
// the harness: set up on this computer? (once per computer, proof in tweaks/)
// Found: signals in the folder the chat was opened in, so the setup widgets can guess (knowledge/project-setup.md). Local files only.
const found = (() => {
  const at = (p) => path.join(opened, p);
  const txt = (p) => { try { return fs.readFileSync(at(p), 'utf8'); } catch { return ''; } };
  const has = (p) => fs.existsSync(at(p));
  const top = (() => { try { return fs.readdirSync(opened); } catch { return []; } })();
  const f = { code: [], platforms: [], design: [], parts: [], arch: [], links: [] };
  const remote = /url\s*=\s*(\S+)/.exec(txt('.git/config'));
  if (remote) f.code.push('git: ' + remote[1].replace(/\/\/[^/@]+@/, '//'));
  else if (has('.git')) f.code.push('git (no remote)');
  const pkg = (() => { try { return JSON.parse(txt('package.json')); } catch { return null; } })();
  const subPkgs = ['apps', 'packages', 'services'].flatMap(d => { try { return fs.readdirSync(at(d)).map(n => path.join(d, n, 'package.json')).filter(has); } catch { return []; } });
  const deps = [pkg, ...subPkgs.map(p => { try { return JSON.parse(txt(p)); } catch { return null; } })].filter(Boolean).flatMap(p => Object.keys({ ...p.dependencies, ...p.devDependencies }));
  const any = (...names) => deps.some(d => names.some(n => d === n || d.startsWith(n + '/')));
  if (pkg) f.code.push('package.json' + (pkg.name ? ' (' + pkg.name + ')' : ''));
  if (any('next', 'react-dom', 'vue', 'nuxt', 'svelte', '@sveltejs', 'astro', '@angular/core', '@remix-run')) f.platforms.push('web');
  if (any('react-native', 'expo') || has('pubspec.yaml')) f.platforms.push('iOS/Android app');
  if (top.some(n => n.endsWith('.xcodeproj') || n.endsWith('.xcworkspace')) || has('Package.swift')) f.platforms.push('Apple app');
  if (has('build.gradle') || has('build.gradle.kts') || has('app/src/main/AndroidManifest.xml')) f.platforms.push('Android app');
  if (any('electron', '@tauri-apps')) f.platforms.push('desktop app');
  if (has('components.json')) f.design.push('shadcn/ui');
  if (any('@radix-ui')) f.design.push('Radix');
  if (any('@mui/material', '@material/web')) f.design.push('Material');
  if (any('antd')) f.design.push('Ant Design');
  if (any('@fluentui')) f.design.push('Fluent');
  if (any('@carbon')) f.design.push('Carbon');
  if (any('@shopify/polaris')) f.design.push('Polaris');
  if (any('tailwindcss')) f.design.push('Tailwind');
  if (any('stripe', '@stripe')) f.parts.push('payments (Stripe)');
  if (any('next-auth', '@auth', '@clerk', 'better-auth', '@supabase/supabase-js', 'firebase')) f.parts.push('sign-in');
  if (any('@prisma/client', 'prisma', 'drizzle-orm', 'mongoose', 'pg')) f.parts.push('database');
  // Product Architecture (knowledge/product-architecture.md): apps, hosting, data, outside services
  const sub = (d) => { try { return fs.readdirSync(at(d)).filter(n => !n.startsWith('.') && isDir(at(path.join(d, n)))); } catch { return []; } };
  for (const d of ['apps', 'services', 'packages']) { const s = sub(d); if (s.length && d !== 'packages') f.arch.push(`${d}/: ${s.slice(0, 6).join(', ')}`); }
  const hosts = { 'vercel.json': 'Vercel', 'netlify.toml': 'Netlify', 'fly.toml': 'Fly.io', 'wrangler.toml': 'Cloudflare Workers', 'wrangler.jsonc': 'Cloudflare Workers', 'wrangler.json': 'Cloudflare Workers', 'firebase.json': 'Firebase', 'render.yaml': 'Render', 'railway.json': 'Railway', 'serverless.yml': 'Serverless (AWS)', 'app.yaml': 'Google App Engine', 'Procfile': 'Heroku-style' };
  for (const [file, name] of Object.entries(hosts)) if (has(file)) f.arch.push('hosting: ' + name);
  if (has('supabase')) f.arch.push('Supabase');
  if (has('Dockerfile') || has('docker-compose.yml') || has('compose.yaml')) f.arch.push('containers (Docker)');
  if (top.some(n => n.endsWith('.tf')) || has('terraform') || has('infra')) f.arch.push('infrastructure as code');
  const schema = ['prisma/schema.prisma', 'schema.prisma', ...['apps', 'packages', 'services'].flatMap(d => { try { return fs.readdirSync(at(d)).map(n => path.join(d, n, 'prisma', 'schema.prisma')); } catch { return []; } })].find(has);
  if (schema) f.arch.push('data model: ' + schema);
  if (has('.github/workflows')) f.arch.push('CI: GitHub Actions');
  const envNames = ['.env.example', '.env.sample', '.env.template', '.dev.vars.example'].map(txt).join('\n');
  const services = { STRIPE: 'Stripe', SENDGRID: 'SendGrid', RESEND: 'Resend', POSTMARK: 'Postmark', MAILGUN: 'Mailgun', TWILIO: 'Twilio', OPENAI: 'OpenAI', ANTHROPIC: 'Anthropic', SUPABASE: 'Supabase', FIREBASE: 'Firebase', AWS: 'AWS', S3: 'S3 storage', CLOUDINARY: 'Cloudinary', ALGOLIA: 'Algolia', SENTRY: 'Sentry', POSTHOG: 'PostHog', SEGMENT: 'Segment', MAPBOX: 'Mapbox', GOOGLE_MAPS: 'Google Maps', PUSHER: 'Pusher', ABLY: 'Ably', REDIS: 'Redis', DATABASE_URL: 'a database', AUTH0: 'Auth0', CLERK: 'Clerk', OKTA: 'Okta', SLACK: 'Slack', GITHUB: 'GitHub', POLAR: 'Polar', PADDLE: 'Paddle', LEMONSQUEEZY: 'Lemon Squeezy' };
  const outside = Object.entries(services).filter(([k]) => new RegExp('^\\s*(?:export\\s+)?[A-Z0-9_]*' + k + '[A-Z0-9_]*\\s*=', 'm').test(envNames)).map(([, v]) => v);
  if (outside.length) f.arch.push('outside services (env names): ' + [...new Set(outside)].join(', '));
  const readme = top.find(n => /^readme(\.md)?$/i.test(n));
  const kinds = { 'figma.com': 'Figma', 'notion.so': 'Notion', 'notion.site': 'Notion', 'linear.app': 'Linear', 'atlassian.net': 'Jira', 'docs.google.com': 'Google Docs', 'miro.com': 'Miro' };
  for (const [host, name] of Object.entries(kinds)) if (readme && txt(readme).includes(host) && !f.links.includes(name)) f.links.push(name);
  return Object.values(f).some(v => v.length) ? f : null;
})();

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
// Improvement review (self-improvement/review.md): due when the period in tweaks/config.md has passed since the last review and there is something to read.
const review = (() => {
  const every = ((hread('tweaks/config.md').match(/^-\s*improvement review:\s*(\w+)/m) || [, 'weekly'])[1]).toLowerCase();
  if (every === 'off') return null;
  const days = every === 'monthly' ? 30 : 7;
  const record = hread('tweaks/review-record.md');
  const dates = [...record.matchAll(/^(\d{4}-\d{2}-\d{2})/gm)].map(m => m[1]).sort();
  const since = dates.length ? dates[dates.length - 1] : ((setupText.match(/(\d{4}-\d{2}-\d{2})/) || [])[1] || null);
  if (!since) return null;
  const age = Math.floor((Date.now() - Date.parse(since + 'T00:00:00')) / 86400000);
  let notes = 0, fromProjects = 0;
  for (const p of projects) { const t = (() => { try { return fs.readFileSync(path.join(p.folder, 'sandbox', 'improvement-notes.md'), 'utf8'); } catch { return ''; } })(); const n = (t.match(/^\s*[-*]\s+(?!.*\[(sent|closed))/gm) || []).length; if (n) { notes += n; fromProjects++; } }
  if (!projects.some(p => path.resolve(p.folder) === path.resolve(root))) { const n = (improvement.match(/^\s*[-*]\s+(?!.*\[(sent|closed))/gm) || []).length; if (n) { notes += n; fromProjects++; } }
  return age >= days && notes ? { since, age, notes, projects: fromProjects } : null;
})();
const entry = hread('ENTRY.md');
const routes = new Map();
for (const row of entry.split('\n')) {
  const m = /^\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$/.exec(row);
  if (!m || m[2] === 'Use case' || /^-+$/.test(m[2])) continue;
  routes.set(m[2], [...m[3].matchAll(/`([^`]+\.md)`/g)].map(x => x[1]));
}
let useCase, why, format = null;
if (!setup) { useCase = 'Harness cold start'; why = 'no tweaks/setup-record.md in the harness (once per computer; say "skip" to run on defaults)'; }
else if (menu) { useCase = 'Choose a project'; why = `${projects.length} project(s) in ${path.relative(intent, projectsDir) || 'Projects'}/ and none in this folder — the project menu (core/welcome.md), unless the first message already names one`; }
else if (!versions.length) { useCase = 'Start a project'; why = 'no project yet — the welcome, then where the product stands (core/welcome.md); the new project goes to Projects/<name>/'; format = 'intent-format next <project>'; }
else if (cardsNow <= 1 || (proposal && !report)) { useCase = startFor(lifecycle); why = (cardsNow <= 1 ? 'the KB holds no cards beyond the project card' : 'the format\'s cold start is under way (proposal/ exists, report.md does not)') + (lifecycle === '—' ? '; the project card has no status yet — the hello asks where the product stands' : ` · project status ${lifecycle}`); format = useCase === 'Start a project' ? 'intent-format next ' + root : null; }
else if (asksDue || asksOpen + openDecisions > 5) { useCase = 'Answer questions'; why = `${asksOpen} question(s) to the owner${asksDue ? `, ${asksDue} said later and due again` : ''} and ${openDecisions} open decision(s) in the KB (intent-format open lists them)`; }
else { useCase = 'Pick up'; why = 'a KB exists; say where we stopped and what is next (sandbox/where-we-stopped.md), then ask what the user wants'; }
const readNext = routes.get(useCase) || [];
const working = notes.length ? 'sandbox/notes/' + notes[notes.length - 1] : null;

const out = {
  project: root, opened: linked ? opened : undefined, projects: projects.map(({ touched, ...p }) => p), kb, format: { inputs, uncited, proposal, report, kickoff }, open: { asks: asksOpen, asksLater, asksDue, openDecisions },
  sandbox: nb ? { working: true, ideas, research, specs, plans, reports, notes: notes.length, tweaks, unsentImprovementNotes: unsent } : null,
  pipelines, found, review,
  harness: { setupRecord: setup, drift },
  useCase, why, readNext, then: format ? `${format}  (the format's steps; intent-format next keeps the place)` : null, workingNotes: working,
};
if (json) { console.log(JSON.stringify(out, null, 2)); process.exit(0); }

const line = (k, v) => console.log(k.padEnd(20) + v);
if (projects.length) {
  console.log('# Projects (most recent first)');
  for (const p of projects) console.log(`- ${p.name} · ${p.status}${p.last ? ' · last: ' + p.last : ''}${p.next ? ' · next: ' + p.next : ''} · ${p.folder}`);
  console.log('');
}
if (linked) console.log(`This folder is the product's own folder (code:) of ${linked.name}; its project is ${root}.\n`);
console.log('# Project state: ' + path.basename(root));
if (!versions.length) line('KB', 'none'); else for (const k of kb) line('KB ' + k.version, k.total ? Object.entries(k.cards).map(([t, n]) => `${t} ${n}`).join(' · ') : 'empty');
line('Evidence', `inputs ${inputs}${uncited ? ` (${uncited} not yet cited)` : ''}${kickoff ? ' · kickoff answers' : ''}${proposal ? ' · proposal/' : ''}${report ? ' · report.md' : ''}`);
if (versions.length) line('Open in the KB', `questions to the owner ${asksOpen}${asksLater ? ` (+${asksLater} later${asksDue ? `, ${asksDue} due` : ''})` : ''} · open decisions ${openDecisions} — intent-format open lists them`);
line('Sandbox (working)', nb ? `ideas ${ideas} open · notes ${notes.length} · research ${research} · specs ${specs} · plans ${plans} · reports ${reports}` : 'none');
line('Project tweaks', tweaks ? 'yes' : 'no');
if (unsent) line('Improvement notes', `${unsent} unsent`);
line('Harness set up', setup ? 'yes (tweaks/setup-record.md)' : 'no');
if (drift.length) line('Drift', 'missing: ' + drift.join(', '));
for (const p of pipelines) line('Spec tool', !p.found ? `${p.tool}: code folder not found (${p.code})`
  : [p.changed ? `${p.tool} (${p.mode}) wrote ${p.changed} file(s) since ${p.lastRead || 'it was connected'} → build/follow-pipeline.md` : `${p.tool} (${p.mode}): nothing new since ${p.lastRead || 'it was connected'}`,
     p.block ? null : `our block is missing from ${p.file} → build/connect-pipeline.md (Repair)`].filter(Boolean).join(' · '));
if (found && !kb.some(k => k.total > 1)) line('Found (setup)', [found.code.length && 'code: ' + found.code.join(', '), found.platforms.length && 'platforms: ' + found.platforms.join(', '), found.design.length && 'design: ' + found.design.join(', '), found.parts.length && 'parts: ' + found.parts.join(', '), found.arch.length && 'architecture: ' + found.arch.join(', '), found.links.length && 'links in README: ' + found.links.join(', ')].filter(Boolean).join(' · ') + ' — guesses for knowledge/project-setup.md');
if (review) line('Improvement review', `due: ${review.notes} note(s) from ${review.projects} project(s), last review ${review.since} — offer once at a natural pause (self-improvement/review.md)`);
console.log('');
line('Use case', `${useCase} — ${why}`);
line('Load, in order', readNext.length ? readNext.join(' · ') : '(see the route table in ENTRY.md)');
if (out.then) line('Then', out.then);
if (working) line('Working notes', working + ' (sandbox: not truth)');
