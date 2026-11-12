# Changelog

## 1.3 — 2026-11-12

- hotfix 2026-11-12: the drift check in `core/state.mjs` reads a `found:` path up to ` — ` (a folder named `Test 1` no longer reports as missing); the situation question goes through the question widget when there is one, said as an instruction, not a hint.
- hotfix 2026-11-12: one always-on rule in `ENTRY.md`: same format version, or no writing. Before the first write the format's `check` runs; an older project is offered `intent-format migrate`, a newer one stops with a request to update.

- **One line to install.** `npx github:intentstudiodev/intent-harness init` (`package.json` + `bin/intent-harness.mjs`): installs the harness and the Intent Format into `~/.intent/` with a Factory copy, writes the one line into `AGENTS.md` and `CLAUDE.md` without overwriting anything, updates on re-run; `update` and `where` too.
- The three starts are named by the owner's situation: **new** · **in development** · **running** (were "in progress" and "existing"); the hello, README, catch-up and map-existing say so.

## 1.2 — 2026-11-12

- **Three ways to start, one question.** "Let's start a project" never decides; the project card's `status` does. The hello asks where the product stands (idea · in development · running); the answer sets the status and the route: **Start a project** (new, the interview), **Catch up** (`knowledge/catch-up.md`: where the project is, then read everything before asking), **Map what exists** (`research/map-existing.md`: reverse-engineer with purpose ours, nothing invented, no suggestions, whys asked not guessed). `core/state.mjs` routes by the status every session; a two-step ladder for foggy answers.
- **Question widget.** Harness cold start detects a structured question tool (Claude Code: AskUserQuestion) and records `question widget: yes|no`; `ask-questions` sends choice questions through it (guess first, two to four options, four per call, "unknown" and "later" as options), text otherwise; the wire-in line and the situation question use it.
- README: install commands; the three starts.

## 1.1 — 2026-11-12

- **Names and the public face.** The format's CLI is `intent-format` (was `mds`) everywhere. README rewritten: purpose, the three moments (start · live · hand over), the connections table, what it is not, set up with a tools folder and a `<product>-kb/` beside the code. Repository `intentstudiodev/intent-harness` (private until 1.0.0).
- **A friendly start.** Harness cold start and Start a project open with a short hello in the user's language: who speaks, what is kept, what happens next, what the user may answer ("later" and "I don't know" are good answers); the first use case is offered with what was seen; every pause says what was done and what comes next, never a bare command name.

After lab run 1 (Harness cold start → first cards). Needs Intent Format 1.2.

- **Start a project** replaces KB cold start: a wrapper around the format's own cold start (`knowledge/start-project.md`). The researcher runs the kickoff interview and drafts the proposal, the proposal review is the checkpoint, the librarian scaffolds and fills; `intent-format next` keeps the place. The harness adds roles, push back, why and confidence, not a second procedure.
- **One "read next"**: `core/state.mjs` names the use case, prints its files from ENTRY's route table in order, and hands the format's steps to `intent-format next`. The project layout follows the format: `inputs/`, `proposal/`, `report.md` at the root.
- **Harness cold start once per computer, and it asks nothing**: every config line is detected or a shipped default and says which; a line is asked the first time a step needs it. Its proof is `tweaks/setup-record.md` in the harness, not a project file; `found:` lines carry one path each so drift is checkable. Connectors are picked the first time a Design, Build or QA route runs. No retro after cold start.
- **WHY and confidence** follow the format (1.2): the `## Why` section answers the type's why question (purpose · choice · constraint), with `none`, `same as #<id>` and `—`; marks `[likely]` and `[assumed]` only; the tags `[user]`, `[input: …]`, `[research: …]` are gone. Evidence is the card's Source link, which points only into `inputs/`.
- **The sandbox is a sandbox** (the sandbox, renamed): working memory, not truth, stated in ENTRY's rules and in `sandbox/README.md`. Append-only with fate lines; archive, never delete (`core/sandbox.mjs archive`). It holds no hand-overs and no questions.
- **Inputs**: everything handed over lands in `inputs/` as given, with one header line (a paste is saved at once); a card cites it there. No `raw/`, no promotion step. What the owner says about a file cannot be wrong, because it changes nothing.
- **Questions live in the cards**: a question for the owner is `[ask: …]` in the sentence it concerns (format 1.2); `intent-format open` lists them; the harness keeps no question file. New skill **`open-questions/ask-questions.md`**: asking is work — gather from `intent-format open`, pick three to five, shape each (where from, what hangs on it, our guess first, the choices), ask in one message, write every answer into its card at once; nothing is dropped except by the owner's word.
- **After lab run 2 (ToolShare, 2026-11-11)**: three owner words, three fates, in one table in `ask-questions` — *no* → an ideas line; *later* → `[ask: … · later <date>]` (the format's word, replacing `deferred`), due again after two days and routed to Answer questions by `state.mjs`; *unknown* → nothing changes, the question stays, a decision stays `Open` (its working option `[assumed]`), also when the owner says "all" at a review. Interview asks the why of any number or limit the inputs give without a reason. `[likely]` only when the input line it follows from can be named; otherwise `[assumed]`.
- Fixes from run 1: connector paths in cold start; `write-as-you-go` opens the notes file at the first exchange; starters offered only when a domain or area file exists; the inputs index no longer names a reader the route does not load; type sheets read by their Sections table only.
- Lab findings fixed here: structure 1–5, skill 1–8 of run 1.


## 1.0 — 2026-11-10

First shipped shape. Everything here is a written instruction, not yet tested on a real project. Kinds: roles, skills, scripts, always-on rules, checklists and templates, connectors; outputs live only in the project. Modules: Product owner, Intake, Research, Starters, Knowledge, Open questions, Design, Spec, Plan, Build, QA, Critique, Self-improvement, Core. Sixteen philosophy lines.
