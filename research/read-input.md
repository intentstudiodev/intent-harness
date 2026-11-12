---
kind: skill
name: read-input
description: Reads an input that states intent (a brief, a doc, a spec, feedback, data), then compares it with the KB. Intake is step 1.
---
# read-input

1. **Intake.** `intake/intake.md`: the input is saved in `inputs/` with its header (type · whose · shows). Read it from there.
2. **Read** by type: a brief or spec → statements of intent; feedback or data → patterns with counts; a competitor → see `reverse-engineer`. Over the size limit → a researcher sub-agent per input.
3. **Compare** with the KB where one exists, card by card: `new` · `confirms` · `contradicts` (name the card). A reference never enters the KB as ours.
4. **Whys**: for each finding, the reason the source gives (confirmed, unmarked; the card will cite the file as Source) or implies (`[likely]`); your own guess is `[assumed]`.
5. **Write** `sandbox/research/<input>.md`: findings with where in the input; the three lists; the whys with their marks; questions for the user in one batch. Contradictions become Open decisions or `[ask: …]` markers in the card concerned, never silent overwrites.
6. Hand the new and confirmed items to checkpoint.
