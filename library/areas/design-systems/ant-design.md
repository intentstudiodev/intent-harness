---
kind: library
shelf: design-system
name: Ant Design
fits when: a React product with many forms, tables and admin screens (back offices, internal tools, B2B consoles) wants a very broad component set and token-based theming
related: areas/parts/admin-back-office.md, domains/internal-tools.md, areas/patterns/forms-validation.md, areas/practices/localization.md, areas/design-systems/carbon.md
checked: 2026-11
---
# Ant Design

An enterprise design language and React component library from Ant Group, one of the most widely used React UI libraries. Its strength is breadth: date pickers, trees, cascaders, transfer lists, tours, splitters and a large ecosystem around them. The tension: it makes a back office fast to build and makes it look like many other back offices unless the theme is worked on.

## Questions worth asking

- Is the product mostly forms, tables and admin flows? That is where Ant Design saves the most time.
- Which React version, and which browsers? Version 6 (late 2025) needs React 18 or later and supports modern browsers only.
- How much brand does it need? The token system reaches far, but someone has to set it.
- Which languages and locales? Ant Design ships locale packs for dozens of languages.
- Mobile web, or desktop only? The main library is desktop-first; mobile has a separate library.

## Usual shape

### What it gives you
- docs in parts: design (values, global styles, patterns), components with live examples and API tables, and guides on theming and migration · often · available in English and Chinese
- a very broad React component set: forms, tables, trees, pickers, upload, steps, tour · often
- design tokens in three layers: seed (intent such as the primary colour), map (derived) and alias (shared by components) · often
- algorithms that derive a theme from seed tokens: default, dark, compact, combinable · often
- theming in code through a provider, nestable for parts of a page; CSS variables on by default in version 6 · often
- internationalisation for dozens of languages and right-to-left support · often
- an ecosystem: Pro and ProComponents for admin layouts, X for AI chat interfaces, Mobile, Charts through AntV · sometimes
- licence: MIT at the time of checking · often

### What it leaves to you
- a distinct look; the defaults are recognisable · often
- frameworks other than React · sometimes · community ports exist for other frameworks
- mobile-first layouts in the main library · sometimes
- product patterns and content: which screens, which words · often

## Choices and trade-offs

- **Default theme or own tokens.** Defaults are fast and polished; seed tokens such as colour, radius and font move the whole system with little effort and make it yours.
- **Ant Design or a headless base.** Ant Design gives finished components and their behaviour; a headless library gives full visual control and more work.
- **Pro templates or own layout.** Pro gives a working admin shell in hours; its conventions then shape the product's navigation.
- **Upgrade majors or stay.** Version 6 brings CSS variables and drops old browsers and React 17; upgrading the icons package together is required by the migration guide.

## Watch out

- Using every component because it exists · screens get dense and inconsistent; start from the task
- Restyling with global CSS overrides · they break between versions; tokens and component tokens survive upgrades
- Forgetting the locale provider · dates and numbers show in the wrong language or format
- Mixing major versions of Ant Design and its icons package · version 6 icons do not work with version 5, per the migration guide

## Go deeper

- [Ant Design](https://ant.design/) · components, design values and patterns
- [Ant Design: customise theme](https://ant.design/docs/react/customize-theme) · seed, map and alias tokens, algorithms, CSS variables
- [Ant Design: from v5 to v6](https://ant.design/docs/react/migration-v6) · what changed in the current major version
- [Ant Design on GitHub](https://github.com/ant-design/ant-design) · licence, browser support and links to the ecosystem

## Related

- `areas/parts/admin-back-office.md` · where Ant Design is most often used
- `domains/internal-tools.md` · company tools built on it
- `areas/patterns/forms-validation.md` · its form components
- `areas/practices/localization.md` · locale packs and right-to-left
- `areas/design-systems/carbon.md` · the other common enterprise choice
