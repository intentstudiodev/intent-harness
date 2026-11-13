---
kind: library
shelf: platform
name: iOS (iPhone)
fits when: the product ships as an app for iPhone, native or cross-platform (SwiftUI, UIKit, React Native, Flutter), or a web app that wants to feel at home there
related: areas/design-systems/apple-hig.md, areas/platforms/android.md, areas/platforms/tablets.md, areas/parts/sign-in.md, areas/parts/subscriptions-billing.md, areas/parts/notifications-delivery.md
checked: 2026-11
---
# iOS (iPhone)

Apps for iPhone, reached almost only through the App Store and shaped by Apple's conventions and review rules. People expect an app to behave like the system around it: the same back swipe, the same sheets, the same share sheet. The tension: **what makes the product its own versus what iPhone users already know**, and a store review that can block a release over sign-in, payments or privacy.

## Questions worth asking

- Is iPhone the main platform, one of two, or a companion to the web? It decides whether the app follows iOS closely or shares one design across platforms.
- Native (SwiftUI, UIKit) or cross-platform (React Native, Flutter, a web view shell)? Each changes how "iOS" the app can feel and how fast it follows new system features.
- Does the app sell anything digital: subscriptions, credits, unlocks? App Store purchase rules apply, and they differ by storefront.
- Does it offer sign-in through Google, Facebook or similar? Apple then asks for a privacy-friendly alternative (see Store and review rules).
- Which permissions does it need (location, camera, photos, contacts, notifications, tracking), and at what moment? Each is asked once by the system; a "no" is hard to undo.
- What happens with the app closed: push notifications, widgets, Live Activities, background refresh?
- Which iOS versions are supported? Older versions limit which system features and components can be used.

## Usual shape

### Conventions
- tab bar at the bottom for top-level sections · often · three to five destinations; the default way to move around
- navigation stack with a back button top left and a swipe from the left edge to go back · often · there is no system back button, so every pushed screen needs its own way back
- sheets for focused tasks, dismissed by swiping down · often · creating, editing, picking
- large titles that shrink on scroll · often · in lists and top-level screens
- swipe actions on list rows, pull to refresh, long-press menus · often · gestures people already try
- share sheet and system pickers (photos, documents, contacts) · often · the photo picker works without asking for photo-library access
- safe areas around the notch, Dynamic Island and home indicator · often · content near the edges gets clipped or covered otherwise
- Dynamic Type, Dark Mode, VoiceOver · often · text size and dark mode are system settings many people change
- touch targets around 44 by 44 points · often · Apple's guidance; smaller targets cause mis-taps
- haptics for confirmations and selection · sometimes · subtle feedback, easy to overdo
- widgets, Live Activities, App Intents for Siri and Shortcuts · sometimes · presence outside the app; a small product of their own
- permission prompts with a purpose string written by the team · often · the system shows the prompt once; after a "no", only Settings can change it
- notification permission asked in context, or provisional (quiet) delivery first · sometimes · asking at first launch often gets declined
- the iOS 26 visual refresh (Liquid Glass) for bars, controls and sheets · often · system components pick it up; custom chrome can look dated next to them

### Store and review rules
- in-app purchase for digital goods and features · often · App Store Review Guideline 3.1.1; physical goods and real-world services use other payment methods (3.1.3(e))
- links or buttons to buy outside the app · sometimes · at the time of checking (2026-11), allowed on the US storefront and through entitlement programmes in some other regions; check guideline 3.1.1(a) for your markets
- reader apps (books, music, video, news) may skip in-app purchase for content bought elsewhere · sometimes · guideline 3.1.3(a), with an optional link entitlement
- an equivalent privacy-friendly login when third-party or social login is offered · often · guideline 4.8; Sign in with Apple is the usual way to meet it; apps with only their own account system are exempt
- account deletion inside the app when the app lets people create accounts · often · guideline 5.1.1(v); deactivation alone does not count
- app works without an account unless accounts are core to it · often · guideline 5.1.1(v)
- App Tracking Transparency prompt before tracking across other companies' apps and sites · sometimes · guideline 5.1.2
- privacy details on the store page, and privacy manifests for the app and its SDKs · often · filled in App Store Connect; reviewers compare them with what the app does
- more than a wrapped website · often · guideline 4.2; thin web-view shells are a common rejection
- built with the current Xcode and SDK · often · at the time of checking (2026-11), Xcode 26 and the iOS 26 SDK for uploads since April 2026
- TestFlight for beta testers before release · often · external testers need a light review
- in the EU, alternative app marketplaces and payment options under the Digital Markets Act · sometimes · with their own terms and fees; a business question, not only a technical one

## Choices and trade-offs

- **Native or cross-platform.** Native gets new system features first and feels most at home; cross-platform shares code with Android and the web but often lags on new components and gestures. A thin web shell is cheapest and most likely to be rejected or feel foreign.
- **Follow iOS or one look everywhere.** Following the platform lowers learning cost for iPhone users; one shared design keeps the brand and the codebase consistent. Many products share the brand and follow platform navigation and controls.
- **Tab bar or a single home with drill-down.** Tabs suit several equal sections; a single stack suits one main task. Hamburger menus on iPhone hide sections and tend to lower their use.
- **Sell in the app or on the web.** In-app purchase converts well and costs a store fee; web purchase avoids the fee where allowed but adds friction and region-by-region rules.
- **Ask permissions early or in context.** An upfront ask is simpler to build; asking at the moment of use, after a short explanation, usually gets more yeses.

## Watch out

- A custom back gesture or a screen without a back path · people get stuck; the left-edge swipe is muscle memory
- Social login without an equivalent private option · a common review rejection (guideline 4.8)
- No in-app account deletion · rejection, and in some regions a legal problem too
- A purchase button that points to the web in a storefront where that is not allowed · rejection or removal
- Asking for every permission at first launch · many people decline, and the system prompt cannot be shown again
- Fixed font sizes · the layout breaks when people use larger text, and many do
- Privacy labels that do not match the app or its SDKs · rejection, and lost trust when people notice

## Go deeper

- [App Store Review Guidelines (Apple)](https://developer.apple.com/app-store/review/guidelines/) · the rules review applies: payments, sign-in, privacy, minimum functionality, by number
- [Designing for iOS, Human Interface Guidelines (Apple)](https://developer.apple.com/design/human-interface-guidelines/designing-for-ios) · how iPhone apps are expected to look and behave, with links to each component
- [Offering account deletion in your app (Apple)](https://developer.apple.com/support/offering-account-deletion-in-your-app/) · what counts as deletion, subscriptions and regulated industries
- [App privacy details (Apple)](https://developer.apple.com/app-store/app-privacy-details/) · what to declare on the store page and how tracking is defined
- [Upcoming requirements (Apple Developer News)](https://developer.apple.com/news/upcoming-requirements/) · dated SDK, age-rating and submission requirements

## Related

- `areas/design-systems/apple-hig.md` · components, type and layout in Apple's design language
- `areas/platforms/android.md` · the neighbouring platform and what differs
- `areas/platforms/tablets.md` · iPad, windows and pointer input
- `areas/parts/sign-in.md` · Sign in with Apple, passkeys and social login
- `areas/parts/subscriptions-billing.md` · store subscriptions, trials and restores
- `areas/parts/notifications-delivery.md` · push, provisional delivery and quiet hours
