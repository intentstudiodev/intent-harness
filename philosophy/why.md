---
kind: template
---
# Why, and how sure

Every card has the format's `## Why` section, right after Description (after Question on a decision): one or two sentences answering the type's **why question**. Three flavours: *purpose* — why this exists at all (project, feature, flow, role); *choice* — why this way and not another (screen, component, shell, tech, decision …); *constraint* — what goes wrong without it (rule, edge case). So a screen's why is not its feature's why: the feature says what problem it solves, the screen says why it is a screen of its own. The type sheet prints the question. A why says what the Description does not.

| Write | When |
|---|---|
| the reason | you know it: the owner said it, or an input states it |
| `none` or `none — <note>` | there is nothing to explain (a divider, a plain button); the note says why none |
| `same as #<id>` | another card's why covers it, any card by id (the checker follows the link) |
| `—` | nobody has asked yet: why debt, counted by `intent-format check` |

**Confidence** is one mark at the end of the text, or at the end of a decision's Outcome, and nowhere else:

| Mark | Meaning | What follows |
|---|---|---|
| (none) | confirmed: the owner said it, or an input states it | nothing |
| `[likely]` | follows from inputs; no input says it outright — the test: you can name the input line | listed to confirm (`intent-format open`) |
| `[assumed]` | a guess; no input line to point at | an open question until confirmed |

Confirming means removing the mark. Where the evidence lives is the card's `## Links · type: Source`, which may point only into `inputs/`. There are no other tags.

**A question** that no value can hold — an unknown fact, a doubt about one sentence — goes into the sentence as `[ask: <question>]`. `intent-format open` lists it with its card and line. `—` says unknown, `[assumed]` says probably, `[ask: …]` says somebody must answer this. Only the owner closes one (`open-questions/ask-questions.md`).
