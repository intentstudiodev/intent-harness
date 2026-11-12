---
standard: IntentFormat/1.2
type: screen
id: SC000011
name: Owner dashboard
status: In design
state: Signed in
feature: FT000013
users: Owner
shell: SH000003
---
# Owner dashboard · #SC000011
> ⚙ #SC000011SIV1.0 · V1.0 in-progress

## Description
The Owner's daily view for the selected listing: open requests to answer first, then upcoming and past bookings, then the payout summary with the next release date. Primary action: Accept on a request.
**R1 · GWT**
Given an open booking request
When the Owner dashboard opens
Then the request shows the guest, the dates, the amount the Owner earns and the time left to answer

## Why
Requests expire and payouts are what owners ask about; both belong on the first owner screen.

## Rules
- [#RL000003 Payout released 24 hours after check-in](../rules/rl000003-payout-released-24-hours-after-check-in.md)

## Components
1. [~ Request card] — one per open request, Accept and Decline — fixed
2. [~ Bookings list] — upcoming, then past — guidance
3. [~ Payout summary] — next release and history — guidance

## ⚙ Reached from
- [#SH000002 Signed-in app shell](../shells/sh000002-signed-in-app-shell.md) · kind: menu
- [#SH000003 Owner area](../shells/sh000003-owner-area.md) · kind: tab

## ⚙ In user flows
- [#UF000003 Become an owner](../userflows/uf000003-become-an-owner.md) · at: #FS000017
- [#UF000004 Publish a listing](../userflows/uf000004-publish-a-listing.md) · at: #FS000019
- [#UF000005 Owner accepts a request](../userflows/uf000005-owner-accepts-a-request.md) · at: #FS000025
- [#UF000005 Owner accepts a request](../userflows/uf000005-owner-accepts-a-request.md) · at: #FS000026
- [#UF000005 Owner accepts a request](../userflows/uf000005-owner-accepts-a-request.md) · at: #FS000029
- [#UF000005 Owner accepts a request](../userflows/uf000005-owner-accepts-a-request.md) · at: #FS000030

## ⚙ Edge cases
- [#EC000002 Owner declines a request](../edge-cases/ec000002-owner-declines-a-request.md) · severity: Medium
- [#EC000004 Owner cancels a booking](../edge-cases/ec000004-owner-cancels-a-booking.md) · severity: High
- [#EC000005 Guest no-show](../edge-cases/ec000005-guest-no-show.md) · severity: Medium
