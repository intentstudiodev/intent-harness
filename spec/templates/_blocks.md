---
kind: template
---
# Blocks (shared by all spec templates)

Each block has an instruction line and, where marked, a trade-offs slot. Required blocks cannot be dropped by a user template.

| Block | Holds | Instruction |
|---|---|---|
| opening | the fixed note | "This spec is here to help, not to block. Items marked fixed are decided. Everything else is guidance. If you see a better way, say so." |
| what | the scope: cards it covers | from assemble-spec; names and links, no prose |
| why | the chain | feature purpose → user goal → product purpose; written, not pasted |
| acceptance | conditions | one per line; each traces to a card; mark fixed/guidance |
| technical | stack, constraints, integrations | with their whys; trade-offs and assumptions slot |
| design | brief or link | must-haves vs guidance; the library map |
| tests | cases or a test plan | from acceptance and edge cases |
| steps | order of work | only when order matters; else "any" |
| made-from | version, cards, date | footer; stale when cards changed |
