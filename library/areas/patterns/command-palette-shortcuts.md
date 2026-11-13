---
kind: library
shelf: pattern
name: Command palette and keyboard shortcuts
fits when: people use the product often and for long sessions, mostly on a computer, and want to move or act without the mouse (editors, developer tools, work and admin tools, email)
related: areas/patterns/navigation.md, areas/patterns/search-filters.md, areas/patterns/modals-overlays.md, areas/practices/accessibility.md, areas/platforms/desktop-apps.md, areas/platforms/web-desktop.md
checked: 2026-11
---
# Command palette and keyboard shortcuts

Accelerators for frequent users: a box opened with a key combination where people type the name of a command or a place, and single keys or chords that do common things directly. They add nothing for a first-time visitor and save hours for someone who lives in the product. The tension: **speed for experts** versus discoverability for everyone else, plus conflicts with the browser, the system and assistive technology that already own many keys.

## Questions worth asking

- Who are the heavy users, and how many hours a day are they in the product? Accelerators pay off with repetition.
- Does the palette only run commands, or also find records, pages and settings? Mixing them is powerful and needs clear grouping.
- Which keys does the browser, the operating system or a screen reader already use? Conflicts break someone's habit.
- Should single-key shortcuts exist (j, k, e), and can people turn them off or remap them? Single keys are fast for experts and fire by accident for others.
- How will people learn shortcuts: in menus, tooltips, a help sheet, the palette itself? Shortcuts nobody discovers do not get used.
- Does it work the same on Mac, Windows and Linux, and on a web page versus a desktop app? Modifier keys and reserved shortcuts differ by platform.
- Does it run on touch devices too, or only where there is a keyboard? Without a keyboard, the palette needs another way in.

## Usual shape

### Anatomy
- palette opened with a chord (often Cmd or Ctrl plus K, or Cmd or Ctrl plus Shift plus P) · often
- text input with fuzzy matching over command names and synonyms · often
- results grouped (commands, pages, recent, records) with the shortcut shown beside each command · often · how people learn shortcuts
- recent and suggested items before typing · often
- keyboard navigation: arrows to move, Enter to run, Escape to close · often
- sub-steps for commands that need input (pick a project, then a status) · sometimes
- shortcut help sheet, often on the ? key · often
- shortcuts shown in menus and tooltips · often
- single-key shortcuts and sequences (g then i) · sometimes · email and issue trackers
- remapping and an option to turn character shortcuts off · sometimes

### Conventions
- platform-standard shortcuts kept for their usual meaning (copy, paste, undo, find, settings) · often · Apple and Microsoft both publish the standard sets
- Cmd on Mac and Ctrl on Windows and Linux shown correctly per platform · often
- shortcuts inactive while typing in a text field, except deliberate ones · often
- the palette as a combobox with a listbox, so screen readers announce results · often · per the W3C ARIA combobox pattern

## Choices and trade-offs

- **Palette, shortcuts or both.** A palette is one thing to learn and reaches every command; direct shortcuts are faster for the top few actions. Many tools start with a palette and add shortcuts for what people run most.
- **Commands only or universal search.** Commands only keeps results short and predictable; adding records and pages makes the palette the main way around and needs ranking and grouping.
- **Single keys or chords.** Single keys are fastest and easy to trigger by accident or by speech input; chords with modifiers are safer and harder to remember.
- **Fixed or remappable.** Fixed shortcuts are easy to document and support; remapping helps people with other layouts, other tools' habits and accessibility needs.
- **Context-aware or global.** Context-aware results rank what fits the current screen first; global results are the same everywhere and easier to learn.

## Watch out

- Overriding browser or system shortcuts · people lose a habit they use in every other app
- Single-character shortcuts that cannot be turned off or remapped · they fire from speech input and stray key presses; WCAG 2.1.4 addresses this
- Shortcuts that work only in some screens · people stop trusting them
- Commands available only in the palette · people who never open it cannot find them
- Names in the palette that differ from labels in the UI · searching for the visible label finds nothing
- Keyboard layouts ignored · keys like / or [ sit in different places on non-English keyboards

## Go deeper

- [Nielsen Norman Group: accelerators](https://www.nngroup.com/articles/ui-accelerators/) · why shortcuts and other accelerators matter and how to keep them discoverable
- [Visual Studio Code: command palette UX guidelines](https://code.visualstudio.com/api/ux-guidelines/command-palette) · naming, grouping and when to add commands, from a widely copied palette
- [W3C ARIA Authoring Practices: combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) · the accessible structure and keyboard behaviour behind a palette
- [W3C: Understanding WCAG 2.2 character key shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html) · why single-key shortcuts need a way to turn off or remap
- [Apple HIG: keyboards](https://developer.apple.com/design/human-interface-guidelines/keyboards) · standard shortcuts, modifier order and Full Keyboard Access on Apple platforms
- [Microsoft: keyboard accelerators](https://learn.microsoft.com/en-us/windows/apps/design/input/keyboard-accelerators) · common accelerators and how to show them on Windows

## Related

- `areas/patterns/navigation.md` · the main way around that the palette complements
- `areas/patterns/search-filters.md` · when the palette doubles as search
- `areas/patterns/modals-overlays.md` · the palette as an overlay: focus and Escape
- `areas/practices/accessibility.md` · keyboard access and screen readers
- `areas/platforms/desktop-apps.md` · menus and system shortcuts in desktop apps
- `areas/platforms/web-desktop.md` · browser shortcuts to avoid overriding
