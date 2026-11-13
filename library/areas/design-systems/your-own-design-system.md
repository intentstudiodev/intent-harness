---
kind: library
shelf: design-system
name: Your own design system
fits when: a product or team is building its own system of tokens, components and rules, from a single token file to a shared library across several products
related: areas/design-systems/headless-libraries.md, areas/design-systems/shadcn-ui.md, areas/practices/theming-dark-mode.md, areas/practices/accessibility.md, areas/practices/microcopy-content.md
checked: 2026-11
---
# Your own design system

A product's own set of design tokens, components, patterns and documentation, kept in one place so screens stay consistent and new ones are quicker to build. It can be a small token file and ten components for one product, or a staffed programme serving many teams. The tension: a system saves time once it is used widely, and costs time to build and keep alive before it is.

## Questions worth asking

- How many products, platforms and teams will use it? One small product needs far less than an organisation.
- Start from scratch, adapt an existing system, or build on a headless library? Adopting is cheapest and creating is dearest, per Nielsen Norman Group.
- Who owns it, and how much of their time? Without an owner, systems drift and stop being trusted.
- Which platforms share it: web only, or also iOS and Android? Shared tokens make sense earlier than shared components.
- Where do design and code meet: a Figma library, a code library, or both kept in step?
- Will AI agents generate UI with it? Clear tokens, names and usage rules make their output far more consistent.

## Usual shape

### What it gives you
- design tokens in layers: primitive values, semantic names (surface, text, accent, danger), sometimes component tokens · often · semantic names make themes and dark mode a swap
- tokens in the W3C Design Tokens format, exported to each platform with a tool such as Style Dictionary · sometimes · the format reached its first stable version in October 2025
- foundations: colour, type scale, spacing, radius, elevation, motion, icons · often
- a component library in code, often on a headless base or adapted from shadcn/ui · often
- a matching Figma library · often · drift between design and code is the most common complaint
- patterns built from components: forms, empty states, page layouts · sometimes
- documentation per component: when to use, when not, states, accessibility, content guidance · often · often in Storybook or a small docs site
- content and voice guidelines · sometimes
- a changelog and versioning · sometimes · once more than one team or product depends on it

### What it leaves to you
- everything: this is the system you write · often
- governance: how new components are proposed, reviewed and retired · often · centralised teams, federated contributors or one owner
- adoption: migrating old screens, measuring use, answering questions · often
- accessibility testing of every component · often · nothing is inherited unless the base provides it

## Choices and trade-offs

- **Build, adapt or adopt.** Adopting an existing system is fastest; adapting one (re-theming Material, editing shadcn/ui) balances speed and identity; building from scratch fits when nothing available matches and the team can maintain it. Heavy customisation of an adopted system can cost more than it saved.
- **Tokens first or components first.** Tokens give consistency across platforms cheaply; components give speed but tie you to one framework.
- **Small and tight or broad.** A small system that covers what is used gets adopted; a broad one covering hypothetical needs ages before use.
- **Central team or federated.** A central team keeps quality high and can become a bottleneck; contributions from product teams scale and need review.
- **When it pays off.** Years of repeatable work across many screens or teams; for short-lived prototypes or proofs of concept it rarely does.

## Watch out

- Building the system before the product · components get designed for imagined screens
- Tokens named by value ("blue-500" used everywhere) instead of purpose · re-theming and dark mode mean touching every screen
- Documentation that shows components but not when to use them · teams pick by looks and screens diverge
- Figma and code maintained separately with no owner · they drift within months
- No way to propose changes · teams fork components locally and the system loses trust

## Go deeper

- [Nielsen Norman Group: Design Systems 101](https://www.nngroup.com/articles/design-systems-101/) · what a design system contains, when it is worth it, the cost of adopt, adapt or create
- [Atomic Design, Brad Frost](https://atomicdesign.bradfrost.com/) · a method for building interfaces as systems, with a chapter on maintaining them
- [Design Tokens Format 2025.10 (W3C Community Group)](https://www.designtokens.org/tr/2025.10/) · the stable format for exchanging tokens between tools
- [Style Dictionary](https://styledictionary.com/) · exporting tokens to CSS, iOS, Android and more
- [Storybook documentation](https://storybook.js.org/docs) · building, documenting and testing components in isolation

## Related

- `areas/design-systems/headless-libraries.md` · behaviour and accessibility to build on
- `areas/design-systems/shadcn-ui.md` · a starting point you copy and own
- `areas/practices/theming-dark-mode.md` · semantic tokens and themes
- `areas/practices/accessibility.md` · testing each component
- `areas/practices/microcopy-content.md` · content guidelines as part of the system
