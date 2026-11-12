---
kind: connector
---
# Connector: designer

How this role uses connectors: see `core/connectors.md`. Our role holds judgment (KB and spec in, design index out, what to push back on); outside skills hold the how-to. None is required.

## Cases → defaults

| Case | Default | Alternatives |
|---|---|---|
| critique a design | ux-ui-agent-skills `/critique` | impeccable audit · claude-skill-critique (for the design doc, not pixels) · none |
| design system in Figma | skills-for-figma | Figma's own skills |
| design system in code | ux-ui-agent-skills | ui-ux-pro-max |
| new screen, no system yet | ui-ux-pro-max | impeccable · Figma generate-design |
| polish an existing UI | unslop | impeccable polish |
| rule check before hand-off | web-design-guidelines (Vercel) | — |

## Registry (checked 2026-11-10)

- **ux-ui-agent-skills** · https://github.com/plugin87/ux-ui-agent-skills · MIT · `npx ux-ui-agent-skills@latest init` or `/plugin marketplace add plugin87/ux-ui-agent-skills` · covers: critique, DTCG tokens, 52 component specs, WCAG 2.2, browser gates, generation · scope: task
- **ui-ux-pro-max** · https://github.com/nextlevelbuilder/ui-ux-pro-max-skill · MIT · `npm i -g ui-ux-pro-max-cli && uipro init --ai claude` · covers: styles, palettes, font pairings, a design-system file, pre-delivery checklist · scope: task
- **skills-for-figma** · https://github.com/southleft/skills-for-figma · MIT · `npx skills add southleft/skills-for-figma` (needs the Figma MCP server) · covers: tokens and variables in Figma, component analysis, lint, a11y · scope: task · young (20 stars)
- **impeccable / unslop** · (installed as Claude Code skills where present) · Apache/MIT mix, vendored parts · covers: design, critique, audit, polish, animate · scope: task
- **claude-skill-critique** · https://github.com/dlowd/claude-skill-critique · MIT · `git clone … ~/.claude/skills/critique` · covers: adversarial review of plans and design docs · scope: task · young
- **Figma's own skills** · the Figma plugin for Claude Code · Figma's terms · covers: generate design, library, diagram, spec, design-to-code · scope: task
- **web-design-guidelines** · https://github.com/vercel-labs/agent-skills · MIT · `npx skills add vercel-labs/agent-skills` · covers: 100+ UI rules as a check · scope: task
- to verify: Anthropic frontend-design · Taste skill

## Calling convention

Hand over: the brief, the library map, the KB slice (screen, shell, rules), the designs index entry to fill. Expect back: files or links, plus one paragraph "what I decided and why". The role writes `sandbox/designs.md` and the proposed changes; the skill never writes to the KB.

## The user's own
In `tweaks/connectors.md`, written at Harness cold start (this shipped file is never edited): found skills, kept in place, and per-case overrides.

## When nothing fits
Work from the role file and the brief alone. Or ask whether to search the web; a new entry only with a yes.
