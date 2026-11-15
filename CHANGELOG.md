# Changelog

## 1.8 — 2026-11-15

After lab test 4 (2026-11-15: two fresh installs, three products, six chats):

- **Update never hides a hand edit.** `update` stops when a shipped file was changed by hand and names it; keep the change as a tweak, then `update --discard` puts the file back as shipped. The factory settings are now taken from the installed commit, never from the working files, so `core/verify.mjs` always sees a hand edit. The Update route runs `core/verify.mjs` first and tells the owner what an update would put back.
- **Versions only on the owner's word.** A version opens, or is marked released, only when the owner says so; a change to a live product stays in the version in progress. Opening or releasing is always an item in the batch the owner sees (`knowledge/versions.md`, `product-owner/checkpoint.md`).
- **A yes covers the batch the owner saw.** When the answer changes the batch (an alternative taken, a condition added, questions that reshape it), the new batch is shown in a few lines and written on the next yes (`product-owner/checkpoint.md`).
- **The Welcome and the project menu are plain replies** ending with a numbered list, never a question widget after text: in the desktop app a widget right after a text kept the Welcome from being seen at all. The question may still go through the widget when it comes alone (after the tour, after New project). Scripted messages in general: no widget after them in the same reply (`ENTRY.md`).
- **No silent fills.** A write of more than about 20 cards says in the offer how many and how long; the frame (project card, roles, features) is written first and reported, then the rest area by area with a line each (`knowledge/start-project.md`, `research/map-existing.md`).

- hotfix 2026-11-15, after lab tests 4 and 5:
  - **Nothing leaves the folder without a yes**: no connector, upload, shared document, issue or message; the file in the project is the default.
  - **How you want it to work is a tweak, nothing else**: offered with its scope (this project or every project), written on a yes; never into the coding agent's own memory or settings.
  - **Released versions stay as they are**: prepare first, freeze last; a card that should not count is parked or superseded in the version in progress; cards are never deleted.
  - **A task first, the setup quietly**: when the first message in a new install is a task, no Welcome, the task answered, the start offered in one line.
  - **Plain commands**: every shell command one per call, no `cd … &&`, loops or heredocs; files read and written with the file tools. Far fewer permission prompts.
  - **Per-feature architecture**: `core/architecture.mjs --feature` finds a feature by id or any part of its name and draws only what it reaches; shown as printed, never redrawn.
  - **Spec tools**: a code folder of `.` (installed in the repository) is found; same-day writes are no longer missed.
  - **Hand edits noticed at pick up**, in one line, before anything else.
  - **Other people's personal details** in a paste: asked once, keep or remove.
  - **Unmarked means said**: any WHY the agent wrote or composed is `[assumed]`; an unsure owner's answer stays theirs with `[ask: confirm]`.
  - **"Figure it out" keeps three questions** on a running product: money, legal duties, promises to customers.
  - **Own words first** in setup questions without a widget.
  - **The project travels**: the setup record and `code:` are relative to the install folder; connectors by kind, never the owner's account list.

## 1.7 — 2026-11-14

- **Everything in one folder.** `npx github:intentstudiodev/intent-harness init` installs into the folder you run it in: `Intent-Harness/` (`Harness`, `Format`, `Factory-Settings`) and `Projects/`, one folder per product, as many as you like. Nothing goes to your home folder. Two folders are two independent installs, each with its own version, settings and projects; installed in a code repository, the knowledge travels with the code.
- **The pointer is relative** (`Intent-Harness/Harness/ENTRY.md`; `../../…` inside a project), so a folder still works after a copy, a move or a teammate's `git clone`.
- **Factory settings** (was the hidden `.factory`): the harness exactly as installed, renewed by every install or update, never edited; `core/verify.mjs` finds it by itself, compares and restores.
- `update` and `where` work on the install in the current folder (or `--dir`). An older install in `~/Intent` is left as it is; the installer says so and names its projects to copy over.
- Cold start runs once per install, not once per computer.
- hotfix 2026-11-15: the welcome tour is one short message: the link to the full guide, the diagram and eight plain points, with no question widget in that reply (a widget right after a text kept the text from being shown). "start" then brings the Welcome's question on its own. The question is now *How far along is your product?*

## 1.6 — 2026-11-14

