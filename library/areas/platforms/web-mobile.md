---
kind: library
shelf: platform
name: Web on mobile
fits when: people reach the product in a phone browser, as a responsive site, a mobile web app or an installable progressive web app (PWA)
related: areas/platforms/web-desktop.md, areas/platforms/ios.md, areas/platforms/android.md, areas/practices/responsive-layout.md, areas/practices/performance.md, areas/practices/offline-sync.md
checked: 2026-11
---
# Web on mobile

The product in a phone browser: often the first contact, from a search result, a shared link or an ad, with no install. Screens are small, input is a thumb and an on-screen keyboard, networks are uneven, and the browser's own bars come and go. The tension: **reach without installing versus the depth of a native app**, with a browser that controls the edges of the screen.

## Questions worth asking

- Is the mobile web the main product, a way in before installing an app, or a fallback? It decides how much it needs to do.
- Which tasks matter on a phone? Often fewer than on desktop: check status, reply, buy, book.
- Does it need to be installable (a PWA) with an icon, offline use and push notifications? Support differs between Android and iOS browsers.
- How fast is it on a mid-range phone on a slow network? Mobile visitors leave quickly when pages are slow.
- Where do people arrive from: links in other apps, search, email? In-app browsers (social, messaging apps) behave differently from Safari and Chrome.
- Is there also a native app? Then decide what the web does and when to suggest the app.

## Usual shape

### Anatomy
- compact header with a menu button, logo and one or two actions · often
- bottom tab bar in app-like products · sometimes · easier to reach with a thumb than a top menu
- full-screen menus, bottom sheets and stacked sections in place of sidebars and wide tables · often
- sticky primary action at the bottom (buy, book, continue) · sometimes · checkout and booking flows
- install prompt or app banner · sometimes · when installing adds real value

### Conventions
- the viewport meta tag set to the device width · often · without it, phones render a shrunk desktop page
- zoom left enabled · often · disabling it harms people with low vision, and iOS ignores the setting anyway
- touch targets of at least 24 by 24 CSS pixels with spacing · often · WCAG 2.2 criterion 2.5.8 (level AA); platform guides suggest about 44 to 48
- input types that bring up the right keyboard (email, tel, number) and autocomplete hints · often · fewer typing errors
- layouts that survive the on-screen keyboard and collapsing browser bars · often · fixed bottom bars and full-height sections jump otherwise
- safe-area padding around notches and home indicators · sometimes · when content runs edge to edge
- no hover, so every hover affordance has a tap equivalent · often
- web push on iPhone only for web apps added to the Home Screen, after a user action · often · since iOS and iPadOS 16.4
- fast first load: Core Web Vitals as the usual yardstick · often · loading, responsiveness and layout stability

## Choices and trade-offs

- **Responsive site or separate mobile experience.** One responsive codebase keeps features in sync; a separate mobile flow can be simpler and faster for the few tasks people do on phones. Most products start responsive and simplify key flows.
- **Plain web or PWA.** A PWA adds install, offline and push, which works well on Android and with more limits on iOS; a plain site is simpler to build and test.
- **Mobile web or native app.** The web wins on reach, links and no install; native wins on deep system features, background work and store presence. Wrapping the website in a store app is cheap but tends to be rejected on iOS (App Store guideline 4.2) or feel second-rate.
- **Push people to the app or let the web do the job.** App banners can raise installs; full-screen "get the app" walls tend to drive people away, and can hurt how the page ranks in search.

## Watch out

- A desktop page squeezed down · tiny text, side-scrolling and unreachable menus
- Fixed headers and footers that cover half the screen with the keyboard open · forms become unusable
- Heavy scripts and images on first load · slow phones and networks give up before the page appears
- Relying on push or offline on iPhone without the Home Screen install · it does not work there
- Forgetting in-app browsers · logins, payments and pop-ups can fail inside social and messaging apps
- Tap targets packed close together · mis-taps, especially in lists of links and form controls

## Go deeper

- [Viewport meta tag (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport) · sizing, zoom and how the on-screen keyboard resizes the page
- [Progressive Web Apps (web.dev)](https://web.dev/explore/progressive-web-apps) · installability, offline, app stores and app-like features
- [Web Push for web apps on iOS and iPadOS (WebKit)](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/) · how push works on iPhone and what it needs
- [Web Vitals (web.dev)](https://web.dev/articles/vitals) · the loading, interaction and stability metrics and their thresholds
- [Understanding target size, minimum (W3C WAI)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) · the 24-pixel rule, its exceptions and examples
- [Mobile UX study guide, Nielsen Norman Group](https://www.nngroup.com/articles/mobile-ux-study-guide/) · research on mobile reading, navigation and input

## Related

- `areas/platforms/web-desktop.md` · the same product on a big screen
- `areas/platforms/ios.md` · native iPhone apps and Safari's limits
- `areas/platforms/android.md` · native Android apps and Chrome's PWA support
- `areas/practices/responsive-layout.md` · breakpoints and fluid layouts
- `areas/practices/performance.md` · loading on slow phones and networks
- `areas/practices/offline-sync.md` · what works without a connection
