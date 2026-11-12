---
kind: template
---
# Setup record

Written once per computer at Harness cold start, into `tweaks/setup-record.md`. `core/state.mjs` reads it at every session start and tests every `found:` line that holds a path.

- date: <date> · harness <version>
- found: <path> — <what it is>            one line per thing found: repo, agent instructions, docs, design library, older KB, installed skill, MCP server, format tool
- found: <path> — <what it is>
- detected: <config lines taken from the environment: language, coding agent, design tool>
- defaults: <config lines left at their shipped default>
- asked: <the questions that were actually asked, and the answers; usually only the wire-in line>
- changed: <tweaks written · pointer added to which instructions file>
- conflicts: <existing rule vs harness rule → which wins>
- connectors: designer <found …> · developer <found …> · qa <found …>   (picked per case the first time the route runs; details then in tweaks/connectors.md)
