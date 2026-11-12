---
kind: skill
name: retro
description: Four lines at the end of a use case; findings become a tweak, an improvement note, or nothing. Keeps an open line.
---
# retro

Skip for trivial work (tier XS) and after Harness cold start (its setup record is the record). Otherwise, four lines, written by the working agent, no sub-agent:

1. What cost more than it should have? (reads that changed nothing, tool calls, overthinking, re-asking)
2. What did the user correct, decline, or ask for twice?
3. What would I do differently next time, in anything?
4. What did I notice that fits none of the above?

Each line gets a destination:
- **harness tweak** (how this user works, across projects) → offer: "Shall I work this way from now on?" On yes: one plain sentence with date and reason in `tweaks/<role-or-skill>.md`.
- **project tweak** (this project's conventions) → same offer; `sandbox/tweaks.md`.
- **improvement note** (the shipped harness should change) → append to `sandbox/improvement-notes.md`: `- <date> · harness <version> · <what happened> · <expected> · <suggestion>`. No project content in the line. Offered for sharing by `share-note` when the user opted in.
- **nothing**.

Never apply a tweak silently. The areas seen so far (efficiency, coverage, routing, fit) are examples, not a list; tag freely, and tags that recur become areas. Signals also arrive outside the retro: a correction, a rejection, a repeated request; note them when they happen, offer at the next pause.

## The four lines, as written

- cost: <what cost more than it should>
- corrected: <what the user corrected, declined, asked twice>
- next time: <what I would do differently, in anything>
- noticed: <anything that fits none of the above>

destinations: harness tweak · project tweak · improvement note · nothing

An improvement note is one line: - <date> · harness <version> · what happened: <…> · expected: <…> · suggestion: <…>
