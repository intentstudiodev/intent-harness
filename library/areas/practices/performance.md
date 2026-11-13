---
kind: library
shelf: practice
name: Performance
fits when: speed matters to the people using it, which is nearly always; especially public web pages, mobile apps, slow devices or networks, and data-heavy screens
related: areas/patterns/empty-loading-error-states.md, areas/practices/offline-sync.md, areas/platforms/web-mobile.md, areas/patterns/lists-feeds.md, areas/practices/analytics-experiments.md
checked: 2026-11
---
# Performance

How fast the product is and how fast it feels: pages that show content quickly, taps that answer at once, apps that start fast and spare the battery. The tension: features, images, scripts and data each add a little weight against a budget nobody sees until it is spent, and lab tests on fast machines rarely match what real people feel on real devices.

## Questions worth asking

- Who uses it, on what devices and networks? A mid-range phone on mobile data is a different product from a developer's laptop.
- Which moments matter most: a new visitor's first page, the main working screen, search, app start, checkout? Those get measured first.
- Is ranking or store visibility at stake? Google uses Core Web Vitals in search ranking signals; Google Play can lower the visibility of apps over its Android vitals thresholds.
- Is there a performance budget (page weight, script size, start time), and who owns it? Without an owner, budgets erode release by release.
- Is data collected from real users in the field, or only from lab tests? Lab tests miss the slow devices and networks real people use.
- Which slow operations cannot be avoided (reports, AI answers, uploads), and how is the wait meant to feel? A wait that is explained and shows progress feels shorter.

## Usual shape

### Anatomy
- Core Web Vitals on the web: loading (LCP) within 2.5 s, responsiveness (INP) within 200 ms, visual stability (CLS) under 0.1, at the 75th percentile of real visits · often · Google's published thresholds
- real-user monitoring beside lab tools · often
- app metrics: start time, hangs and ANRs, crashes, memory, battery · often · in Play Console's Android vitals and Xcode's Organizer
- a performance budget checked before release · sometimes
- image and font care: modern formats, responsive sizes, lazy loading below the fold · often
- caching and a CDN for static files · often
- skeletons, progress and optimistic updates for perceived speed · often · see empty, loading and error states
- pagination or virtualised lists for long data · often

### Conventions
- under 0.1 s feels instant, under 1 s keeps the flow, beyond 10 s needs progress and a way out · often · Nielsen's three response-time limits
- skeleton screens for full-page loads, spinners for one module, progress bars for long or measurable work · often · NN/g's guidance
- space reserved for images, ads and embeds before they load · often · prevents layout shift
- heavy work kept off the main thread · often · keeps input responsive and avoids ANRs and hangs
- optimistic updates for actions that almost always succeed · sometimes · with a clear rollback when they fail

## Choices and trade-offs

- **Static, server or client rendering.** Static and server rendering show content sooner and help search; client-rendered apps feel quick once loaded and cost more up front. Many products mix: static marketing pages, server-rendered entry pages, a client-side app.
- **Native, cross-platform or web on mobile.** Native gives the most control over start time and smoothness; cross-platform saves effort with some overhead; web is cheapest to ship and depends on the browser.
- **Optimistic or confirmed updates.** Optimistic feels instant and needs undo or rollback; waiting for the server is simpler and honest about slow actions.
- **Real or perceived speed.** Making the work faster is best; when it cannot be, showing structure and progress makes waiting easier. Perceived-speed tricks on a slow core wear thin.
- **Lab or field data.** Lab tests are repeatable and catch regressions before release; field data shows real devices and networks. Teams usually need both.

## Watch out

- Testing only on fast laptops and office Wi-Fi · real users get a slower product than the team sees
- Third-party scripts (tags, chat widgets, testing tools) added without a budget · often the largest share of weight and main-thread time
- Spinners where content could be · feels slower and hides the layout
- Layout that jumps as images and ads arrive · mis-taps and lost reading place
- Fast at launch, slow at ten thousand records · data growth exposes queries and lists never tested at scale
- All initialisation done at app start · slow launches and, on Android, ANRs
- Averages instead of percentiles · the slowest quarter of users disappears from the chart

## Go deeper

- [web.dev: Web Vitals](https://web.dev/articles/vitals) · the Core Web Vitals, their thresholds and how they are measured
- [Nielsen Norman Group: response times, the three important limits](https://www.nngroup.com/articles/response-times-3-important-limits/) · how waits of 0.1, 1 and 10 seconds feel and what each needs
- [Nielsen Norman Group: skeleton screens 101](https://www.nngroup.com/articles/skeleton-screens/) · choosing between skeletons, spinners and progress bars
- [Android Developers: Android vitals](https://developer.android.com/topic/performance/vitals) · crash, ANR, battery and memory thresholds that affect Play visibility (values change; check the page)
- [Apple: improving your app's performance](https://developer.apple.com/documentation/xcode/improving-your-app-s-performance) · launch time, hangs, memory and energy on Apple platforms

## Related

- `areas/patterns/empty-loading-error-states.md` · what to show while waiting
- `areas/practices/offline-sync.md` · local data as a route to speed
- `areas/platforms/web-mobile.md` · the slow-network, small-screen case
- `areas/patterns/lists-feeds.md` · long lists, paging and virtualisation
- `areas/practices/analytics-experiments.md` · measuring the effect of speed changes
