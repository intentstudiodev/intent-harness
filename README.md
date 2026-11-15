# Intent Harness

```bash
npx github:intentstudiodev/intent-harness init
```

Run it in your coding agent's chat or a terminal, in any folder (your product's code, or an empty one). Then say hello: the harness greets you and asks where your product stands, or which project to continue.

Software teams lose what they know about their own product: why a rule exists, what was decided and what was dropped, what nobody has answered yet. The Intent Harness keeps that knowledge in one folder of plain markdown cards, the [Intent Format](https://github.com/intentstudiodev/intent-format), and teaches your AI coding agent to maintain it: to ask before guessing, to mark what is a guess, to record the why, and to never lose a question. The folder is the source of truth. Specs, designs, code and tickets are produced from it or fed back into it.

- Plain files, no server, no keys. Works with any agent that reads markdown: Claude Code, Codex and others.
- Enter anywhere: no step needs an earlier one to have been done by the harness.
- Light: one entry file is always loaded; everything else is read only on its route.

Something broke, or an idea? [Open an issue](https://github.com/intentstudiodev/intent-harness/issues/new/choose); plain words are fine.

## How you use it

**Start.** Install, then say hello. The first thing it asks is where the product stands: still an idea, in development, or already running. A **new product** gets a short interview, a few batched questions, then a proposal you review before any card is written. A **product in development** is caught up first: it reads what you have (docs, designs, tickets) and asks only the gaps and the contradictions. A **running product** is mapped: screens, flows, rules and tech as found in the code and the running product, nothing invented, every why asked rather than guessed. Cards appear: features, screens, flows, rules, decisions, each with its why.

**Live.** Talk to the agent as you would to a product person: paste a tester's email, change a rule, ask where things stand. It files, asks, records. `intent-format open` is the one list of what is still unknown, guessed or undecided; a question you answer with "later" comes back in two days, and "unknown" keeps it open.

**Hand over.** When something is to be built, designed or tested, the agent hands the tool a pack for that feature. Whatever comes back, a spec, a design, a finding, lands in `inputs/` and becomes knowledge again.

## How it connects

The knowledge sits in the middle. Each tool gets a slice in the shape it already reads, and sends back what it learns. Nothing is embedded; nothing is installed for you.

| Your tool | What it gets | How |
|---|---|---|
| Your coding agent (Claude Code, Codex, Cursor …) | the whole harness | `npx github:intentstudiodev/intent-harness init` writes the one line into your project's `AGENTS.md` |
| A spec tool (Spec Kit, Kiro, BMAD, OpenSpec) | a short block where it always reads; a feature pack per feature, made from the cards with every WHY | *connect a spec tool* writes the block between markers (removable); hand it features one by one, or work straight in the tool and let the harness catch up: its progress, tech, decisions and open points come back as cards on your yes |
| A design tool or skill | a design brief from the cards | the designer's connector (`design/connector.md`) |
| A test tool or skill | the rules and flows to check | the QA connector (`qa/connector.md`) |
| Tickets, chat logs, old docs, code | nothing: they are read | drop them in `inputs/`; the agent sorts them into cards |
| An indexer, search or graph tool | the folder, as any markdown | nothing to do; the cards stay the truth, the index never stands in front of them |

## What it is not

Not a dev pipeline, not a spec generator, not a wiki. It is the memory the others lack.

## Set up

1. In the folder you want to work in (an empty one, or your product's code), run:

   ```bash
   npx github:intentstudiodev/intent-harness init
   ```

   Everything goes into that folder:

   ```
   your-folder
   ├── AGENTS.md
   ├── CLAUDE.md
   ├── README.md
   ├── Intent-Harness
   │   ├── Harness
   │   ├── Format
   │   └── Factory-Settings
   └── Projects
   ```

   | Name | What it holds | Who changes it |
   |---|---|---|
   | `AGENTS.md`, `CLAUDE.md` | two lines: read `Intent-Harness/Harness/ENTRY.md` first; if it is missing, offer to install | the installer, once |
   | `Intent-Harness/Harness` | the harness | updates; your own changes go in its `tweaks/` |
   | `Intent-Harness/Format` | the Intent Format and its tool | updates |
   | `Intent-Harness/Factory-Settings` | the harness exactly as installed, to compare and restore | updates only |
   | `Projects` | each product's knowledge, one folder per product, as many as you like | you, with your agent |

   The pointer uses a relative path, so the folder still works after a copy, a move or a teammate's `git clone`. It never overwrites a file of yours. Needs Node 18 or newer and git.
2. Say hello, in the same chat or a new one opened in that folder. The first time, it welcomes you and asks where your product stands: a new idea, in development, or running (or a short tour first). Later, it shows the projects in this folder and where each one stopped.
3. Update any time, in that folder: `npx github:intentstudiodev/intent-harness update`. Your tweaks and projects are kept; the factory settings follow the new version. If a shipped file was changed by hand, the update stops and names it: keep the change as a tweak, then run `update --discard`. Each project's files carry the format version they were written in; the harness never writes into a project of another version, and offers `intent-format migrate` for an older one.

Two folders are two independent installs, each with its own version, settings and projects. Installed in your code repository, the knowledge travels with the code; installed elsewhere, each project remembers where its code lives.

By hand, without npx: in your folder, clone `intentstudiodev/intent-harness` and `intentstudiodev/intent-format` into `Intent-Harness/` as `Harness/` and `Format/`, add `Projects/`, and put the two lines into `AGENTS.md`.

A walk: a brief in `inputs/` → twelve cards and five questions → a tester's mail pasted → a rule changed, with its why → a pack handed to your spec tool → its spec back in `inputs/` → the decisions it took, recorded.

## Folder

| Path | What |
|---|---|
| `ENTRY.md` | Routes, always-on rules, the index. The one file always read. |
| `philosophy/philosophy.md` | Sixteen statements with their test and practice. Tweaks never change them. |
| `modules.md` | The map: module → roles, skills, what it gives. |
| `core/` | terms, cold start, the welcome and the project menu (`welcome.md`), the welcome tour (`tour.md`), connectors mechanism, config and setup-record templates, scripts: `state` (the one "read next"), `architecture` (the Software Architecture diagram), `verify`, `index`, `anonymise`, `sandbox` (archive) |
| `<module>/<role>.md` | one file per role, each with the header `runs as · default · size limit · writes to · on load` |
| `<module>/<name>.md` | one procedure each |
| `spec/templates/` | spec templates (default, extendable), why line, retro, report, setup record, config |
| `critique/` | critique checklists per kind, QA, tiers |
| `<module>/connector.md` | designer, developer, QA: cases → outside skills |
| `library/` | short, sourced notes: `domains/` (what a product is; a product has several) and `areas/` (Area knowledge: platforms, design systems, patterns, parts, practices). A lens, never a rulebook; `index.md` lists them |
| `tweaks/` | yours; empty when shipped; survives upgrades; holds `config.md`, `setup-record.md` (proof of cold start, once per install), `connectors.md` |
| `bin/` | the installer behind `npx github:intentstudiodev/intent-harness init` |
| `.github/` | issue forms: something went wrong, idea, improvement note, library file, tweak |

## Versions

`VERSION` holds the harness version; `CHANGELOG.md` the changes. Upgrading = replacing every file except `tweaks/`; `core/verify.mjs` compares with the factory settings and shows what you had adjusted. Projects carry their own tweaks in `sandbox/tweaks.md`.

MIT licence. How to help: [`CONTRIBUTING.md`](CONTRIBUTING.md). Everyone here follows the [Code of Conduct](CODE_OF_CONDUCT.md).
