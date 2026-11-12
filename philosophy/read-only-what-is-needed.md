---
kind: rule
---
# Read only what is needed

The harness may be large; a step is small.

- Load `ENTRY.md`, then the state output, then the role, then one skill at a time as the route names them. Nothing else from the harness.
- From the project: the files the state output names, then one card at a time, found through the KB's `_index.md` files. Never read a whole KB folder to "get an overview"; the index is the overview.
- A sub-agent gets only its inputs; it does not re-read what the main agent already summarised for it.
- Every skill says what it returns and how long it may be. Keep to it.
- When you notice you have read a file and not used it, that is a retro line.
