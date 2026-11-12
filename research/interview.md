---
kind: skill
name: interview
description: A few questions at a time; asks only what the user alone knows; "unknown" is kept as such.
---
# interview

0. The shape of every question is `open-questions/ask-questions.md`: where it comes from, what hangs on it, our guess first, the choices.
1. Before asking, list what you already know (loaded cards, inputs, starters). Ask only what you alone cannot find out.
2. Batches of three to five questions, most blocking first, each with a guessed answer where you have one ("I'd assume X; correct?"). The user can answer in any order, skip, or say "unknown".
3. "Unknown", "later" and "no" are three different answers; the fate table in `open-questions/ask-questions.md` decides. Unknown keeps the question open (an `[ask: …]` in the sentence, an Open decision, during a cold start a row of `proposal/questions.md`); a guess written beside it carries `[assumed]`. Never re-ask it in the session.
3a. A number, limit or rule in the inputs with no reason behind it ("at most three", "seven days") is a why question for the next batch, before the proposal — the owner may say unknown, and then the why is `[assumed]`, but it was asked.
4. Every answer that carries knowledge goes to checkpoint's pending list as confirmed (unmarked).
5. For a common kind of product or area, offer `starters` once, and only when a file for it exists in `starters/domains/` or `starters/areas/`: "shops usually have A, B, C; keep, drop, or change?" No file → no offer.
6. Stop when the next batch would be about details below the level the user is working at. Say what is still open.
