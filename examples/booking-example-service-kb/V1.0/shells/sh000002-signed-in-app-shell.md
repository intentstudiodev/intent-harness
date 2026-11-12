---
standard: IntentFormat/1.2
type: shell
id: SH000002
name: Signed-in app shell
status: In design
state: Signed in
shell-type: app
platform: All
---
# Signed-in app shell · #SH000002
> ⚙ #SH000002SIV1.0 · V1.0 in-progress

## Description
The frame for a signed-in User or Owner on both platforms: the same four destinations, rendered as a header with an account menu on the web and as a tab bar in the mobile app. Owners get one extra entry into the Owner area.

## Why
Web and app share one core and one mental model; only the rendering of the frame differs per platform.

## Components
1. [~ Toast] — confirmations and errors from any place

## Navigation
1. [#SC000001 Home and search](../screens/sc000001-home-and-search.md) · kind: tab · label: Explore · in: Header, Tab bar
2. [#SC000005 Trips](../screens/sc000005-trips.md) · kind: tab · in: Header, Tab bar
3. [#SC000008 Messages](../screens/sc000008-messages.md) · kind: tab · in: Header, Tab bar
4. [#SC000009 Account](../screens/sc000009-account.md) · kind: tab · in: Account menu, Tab bar
5. [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md) · kind: menu · label: Hosting · in: Account menu · platform: Web — Owners only; in the app the entry sits on Account

## Places inside
✅ Declare one primary action by name; the frame renders it at the bottom on the phone and in the content on the web.
✅ Say what happens on leave when there is unsaved input; the frame asks before navigating away.
🚫 Never show tabs, a header or a back control of your own.

## Variants
### Web · #HV000001
<a id="hv000001"></a>
platform: Web

1. [#CP000001 Header](../components/cp000001-header.md) — logo, destinations, account menu — fixed
2. [#CP000003 Account menu](../components/cp000003-account-menu.md) — unfolds from the avatar — guidance

### Mobile app · #HV000002
<a id="hv000002"></a>
platform: Mobile app

1. [#CP000002 Tab bar](../components/cp000002-tab-bar.md) — four tabs, system back gesture — fixed

## ⚙ Wraps
- [#SC000004 Checkout](../screens/sc000004-checkout.md)
- [#SC000005 Trips](../screens/sc000005-trips.md)
- [#SC000006 Trip detail](../screens/sc000006-trip-detail.md)
- [#SC000007 Write a review](../screens/sc000007-write-a-review.md)
- [#SC000008 Messages](../screens/sc000008-messages.md)
- [#SC000009 Account](../screens/sc000009-account.md)
- [#SC000010 Owner onboarding](../screens/sc000010-owner-onboarding.md)

## ⚙ Edge cases
- [#EC000006 App offline](../edge-cases/ec000006-app-offline.md) · severity: Medium

## ⚙ Decisions
- [#DC000004 Web first, app second](../decisions/dc000004-web-first-app-second.md) · status: Decided
