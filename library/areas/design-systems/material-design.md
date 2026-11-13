---
kind: library
shelf: design-system
name: Material Design
fits when: the product runs on Android, is built with Jetpack Compose or Flutter, or wants a documented, themeable system with Google's look as a starting point
related: areas/platforms/android.md, areas/platforms/web-mobile.md, areas/design-systems/apple-hig.md, areas/practices/theming-dark-mode.md, areas/practices/motion.md
checked: 2026-11
---
# Material Design

Google's open-source design system: guidelines, design tokens, components and tools, currently in its third version (Material 3, "M3"), with an expressive expansion added in 2025 alongside Android 16. On Android it is the platform's own language; elsewhere it is one well-documented option among many. The tension: Material is built to be themed, yet many products ship its defaults and end up looking like every other Material app.

## Questions worth asking

- Is Android the main platform, or one of several? On Android, Material is what people expect; on iOS it can feel foreign.
- Which toolkit: Jetpack Compose, Android Views, Flutter, or the web? Support differs a lot between them.
- Will the app follow the user's wallpaper colours (dynamic colour, Android 12 and later) or keep fixed brand colours?
- How strong is the brand? Material's colour, type and shape systems take a lot of brand, but only if someone sets them.
- Material 3, the expressive additions, or an older Material 2 codebase still in use? Migration is real work.

## Usual shape

### What it gives you
- docs in parts: foundations, styles (colour, typography, shape, elevation, icons, motion), components, and develop pages per platform · often · start with styles, since components inherit from them
- colour system: key colours expanded into tonal palettes and named roles (primary, on-primary, container …) · often · contrast pairs that hold in light and dark
- dynamic colour from the user's wallpaper · sometimes · Android 12 and later, with a fixed scheme as fallback
- type scale (display, headline, title, body, label in three sizes) and shape scale · often
- named design tokens for colour, type, shape, elevation and motion · often
- components: buttons, app bars, navigation bar, rail and drawer, cards, chips, sheets, dialogs · often · with guidance on which navigation fits which screen size
- Compose Material 3 library · often · the most complete and current implementation
- Flutter's Material widgets · often · Flutter's default look
- Material Theme Builder · often · generates schemes from brand colours and exports to Compose, Flutter, web and Figma
- a Figma design kit · often
- licence: the code libraries are Apache 2.0 at the time of checking · often

### What it leaves to you
- brand expression: picking colours, fonts and shapes rather than shipping the defaults · often
- an iOS look; Material does not try to match Apple's conventions · often
- a maintained web library · sometimes · Google's Material Web components were in maintenance mode pending new maintainers at the time of checking
- product patterns beyond the component set (dashboards, complex tables, AI surfaces) · sometimes

## Choices and trade-offs

- **Defaults or a real theme.** Defaults are fast and coherent; a theme built in Theme Builder costs a day and stops the product looking generic.
- **Dynamic colour or brand colour.** Dynamic colour feels personal and native on Android; fixed colour keeps brand recognition. Some apps use dynamic colour for surfaces and keep a brand accent.
- **Material on iOS too, or platform-specific.** One Material design across platforms is cheaper (common with Flutter); iOS users may find navigation and controls unfamiliar.
- **On the web: Google's library, a community one, or none.** Google's web components were in maintenance mode; third-party React and Angular libraries implement Material, each tracking a particular version; many web products take Material's guidance and build on another system.

## Watch out

- Using Material guidance from different versions together · M2 and M3 names, colours and components differ, and screens drift apart
- Hard-coded colours instead of colour roles · dark theme and dynamic colour break, and contrast fails
- Experimental Compose APIs in core screens · they can change between releases
- A floating action button on every screen · Material reserves it for the one main action; elsewhere it adds noise
- Assuming a web Material library is maintained by Google · check who maintains it and which version it follows

## Go deeper

- [Material Design 3](https://m3.material.io/) · the guidelines: foundations, styles, components, develop pages
- [Material Design 3 in Compose (Android Developers)](https://developer.android.com/develop/ui/compose/designsystems/material3) · theming, colour roles, dynamic colour, type and shape in code
- [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) · generate a colour scheme from brand colours and export it
- [Material Web on GitHub](https://github.com/material-components/material-web) · the web components and their maintenance status

## Related

- `areas/platforms/android.md` · Android conventions and store rules
- `areas/platforms/web-mobile.md` · when Material is used for mobile web
- `areas/design-systems/apple-hig.md` · the iOS counterpart for products on both
- `areas/practices/theming-dark-mode.md` · colour roles, dark theme, dynamic colour
- `areas/practices/motion.md` · Material's motion guidance and its expressive additions
