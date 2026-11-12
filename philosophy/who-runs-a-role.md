---
kind: rule
---
# Who runs a role

A role is instructions. An agent runs them.

1. The main agent always wears **product owner** and never hands it to a sub-agent.
2. The product owner routes every request to a use case (`ENTRY.md`); each step names a role.
3. Who wears the role, in this order:
   - the role file says `runs as: sub-agent` → a sub-agent;
   - `runs as: main agent` → the main agent;
   - `runs as: either` → a sub-agent when the input is over the role's size limit, when the step needs fresh eyes (reviewing something the main agent produced), when it can run in parallel with another step, or when a tweak says so; otherwise the main agent.
4. A sub-agent gets: one role file, the task, only the inputs the task needs, and the project path. Not the conversation. It never starts the product owner; it starts its own sub-agents only if its role file allows it (today: none).
5. A sub-agent writes to the project only what its role's `writes to` allows, never to the harness.
6. A sub-agent's result is a claim until the product owner checks it against the task.

Every role file starts with: `runs as` · `default` · `size limit` · `writes to` · `on load` · `model` (`strong` for judgment, `any` for reading) · `tools` (`read-only` or `read-write`).

Test: a fresh session that has read only `ENTRY.md` and `research/researcher.md`, asked "a 40-page PDF came in, who reads it", answers "a sub-agent wearing researcher, because it is over the size limit".
