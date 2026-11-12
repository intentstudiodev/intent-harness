---
kind: connector
---
# Connector: developer

Our role holds judgment (the why chain, the product-scale paragraph, the report); the build itself runs in the user's tools. None is required.

## Cases → defaults

| Case | Default | Alternatives |
|---|---|---|
| one task, strictly developer | the user's coding agent, no skill | direct (main agent) |
| spec-driven build of a feature | Spec Kit | Kiro · OpenSpec · BMAD method |
| full agile flow for a product | BMAD method | Spec Kit · Kiro |
| change proposals against living specs | OpenSpec | Spec Kit |
| React / Next.js work | react-best-practices (Vercel) alongside the above | — |

## Ways to use a spec tool

- **Lead:** the harness hands one feature at a time and reads the result back: `build/hand-to-pipeline.md`, then `build/follow-pipeline.md`.
- **Follow:** you work straight in the tool; the harness connects it once, steps back, and catches up when you return: `build/connect-pipeline.md` (Follow), `build/follow-pipeline.md`.
- **Several:** one tool per job or per repository (BMAD for planning, Spec Kit for features; Kiro for the mobile repository), one default per job: `build/connect-pipeline.md` (Several tools).
- **Switch:** features still with the old tool are finished there or taken back, then it is disconnected: `build/connect-pipeline.md` (Switch).

Every connection and every handed feature is one row in the project's `sandbox/pipelines.md`.

## Registry (checked 2026-11-13)

- **Spec Kit** · https://github.com/github/spec-kit · MIT · `uv tool install specify-cli` then `specify init <project> --integration <agent>` · covers: spec-driven development (constitution → specify → clarify → plan → tasks → implement), templates · reads: `.specify/memory/constitution.md` · writes: `specs/<NNN>-<name>/` · scope: step
- **Kiro** · https://kiro.dev · proprietary (AWS) · the editor from https://kiro.dev/downloads, or the CLI: `curl -fsSL https://cli.kiro.dev/install | bash` · covers: specs as requirements (EARS, like our rules) → design → tasks, steering, hooks · reads: `.kiro/steering/*.md` · writes: `.kiro/specs/<name>/` · scope: step
- **OpenSpec** · https://github.com/Fission-AI/OpenSpec · MIT · `npm install -g @fission-ai/openspec@latest` (Node 22.12+) or `brew install openspec`, then `openspec init` · covers: change proposals with delta specs against living specs, archive merges them · reads: `context:` in `openspec/config.yaml` · writes: `openspec/changes/<change>/`, `openspec/specs/` · scope: step
- **BMAD method** · https://github.com/bmad-code-org/BMAD-METHOD · MIT · `npx bmad-method install`, or as skills: `npx skills add bmad-code-org/BMAD-METHOD/skills/method --skill '*'` · covers: agile agents and workflows for planning and delivery: brief, PRD, architecture, stories; elicitation · reads: `AGENTS.md` (its project-context block) · writes: `_bmad-output/planning-artifacts/` · scope: build
- **react-best-practices** · https://github.com/vercel-labs/agent-skills · MIT · `npx skills add vercel-labs/agent-skills` · covers: 40+ React rules · scope: task
- **the user's coding agent** (Claude Code, Codex, …) · no install · scope: task

## Calling convention

Hand over: the spec (or the task block of it), the product-scale paragraph, the cards `develop` loaded, what is fixed vs guidance. Expect back: the code in the repository, and one paragraph "what I did differently and why" for the report. The outside harness owns its own files in the repository; ours stay in `sandbox/`.

## The user's own
In `tweaks/connectors.md`, written at Harness cold start (this shipped file is never edited): found skills, kept in place, and per-case overrides.

## When nothing fits
`develop` with the main agent, directly.
