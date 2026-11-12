---
standard: IntentFormat/1.2
type: shell
id: SH000003
name: Owner area
status: In design
state: Signed in
shell-type: section
---
# Owner area · #SH000003
> ⚙ #SH000003SIV1.0 · V1.0 in-progress

## Description
The section frame for everything an Owner does: a section header that names the area and leads back to Account, a listing switcher when the Owner has more than one place, and section tabs for requests, calendar and listings. It sits inside the Signed-in app shell.

## Why
Hosting is a different job from travelling; a clear boundary keeps the guest side simple and lets owner tools grow without leaking into it. [assumed]

## Components
1. [~ Section header] — area name, back to Account — fixed
2. [~ Listing switcher] — only with two or more listings — guidance
3. [#CP000004 Section tabs](../components/cp000004-section-tabs.md) — Requests, Calendar, Listings — fixed

## Navigation
1. [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md) · kind: tab · label: Requests · in: Section tabs
2. [#SC000013 Calendar](../screens/sc000013-calendar.md) · kind: tab · in: Section tabs
3. [#SC000012 Listing editor](../screens/sc000012-listing-editor.md) · kind: tab · label: Listings · in: Section tabs — opens the editor for the selected listing, or a new one

## Places inside
✅ Work on the listing the switcher selects; never ask the Owner to pick a listing again inside the place.
✅ Declare one primary action by name (Publish, Accept, Save).
🚫 Never show payouts, requests or calendar entries of another listing than the selected one.

## ⚙ Wraps
- [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)
- [#SC000012 Listing editor](../screens/sc000012-listing-editor.md)
- [#SC000013 Calendar](../screens/sc000013-calendar.md)
