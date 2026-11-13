---
kind: library
shelf: design-system
name: Apple Human Interface Guidelines
fits when: the product runs on iPhone, iPad, Mac, Apple Watch, Apple TV or Vision Pro, natively or as a cross-platform app that wants to feel at home there
related: areas/platforms/ios.md, areas/platforms/tablets.md, areas/platforms/desktop-apps.md, areas/platforms/wearables-tv-car.md, areas/design-systems/material-design.md
checked: 2026-11
---
# Apple Human Interface Guidelines

Apple's guidance for designing on its platforms: principles, foundations, patterns, components, inputs and platform technologies. It is less a component library than a description of how the system's own controls look and behave; the code lives in SwiftUI, UIKit and AppKit, the drawings in Apple's Figma and Sketch kits. The tension: feeling native, which people expect and the system controls give almost for free, versus a brand or a shared cross-platform codebase that wants one look everywhere.

## Questions worth asking

- Native (SwiftUI, UIKit, AppKit) or cross-platform (React Native, Flutter, web)? Native controls follow the guidance by default; cross-platform code imitates them or deliberately does not.
- Which Apple platforms, now and later? Each device has its own page and its own conventions.
- How much of the current system look (the Liquid Glass material, introduced in 2025) does the product adopt, and how much brand sits on top?
- Does the product also ship on Android or the web? It decides between following each platform and one shared look.
- Which system features matter: widgets, Live Activities, Siri and App Shortcuts, Sign in with Apple, Apple Pay? Each has its own page and often a template.
- Is accessibility planned from the start (Dynamic Type, VoiceOver, reduced motion)? System controls support it; custom ones need the work done again.

## Usual shape

### What it gives you
- docs in six parts: getting started, foundations, patterns, components, inputs, technologies · often · the "Designing for iOS" (macOS, watchOS …) pages give a platform's overall feel before the details
- foundations: colour, typography, layout, materials, icons, motion, accessibility · often · semantic system colours and text styles rather than a token file
- patterns: onboarding, search, modality, feedback, entering data, settings · often
- components with notes per platform: tab bars, toolbars, sidebars, sheets, menus, buttons · often · how the system control behaves on each device
- system controls in SwiftUI, UIKit and AppKit that already follow the guidance · often · the cheapest path to native behaviour
- UI kits for Figma and Sketch per platform, app icon templates · often · from Apple Design Resources
- SF Symbols, the SF and New York fonts, Icon Composer for layered icons · often · each download comes with its own licence terms
- templates for system technologies: Apple Pay, Sign in with Apple buttons, Live Activities, widgets · sometimes · when the product uses them
- a dated log of what changed · sometimes · guidance shifts every year with the new OS, usually in June

### What it leaves to you
- brand: colour, illustration, voice, how far to tint the system look · often
- the product's own structure and flows · often
- Android and web versions · often · outside its scope
- cross-platform tokens · sometimes · teams sharing a brand across platforms map Apple's system colours and text styles to their own tokens
- custom components beyond the system set, and their accessibility · sometimes
- licence and usage terms for the guidance itself: free to read; the kits, fonts and symbols carry Apple's own agreements · often

## Choices and trade-offs

- **System controls or custom ones.** System controls pick up accessibility, new materials and behaviour changes with each OS; custom controls give brand and freedom, and need revisiting every year.
- **Faithful to each platform or one look everywhere.** Following each platform feels right to its users and roughly doubles design work; one shared look is cheaper and can feel foreign on both. Many products share brand and content, and keep navigation and controls native.
- **Adopt the newest look early or wait.** Early adoption looks current on new OS versions; waiting keeps one design for people who stay on older versions.
- **Native or cross-platform code.** Native gets the HIG's controls directly; cross-platform frameworks offer lookalike widgets that lag behind OS changes, or a custom design system that ignores them on purpose.

## Watch out

- Reading the HIG as App Review rules · it is guidance; the App Store Review Guidelines are what is enforced, and they point to the HIG rather than require every detail
- Porting an Android or web layout unchanged · back navigation, tab bars and sheets behave differently and people notice at once
- Custom controls that ignore Dynamic Type and VoiceOver · many people change text size, and fixed layouts break for them
- Mock-ups built from last year's UI kit · spacing, materials and controls drift from what actually ships
- Apple's fonts or symbols used outside Apple platforms without reading their licence · the terms are tied to the download, not to the HIG

## Go deeper

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) · the guidance itself, by topic and by platform
- [Apple Design Resources](https://developer.apple.com/design/resources/) · UI kits per platform, fonts, SF Symbols, Icon Composer, technology templates
- [Apple Design: What's new](https://developer.apple.com/design/whats-new/) · dated log of guidance changes; worth reading after each OS release
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · what review enforces, including the design section on copycats and minimum functionality

## Related

- `areas/platforms/ios.md` · iPhone conventions and store rules
- `areas/platforms/tablets.md` · iPad layouts, pointer and multitasking
- `areas/platforms/desktop-apps.md` · Mac apps
- `areas/platforms/wearables-tv-car.md` · watchOS and tvOS
- `areas/design-systems/material-design.md` · the Android counterpart when a product ships on both
