---
kind: connector
---
# Connector: developer

Our role holds judgment (the why chain, the product-scale paragraph, the report); the build itself runs in the user's tools. None is required.

## Cases → defaults

| Case | Default | Alternatives |
|---|---|---|
| one task, strictly developer | the user's coding agent, no skill | direct (main agent) |
| spec-driven build of a feature | Spec Kit | BMAD method |
| full agile flow for a product | BMAD method | Spec Kit |
| React / Next.js work | react-best-practices (Vercel) alongside the above | — |

## Registry (checked 2026-11-10)

- **Spec Kit** · https://github.com/github/spec-kit · MIT · `uv tool install specify-cli` then `specify init` · covers: spec-driven development, templates, bug fixing, idea assessment · scope: step
- **BMAD method** · https://github.com/bmad-code-org/BMAD-METHOD · MIT · `npx bmad-method install` (V7 preview: `npx skills add bmad-code-org/BMAD-METHOD --skill '*'`) · covers: agile agents and workflows for planning and delivery; party mode; elicitation · scope: build · note: V7 in preview
- **react-best-practices** · https://github.com/vercel-labs/agent-skills · MIT · `npx skills add vercel-labs/agent-skills` · covers: 40+ React rules · scope: task
- **the user's coding agent** (Claude Code, Codex, …) · no install · scope: task

## Calling convention

Hand over: the spec (or the task block of it), the product-scale paragraph, the cards `develop` loaded, what is fixed vs guidance. Expect back: the code in the repository, and one paragraph "what I did differently and why" for the report. The outside harness owns its own files in the repository; ours stay in `sandbox/`.

## The user's own
In `tweaks/connectors.md`, written at Harness cold start (this shipped file is never edited): found skills, kept in place, and per-case overrides.

## When nothing fits
`develop` with the main agent, directly.
