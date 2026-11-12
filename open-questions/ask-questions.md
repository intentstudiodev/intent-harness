---
kind: skill
name: ask-questions
description: Turns what is open into questions a person can answer, asks them in one batch, and writes every answer into its card at once. The only way to ask the owner anything about the product — in an interview, after a read, from the open list.
---
# ask-questions

**Asking is work.** "Q134 — yes or no?" cannot be answered. A question earns its place by carrying where it comes from, what hangs on the answer, what we think now, and the choices. The owner's time is the scarcest thing in the project; a bad question spends it twice.

**Gather.** `intent-format open <project>` is the list: `[ask: …]` questions with card and line, open decisions, `[assumed]`, `[likely]`, why debt, other blind spots. A question that is only in your head is not on it: put it into its card first (`[ask: …]` in the sentence; `—` for a value; an Open decision for a judgment call; the project card for the product as a whole) — through the checkpoint, or into the pending list when the card does not exist yet. Before asking anything, read what the inputs already answer; a question an input answers is a reading mistake.

**Pick.** Three to five per batch, never one. Order: what blocks the current step; what changes scope; what the owner alone knows; the rest. A `later` one when it is due (`intent-format open` says so: two days, the format's `ask.again`), when the step needs it, or when the owner brings it up. Some need research, not an answer (a market fact, how a competitor does it): send those to the researcher and say so instead of asking.

**Shape.** Every question is one block, in the owner's language:

1. where it comes from — the card by name and the sentence, or the input and the place in it; never an id alone;
2. what hangs on it — one line: which cards change, what would be built differently;
3. our guess first, as option 1, marked as a guess; then the real alternatives; "unknown — leave it open" is always an option;
4. for a decision: the card's Options, the recommended one first with its why in one line.

One question per block. No "and". No question whose answer you could look up. No question below the level the owner is working at.

**Ask.** One message, the batch numbered, nothing else in it. **Through the question widget when there is one** (the setup record says `question widget: yes` — Claude Code's AskUserQuestion; other agents: text, same content): a choice question is one widget question, our guess the first option marked as the guess, two to four options, the description carrying where it comes from and what hangs on it; at most four questions per call, so a batch of five is two calls; "unknown — leave it open" and "later" are options wherever they apply; the widget's own "Other" is the free answer. Not through the widget: anything whose answer is a paragraph ("tell me about the product", a why with no candidates), and anything you could default. A widget answer that stays in the chat is a lost question: it lands in the card like any other. Then wait. Never answer your own question in the same message; never ask the next batch before this one is written down.

**Write, at once.** The answers are a pending list the owner has already said yes to: show what you write, then write it (librarian, `write-knowledge`). Per answer:

- `[ask: …]` → the sentence rewritten with the answer, marker gone;
- `—` → the value;
- `[assumed]` / `[likely]` → the mark removed when confirmed, the text corrected when not;
- an Open decision → `Decided`, `decided:`, `by:`, the Outcome naming the option and why.

Three owner words are not answers, and each has one fate. This table is the only place that says so; other skills point here.

| Owner says | Fate | In `intent-format open` |
|---|---|---|
| **no** · not this product · drop it | a line in `sandbox/ideas.md`; a decision becomes `Dropped` with the reason in its Outcome; a question marker goes, the sentence stays | no |
| **later** · not now · we'll figure it out · next version | `[ask: … · later <date>]` in its card; an Open decision stays Open with a dated line under Options | yes; **due** after two days, asked again |
| **unknown** · don't know · no idea | nothing changes: the `[ask: …]` stays, the decision stays Open. When the work needs a value now, the guess goes beside it as `[assumed]` (a why, an Outcome) — still open, still listed. Never `Decided`, never unmarked, never re-asked in the same session | yes |

"Later" is never an idea, and "unknown" is never a decision. Only a plain *no* leaves the KB's open list.

Then `intent-format regen`, `intent-format check`, and one line per answer: what was written where. The item leaves `intent-format open` by itself.

**Never.** Drop a question yourself. Ask one at a time. Ask without a guess when a guess is possible. Ask what a file in `inputs/` already says. Ask about the harness, the format or the tools — those are your problems, not the owner's.
