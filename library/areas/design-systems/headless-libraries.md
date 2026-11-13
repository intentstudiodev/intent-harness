---
kind: library
shelf: design-system
name: Headless component libraries
fits when: a web product wants its own look but not to rebuild the behaviour and accessibility of menus, dialogs, comboboxes, tabs and date pickers (Radix, Base UI, React Aria, Headless UI, Ark UI, Reka UI)
related: areas/design-systems/shadcn-ui.md, areas/design-systems/your-own-design-system.md, areas/practices/accessibility.md, areas/practices/localization.md, areas/patterns/modals-overlays.md
checked: 2026-11
---
# Headless component libraries

Libraries that give components their behaviour (keyboard support, focus handling, ARIA roles, positioning, state) and no styling at all. They are the usual foundation for a custom design system on the web: the team draws the look, the library handles the parts that are hard to get right. The tension: freedom over every pixel versus having to design, style and document every component yourself.

## Questions worth asking

- Which framework: React, Vue, Svelte, Solid? Most libraries are React-only; a few cover several frameworks.
- Which components are needed? Libraries differ most on the hard ones: combobox, date and time pickers, tables, drag and drop.
- How international is the product? Calendars, number formats and right-to-left vary a lot between libraries.
- Who maintains it, and how active is it? A foundation library is hard to replace later.
- Components or hooks? Ready parts are faster; hooks give finer control over the markup.

## Usual shape

### What it gives you
- docs per component: anatomy (named parts), API, keyboard interactions, accessibility notes · often · read the keyboard table before styling
- behaviour based on the W3C ARIA Authoring Practices patterns · often
- focus management, keyboard navigation, ARIA attributes, dismissal and positioning of overlays · often
- styling hooks: data attributes or render props for states such as open, selected, disabled · often · work with Tailwind, CSS modules, CSS-in-JS or plain CSS
- **Radix Primitives** · sometimes · React; long-established; MIT; maintained by WorkOS at the time of checking
- **Base UI** · sometimes · React; from creators of Radix, Floating UI and Material UI; includes combobox and autocomplete; MIT; in the 1.x series at the time of checking
- **React Aria** · sometimes · Adobe; React components plus hooks; 50+ components, translations in 30+ languages, many calendar systems, right-to-left; Apache 2.0
- **Headless UI** · sometimes · Tailwind Labs; a smaller set for React and Vue (menus, dialogs, listbox, combobox, tabs, form controls); MIT
- **Ark UI** · sometimes · Chakra Systems; one API for React, Vue, Solid and Svelte; 45+ components
- **Reka UI** · sometimes · Vue; formerly Radix Vue

### What it leaves to you
- all visual design: colours, type, spacing, motion · often
- design tokens and theming · often
- documentation and usage rules for your own components · often
- a Figma library that matches the code · often
- patterns beyond single components: forms, layouts, empty states · often
- accessibility of what you add around the parts · often · labels, contrast and content are still yours

## Choices and trade-offs

- **Headless or a styled system.** Headless suits products with a strong brand or a team ready to own a design system; a styled system (Material, Fluent, Carbon, Ant Design) ships faster when its look is acceptable.
- **Headless directly or through shadcn/ui.** shadcn/ui adds ready styles on top of Base UI, Radix or React Aria; going direct gives a clean slate and more work.
- **Breadth or depth.** Headless UI is small and simple; React Aria is the deepest on internationalisation and dates; Base UI and Radix sit between with broad React coverage.
- **One framework or several.** Ark UI covers four frameworks with one API; the others mostly tie you to React.

## Watch out

- Restyling parts in ways that hide focus or change semantics · the accessibility the library gave is lost
- Choosing on component count alone · one missing hard component (a date range picker) can cost more than the rest
- Mixing two headless libraries for similar parts · two behaviours, two keyboard models
- Assuming headless means accessible by default · contrast, labels and content still decide whether it works for people

## Go deeper

- [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction) · the idea of unstyled primitives and their accessibility scope
- [Base UI](https://base-ui.com/) · components, styling approach and accessibility notes
- [React Aria](https://react-aria.adobe.com/) · components and hooks, internationalisation, screen reader testing
- [Headless UI](https://headlessui.com/) · a compact set built to pair with Tailwind CSS
- [Ark UI](https://ark-ui.com/) · one headless API across React, Vue, Solid and Svelte
- [W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) · the patterns and keyboard rules these libraries implement

## Related

- `areas/design-systems/shadcn-ui.md` · styled components built on these bases
- `areas/design-systems/your-own-design-system.md` · building the rest of the system on top
- `areas/practices/accessibility.md` · what the library covers and what it does not
- `areas/practices/localization.md` · dates, numbers and right-to-left
- `areas/patterns/modals-overlays.md` · dialogs, popovers and menus, the most common headless parts
