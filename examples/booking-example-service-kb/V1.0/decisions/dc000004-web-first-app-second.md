---
standard: IntentFormat/1.2
type: decision
id: DC000004
name: Web first, app second
status: Decided
decided: 2026-11-10
by: owner
---
# Web first, app second · #DC000004
> ⚙ #DC000004SGV1.0 · V1.0 in-progress

## Question
Which platform ships first, and does the second one wait for feature parity?

## Why
The first visit is nearly always a search-engine result on the web; the app earns its place only once people come back.

## Options
1. Web first, app second (chosen) — guests arrive from search engines on the web; owners can work on a laptop; the app follows with the shared core.
2. App first — strongest for repeat travellers, weakest for first visits and for owner tools.
3. Both at once — doubles the first release.

## Outcome
The web ships first with every feature; the mobile app follows on the same core, guest side first, owner side when requests and calendar are stable.
## Affects
- [#PR000001 BookingExampleService](../project.md)
- [#SH000002 Signed-in app shell](../shells/sh000002-signed-in-app-shell.md)
- [#TC000002 Mobile app framework](../tech/tc000002-mobile-app-framework.md)
