---
kind: library
shelf: design-system
name: shadcn/ui
fits when: a React web app uses Tailwind CSS and wants good-looking, accessible components whose source code lives in its own repository
related: areas/design-systems/headless-libraries.md, areas/design-systems/your-own-design-system.md, areas/practices/theming-dark-mode.md, areas/platforms/web-desktop.md, areas/patterns/ai-interfaces.md
checked: 2026-11
---
# shadcn/ui

A set of accessible, styled React components that you copy into your project with a command-line tool, rather than install as a package. It describes itself as a way to build your own component library, not a library: the code is yours to read and change. The tension: owning the code gives full control and AI-friendly source, and also means owning every update and every divergence from upstream.

## Questions worth asking

- Is the stack React with Tailwind CSS? shadcn/ui is built for that pair; other stacks need a port.
- Which base for behaviour: Base UI, Radix or React Aria? It decides accessibility details, available components and future upgrades.
- How much will the team change the components? Light changes keep upgrades easy; heavy changes turn them into a fork.
- Does the product need its own look, or is the default style acceptable? Many products ship close to the defaults and look alike.
- Will components be shared across several apps? A private registry can distribute the team's own versions.

## Usual shape

### What it gives you
- docs: installation per framework, components (each with usage, examples and API), theming, dark mode, CLI, registry, and a dated changelog · often · the changelog shows how fast it moves
- component source copied into the project by the CLI · often · edited like any other code
- a choice of behaviour base: Base UI (the default for new projects since July 2026), Radix (still supported), React Aria (added July 2026) · often
- named styles that change the overall look (several at the time of checking) and presets · sometimes
- theming through CSS variables: semantic tokens such as background, foreground, primary, each surface paired with a foreground; one radius token; values in OKLCH · often
- dark mode by overriding the same tokens under a `.dark` class · often
- blocks: ready page sections such as sign-in, dashboards, sidebars · sometimes
- components for chat and AI interfaces · sometimes · added in 2026
- a registry format and CLI for distributing your own components, including from GitHub and private repositories · sometimes
- an MCP server so AI assistants can browse and add components · sometimes
- licence: MIT at the time of checking · often

### What it leaves to you
- upgrades: no package version to bump; changes upstream are pulled in by the team · often
- a distinct visual identity beyond the default styles · often
- documentation of your own variants and rules · often · the upstream docs describe the originals, not your edits
- product patterns and content · often
- non-React platforms · often

## Choices and trade-offs

- **Base UI, Radix or React Aria.** Base UI is the current default and actively developed; Radix suits existing projects and teams that know it; React Aria brings the deepest internationalisation and date handling.
- **Keep close to upstream or make it yours.** Close to upstream keeps updates cheap; deep edits make the components a private design system that someone maintains.
- **shadcn/ui or a packaged library.** A package (Material, Ant Design, Fluent) upgrades with one command and limits change; shadcn/ui gives full control and leaves maintenance in the team's hands.
- **CSS variables or inline utility colours.** Variables make theming and dark mode a token change; inline colours are simpler to read and harder to re-theme later.

## Watch out

- Editing copied components without noting what changed · the next upstream update becomes guesswork
- Mixing components from different bases or styles in one project · behaviour and look drift apart
- Shipping the default look unchanged · the product looks like many others built the same way
- Hard-coded colours added beside the tokens · dark mode and themes break quietly
- Assuming accessibility survives edits · the base handles focus and keyboard; custom markup can undo it

## Go deeper

- [shadcn/ui documentation](https://ui.shadcn.com/docs) · the idea, installation, components and CLI
- [shadcn/ui: theming](https://ui.shadcn.com/docs/theming) · tokens, CSS variables, base colours, dark mode
- [shadcn/ui changelog](https://ui.shadcn.com/docs/changelog) · bases, styles, registry and AI components as they arrive
- [shadcn/ui on GitHub](https://github.com/shadcn-ui/ui) · source and licence

## Related

- `areas/design-systems/headless-libraries.md` · Base UI, Radix and React Aria underneath
- `areas/design-systems/your-own-design-system.md` · when the copied components become your system
- `areas/practices/theming-dark-mode.md` · tokens and dark mode
- `areas/platforms/web-desktop.md` · the web apps it is usually used for
- `areas/patterns/ai-interfaces.md` · its chat and AI components
