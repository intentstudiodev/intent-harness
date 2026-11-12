---
kind: skill
name: start-project
description: A new product, or a folder without cards: run the format's own cold start (intent-format next) with the harness's roles and rules on top. Replaces "KB cold start".
---
# start-project

The format already has a cold start: kickoff questionnaire → inputs → proposal → owner review → scaffold → fill → check → report, steered by `intent-format next`. This skill does not repeat it. It says who wears which hat at each of its steps and what the harness adds: push back, why and confidence, the checkpoint, the sandbox and inputs rules.

**Say hello first**, in your own words, in the user's language, close to this; then run the first step:

> This folder has no knowledge yet. If you have anything — a brief, notes, screenshots, old docs — drop it into `inputs/` and say "let's start". Or just tell me about the product and I'll ask the rest, a few questions at a time. "Later" and "I don't know" are good answers; I keep them for you and come back to them.
>
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
