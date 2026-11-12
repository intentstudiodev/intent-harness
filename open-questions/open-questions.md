---
kind: skill
name: open-questions
description: Where what is open lives (in the cards, listed by intent-format open), and how a question gets there. The asking itself is ask-questions.
---
# open-questions

**Truth.** What is open lives in the KB, and `intent-format open <project>` prints the one list. Nobody keeps that list by hand. Four kinds:

| Kind | Written as | Says |
|---|---|---|
| unknown value | `—` in its place | nobody knows this yet |
| guess | `[assumed]` at the end of a why or an Outcome (`[likely]`: follows from inputs) | probably this |
| question | `[ask: <question>]` inside the sentence it concerns | somebody must answer this |
| judgment call | a decision card with `status: Open` (unattended: `Proposed`) | one of these options |

**Where a question goes.** Into the card it concerns, in the sentence it concerns. No card yet → the card is created first (through the checkpoint) and the question sits in it; about the product as a whole → the project card. During Start a project, before any card exists, questions go to the format's `proposal/questions.md`. There is no inbox, no side list, no file of questions: a question outside a card is a question that can be lost.

**The test for "is this a question for the KB".** Would the answer change a card? Yes → it is knowledge and goes into a card as above. No ("shall I continue?", "which file first?") → it is conversation: ask it now or not at all, write nothing.

**Nothing is dropped.** A question leaves the KB in two ways, both the owner's word: answered (the sentence is rewritten, the marker goes) or closed as not relevant (the marker goes, the sentence stays). "Later" keeps it (`[ask: … · later <date>]`, due again after two days) and "unknown" changes nothing; the table in `ask-questions.md` is the one place that says so. The agent never removes a question on its own.

**Asking** is a procedure of its own: `open-questions/ask-questions.md`. **Answers** are written through the checkpoint by the librarian. **Reopen.** A later change that contradicts a decision reopens it: a new Open decision that names the old one, or the old one back to Proposed with the new reason under the old Outcome; never an edit of what was decided.
