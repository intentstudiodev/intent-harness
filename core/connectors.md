# Connectors

Our role files hold judgment: responsibility, what to push back on, what to write where, how to use the KB and the spec. The how-to of design, development and testing is better done by outside skills and harnesses. A **connector** is the file that reaches them: one per role, in `<module>/connector.md`.

## What a connector file holds

1. **Cases → defaults**: a table of the cases this role meets and the default skill for each, with alternatives.
2. **Registry**: known skills and harnesses, one block each: name · source URL · licence · install command · covers · scope (`task` = one task, `step` = a whole step such as a spec-driven build, `build` = the whole build) · young? · last checked.
3. **Calling convention**: what we hand over (the KB slice: screen, shell, rules; the spec; the task; the design index entry) and what we expect back (files or links, plus one paragraph "what I decided and why"). The outside skill never writes to the KB; the role writes the index entry and the why.
4. **The user's own**: in `tweaks/connectors.md`, written at Harness cold start: found skills, kept in place, per-case overrides (`<role> · <case> → <skill>`). Shipped connector files are never edited.
5. **When nothing fits**: work from the role file alone, or ask whether to search the web; new registry entries only with a yes.

## Four states, per case

external skill · the user's own skill · none (the role file alone, always possible) · build your own (`core/skill-template.md`; the retro offers "save this as a skill?" when a pattern repeats).

## Rules

- Links and recommendations only. Nothing is embedded; the user installs under the skill's own licence.
- Never auto-install. Never grow the registry from a web search without a yes.
- A found skill of the user's stays where it is (default); copying into `tweaks/` is their choice.
- Registry entries carry a last-checked date so stale ones are visible.
