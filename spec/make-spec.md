---
kind: skill
name: make-spec
description: A spec from a template: scope plus blocks, the why chain, trade-offs. The tech lead proposes the type; the user chooses.
---
# make-spec

1. Propose the type: `full` · `feature` · `change` (against an earlier version) · `fix` · `integration` · `design-brief` · `test-plan` · `prototype`. The user chooses.
2. Pick the template: `sandbox/templates/` (project) → `tweaks/templates/` (yours) → `templates/spec/` (default). Say which. A user template `extends:` a default and adds or removes blocks.
3. `assemble-spec` fills the certain blocks from the KB; gaps show as `—`.
4. Write what a script cannot: the why narrative (the chain from feature to user goal), the trade-offs and assumptions per block, where the scope's edge is fuzzy and how you drew it.
5. Mark `fixed` and `guidance` per item as the cards say; never stronger.
6. Open with the note from the template ("here to help, not to block"). Record what the spec was made from (version, cards, date).
7. Critique tier M by default. Then checkpoint: what the spec revealed as missing in the knowledge becomes open questions.
8. Write to `sandbox/specs/<scope>.md`.
