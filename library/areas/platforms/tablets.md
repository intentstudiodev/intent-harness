---
kind: library
shelf: platform
name: Tablets and foldables
fits when: the product runs on iPad, Android tablets or foldable phones, whether designed for them or carried over from a phone app
related: areas/platforms/ios.md, areas/platforms/android.md, areas/platforms/desktop-apps.md, areas/practices/responsive-layout.md, areas/design-systems/apple-hig.md, areas/design-systems/material-design.md
checked: 2026-11
---
# Tablets and foldables

Large touch screens that sit between a phone and a laptop: iPad, Android tablets, and foldables that switch from phone size to small-tablet size in one gesture. They add windows, split screens, keyboards, trackpads and pens, and both platforms now resize apps whether the app is ready or not. The tension: **a stretched phone app is cheap and looks unfinished; a tablet-grade app is a second layout to design and test**.

## Questions worth asking

- Do the users have tablets, and what do they do on them: read, watch, draw, take notes, run a shop counter, work at a desk with a keyboard? It decides whether tablets get their own layout.
- Is the tablet a shared or fixed device (a till, a kiosk, a classroom set)? Then sign-in, locking and orientation become product questions.
- Do two panes belong side by side (list and detail, editor and preview) when there is room?
- What happens when the window changes size mid-task: split view, a resized window, a foldable opening? State has to survive it.
- Are keyboard, trackpad or pen part of the job? Each adds shortcuts, hover and precision input.
- Phone app only, with tablet support as a side effect, or a product that leads with tablets?

## Usual shape

### Conventions
- layouts chosen by available window width, not by device type · often · Android window size classes (compact below 600 dp, medium to 840 dp, expanded and wider above) and Apple size classes
- list and detail side by side in wider windows · often · mail, notes, settings, admin tools
- sidebar or navigation rail in place of a bottom tab bar · often · on wide windows; iPad apps often turn tabs into a sidebar
- resizable windows and several windows of one app · often · iPadOS 26 resizes app windows freely; Android desktop windowing and split screen do the same
- both orientations, and continuity when rotating or folding · often · the task, scroll position and input survive the change
- keyboard shortcuts, hover states and a pointer that adapts · sometimes · when people pair a keyboard or trackpad
- pen input for drawing, handwriting and precise selection · sometimes · notes, design, education, forms
- drag and drop between apps and panes · sometimes
- a menu bar on iPad with the app's commands · sometimes · since iPadOS 26, built from the same commands as keyboard shortcuts
- foldable postures: half-open as a stand (tabletop) or like a book · sometimes · video, camera and reading apps use the hinge

### Store and review rules
- iPhone apps also run on iPad in a compatibility mode · often · App Store Review Guideline 2.4.1 asks that iPhone apps run on iPad whenever possible, so an iPhone-only app still needs to work there
- opting out of resizing is going away on both platforms · often · Apple deprecated the full-screen opt-out key in iPadOS 26 (TN3192); apps targeting Android 16 have orientation and resizability limits ignored on screens 600 dp and wider, games excepted
- Google Play's adaptive app quality tiers and large-screen badge · sometimes · tablet-ready apps can be featured; store listings show tablet screenshots when provided
- iPad screenshots in App Store Connect for apps that support iPad · often

## Choices and trade-offs

- **Scaled phone layout or a tablet layout.** Scaling is cheap and fine for simple, single-task apps; a proper tablet layout (panes, rail, more density) pays off when people spend real time on a tablet or when tablets are the main device.
- **Breakpoints or fully fluid.** A few breakpoints (compact, medium, expanded) keep design and testing manageable; fully fluid layouts adapt to any window but are harder to reason about.
- **Touch first or keyboard and pointer too.** Touch-only is simpler; adding shortcuts and pointer behaviour turns the tablet into a work device and approaches the desktop app (see desktop apps).
- **Tablet app or web app for fixed devices.** Kiosks and counters often run a web app in a locked browser for easy updates; a native app gives offline use, peripherals and kiosk modes.

## Watch out

- Logic based on "is this a tablet" · windows change size at any moment; decide by available space instead
- Phone layout stretched to 13 inches · line lengths, giant buttons and empty space make it look broken
- State lost on rotation, folding or resizing · people lose what they typed; it is now an everyday event, not an edge case
- Portrait-only phone design · on large screens the system rotates and resizes the app anyway
- Pop-ups and sheets sized for phones · on tablets they float in the middle of a sea of space or cover the wrong pane
- Testing without a keyboard attached · focus jumps, missing shortcuts and a keyboard that covers fields

## Go deeper

- [Designing for iPadOS, Human Interface Guidelines (Apple)](https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados) · windows, sidebars, pointer, keyboard and Apple Pencil on iPad
- [TN3192: Migrating from the deprecated UIRequiresFullScreen key (Apple)](https://developer.apple.com/documentation/technotes/tn3192-migrating-your-app-from-the-deprecated-uirequiresfullscreen-key) · what changes for apps that relied on full screen in iPadOS 26
- [Adaptive app quality guidelines (Android Developers)](https://developer.android.com/docs/quality-guidelines/large-screen-app-quality) · tiers from adaptive-ready to differentiated, with checklists and test devices
- [Use window size classes (Android Developers)](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes) · the breakpoints and why they are not device types
- [Android 16 behaviour changes (Android Developers)](https://developer.android.com/about/versions/16/behavior-changes-16) · orientation and resizability limits ignored on large screens

## Related

- `areas/platforms/ios.md` · the iPhone app the iPad version often grows from
- `areas/platforms/android.md` · phones, back navigation and Play rules
- `areas/platforms/desktop-apps.md` · when a tablet with a keyboard becomes a desk device
- `areas/practices/responsive-layout.md` · breakpoints and fluid layout
- `areas/design-systems/apple-hig.md` · iPad components such as sidebars and split views
- `areas/design-systems/material-design.md` · canonical layouts for large screens
