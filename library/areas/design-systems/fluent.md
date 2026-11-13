---
kind: library
shelf: design-system
name: Fluent 2 (Microsoft)
fits when: the product lives in or next to Microsoft software (Windows apps, Microsoft 365 or Teams add-ins), or wants a calm, productivity-oriented system with React components
related: areas/platforms/desktop-apps.md, areas/platforms/web-desktop.md, domains/work-management.md, domains/internal-tools.md, areas/practices/accessibility.md
checked: 2026-11
---
# Fluent 2 (Microsoft)

Microsoft's design system across web, Windows, iOS and Android: guidance, design tokens, Figma kits and code libraries, the best known being Fluent UI React. It is what Microsoft's own products are built with, so it fits best where people already use them. The tension: one design language across very different platforms, each with its own library at its own pace.

## Questions worth asking

- Does the product run inside Microsoft software (Teams, Outlook, Office add-ins, Windows)? Matching the host matters more there than elsewhere.
- Which platform first: web (React), Windows (WinUI), iOS, Android? The libraries are separate and not equally complete.
- New project or an existing Fluent UI React v8 codebase? Microsoft recommends moving to v9, and the two differ in API and styling.
- How much brand on top of Microsoft's look? Tokens and themes allow it; the result still reads as Microsoft-adjacent.
- Web components or React? The React library is the most mature at the time of checking.

## Usual shape

### What it gives you
- docs in parts: design (foundations, components, Figma kits), develop (installation, tooling), resources · often · the component pages switch between web, iOS, Android and Windows
- design tokens in two layers: global (raw values) and alias (named by purpose) · often · colour, type, spacing, radius, stroke, shadow, motion
- Fluent UI React v9 (`@fluentui/react-components`) · often · the current React library, documented in Storybook
- Fluent UI React v8 · sometimes · mature and widely used in existing products
- Fluent UI web components · sometimes · still marked beta in the repository at the time of checking
- native libraries for iOS and Android, and WinUI for Windows · sometimes
- Windows app design guidance: layout, navigation, title bar, materials, typography, motion, icons · often · for Windows apps
- Figma UI kits and accessibility plugins (focus order, contrast) · often
- licence: code under MIT; fonts and icons under a separate assets licence · often

### What it leaves to you
- product patterns beyond components (onboarding, dashboards, AI surfaces) · sometimes
- a brand theme; the default is Microsoft's own · often
- keeping platforms in step · sometimes · each platform library ships on its own schedule
- deciding which Microsoft host conventions apply (Teams, Office, Windows) · often · each host has its own extra guidance

## Choices and trade-offs

- **Fluent or the host's neutral look.** Inside Teams or Office, Fluent makes an add-in feel built in; a standalone web product gains little from looking like Microsoft software.
- **v9 or stay on v8.** v9 is where new work goes; staying on v8 avoids a migration and drifts further from Microsoft's current look each year.
- **React or web components.** React is mature and broad; web components work across frameworks and were less mature at the time of checking.
- **Fluent or another enterprise system.** Fluent suits productivity and Microsoft ecosystems; Carbon and Ant Design offer more data-heavy components out of the box.

## Watch out

- Mixing v8 and v9 components on one screen · two styling systems, two looks, heavier bundles
- Treating the Fluent font and icons like the MIT code · they come under a separate licence
- Assuming one platform library covers another · a component on web may not exist on iOS or Android
- Hard-coding colours instead of alias tokens · high-contrast and dark themes, which Windows users rely on, break

## Go deeper

- [Fluent 2 Design System](https://fluent2.microsoft.design/) · guidance, components per platform, Figma kits
- [Fluent 2: design tokens](https://fluent2.microsoft.design/design-tokens) · the global and alias token layers
- [Fluent UI React v9 Storybook](https://storybooks.fluentui.dev/react/) · component API, examples and theming in code
- [Fluent UI on GitHub](https://github.com/microsoft/fluentui) · packages, status of v8 and v9, licence
- [Design Windows apps (Microsoft Learn)](https://learn.microsoft.com/en-us/windows/apps/design/) · Windows layout, navigation, materials and accessibility

## Related

- `areas/platforms/desktop-apps.md` · Windows apps
- `areas/platforms/web-desktop.md` · productivity web apps
- `domains/work-management.md` · the kind of product Fluent is shaped for
- `domains/internal-tools.md` · company tools that sit beside Microsoft software
- `areas/practices/accessibility.md` · high contrast and keyboard use
