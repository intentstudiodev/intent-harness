---
standard: IntentFormat/1.2
type: screen
id: SC000013
name: Calendar
status: In design
state: Signed in
feature: FT000012
users: Owner
shell: SH000003
---
# Calendar · #SC000013
> ⚙ #SC000013SIV1.0 · V1.0 in-progress

## Description
A month view of the selected listing: confirmed bookings, requested dates and blocked dates in distinct styles; the Owner blocks or opens dates by selecting them. Primary action: Block dates (or Open dates for a blocked range).
**R1 · GWT**
Given a confirmed booking on some dates
When the Owner selects those dates
Then they cannot be blocked and the booking is shown instead

## Why
A calendar is how owners already think about their place; a list of date ranges would be translated back into one anyway.

## Rules
- [#RL000001 No double booking](../rules/rl000001-no-double-booking.md)

## Components
1. [~ Month grid] — bookings, requests, blocked dates — fixed
2. [~ Date block controls] — block or open the selected range — fixed
3. [~ Legend] — guidance

## ⚙ Reached from
- [#SH000003 Owner area](../shells/sh000003-owner-area.md) · kind: tab

## ⚙ In user flows
- [#UF000004 Publish a listing](../userflows/uf000004-publish-a-listing.md) · at: #FS000022

## ⚙ Edge cases
- [#EC000006 App offline](../edge-cases/ec000006-app-offline.md) · severity: Medium