- **Software Architecture.** The parts a product runs on (apps, services, data, outside services, hosting), how they connect, and WHY, at the C4 model's context and container level (`knowledge/software-architecture.md`). Kept in the format's cards (backend, api, tech, decision); derived from what is known, then confirmed: New idea asks only what it must connect to and drafts the rest in the proposal; In development and Running confirm what the documents and code show. `core/architecture.mjs` draws it as a diagram, also per feature for spec-tool packs; spec tools' architecture documents are read back.
- **Improvement review, weekly.** At a natural pause, the harness offers to look back at the notes from every project and suggest three to five improvements: a tweak, a library line, notes worth sending, notes to close (`self-improvement/review.md`; `improvement review: weekly · monthly · off` in your config).
- **Project setup in a few clicks.** After "where does your product stand", up to six short widgets, every option guessed first and every tab skippable (`knowledge/project-setup.md`): *Sources* (code, designs, docs, tickets, with links), *Product* (domains, audience, users, platforms), *Market* (competitors, what's different, how it makes money, region), *Build* (design library, tech or what it connects to, team, spec tool), *Architecture* (what the documents and code show, to confirm), *Parts* (the usual parts from the library, to keep or drop). The answers are written at once as the owner's words; domains and audience go onto the project card (`industry:`, `audience:`) and frame every suggestion after, down to the packs handed to spec tools.
- **The library** (was `starters/`): short, sourced notes in one shape (`library/template.md`). `domains/` says what a product is, and a product has several (an internal marketplace with booking and a community: Marketplace + Booking + Social); `areas/` is Area knowledge: platforms, architecture, design systems, patterns, parts, practices (102 files in all). A lens, never a rulebook: questions worth asking, the usual shape, choices and trade-offs, what to watch out for, and where to read deeper. `library/index.md` lists every file; an agent reads only the matching ones.
- **The library learns.** What a project teaches can be kept for your next projects (`tweaks/library/`) or, anonymised and on your yes, sent as a library note for everyone (`self-improvement/retro.md`, `share-note`). Files older than a year are re-checked against their sources when used with web access.
- **Found in the folder.** `core/state.mjs` reports what a code folder shows (git remote, platforms, design library, sign-in and payments libraries, apps and services folders, hosting files, containers, schema, CI, outside services named in example environment files, Figma, Notion, Linear or Jira links in the README), so setup guesses from facts.
- Catch up starts with the *Sources* widget instead of a batch of five questions; Map what exists confirms the product and the build from the code and never suggests parts.
- **Two architectures, two names.** *Software Architecture (C4)* (was Product Architecture: `knowledge/software-architecture.md`) is how it is built; *Information Architecture (UX)* is screens and navigation (the format's `ia` maps). To the owner: "how it's built" and "screens and navigation". The per-feature drawing (`core/architecture.mjs --feature <name>`) is now documented in the route.
- **Every project has an entry in `Projects/`.** The harness never offers another place; when the owner names one, `Projects/<name>/pointer.md` (`- kb: <folder>`) keeps it in the project menu, the improvement review and the code-folder lookup.
- **The format's tool, found once.** `core/state.mjs` prints the exact command (*Format tool*: the config's `format-tool:` line when it names a file, then `Format/` or `intent-format/` beside the harness); `ENTRY.md` says to use it as printed.
- **A plan, not the whole product.** From a brief, the proposal holds the core (roles, the main flow with its screens, rules and decisions, the draft architecture) and a `## Next areas` list; the whole product only when the owner asks. Before a write of more than about 20 cards: how many and how long, then area by area.
- **"Do something reasonable" answers one setup widget**, never the whole setup: its guesses are taken as `[assumed]` answers and the next widget follows. Running products always confirm the architecture before the first deliverable; tabs the code answers are shown as found, to tick.
- **One home per item.** "Later" is an `[ask: … · later <date>]` even when it sounds like an idea; a parked change lives in its Parked card only, with no new `ideas.md` line.
- **Decisions keep their Outcome.** Carried out, or touched by a later change: a dated line in the decision's `## History` (Intent Format 1.2, hotfix 2026-11-14), never a sentence added to the Outcome.
- **Numbers computed, not counted.** Data inputs are counted with a `node -e` one-liner; hand counts are said and marked `[likely]`.
- The improvement review is offered at the first natural pause, not announced in a first reply.

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
