---
kind: checklist
---
# Critique tiers

| Tier | Who | Input | How | Default for |
|---|---|---|---|---|
| XS | the working agent | its own work | re-read against three items of the checklist; no sub-agent | small fixes; anything the user calls trivial |
| S | a fresh critic sub-agent | only the piece of work | short checklist, one round, ≤ 10 findings | changes, inputs read, designs |
| M | a fresh critic sub-agent | the work plus the KB slice it touches | full checklist; three readings from different directions (what is wrong · what is missing · the premise), each by a named method: pre-mortem, red team, steelman, inversion; up to two rounds | specs, KB cold start result |
| L | several critics, or one with the compressed history | the work, the KB slice, the conversation summary | as M, per perspective; merged list | hand-offs, releases, on request |

- The care setting shifts defaults one tier up (`careful`) or down (`fast`).
- Output is always a numbered list, most severe first, to accept or reject per item.
- Checklists are a start, not a cage: add findings outside them; skip what does not apply.
- Critique must cost less than the mistake it prevents. When in doubt, go one tier down.
