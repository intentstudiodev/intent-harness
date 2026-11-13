---
kind: library
shelf: platform
name: Wearables, TV and car
fits when: the product extends to a watch (watchOS, Wear OS), a television (tvOS, Android TV and Google TV, ten-foot interfaces) or a car screen (CarPlay, Android Auto, Android Automotive OS)
related: areas/platforms/ios.md, areas/platforms/android.md, areas/parts/notifications-delivery.md, areas/practices/accessibility.md, domains/content-media.md, domains/connected-devices.md
checked: 2026-11
---
# Wearables, TV and car

Three surfaces that are rarely the whole product but often a valued extension of a phone app: the watch for a glance, the TV for watching from the sofa, the car for audio, messages and navigation while driving. Each strips the interface down hard: seconds of attention, a remote control, a driver's eyes on the road. The tension: **porting the phone app versus designing one or two moments that fit the device**.

## Questions worth asking

- Which moment belongs on this device? A watch suits a glance or a tap, a TV suits lean-back watching, a car suits listening and voice.
- Is the device companion or standalone? A watch app that needs the phone nearby and one with its own connection are different builds.
- How do people sign in on a TV or watch, where typing is painful? Codes shown on screen and confirmed on a phone are common.
- For the car, is the product in a category the platforms allow at all? Car platforms accept only some kinds of apps.
- Which platforms: Apple only, Google only, or both? The four ecosystems share little code or design.
- Who will test on real devices? Emulators miss the feel of a remote, a crown or a car head unit.

## Usual shape

### Conventions
- watch: glanceable screens, short sessions measured in seconds, one main action · often · see Apple's watchOS and Google's Wear OS guidance
- watch: complications on the watch face and tiles on Wear OS · often · most use happens there, not in the app
- watch: Digital Crown or rotating bezel for scrolling, round and small screens · often
- watch: notifications mirrored from the phone, with quick replies and actions · often · often the only part people use
- TV: focus-based navigation with a remote (D-pad, or the Siri Remote's touch surface) · often · every element needs a clear focused state
- TV: ten-foot layout with large type, generous spacing and edge safe zones · often · read from a sofa a few metres away
- TV: rows of content to browse, with playback as the main task · often · media apps dominate
- TV: sign-in through a code or QR shown on screen and completed on a phone · often · on-screen keyboards with a remote are slow
- TV: back on the remote returns one level, and from the home screen it leaves the app · often
- car: templates supplied by the platform rather than custom screens · often · CarPlay and Android Auto both work this way
- car: limited categories such as audio, messaging and calling, navigation, charging, parking, points of interest, weather · often · the list differs by platform
- car: video and games only while parked · sometimes · where the platform allows them at all
- car: voice first, few taps, short lists and no long text while driving · often · driver-distraction rules shape every screen

### Store and review rules
- CarPlay apps need an entitlement requested from Apple · often · see the CarPlay developer page for the categories
- car apps on Google Play are reviewed against the car app quality guidelines for their category · often · Android Auto and Android Automotive OS
- Play lists Wear OS, TV and Auto under their own programme policies · often · on top of the general Play policies
- target API levels per form factor · often · at the time of checking (2026-11), Android 15 for Wear OS and Android Automotive OS by 31 August 2026
- watch and TV apps go through the same App Store review as iPhone apps · often · the iOS rules on payments and accounts apply there too

## Choices and trade-offs

- **Companion or standalone watch app.** A companion relies on the phone for data and sign-in and is simpler; standalone works on a run without the phone but needs its own networking, sync and sign-in.
- **Notifications only or a watch app.** Rich notifications cover many products at a fraction of the cost; an app or complication pays off for timers, workouts, quick logging and controls.
- **Native TV app or casting.** A TV app gives a lean-back home on the big screen; casting from the phone (Chromecast, AirPlay) reuses the phone app and avoids remote-control navigation.
- **Car app or phone audio and Siri or Assistant intents.** For many products, good media sessions, notifications and voice integration on the phone are enough; a car app makes sense when the product is something people use while driving.

## Watch out

- The phone app shrunk onto a watch · tiny targets and long flows nobody uses on a wrist
- TV screens without a visible focus state · people cannot tell where they are with a remote
- Asking for a password on a TV · many people give up at the on-screen keyboard
- Building a car app in a category the platform does not accept · rejection after the work is done
- Text and choices that need a driver's eyes · rejection, and a real safety risk
- Testing only in emulators · the feel of a crown, a remote or a car display is different on the real thing

## Go deeper

- [Designing for watchOS, Human Interface Guidelines (Apple)](https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos) · glanceable design, complications and the Digital Crown
- [Wear OS UI design (Android Developers)](https://developer.android.com/design/ui/wear) · tiles, app layouts and quality checklists for watches
- [Designing for tvOS, Human Interface Guidelines (Apple)](https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos) · focus, the remote and the ten-foot layout on Apple TV
- [Android TV UI design (Android Developers)](https://developer.android.com/design/ui/tv) · layout, components and style for TV apps
- [CarPlay (Apple Developer)](https://developer.apple.com/carplay/) · supported app types, templates and the entitlement
- [Car app quality guidelines (Android Developers)](https://developer.android.com/docs/quality-guidelines/car-app-quality) · categories, quality tiers and driver-distraction checks for Android Auto and Automotive OS

## Related

- `areas/platforms/ios.md` · the iPhone app watch, TV and CarPlay apps grow from
- `areas/platforms/android.md` · the phone app behind Wear OS, TV and Android Auto
- `areas/parts/notifications-delivery.md` · notifications are the main watch surface
- `areas/practices/accessibility.md` · large type, focus and voice
- `domains/content-media.md` · TV and car are mostly media products
- `domains/connected-devices.md` · when the watch or car talks to other hardware
