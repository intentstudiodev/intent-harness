---
kind: library
shelf: platform
name: Web on desktop
fits when: people use the product in a browser on a laptop or desktop computer, from a marketing site to a full web application
related: areas/platforms/web-mobile.md, areas/platforms/desktop-apps.md, areas/patterns/navigation.md, areas/patterns/command-palette-shortcuts.md, areas/practices/accessibility.md, areas/practices/responsive-layout.md
checked: 2026-11
---
# Web on desktop

A product used in a browser on a big screen, with a keyboard and a mouse or trackpad, inside the browser's own chrome: tabs, back button, address bar, extensions. No store sits between the team and the user: a release is a deploy, and anyone with a link can arrive. The tension: **an app-like experience inside a document-shaped container** that people expect to bookmark, open in new tabs and go back in.

## Questions worth asking

- Is this a site people read, or an application people work in for hours? Content sites and work tools want different layouts, density and navigation.
- Which browsers and versions matter? Corporate users on managed machines and consumers on the latest Chrome or Safari are different audiences.
- Does every view need its own URL that can be shared, bookmarked and reopened? Most people expect it; single-page apps lose it unless it is built in.
- What happens with several tabs open on the same account? Stale data and conflicting edits show up here first.
- Is keyboard use a core need (power users, data entry) or a nice extra?
- Are there legal accessibility requirements in your markets (for example the European Accessibility Act in the EU, the ADA in the US)? Ask counsel; WCAG is the usual technical reference.
- Will it also run on phones (see web on mobile), or is desktop the only target?

## Usual shape

### Anatomy
- top bar with logo, main sections, search and account menu · often · sites and lighter apps
- left sidebar for sections in work tools · often · scales to many sections and collapses when space is short
- main content area with a readable maximum width for text · often · very long lines are hard to read
- breadcrumbs or a page header with the path · sometimes · deep hierarchies
- toolbars, context menus on right-click, hover states · sometimes · desktop-only affordances; each needs a keyboard and touch equivalent
- dialogs, side panels and popovers · often · see modals and overlays
- footer with legal, help and settings links · often · sites more than apps

### Conventions
- every meaningful view has a URL; back and forward work · often · people open links in new tabs and expect them to land in the same place
- links are links and buttons are buttons · often · middle-click, "open in new tab" and screen readers depend on it
- visible keyboard focus and a logical tab order · often · WCAG 2.2 success criteria, and the base of power-user speed
- keyboard shortcuts and a command palette · sometimes · work tools; clashes with browser shortcuts confuse people
- drag and drop, multi-select with Shift and Cmd or Ctrl · sometimes · file managers, boards, tables
- resizable layouts from small laptops to wide monitors · often · and browser zoom up to 200 % or more
- browser permissions (notifications, location, camera, clipboard) asked after a user action · often · browsers block or quiet prompts that come without one; HTTPS is required for most
- cookie and consent banners where the law asks for them · often · see privacy and consent
- "unsaved changes" warning before leaving a page with a draft · sometimes

## Choices and trade-offs

- **Multi-page site or single-page app.** Server-rendered pages give fast first loads, working links and search indexing with little effort; a single-page app gives smooth transitions and rich state but needs care with URLs, focus, loading and search engines. Many products mix both.
- **Top navigation or sidebar.** A top bar suits a handful of sections and content sites; a sidebar suits work tools with many sections and nested items.
- **Dense or spacious.** Desktop allows dense tables and panels, which experts like and newcomers find heavy; a density setting is one answer.
- **Browser features or a desktop app.** Notifications, file access and offline work are possible in the browser with limits; a desktop app (see desktop apps) gives more system access at the cost of installing and updating.
- **Newest web platform features or broad support.** Newer CSS and APIs simplify the build; checking them against Baseline or the target browser list avoids surprises on managed machines.

## Watch out

- Clickable divs instead of links and buttons · keyboard, screen readers and "open in new tab" stop working
- State only in memory · a refresh or a shared link loses the filter, the tab and the scroll position
- Hover-only actions · invisible to keyboard and touch-screen laptop users
- Notification or location prompts on page load · people block them for good, and browsers learn to hide them
- Designing only at one wide screen size · small laptops, split windows and zoom are everyday conditions
- Breaking the back button with redirects or modal routing · people lose their place and leave

## Go deeper

- [WCAG 2.2 (W3C)](https://www.w3.org/TR/WCAG22/) · the accessibility standard most laws and policies point to
- [ARIA Authoring Practices Guide (W3C WAI)](https://www.w3.org/WAI/ARIA/apg/) · keyboard behaviour and roles for menus, tabs, dialogs, grids and other widgets
- [Baseline (web.dev)](https://web.dev/baseline) · which web platform features work across the major browsers, and since when
- [10 usability heuristics, Nielsen Norman Group](https://www.nngroup.com/articles/ten-usability-heuristics/) · a compact lens for reviewing any interface
- [Using the Notifications API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API) · how browser permission prompts behave and why they need a user action

## Related

- `areas/platforms/web-mobile.md` · the same product in a phone browser
- `areas/platforms/desktop-apps.md` · when the browser is not enough
- `areas/patterns/navigation.md` · top bars, sidebars and breadcrumbs
- `areas/patterns/command-palette-shortcuts.md` · keyboard-first work
- `areas/practices/accessibility.md` · focus, semantics and contrast
- `areas/practices/responsive-layout.md` · from small laptops to wide monitors
