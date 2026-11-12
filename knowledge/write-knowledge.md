---
kind: skill
name: write-knowledge
description: Writes the knowledge in the format. Every write is one small complete step; librarian only.
---
# write-knowledge

1. Load the format's router skill once. Per card type you write: mint with `intent-format new` (or `intent-format scaffold`), then read only the **Sections** table and the **Why** paragraph of that type's sheet; the rest of the sheet only when `intent-format check` reports something you do not understand. A first batch mixes types; the sheets are long; read what the card needs.
2. Before writing a card: search the KB index for the same thing under another name. Found → link or change it; never a second card.
3. Mint IDs with the format's tool; never by hand. Never edit generated sections.
4. Each card: the fact; its `## Why` — the answer to the type's why question (the type sheet prints it; `philosophy/why.md`), or `none — <note>`, or `same as #<id>`, or `—` when nobody asked; a confidence mark at the end of the why only when it is not confirmed — `[likely]` only when you can name the input line it follows from, otherwise `[assumed]`; a question for the owner inside the sentence it concerns, as `[ask: …]`; its links; its mark (`fixed` · `guidance` · `as found`). **Evidence:** a Source link points into `inputs/`, where intake put the file; nothing is moved for it. Components on a screen: `guidance` unless the screen says "must have"; order fixed only when the screen states it.
5. A change to a card that a decision covers: reopen the decision first (a new Open decision card, or the old one back to Proposed with the new reason under the old Outcome; never an edit of the old Outcome), then write. A decision you close: `status: Decided`, `decided: <date>`, `by: owner | agent | <role>`, the Outcome names the option and why.
6. After the batch: `intent-format regen`, then `intent-format check`. Fix what it reports before reporting back.
7. Report: cards added, changed, removed; check result; the `intent-format open` numbers (why debt, assumed, likely, open decisions).
