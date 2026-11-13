---
kind: library
shelf: platform
name: Android (phones)
fits when: the product ships as an app for Android phones, native or cross-platform (Jetpack Compose, Views, React Native, Flutter), usually through Google Play
related: areas/design-systems/material-design.md, areas/platforms/ios.md, areas/platforms/tablets.md, areas/parts/notifications-delivery.md, areas/parts/subscriptions-billing.md, areas/practices/privacy-consent.md
checked: 2026-11
---
# Android (phones)

Apps for Android phones, mostly distributed through Google Play, running on thousands of device models from many manufacturers. The system gives more freedom than iOS (other stores, sideloading, deep integration through intents) and more variety to cope with: screen sizes, OS versions, manufacturer skins. The tension: **one app that feels right on a flagship and still works on a cheap, old, battery-saving phone**.

## Questions worth asking

- Which devices and Android versions do the users actually have? A product for low-cost phones in emerging markets and one for recent Pixels are different builds.
- Native (Compose) or cross-platform? It decides how quickly the app follows system changes such as predictive back and edge-to-edge.
- Google Play only, or also other stores or direct download? Each path has its own rules, and Google is adding developer verification for apps outside Play too.
- Does the app sell digital goods or subscriptions? Google Play's billing rules apply, with regional alternatives.
- What runs in the background: sync, location, music, uploads? Background work is restricted and some manufacturers stop it more aggressively.
- Which permissions are needed, and at what moment? Notifications have been a runtime permission since Android 13.
- Does it need to look the same as the iOS app, or feel like Android?

## Usual shape

### Conventions
- system back: a swipe from either edge or a back button · often · every screen needs a sensible back target; with predictive back the system previews where back goes
- navigation bar at the bottom for three to five destinations · often · a navigation rail or drawer on wider windows
- top app bar with title and actions · often
- floating action button for the main action on a screen · sometimes · when one action clearly dominates
- edge-to-edge drawing behind the status and navigation bars · often · enforced for apps targeting Android 15; the opt-out goes away when targeting Android 16
- Material 3 components and dynamic colour taken from the wallpaper · often · see Material Design
- touch targets of at least 48 by 48 dp · often · Material guidance
- intents and the share sheet for passing content to other apps · often · Android apps cooperate more openly than on iOS
- app links that open the app from a web URL · sometimes · verified per domain
- home-screen widgets · sometimes
- notification channels the user can mute one by one · often · since Android 8; one channel for everything gets the whole app muted
- runtime permissions asked in context, including one-time grants for location, camera and microphone · often · the photo picker needs no permission at all
- foreground services with a visible notification for long work · sometimes · uploads, navigation, playback

### Store and review rules
- Google Play's billing system for digital goods and subscriptions · often · Play Payments policy; physical goods and real-world services are excluded
- alternative billing or links to outside payment · sometimes · in eligible countries after enrolling in the relevant programme; check per market
- in-app path to delete the account and its data, plus a web link for deletion without reinstalling · often · Play User Data policy for apps with account creation
- Data safety form describing collection, sharing and deletion · often · filled in Play Console, shown on the store page
- target a recent API level · often · at the time of checking (2026-11), Android 16 (API 36) for new apps and updates since 31 August 2026
- closed test with at least 12 testers for 14 days before production · sometimes · new personal developer accounts
- developer verification for apps on certified devices, including apps outside Play · sometimes · starting 30 September 2026 in Brazil, Indonesia, Singapore and Thailand, wider in 2027
- permission declarations for sensitive access (background location, SMS, call log, all files) · sometimes · Play reviews the reason; many requests are refused
- no rule that mirrors Apple's login-parity requirement · often · Sign in with Google is common but not required

## Choices and trade-offs

- **Material look or shared brand look.** Material and dynamic colour feel native and come almost free with Compose; a shared brand design keeps iOS and Android aligned but needs custom components. Many products keep Android navigation and back behaviour even with a custom visual style.
- **Bottom navigation or drawer.** A bottom bar shows sections and suits frequent switching; a drawer holds many sections and hides them. Larger windows often use a rail.
- **Play only or more stores.** Play reaches most users outside China; other stores and direct downloads reach more devices but mean separate billing, updates and policies.
- **Minimum Android version.** A lower minimum reaches more phones; a higher one cuts testing and compatibility code. Teams often look at their own analytics before choosing.
- **Background work now or deferred.** Immediate work needs a foreground service and a notification; deferred work (WorkManager) is kinder to the battery but runs later than people may expect.

## Watch out

- Overriding back to show "are you sure" on every screen · it fights the system gesture and breaks predictive back
- Content under the status or navigation bar after raising the target SDK · edge-to-edge became the default, and insets need handling
- Asking for notifications at first launch · on Android 13 and later notifications are off until granted; an early "no" is sticky
- Testing only on one or two flagship phones · manufacturer skins, small screens and battery savers break things flagships rarely show
- A portrait-only, fixed-size layout · on tablets and foldables, apps targeting Android 16 are resized anyway (see tablets)
- A Data safety form that does not match the SDKs in the app · policy action and lost trust

## Go deeper

- [Android UI design for mobile (Android Developers)](https://developer.android.com/design/ui/mobile) · foundations, layout, components and patterns for phones and foldables
- [Google Play Developer Policy Center](https://play.google/developer-content-policy/) · every Play policy: payments, user data, permissions, families, store listing
- [Account deletion requirements (Play Console Help)](https://support.google.com/googleplay/android-developer/answer/13327111) · in-app and web deletion paths and the Data safety questions
- [Permissions on Android (Android Developers)](https://developer.android.com/guide/topics/permissions/overview) · install-time, runtime and special permissions, and when to ask
- [Target API level requirements (Play Console Help)](https://support.google.com/googleplay/android-developer/answer/11926878) · dated requirements per form factor
- [Android developer verification (Android Developers)](https://developer.android.com/developer-verification) · what changes for apps distributed outside Play, and when

## Related

- `areas/design-systems/material-design.md` · components, colour and type in Google's design language
- `areas/platforms/ios.md` · the neighbouring platform: no system back, stricter store rules
- `areas/platforms/tablets.md` · foldables, large screens and window size classes
- `areas/parts/notifications-delivery.md` · channels, permission and delivery
- `areas/parts/subscriptions-billing.md` · Play Billing, trials and regional alternatives
- `areas/practices/privacy-consent.md` · data declarations and consent
