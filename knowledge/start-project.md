---
kind: skill
name: start-project
description: A new product, or a folder without cards: run the format's own cold start (intent-format next) with the harness's roles and rules on top. Replaces "KB cold start".
---
# start-project

The format already has a cold start: kickoff questionnaire → inputs → proposal → owner review → scaffold → fill → check → report, steered by `intent-format next`. This skill does not repeat it. It says who wears which hat at each of its steps and what the harness adds: push back, why and confidence, the checkpoint, the sandbox and inputs rules.

**Which start.** "Let's start a project" can mean a new product, the next session, or "read my repo": the words never decide. One fact does, and it lives in a card: the project card's `status`. `Idea` → **New product** (this skill). `In design`, `Approved`, `In build` → **Product in progress** (`knowledge/catch-up.md`). `Live` → **Existing product** (`research/map-existing.md`). Change the status, change the route; `core/state.mjs` reads it every session.

Three signals set it, in order of trust: (1) the folder — a KB with cards is never a start, it is Pick up; a repository, code or a running product says existing; documents, designs, tickets say in progress; nothing says nothing yet; (2) what the owner says, read for facts ("our users", "the designer sent", "I had an idea"), never for commands; (3) one question, only when 1 and 2 leave it open, and never more than one before doing something.

**Say hello first**, in your own words, in the user's language, close to this — and the question is the whole hello (a question widget when the setup record says there is one: three options plus Other, your guess from the folder first; else text):

> This folder has no knowledge yet. Tell me about the product in a couple of sentences, and where it stands: still an idea, being made (designs, code, a prototype), or already running with people using it? If you have anything — a brief, designs, a repo, tickets — drop it in `inputs/` or paste it here, and I'll read before I ask.

Then say the situation back **as a statement with an exit, not a question**: "So it's an app that already runs; I'll read the repository first and ask you only what the code can't tell me. Stop me if that's wrong." Write the owner's answer to `inputs/<date>-where-we-are.md` with its header line, set the project card's `status` from it (the owner's words are the evidence; a guess carries `[ask: is this the stage? · guess: …]` on the card), and go: this skill for a new product, `catch-up` or `map-existing` otherwise.

When the answer is foggy, a ladder of at most two plain questions: *Is anyone using it today?* yes → existing. *Has anything been made yet — designs, code, a prototype?* yes → in progress, no → new. "I don't know" and "just start, I'll tell you later" land in progress, said out loud, with the question kept as an `[ask]` on the project card and asked once more at the first checkpoint. A repo link with "let's start a project" needs no question: the folder won. Twenty files and no words: intake saves them, read the header lines and first pages, then say the situation back from what you read. A change of mind later ("actually it's live") changes the status; nothing written is thrown away.

> The Intent Format now creates the folder and prints the next step; I follow it with you, and I show you everything before it becomes a card.

At every pause say in the same voice what was done, what comes next and what you need from the user; never a bare command name.

**Keep the place with the tool.** Run `intent-format next <project>` first and after every step; do what it prints, read only what it names. A dead session, a new chat or another agent picks up from the folder alone.

| `intent-format next` says | Who | What the harness adds |
|---|---|---|
| Set up | librarian | `intent-format init` into the kb folder (`<name>-kb/`; `core/terms.md`). Write `sandbox/README.md` from `core/sandbox-readme.md`; create `sandbox/notes/`. Anything the user handed over is already in `inputs/` (intake). If `write-as-you-go` is set, open `sandbox/notes/<date>.md` now. |
| Kickoff | researcher (main agent) | Run the format's `kickoff-questionnaire.md` as an `interview`: batches of three to five, a guessed answer on each, "unknown" kept as unknown. Push back from the brief where it contradicts itself. Write the answers to `inputs/kickoff-answers.md` (the format's file). Questions follow `open-questions/ask-questions.md`. Nobody around: `no-owner` setting decides; `Mode: unattended` as the format says. |
| Proposal | researcher (sub-agent above the size limit) | Read everything in `inputs/`. Draft `proposal/` with the format's templates. In the inventory, the Confidence column decides the later marks: high → unmarked, medium → `[likely]` (only when the row names the input line it follows from), low → `[assumed]`. Every judgment call is a row in `proposal/decisions.md`; every gap a row in `proposal/questions.md`. No cards yet. |
| Owner review | product owner | **This is the checkpoint.** Show the inventory, frames, decisions and questions as the pending list; the owner answers per item or "all". Write their answers to `proposal/review.md`. Nothing is scaffolded before their yes. A decision the owner answered *unknown* on in the kickoff stays `Open` whatever they say here; "all" makes the recommendation its working assumption (`[assumed]` in the Outcome). "Later" on any row is an `[ask: … · later <date>]`, never a parked idea (the table in `open-questions/ask-questions.md`). |
| Scaffold | librarian | `intent-format scaffold` from the reviewed inventory. Never mint by hand. |
| Fill | librarian (sub-agents per type above five cards) | `write-knowledge`, in the order `intent-format next` gives. Every card gets its `## Why` and its marks; every open row of `proposal/questions.md` lands in its card as `[ask: …]` (or `—`, or an Open decision); every `decisions.md` row becomes a decision card, `decided:` and `by:` when the review settled it. |
| Check | librarian | `intent-format regen`, `intent-format check`: zero errors, zero warnings. `intent-format open` lists what is still unknown or guessed. |
| Report | product owner | `report.md` from the format's template, plus one line each: why debt, assumed, likely. Then the retro. Offer the next step: Answer questions, Add input, Design, Build. |

**Later batches.** A large batch of new material for the next version (designs, a rewrite) is Next version in the harness: `intent-format branch`, then this skill again in the new workspace, as the format's skill describes. Everyday additions are Add input or Change, never a cold start.

**Never.** Write a card outside the checkpoint's yes. Keep a list of questions by hand when `intent-format open` can print it. Leave a question from `proposal/questions.md` behind: each one ends in a card or in the owner's answer.
