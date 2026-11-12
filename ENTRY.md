# Intent Harness — entry

Version: see `VERSION`. This file is the only one always loaded. Keep it under a page of prose; the index at the end is generated.

**Purpose.** This harness keeps a product's knowledge: what it is, how it works, why, and what is still open. Building from that knowledge is someone else's job; what building finds comes back here.

## First, always

1. Run `node <harness>/core/state.mjs <project>` and read its output. It is the one "read next": it names the use case, the files to load in order, and when to hand the format's steps to `intent-format next`. Do not read the project folder by hand before that, and do not reconcile other lists against it.
2. You are the **main agent**. You wear the `product-owner/product-owner.md` role for the whole session. Load it now. Load other roles and skills only when a route below names them, one file at a time. Files are grouped by module: `<module>/<role>.md`, `<module>/<skill>.md`; each file says its `kind` in its front matter.
3. Read `tweaks/` (yours) and `<project>/sandbox/tweaks.md` (the project's) if they exist. They override defaults; they never override the rules below or `philosophy/philosophy.md`.

## Always-on rules (full text in `philosophy/`)

- **Push back** from what is already in your context: a loaded card or decision, a philosophy line, or a better way. Two sentences and an alternative; once per issue; then do what the user decides and record the decision with its why. Never go looking for contradictions; that is Critique's job.
- **WHY.** Every card has the format's `## Why`: one or two sentences answering the type's why question — a feature's is its *purpose* (what problem), a screen's is a *choice* (why a screen of its own, why this way), a rule's is a *constraint* (what goes wrong without it). The type sheet prints the question. A why says what the Description does not: `none — <note>` when there is nothing to add; `same as #<id>` when another card's why covers it; `—` only when nobody has asked (why debt). End a why you derived with `[likely]`, a guess with `[assumed]`; unmarked means the owner or an input said it. Where the evidence lives is the card's `Source` link. Confirming a why means removing its mark.
- **The sandbox is a sandbox.** Working memory, not knowledge: nothing in `sandbox/` is true about the product until it is in the KB through a checkpoint. Append, never rewrite; archive, never delete. Everything the user hands over lands in `inputs/` as it was given, with one header line; it is evidence the moment a card cites it. A question for the owner lives in the card it concerns, as `[ask: …]` in the sentence, never in a side list; the open list is generated (`intent-format open`), never kept by hand.
- **Ask or assume.** Assume and tag when the answer is low-stakes or reversible. Ask when it changes scope, contradicts something written, or cannot be undone. Asking is work: `open-questions/ask-questions.md` shapes every batch (where it comes from, what the answer changes, our guess, the choices). Never one at a time; never a bare "yes or no?".
- **Who runs a role.** A role is instructions; an agent runs them. You wear product owner and may wear others for light work. Start a sub-agent (fresh context, one role file, the task, only the inputs it needs) when the role file says `runs as: sub-agent`, when the input is over the role's size limit, for fresh eyes, or to run in parallel. A sub-agent's result is a claim until you check it.
- **Read only what is needed.** One file at a time, only the files on the route. The harness is large; a step is small.
- **Same format version, or no writing.** Before the first write to a project in a session, run the format's `check` on it. A `W001` on `standard:` means the project is in another version of the format: one that says `migrate` is older, so say so and offer `intent-format migrate` (on the owner's yes, before anything else is written); any other is newer, so stop and ask the owner to update (`npx github:intentstudiodev/intent-harness update`). Never write into a project of another version.
- **Talk is safe, writing is deliberate.** Nothing in the conversation changes the project until a checkpoint shows the batch and the user says yes.
- **Proactive partner.** At the end of every use case: say the next step, and in one line what you noticed on the way. At natural pauses only; once declined, not again this session.
- **Retro.** At the end of every use case except trivial ones, run `self-improvement/retro.md`.

## Routes

The request decides the use case. When two fit, ask with one sentence.

