# Changelog

## 1.6 — not released yet

- **Project setup in a few clicks.** After "where does your product stand", up to five short widgets, every option guessed first and every tab skippable (`knowledge/project-setup.md`): *Sources* (code, designs, docs, tickets, with links), *Product* (domains, audience, users, platforms), *Market* (competitors, what's different, how it makes money, region), *Build* (design library, tech, team, spec tool), *Parts* (the usual parts from the library, to keep or drop). The answers are written at once as the owner's words; domains and audience go onto the project card (`industry:`, `audience:`) and frame every suggestion after, down to the packs handed to spec tools.
- **The library** (was `starters/`): short, sourced notes in one shape (`library/template.md`). `domains/` says what a product is, and a product has several (an internal marketplace with booking and a community: Marketplace + Booking + Social); `areas/` is Area knowledge: platforms, design systems, patterns, parts, practices. A lens, never a rulebook: questions worth asking, the usual shape, choices and trade-offs, what to watch out for, and where to read deeper. `library/index.md` lists every file; an agent reads only the matching ones.
- **The library learns.** What a project teaches can be kept for your next projects (`tweaks/library/`) or, anonymised and on your yes, sent as a library note for everyone (`self-improvement/retro.md`, `share-note`). Files older than a year are re-checked against their sources when used with web access.
- **Found in the folder.** `core/state.mjs` reports what a code folder shows (git remote, platforms, design library, sign-in and payments libraries, Figma, Notion, Linear or Jira links in the README), so setup guesses from facts.
- Catch up starts with the *Sources* widget instead of a batch of five questions; Map what exists confirms the product and the build from the code and never suggests parts.

## 1.5 — 2026-11-13

- **Spec tools, connected.** `build/connect-pipeline.md` connects Spec Kit, Kiro, BMAD or OpenSpec (or any agent through `AGENTS.md`): one marked note in the file each tool always reads, removable byte for byte. Several tools at once, a default per job, a switch from one tool to another without losing features in progress, disconnect, repair. One registry per project: `sandbox/pipelines.md`.
- **Lead or follow.** Lead: `build/hand-to-pipeline.md` builds a feature pack (the feature's screens, flows, rules, decisions and open questions, every WHY) and hands it to the tool. Follow: work straight in BMAD or any tool; the harness sets it up once, steps back, and `build/follow-pipeline.md` reads back what the tool wrote (progress, tech, decisions, open questions) when you return. Nothing becomes a card without a yes.
- **Noticed on hello.** `core/state.mjs` sees new files in a connected tool and suggests reading them back.
- **The welcome tour, rebuilt.** Eight short stops, one per message, each with its own buttons: where the harness sits in spec-driven development, the three starts, what you can bring, the kinds of knowledge, how we work, what comes out, connectors, keeping it right. Welcome tour is the first choice in the welcome widget.
- **Registry.** Kiro and OpenSpec added; Spec Kit and BMAD install lines refreshed.
- hotfix 2026-11-13: the welcome and the tour stops are said in full, not summarised: their text sits between `<!-- message -->` markers, with an always-on rule to copy it whole.
- hotfix 2026-11-13: the tour opens with a link to the full guide: http://intentstudio.dev/.

## 1.4 — 2026-11-12

- **One visible home: `~/Intent/`** with `Harness/`, `Format/` and `Projects/` (was the hidden `~/.intent/`). One harness for all projects; each product's knowledge in `Projects/<name>/` by default, its code wherever it is (`code:` links them). The installer moves your tweaks from `~/.intent/` and rewrites the old pointer line.
- **The pointer travels.** Every wired folder's `AGENTS.md` says: read the harness first; if it is not on this computer, offer to install it.
- **A welcome.** `core/welcome.md`: who the harness is, the diagram (everything flows into product knowledge, then spec, then design and dev, and back), four bold lines, then one widget question: New idea · In development · Running · Welcome tour. WHY is always in capitals in chat.
- **A project menu.** With projects in `Projects/`, hello shows the two most recent with status, where they stopped and what is next, plus New project and Welcome tour. Never a gate: a clear first message goes straight to its route. `core/state.mjs` lists the projects and finds a project from its code folder.
- **Where we stopped.** `sandbox/where-we-stopped.md`, three lines rewritten at the end of every use case: last, next, code.
- **Welcome tour.** `core/tour.md`: what the harness can do on one screen, then Start a project · See an example · Ask me something · Done for now.
- **Start in the same chat.** The installer's last lines tell the agent that ran it to read `ENTRY.md` and greet you, so a new chat is no longer needed.
- hotfix 2026-11-12: public repository: issue forms for visitors (something went wrong, idea), a Code of Conduct, CONTRIBUTING written for visitors, README without the sign-in note.
- hotfix 2026-11-12: reply times said honestly; SECURITY.md (report privately); the installer no longer mentions private repositories; package.json links to issues.

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
