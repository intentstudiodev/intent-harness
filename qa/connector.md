---
kind: connector
---
# Connector: QA

## Cases → defaults

| Case | Default | Alternatives |
|---|---|---|
| browser tests | Playwright MCP | the built-in browser of the agent tool |
| unit and API tests | the project's own test runner, no skill | — |
| review of the build against the knowledge | Critique (ours) | — |

## Registry (checked 2026-11-10)

- **Playwright MCP** · https://github.com/microsoft/playwright-mcp · Apache 2.0 · as an MCP server in the agent tool · covers: driving a browser for tests · scope: task
- **the project's test runner** · no install · scope: task

## Calling convention

Hand over: the test cases with their evidence requirements. Expect back: results with evidence (logs, screenshots, exit codes). The role writes the QA report.

## The user's own
In `tweaks/connectors.md`, written at Harness cold start (this shipped file is never edited): found skills, kept in place, and per-case overrides.
