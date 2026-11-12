---
kind: skill
name: share-note
description: Anonymise unsent improvement notes, show them, and on the user's yes open a GitHub issue under their own login.
---
# share-note

Only when `contribute` is `yes` or `ask` in `tweaks/config.md`, at a natural pause, when unsent notes exist. Never mid-task, never on its own.

1. Run `node <harness>/core/anonymise.mjs <project>` and show its output beside the originals. Say: "Content anonymised; it would be sent under your GitHub account, as any bug report."
2. The user says yes, no, or edits. No → stay local. Edit → use their text.
3. Yes → one issue per batch: `gh issue create --repo <maintainer repo from config> --template improvement-note.yml --title "Improvement notes <date>" --body "<text>"` with the harness version. No `gh` or not logged in → print the text and the new-issue URL to paste.
4. Mark each sent line in `sandbox/improvement-notes.md` with `[sent #<issue>]`.

Never send anything not shown. Never include paths, card IDs, names, quotes, environment details or tweaks.
