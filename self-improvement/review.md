---
kind: skill
name: review
description: Once a week (tweakable), at a natural pause, offer to look back at the improvement notes and library notes from every project and suggest a few concrete improvements. Proactive, never in the way; nothing changes or leaves without a yes.
---
# review

**When.** The state script says *Improvement review due*: the setting `improvement review` in `tweaks/config.md` (weekly by default · monthly · off) has passed since the last line of `tweaks/review-record.md`, and there is something to read. Offer it once, at a natural pause, never mid-task, in one line: "It's been a week; I have 6 notes from 2 projects. Shall I look for what to improve? It takes a minute." Declined → write `<date> · declined` to the record, so it comes back next period, not this session.

1. **Gather.** Unsent lines of `sandbox/improvement-notes.md` in every project the state script lists; lines added to `tweaks/` (yours, including `tweaks/library/`) since the last review; `sandbox/tweaks.md` of those projects. Nothing else: no cards, no conversations.
2. **Find the patterns.** Group by what they are about (cost, routing, questions, coverage, fit, library, anything that recurs). A note seen in two projects, or twice in one, weighs more than a single one. Check the harness `CHANGELOG.md`: a note the current version already fixed is resolved, say so.
3. **Suggest three to five things**, the strongest first, each one line with its why and where it would land:
   - a **tweak for you** ("ask fewer questions about tech for new ideas") → `tweaks/<role-or-skill>.md` on yes;
   - a **project tweak** → that project's `sandbox/tweaks.md` on yes;
   - a **library line** → `tweaks/library/<path>` on yes;
   - **notes worth sending** to the maintainer → `self-improvement/share-note.md` (anonymised, shown, sent only on yes, only when `contribute` is not `no`);
   - **stale notes to close** (resolved, or not worth acting on) → marked `[closed <date>]`, never deleted.
   Through the question widget when there is one: one question, checkboxes, the strongest first.
4. **Record.** One line in `tweaks/review-record.md`: `<date> · read <n> notes from <m> projects · suggested <k> · accepted <list>`. The next review starts from here.

**Never.** Apply a suggestion without its yes. Send anything without share-note's yes. Read project content beyond the notes and tweaks. Offer it twice in one session, or while the user is in the middle of something.
