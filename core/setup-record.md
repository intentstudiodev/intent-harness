---
kind: template
---
# Setup record

Written once per install at Harness cold start, into `tweaks/setup-record.md`. `core/state.mjs` reads it at every session start and tests every `found:` line that holds a path.

**Paths relative to the install folder** (`./AGENTS.md`, `./Intent-Harness/Format`, `./.claude/skills/…`), so the record still holds after a copy, a move or a teammate's clone; `~/…` only for something outside it (a skill installed for the user). Never this computer's full path. **Connectors and MCP servers by kind only** ("an email connector", "a design tool"), never the owner's account list: the record is about the folder, not the person.

- date: <date> · harness <version>
- found: <path> — <what it is>            one line per thing found: repo, agent instructions, docs, design library, older KB, installed skill, MCP server (by kind), format tool
- found: <path> — <what it is>
- detected: <config lines taken from the environment: language, coding agent, design tool>
- question widget: <yes | no>          yes when the agent has a structured question tool (Claude Code: AskUserQuestion); ask-questions then uses it for choice questions
- defaults: <config lines left at their shipped default>
- asked: <the questions that were actually asked, and the answers; usually only the wire-in line>
- changed: <tweaks written · pointer added to which instructions file>
- conflicts: <existing rule vs harness rule → which wins>
- connectors: designer <found …> · developer <found …> · qa <found …>   (picked per case the first time the route runs; details then in tweaks/connectors.md)
