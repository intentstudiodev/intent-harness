---
kind: library
shelf: design-system
name: Carbon Design System (IBM)
fits when: an enterprise or data-heavy web product (dashboards, consoles, admin tools) wants a complete open-source system with patterns and charts, not only components
related: areas/patterns/tables-data-grids.md, areas/patterns/dashboards.md, areas/patterns/charts-data-visualisation.md, domains/internal-tools.md, areas/design-systems/ant-design.md
checked: 2026-11
---
# Carbon Design System (IBM)

IBM's open-source design system, shaped by the IBM Design Language: components, patterns, data visualisation, themes and Figma kits, implemented in React and web components. It is unusually complete for enterprise work: tables, forms, notifications, empty states and charts all come with guidance. The tension: that completeness carries a strong IBM look, and making it feel like your own product takes deliberate theming.

## Questions worth asking

- Is the product dense and task-heavy (consoles, admin, analytics)? Carbon is built for that and can feel heavy for consumer apps.
- React, web components, or another framework? React and web components are the core libraries; others rely on community work.
- Does it need charts? Carbon Charts follows the same tokens, which saves a second visual language.
- How far from IBM's look does it need to move? Themes and tokens move it, but type, grid and spacing still read as Carbon.
- Is there an AI or agent surface? Carbon publishes guidance for chat and agent experiences.

## Usual shape

### What it gives you
- docs in parts: designing, developing, foundations (colour, type, grid, spacing, motion, themes), components, patterns, data visualisation · often · each component has usage, style, code and accessibility tabs
- components: data table, UI shell (header and side navigation), forms, modals, notifications, tabs · often · the data table is among the most complete open-source ones
- patterns: dialogs, forms, login, search, filtering, loading, empty states, notifications, status indicators · often
- themes: light and dark themes built on tokens · often · swapping a theme restyles every component
- `@carbon/react`, `@carbon/web-components`, `@carbon/styles` (Sass), `@carbon/icons` · often
- Carbon Charts and data visualisation guidance · sometimes · dashboards and analytics
- Figma libraries: themes, type sets, colour, icons, pictograms; beta kits for charts and native mobile · often · some resources are for IBM staff only
- guidance for AI experiences and an MCP server for AI tools · sometimes
- licence: Apache 2.0 at the time of checking · often

### What it leaves to you
- a brand of your own; the defaults are IBM's · often
- Angular, Vue or Svelte support · sometimes · community projects rather than the core team
- native iOS and Android code · sometimes · the mobile kit is design-only and in beta
- keeping up with major versions · sometimes · version 11 was current, with version 12 in progress at the time of checking

## Choices and trade-offs

- **Carbon or a lighter system.** Carbon pays off when screens are dense and many; for a few simple screens, a lighter system or a headless library is less to learn.
- **React or web components.** React has the widest coverage; web components fit mixed-framework estates.
- **IBM look or re-themed.** Keeping the look is fastest and coherent; re-theming through tokens works, while changing type and grid fights the system.
- **Carbon or Ant Design for admin work.** Both are enterprise-grade; Carbon leans on guidance and accessibility documentation, Ant Design on breadth of components and a large ecosystem.

## Watch out

- Overriding component styles instead of tokens · upgrades break the overrides and themes stop working
- Adopting the UI shell without the product's own navigation thinking · the shell gives structure, not the information architecture
- Waiting for v12 before starting · plan the upgrade path instead; major versions take time to land
- Assuming every Figma resource is public · some kits are internal to IBM

## Go deeper

- [Carbon Design System](https://carbondesignsystem.com/) · guidance, components, patterns, data visualisation
- [Carbon design resources](https://carbondesignsystem.com/designing/kits/figma/) · the Figma libraries and plugins, and which are public
- [Carbon: data table usage](https://carbondesignsystem.com/components/data-table/usage/) · an example of how deep a Carbon component page goes
- [Carbon on GitHub](https://github.com/carbon-design-system/carbon) · packages and licence

## Related

- `areas/patterns/tables-data-grids.md` · Carbon's strongest area
- `areas/patterns/dashboards.md` · enterprise dashboards
- `areas/patterns/charts-data-visualisation.md` · Carbon Charts
- `domains/internal-tools.md` · consoles and admin tools
- `areas/design-systems/ant-design.md` · the other common enterprise choice
