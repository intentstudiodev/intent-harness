---
kind: library
shelf: practice
name: Theming and dark mode
fits when: the product offers a dark appearance, follows the system's light or dark setting, lets customers brand it, or supports several visual themes
related: areas/practices/accessibility.md, areas/practices/responsive-layout.md, areas/design-systems/your-own-design-system.md, areas/patterns/settings-preferences.md, areas/patterns/charts-data-visualisation.md
checked: 2026-11
---
# Theming and dark mode

Letting one interface take on several appearances: light and dark, high contrast, a customer's brand colours, sometimes denser or larger variants. Built well, it rests on **design tokens**: named values ("surface", "text-muted", "accent") that components use instead of raw colours, so a theme is a different set of values for the same names. The tension: every theme multiplies what has to look right and stay readable, and dark mode is not light mode inverted.

## Questions worth asking

- Which themes are needed: light only, light and dark, high contrast, customer branding? Each one is a set of colours to design and test.
- Does the product follow the system setting, offer its own switch, or both? People expect the system setting to be respected, and some want to override it per app.
- Who sets brand themes: the team, or customers (white-label, workspace colours)? Customer-set colours can break contrast.
- Are colours already tokens, or hard-coded across components? Retrofitting themes onto raw hex values is most of the work.
- What content has its own colours: images, charts, code, maps, embedded documents, emails? These rarely adapt by themselves.
- Is there a platform design language to follow (Apple, Material, Fluent)? They define semantic colours that already adapt.

## Usual shape

### Anatomy
- a palette of raw values (base tokens) and semantic tokens on top ("background", "border", "danger") · often · themes swap semantic values while components use only the semantic names
- light and dark sets for every semantic token · often
- following the system preference by default (`prefers-color-scheme` on the web, the system appearance on Apple and Android) · often
- a user switch: system, light, dark · often · in settings, sometimes also in a menu
- elevation shown by lighter surfaces in dark mode rather than shadows · often · shadows barely show on dark backgrounds
- states (hover, focus, selected, disabled) defined per theme · often · they lose contrast first
- a high-contrast theme or respect for forced colours · sometimes · Windows high contrast, increased-contrast settings
- brand or workspace accent colour chosen by customers · sometimes · B2B and white-label products
- images and illustrations with dark variants · sometimes · logos and diagrams on transparent backgrounds vanish

### Conventions
- dark grey surfaces rather than pure black, and off-white text rather than pure white · often · reduces glare and halo effects; pure black is sometimes chosen for OLED battery savings
- saturated colours toned down in dark mode · often · bright accents vibrate on dark backgrounds
- contrast checked in every theme: 4.5:1 for text, 3:1 for UI parts and icons · often · WCAG 1.4.3 and 1.4.11 apply to each theme
- the theme applied before first paint · often · avoids a flash of the wrong theme on load
- tokens stored in a shared format and exported to each platform · sometimes · the Design Tokens Community Group format reached a first stable version in October 2025

## Choices and trade-offs

- **Follow the system or offer a switch.** Following the system is effortless for users and respects their choice; a switch serves people who want a different look in one app. Most products offer both, with "system" as the default.
- **Dark as default or light as default.** Research summarised by Nielsen Norman Group finds people with typical vision read small text better in light mode, while some people with low vision prefer dark. Media, coding and night-time tools often default dark; reading and forms often default light.
- **Full themes or accent only.** Letting customers set one accent colour is cheap and keeps contrast under control; full custom themes give more branding and need contrast checks or guard rails.
- **Platform semantic colours or own tokens.** Platform colours adapt automatically and feel native; own tokens give one brand across platforms and need mapping and testing on each.

## Watch out

- Inverting colours instead of designing a dark palette · shadows, images and brand colours look wrong
- Hard-coded colours in a few components · white boxes in dark mode, a very frequent theming bug
- Contrast checked in light mode only · dark mode often fails on muted text and borders
- Charts and status colours that rely on one theme · red and green shift and lose meaning on dark backgrounds
- Customer brand colours used for text or buttons without checks · unreadable labels in a customer's product
- Embedded content and emails ignoring the theme · bright white panes inside a dark app

## Go deeper

- [Apple Human Interface Guidelines: Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode) · semantic colours, materials and contrast in Apple's dark appearance
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) · following the system theme on the web, with the related `color-scheme` property
- [Design Tokens Community Group](https://www.designtokens.org/) · the shared, vendor-neutral format for tokens across tools and platforms
- [Nielsen Norman Group: dark mode vs. light mode](https://www.nngroup.com/articles/dark-mode/) · what research says about readability in each
- [W3C: Understanding non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) · the 3:1 rule for controls, borders and icons; see also [contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) for text

## Related

- `areas/practices/accessibility.md` · contrast and system settings
- `areas/practices/responsive-layout.md` · density and size variants alongside colour themes
- `areas/design-systems/your-own-design-system.md` · where tokens and themes live
- `areas/patterns/settings-preferences.md` · the appearance switch
- `areas/patterns/charts-data-visualisation.md` · chart palettes that work in both themes