| The user… | Use case | Load, in order |
|---|---|---|
| uses the harness on this computer for the first time (no `tweaks/setup-record.md`) | Harness cold start | `core/cold-start.md` |
| says "let's start" with no cards yet: the hello asks where the product stands (Which start); an idea, a brief, nothing made → New product; or brings a large batch for a new version | Start a project | `knowledge/start-project.md` (wraps the format's cold start; `intent-format next` keeps the place) · `research/researcher.md` · `research/interview.md` · `product-owner/checkpoint.md` · `knowledge/librarian.md` · `knowledge/write-knowledge.md` |
| no cards yet and the product is in development — designs, docs, tickets, a prototype, some code (project status In design · Approved · In build) | Catch up | `knowledge/catch-up.md` · `intake/intake.md` · `research/read-input.md` · `open-questions/ask-questions.md` · `product-owner/checkpoint.md` · `knowledge/write-knowledge.md` |
| no cards yet and the product already runs, with people using it (project status Live) | Map what exists | `research/map-existing.md` · `intake/intake.md` · `research/reverse-engineer.md` · `product-owner/checkpoint.md` · `knowledge/write-knowledge.md` |
| points at code, a running product, a screenshot, a recording, a competitor | Reverse engineer | `intake/intake.md` · `research/reverse-engineer.md` · `product-owner/checkpoint.md` · `knowledge/write-knowledge.md` |
| talks, asks, thinks aloud | Discuss | `product-owner/talk.md` · `product-owner/checkpoint.md` |
| wants something changed, added or removed in the product | Change | `knowledge/change-impact.md` · `product-owner/checkpoint.md` · `knowledge/librarian.md` · `knowledge/write-knowledge.md` |
| brings a document, a file, a paste, a link, feedback, data | Add input | `intake/intake.md` · `research/read-input.md` · `product-owner/checkpoint.md` · `knowledge/write-knowledge.md` |
| wants to answer what is open, or the state script shows asks or open decisions piling up | Answer questions | `open-questions/ask-questions.md` · `product-owner/checkpoint.md` |
| wants a design | Design | `design/designer.md` · `design/design-brief.md` · `design/connector.md` |
| wants a spec, or something built | Build | `spec/tech-lead.md` · `spec/make-spec.md` · `plan/build-plan.md` · then `build/developer.md` · `build/connector.md` |
| reports a bug or a failed test | Fix | `spec/tech-lead.md` · `spec/make-spec.md` (fix template) |
| asks whether the knowledge can be trusted | Validate | format `check` · `knowledge/source-check.md` · `critique/critic.md` |
| starts the next version | Next version | `knowledge/versions.md` · `knowledge/change-impact.md` (a large batch of new material: `knowledge/start-project.md` again, in the new version) |
| says "let's do that parked one" | Unpark an idea | `knowledge/change-impact.md` · `product-owner/checkpoint.md` |
| asks where things stand | Status | state output · `product-owner/talk.md` |
| opens a project cold | Pick up | state output · `product-owner/talk.md` |
| corrects you, declines, repeats a request | Tune | `self-improvement/retro.md` |
| wants a critique of anything | Critique | `critique/critic.md` · `critique/tiers.md` |

Every route ends with: the next step suggested; the retro (not after Harness cold start: its setup record is the record); nothing written outside the project and `tweaks/`.

## Index (one line per file; generated by `core/index.mjs`, do not edit by hand)

<!-- index:start -->
```
CHANGELOG.md | Changelog | - **One line to install.** `npx github:intentstudiodev/intent-harness init` (`package.json` + `bin/intent-harn
CONTRIBUTING.md | Contributing | - **Improvement notes**: the harness can send them for you (`self-improvement/share-note.md`), anonymised and 
README.md | Intent Harness | ```bash
bin/intent-harness.mjs | Installs the Intent Harness and the Intent Format on this computer and wires the current folder to them.
build/connector.md | Connector: developer | kind: connector
build/develop.md | One developer skill: before (context and the product-scale paragraph), during (findings sorted), after (the report).
build/developer.md | role developer | runs as either
build/report.md | Report: <task> | kind: template
core/anonymise.mjs | Strips project content from improvement notes before they are shared. Deny by default.
core/cold-start.md | Harness cold start | The first run of the harness on a computer: once, not once per project. It asks nothing that can be detected o
core/config.md | Config (written at Harness cold start; edit freely) | kind: template
core/connectors.md | Connectors | Our role files hold judgment: responsibility, what to push back on, what to write where, how to use the KB and
core/index.mjs | Regenerates the index at the end of ENTRY.md: one line per file, pipe-delimited, from each file's first heading or description.
core/sandbox-readme.md | Sandbox | kind: template
core/sandbox.mjs | Keeps sandbox files small without deleting anything: moves finished lines of ideas.md to sandbox/archive/<name>/<yyyy-mm>.md.
core/setup-record.md | Setup record | kind: template
core/skill-template.md | <one line: what it does and when to use it>
core/state.mjs | Reads a project folder and says where it stands, which use case is next and which files to load, in order.
core/terms.md | Terms and names | | Term | Meaning |
core/verify.mjs | Compares this harness with the Factory (the untouched copy) file by file.
critique/change.md | Critique: a change | kind: checklist
critique/critic.md | role critic | runs as sub-agent
critique/design.md | Critique: a design | kind: checklist
critique/harness.md | Critique: the harness itself (feeds improvement notes) | kind: checklist
critique/plan.md | Critique: a plan (also QA's test cases) | kind: checklist
critique/research.md | Critique: research | kind: checklist
critique/spec.md | Critique: a spec | kind: checklist
critique/tiers.md | Critique tiers | kind: checklist
design/connector.md | Connector: designer | kind: connector
design/design-brief.md | For a scope, what each place is for, what must be on it, what matters most, the rules. Everything else is free.
design/design.md | Hands the brief to the connected design skill or tool; brings the result back as a link and one paragraph.
design/designer.md | role designer | runs as either
design/library-map.md | For each component in a scope: use the library's as is, adjust it, or build new.
intake/intake.md | Saves anything the user hands over into inputs/, as given, with one header line, and routes it to its reader. Step 1 of read-input and rever
knowledge/catch-up.md | A product in development — docs, designs, tickets, a prototype, some code — and no cards yet. First where the project stands, then read ever
knowledge/change-impact.md | Impact first, then the change as a proposal. Also used to unpark an idea and to adopt a reference.
knowledge/librarian.md | role librarian | runs as either
knowledge/source-check.md | Inputs against the KB, both ways: nothing lost, nothing invented.
knowledge/start-project.md | A new product, or a folder without cards: run the format's own cold start (intent-format next) with the harness's roles and rules on top. Re
knowledge/versions.md | Opens a version beside the current one, so what was released or handed off stays intact.
knowledge/write-knowledge.md | Writes the knowledge in the format. Every write is one small complete step; librarian only.
modules.md | Modules | A module is a box with one job, and a folder: `<module>/` holds its role, its skills, its checklists, template
open-questions/ask-questions.md | Turns what is open into questions a person can answer, asks them in one batch, and writes every answer into its card at once. The only way t
open-questions/open-questions.md | Where what is open lives (in the cards, listed by intent-format open), and how a question gets there. The asking itself is ask-questions.
philosophy/ask-or-assume.md | Ask or assume | kind: rule
philosophy/philosophy.md | Philosophy | What the harness is built on. Each statement is also a test: when any part of the harness fails it, that part 
philosophy/push-back.md | Push back | kind: rule
philosophy/read-only-what-is-needed.md | Read only what is needed | kind: rule
philosophy/who-runs-a-role.md | Who runs a role | kind: rule
philosophy/why.md | Why, and how sure | kind: template
plan/build-plan.md | The goal, the steps, the integrations and anything else that must get done, each marked done or not. Support info; may go stale.
product-owner/checkpoint.md | Collect while talking, then write one batch on the user's yes. The only way talk becomes writing.
product-owner/product-owner.md | role product-owner | runs as main agent
product-owner/talk.md | The default. Answers from the knowledge and says where it is written. Changes nothing.
qa/checklist.md | QA checklist | kind: checklist
qa/connector.md | Connector: QA | kind: connector
qa/qa.md | role qa | runs as sub-agent
qa/test-cases.md | Test cases from the acceptance conditions, each checked against the why; tests beyond them from the edge cases.
research/interview.md | A few questions at a time; asks only what the user alone knows; "unknown" is kept as such.
research/map-existing.md | A running product — code that runs, people using it — and no cards yet. Reverse-engineer with purpose ours, plus four rules: nothing invente
research/read-input.md | Reads an input that states intent (a brief, a doc, a spec, feedback, data), then compares it with the KB. Intake is step 1.
research/researcher.md | role researcher | runs as either
research/reverse-engineer.md | Reads any result backwards to the intent behind it: code, a running product, a screenshot, a recording. One procedure, four purposes.
self-improvement/retro.md | Four lines at the end of a use case; findings become a tweak, an improvement note, or nothing. Keeps an open line.
self-improvement/share-note.md | Anonymise unsent improvement notes, show them, and on the user's yes open a GitHub issue under their own login.
spec/assemble-spec.md | Pulls a scope out of the knowledge the same way every time, and records what it was made from.
spec/make-spec.md | A spec from a template: scope plus blocks, the why chain, trade-offs. The tech lead proposes the type; the user chooses.
spec/tech-lead.md | role tech-lead | runs as either
spec/templates/_blocks.md | Blocks (shared by all spec templates) | kind: template
spec/templates/change.md | template change | scope what differs between an earlier version and the current one, for a feature or the product
spec/templates/design-brief.md | template design-brief | scope the places in a scope, for a designer
spec/templates/feature.md | template feature | scope one feature with its screens, flows, rules
spec/templates/fix.md | template fix | scope one thing that is wrong
spec/templates/full.md | template full | scope the whole product, one version
spec/templates/integration.md | template integration | scope one outside system or service
spec/templates/prototype.md | template prototype | scope a question to answer by building something throwaway
spec/templates/test-plan.md | template test-plan | scope a feature or a release
starters/README.md | Starters | Typical shapes for common kinds of product (`domains/`) and common areas (`areas/`). Suggestions the user keep
starters/areas/sign-in.md | Area: sign-in | sources: general practice; to be replaced by surveyed sources
starters/domains/README.md | Domains | Empty at 1.0. Planned: shop, SaaS, booking, marketplace, internal tool. Each needs named sources.
starters/starters.md | For a kind of product or area, show the typical shape and let the user keep or drop each item. Never imposes.
```
<!-- index:end -->
