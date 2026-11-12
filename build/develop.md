---
kind: skill
name: develop
description: One developer skill: before (context and the product-scale paragraph), during (findings sorted), after (the report).
---
# develop

**Before.** Load the task's spec. Then, one card at a time: the place and its surroundings (screen, shell), the why chain up to the user goal, the rules and decisions that constrain it, what else depends on it (reverse links), what is `fixed` and what is `guidance`. Write one paragraph: what this change does to the product as a whole and what could break. Where a why is missing and decides the build: ask, do not invent (ask-or-assume rule).

**Build.** Through `build/connector.md`: the user's coding agent, Spec Kit, BMAD, or direct for a strictly developer task. The code lives in the repository; the harness never holds it.

**During.** Findings are noted and sorted as they come: technical detail → decide, record in the report; product gap → open question, carry on elsewhere; plan change → say so.

**After.** `sandbox/reports/<task>.md` from `build/report.md`: done · done differently and why · the product-scale paragraph · findings · what the knowledge should change. Deviations go to checkpoint as proposed changes. Update the plan's status line.
