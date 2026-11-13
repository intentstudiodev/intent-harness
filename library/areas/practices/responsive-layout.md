---
kind: library
shelf: practice
name: Responsive and adaptive layout
fits when: the same product runs at more than one size: phone and desktop browsers, resizable windows, tablets, foldables, split screen, zoomed text
related: areas/platforms/web-mobile.md, areas/platforms/web-desktop.md, areas/platforms/tablets.md, areas/patterns/navigation.md, areas/patterns/tables-data-grids.md, areas/practices/accessibility.md
checked: 2026-11
---
# Responsive and adaptive layout

Making one interface work across window sizes, from a narrow phone to a wide monitor, and through resizing, rotation, split screen and zoom. **Responsive** layouts flow continuously with the space; **adaptive** layouts switch between a few designed arrangements at breakpoints, and most products mix both. The tension: designing for the smallest screen keeps things focused but can starve power users on large ones, while desktop-first designs squeezed down lose the main task on phones.

## Questions worth asking

- Where do people actually use it, and for which tasks? Phone use is often quick checks and replies; desktop is often long work. The answer may be different features per size, not one layout stretched.
- Which sizes matter: phones only, phones and desktop, tablets and foldables, large monitors? Each extra class is design and testing.
- Is it a website, a web app, a native app, or several? Native platforms have their own size classes and conventions.
- What is the densest screen (a table, a board, a calendar, an editor)? It decides the hardest layout question.
- Should the phone version do everything, or a focused subset? Both are valid; hiding features without saying so is what frustrates.
- Does it need to work at 400% zoom and with large system text? Laws that reference WCAG include reflow.

## Usual shape

### Anatomy
- a few breakpoints by available width · often · Android and Material use compact (under 600dp), medium (600 to 840), expanded (840 to 1200), large and extra-large
- navigation that changes form: bottom bar or menu on phones, rail or sidebar on wider screens · often · see navigation
- list-detail layouts: one pane on phones, two side by side on wider screens · often · mail, settings, messaging
- fluid grids and flexible images that scale between breakpoints · often
- components that respond to their container rather than the window · sometimes · CSS container queries; the same card in a sidebar and a main area
- tables that become cards, scroll horizontally or hide columns on narrow screens · often · see tables and data grids
- touch targets sized for fingers on touch devices · often · 24 CSS px minimum in WCAG 2.2; platforms suggest larger (44pt on Apple, 48dp on Android)
- safe areas for notches, rounded corners and home indicators · often · native and full-screen web apps
- a maximum line length for reading text · often · very wide lines are hard to read

### Conventions
- layout decided by the space the window has, not the device type · often · split screen and desktop windows break "is it a tablet" logic
- content order that makes sense when stacked in one column · often · also the screen-reader order
- no horizontal scrolling at 320 CSS px wide, apart from content that needs two dimensions (maps, data tables) · often · WCAG 1.4.10 Reflow (Level AA)
- hover-only actions given a visible or long-press alternative on touch · often
- relative units (rem, em, percentages) for type and spacing · often · respects text-size settings
- testing in real browsers and devices, not only resized desktop windows · often · keyboards, address bars and safe areas behave differently

## Choices and trade-offs

- **Mobile-first or desktop-first.** Starting from the smallest screen forces priorities and suits consumer products; starting from desktop suits dense work tools, with a deliberate phone subset.
- **One responsive codebase or separate apps.** One codebase is cheaper and keeps features in step; separate native or mobile-specific apps can feel better and cost twice.
- **Fluid or fixed breakpoints.** Fluid layouts use every pixel and are harder to predict; a few fixed arrangements are easier to design and test and may leave awkward in-between sizes.
- **Same features or focused subset on phones.** Parity avoids "I can't do that here" moments; a subset keeps the phone fast and simple, and works best when it says where the rest lives.
- **Viewport or container queries.** Viewport breakpoints handle page structure; container queries make components portable. Many products use both.

## Watch out

- Breakpoints named after devices ("iPad layout") · new devices and split screen do not fit
- Hiding content on small screens with no way to reach it · people assume the product cannot do it
- Fixed heights and widths on text containers · translations and large text overflow or clip
- Modals and sticky bars that fill a phone screen · the content behind them becomes unreachable, and the on-screen keyboard hides the inputs
- Desktop hover menus carried onto touch · actions that cannot be found or triggered
- Testing only at a few exact widths · layouts break at the sizes in between

## Go deeper

- [web.dev: Learn Responsive Design](https://web.dev/learn/design/) · a full course on media and container queries, fluid type, images and interaction
- [Android Developers: window size classes](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes) · the breakpoints Android and Material use, and why they follow the window, not the device
- [Apple Human Interface Guidelines: Layout](https://developer.apple.com/design/human-interface-guidelines/layout) · size classes, safe areas and adapting across Apple devices
- [MDN: CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) · components that respond to the space they are placed in
- [W3C: Understanding Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) · the 320 CSS px rule, zoom and what is exempt

## Related

- `areas/platforms/web-mobile.md` · browsers on phones: keyboards, address bars, touch
- `areas/platforms/web-desktop.md` · wide screens, windows and pointers
- `areas/platforms/tablets.md` · split screen, foldables and in-between sizes
- `areas/patterns/navigation.md` · how navigation changes form across sizes
- `areas/patterns/tables-data-grids.md` · dense data on narrow screens
- `areas/practices/accessibility.md` · reflow, zoom and target size
