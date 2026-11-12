---
kind: skill
name: build-plan
description: The goal, the steps, the integrations and anything else that must get done, each marked done or not. Support info; may go stale.
---
# build-plan

1. `sandbox/plans/<name>.md`: goal (one line, with its why) · steps in order, each with the spec it comes from · integrations and other must-dos · status per step: `todo` · `doing` · `done (who, when)` · `blocked (why)`.
2. Every status entry carries who reported it and when. The plan refers to the knowledge; the knowledge never refers to the plan.
3. Updated from reports (`develop`, `test-cases`) and at Status. Out of date is fine; say "last reported" when reading it.
