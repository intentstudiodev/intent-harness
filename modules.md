# Modules

A module is a box with one job, and a folder: `<module>/` holds its role, its skills, its checklists, templates and connector, each file marked with its `kind`. Every output lands in the project (`inputs/`, `sandbox/` or the KB), never here.

| Module | Takes | Gives (in the project) | Roles | Skills | Also |
|---|---|---|---|---|---|
| Product owner | every request | an answer, a route, a checkpoint, a suggestion | product-owner | talk, checkpoint | rules in `ENTRY.md`; `core/state.mjs` |
| Intake | anything the user brings | `inputs/<date>-<title>`, as given, with one header line (type · whose · shows); evidence the moment a card cites it | product-owner | intake | step 1 of read-input and reverse-engineer |
| Research | inputs | `sandbox/research/`, with sources and likely whys | researcher | interview, read-input, reverse-engineer, map-existing | — |
| Library | a project's domains, platforms, design system, patterns, parts, practices | questions worth asking, usual parts to keep or drop, where to read deeper | researcher, designer | use-library | `library/` |
| Knowledge | findings, answers, changes; a new product | the KB, in versions | librarian | start-project, catch-up, write-knowledge, change-impact, versions, source-check | the format's cold start (`intent-format next`), `regen`, `check`, `open` |
| Open questions | gaps from anywhere | questions put into their cards (`[ask: …]`, `—`, Open decisions); answers written into the cards | product-owner, librarian | open-questions, ask-questions | the open list is generated: `intent-format open`; no side list |
| Design | the knowledge, for a scope | a design in your tool; `sandbox/designs.md` | designer | design-brief, library-map, design | `design/connector.md` |
| Spec | the knowledge, for a scope | `sandbox/specs/` | tech-lead | make-spec, assemble-spec | `templates/spec/` |
| Plan | specs, reports | `sandbox/plans/` | tech-lead | build-plan | may go stale |
| Build | one task; a feature for a spec tool | what came back: `sandbox/reports/`, `sandbox/packs/`, `sandbox/pipelines.md`, changes to the knowledge | developer | develop, connect-pipeline, hand-to-pipeline, follow-pipeline | `build/connector.md`; the work itself happens in your coding agent or spec tool |
| QA | a built piece and its spec | `sandbox/reports/`: passed, failed, condition questioned | qa | test-cases | `qa/connector.md`; `qa/checklist.md` |
| Critique | any written work | findings with reasons, as a list to accept or reject | critic | — | `checklists/critique-*.md`, `critique/tiers.md`; optional after any step |
| Self-improvement | how you work, what went badly | `tweaks/`, `sandbox/tweaks.md`, `sandbox/improvement-notes.md` | product-owner | retro, share-note | `core/anonymise.mjs` |
| Philosophy | — | — | — | — | `philosophy/`: the sixteen lines; the full text of the always-on rules; the why line |
| Core | — | — | — | — | `ENTRY.md`, `core/`: terms, cold start, connectors mechanism, config, setup-record and sandbox README templates, state, verify, index, anonymise, sandbox (archive) |
