# Intent Harness

```bash
npx github:intentstudiodev/intent-harness init
```

Run that in an empty folder for your product's knowledge, then open the folder in your coding agent and say hello.

Software teams lose what they know about their own product: why a rule exists, what was decided and what was dropped, what nobody has answered yet. The Intent Harness keeps that knowledge in one folder of plain markdown cards, the [Intent Format](https://github.com/intentstudiodev/intent-format), and teaches your AI coding agent to maintain it: to ask before guessing, to mark what is a guess, to record the why, and to never lose a question. The folder is the source of truth. Specs, designs, code and tickets are produced from it or fed back into it.

- Plain files, no server, no keys. Works with any agent that reads markdown: Claude Code, Codex and others.
- Enter anywhere: no step needs an earlier one to have been done by the harness.
- Light: one entry file is always loaded; everything else is read only on its route.

## How you use it

**Start.** Point your agent at `ENTRY.md`, say hello. The first thing it asks is where the product stands: still an idea, in development, or already running. A **new product** gets a short interview, a few batched questions, then a proposal you review before any card is written. A **product in development** is caught up first: it reads what you have (docs, designs, tickets) and asks only the gaps and the contradictions. A **running product** is mapped: screens, flows, rules and tech as found in the code and the running product, nothing invented, every why asked rather than guessed. Cards appear: features, screens, flows, rules, decisions, each with its why.

**Live.** Talk to the agent as you would to a product person: paste a tester's email, change a rule, ask where things stand. It files, asks, records. `intent-format open` is the one list of what is still unknown, guessed or undecided; a question you answer with "later" comes back in two days, and "unknown" keeps it open.

**Hand over.** When something is to be built, designed or tested, the agent hands the tool a pack for that feature. Whatever comes back, a spec, a design, a finding, lands in `inputs/` and becomes knowledge again.

## How it connects

The knowledge sits in the middle. Each tool gets a slice in the shape it already reads, and sends back what it learns. Nothing is embedded; nothing is installed for you.

| Your tool | What it gets | How |
|---|---|---|
| Your coding agent (Claude Code, Codex, Cursor …) | the whole harness | `npx github:intentstudiodev/intent-harness init` writes the one line into your project's `AGENTS.md` |
| A spec pipeline (Spec Kit, Kiro, BMAD …) | the one-page summary in its context file; a feature pack per feature | *connect a pipeline* writes two sentences there; `intent-format export <feature>` (coming) |
| A design tool or skill | a design brief from the cards | the designer's connector (`design/connector.md`) |
| A test tool or skill | the rules and flows to check | the QA connector (`qa/connector.md`) |
| Tickets, chat logs, old docs, code | nothing: they are read | drop them in `inputs/`; the agent sorts them into cards |
| An indexer, search or graph tool | the folder, as any markdown | nothing to do; the cards stay the truth, the index never stands in front of them |

## What it is not

Not a dev pipeline, not a spec generator, not a wiki. It is the memory the others lack.

## Set up

1. In an empty folder for your product's knowledge (beside its code, never inside it unless you say so), run:

   ```bash
   npx github:intentstudiodev/intent-harness init
   ```

   It installs the harness and the Intent Format into `~/.intent/` (one copy per computer, with an untouched Factory copy that `core/verify.mjs` compares against), writes `AGENTS.md` with one line, `Read ~/.intent/intent-harness/ENTRY.md first.`, and `CLAUDE.md` with `@AGENTS.md`. It never overwrites a file of yours. Run it again any time to update; `tweaks/` is kept. Node 18 or newer; git signed in to GitHub while the repositories are private.
2. Open the folder in your coding agent and say hello. The first run on a computer does the Harness cold start (no questions, one pointer line to confirm); then it asks where the product stands — still an idea, in development, or already running — and starts from there.

By hand, without npx: clone `intentstudiodev/intent-harness` and `intentstudiodev/intent-format` side by side into any tools folder, and put the one line, with your path, into your project's `AGENTS.md`.

A walk: a brief in `inputs/` → twelve cards and five questions → a tester's mail pasted → a rule changed, with its why → a pack handed to your spec tool → its spec back in `inputs/` → the decisions it took, recorded.

## Folder

| Path | What |
|---|---|
| `ENTRY.md` | Routes, always-on rules, the index. The one file always read. |
| `philosophy/philosophy.md` | Sixteen statements with their test and practice. Tweaks never change them. |
| `modules.md` | The map: module → roles, skills, what it gives. |
| `core/` | terms, cold start, connectors mechanism, config and setup-record templates, scripts: `state` (the one "read next"), `verify`, `index`, `anonymise`, `sandbox` (archive) |
| `<module>/<role>.md` | one file per role, each with the header `runs as · default · size limit · writes to · on load` |
| `<module>/<name>.md` | one procedure each |
| `spec/templates/` | spec templates (default, extendable), why line, retro, report, setup record, config |
| `critique/` | critique checklists per kind, QA, tiers |
| `<module>/connector.md` | designer, developer, QA: cases → outside skills |
| `starters/` | typical shapes by domain and area; suggestions, never defaults |
| `tweaks/` | yours; empty when shipped; survives upgrades; holds `config.md`, `setup-record.md` (proof of cold start, once per computer), `connectors.md` |
| `bin/` | the installer behind `npx github:intentstudiodev/intent-harness init` |
| `.github/` | issue templates for improvement notes |

## Versions

`VERSION` holds the harness version; `CHANGELOG.md` the changes. Upgrading = replacing every file except `tweaks/`; `core/verify.mjs` shows what you had adjusted. Projects carry their own tweaks in `sandbox/tweaks.md`.

MIT licence. Contributions: see `CONTRIBUTING.md`.
