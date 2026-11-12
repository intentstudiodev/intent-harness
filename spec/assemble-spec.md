---
kind: skill
name: assemble-spec
description: Pulls a scope out of the knowledge the same way every time, and records what it was made from.
---
# assemble-spec

Certain, so a script's job where the format's tools allow (today: `intent-format frame` for a screen and its shell; the rest by hand, the same way every time):

1. From the scope's entry card, follow links: feature → stories → screens → shells → flows → rules → edge cases → decisions → tech stack items touched.
2. Pull per card: the fact, its why line, its mark, its acceptance conditions if any.
3. Render into the template's blocks in order; a block with nothing shows `—`, never a guess.
4. Footer: made from version X, cards listed, date. A spec whose cards changed since is stale (Validate flags it).

What it cannot do: decide where a fuzzy scope ends, write the why narrative, make trade-offs. Those are `make-spec` steps 4 and 5.
