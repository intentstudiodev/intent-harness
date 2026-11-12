---
kind: skill
name: test-cases
description: Test cases from the acceptance conditions, each checked against the why; tests beyond them from the edge cases.
---
# test-cases

1. Read the spec's why block first. Then each acceptance condition: does it serve the why? Wrong or missing → `condition questioned`, filed as an open question for the product owner; do not silently pass or fail it.
2. One test per condition, with the evidence that would prove it. Add tests from the KB's edge cases for the scope, and from `qa/checklist.md`.
3. Run through `qa/connector.md` (Playwright, the project's runner) or by hand; record evidence, not opinion.
4. `sandbox/reports/<task>-qa.md`: passed · failed (what, expected, seen, evidence) · condition questioned · bugs beyond the spec. A failure can become a fix spec; a build that is right where the knowledge is wrong is a change, not a fix.
