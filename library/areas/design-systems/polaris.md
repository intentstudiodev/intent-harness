---
kind: library
shelf: design-system
name: Polaris (Shopify)
fits when: the product is a Shopify app or extension: a page in the Shopify admin, a block in checkout or customer accounts, or a tile in Point of Sale
related: domains/online-shop.md, areas/parts/admin-back-office.md, areas/platforms/web-desktop.md, areas/practices/accessibility.md, areas/design-systems/your-own-design-system.md
checked: 2026-11
---
# Polaris (Shopify)

Shopify's design system for apps that live inside Shopify: the admin, checkout, customer accounts and Point of Sale. Since October 2025 it ships as web components that work with any framework or none; the older Polaris React library is archived and no longer maintained. The tension: inside Shopify, Polaris is close to required if an app wants to feel built in and earn Shopify's quality badge; outside Shopify, its licence and purpose do not fit.

## Questions worth asking

- Is this a Shopify app at all? Polaris is made for Shopify surfaces, and its licence limits use to software that works with Shopify.
- Which surfaces: the app's home page in the admin, admin blocks and actions, checkout, customer accounts, POS? Each has its own subset of components and APIs.
- Is "Built for Shopify" status a goal? Its requirements include looking and behaving like the admin.
- New app, or an existing one on Polaris React? The React library will not get updates; moving to web components is the supported path.
- Does the app's main workflow fit inside the admin, or does it need its own site? Shopify expects primary workflows to stay inside the admin.

## Usual shape

### What it gives you
- docs on shopify.dev, organised by surface (app home, admin, checkout, customer accounts, POS) with the components each one allows · often · start from the surface, not from the component list
- Polaris web components for layout, forms, lists, feedback, icons · often · usable from plain HTML, server-rendered pages or any framework
- App Bridge web components for the admin frame: navigation, title bar, save bar, modals, full-screen windows · often · they connect the app to Shopify's own chrome
- one frontend that works in the desktop admin and the Shopify mobile app · often
- app design guidelines: mobile first, consistency with the admin, accessibility · often
- Built for Shopify design requirements: admin look and feel, WCAG 2.1 AA contrast, responsive layouts, embedded with the current App Bridge · sometimes · when the app aims for the badge
- licence: custom, based on MIT and limited to software that integrates with Shopify; icons and images under a separate design guidelines agreement, at the time of checking · often

### What it leaves to you
- the app's own information architecture and flows · often
- brand; Polaris deliberately keeps apps looking like Shopify · often
- anything outside Shopify: a marketing site, a standalone dashboard · often · Polaris is not licensed for standalone products
- data-heavy custom views beyond the component set · sometimes

## Choices and trade-offs

- **Embedded in the admin or a standalone app.** Embedded apps feel native and qualify for Built for Shopify; standalone apps get freedom and lose that integration.
- **Web components or the archived React library.** Web components are where Shopify's work goes; staying on React keeps old code running with no fixes.
- **Polaris everywhere or only inside Shopify.** Many app makers use Polaris inside the admin and their own design system for their website and any standalone views.

## Watch out

- Starting a new app on Polaris React · it is archived and will not get fixes or new components
- Embedding an external website in the admin · Built for Shopify requirements rule it out and merchants find it jarring
- Custom styling that breaks the admin's spacing, contrast and buttons · the app looks foreign and can fail the quality review
- Using Polaris for a product that does not touch Shopify · its licence does not allow that kind of standalone use
- Ignoring the mobile admin · merchants open apps on phones, and Built for Shopify asks for no horizontal scrolling there

## Go deeper

- [Polaris on shopify.dev](https://shopify.dev/docs/api/polaris) · the web components, organised by surface
- [Shopify app design guidelines](https://shopify.dev/docs/apps/design) · how Shopify expects apps to look and behave in the admin
- [Built for Shopify requirements](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements) · the design and integration bar for the badge
- [Polaris React on GitHub](https://github.com/Shopify/polaris) · the archive notice, migration pointer and licence terms

## Related

- `domains/online-shop.md` · the merchants Shopify apps serve
- `areas/parts/admin-back-office.md` · most Shopify apps are admin tools
- `areas/platforms/web-desktop.md` · the admin as a web app
- `areas/practices/accessibility.md` · the contrast and keyboard bar
- `areas/design-systems/your-own-design-system.md` · for the app maker's own site and standalone views
