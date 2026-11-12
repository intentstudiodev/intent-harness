---
standard: IntentFormat/1.2
type: screen
id: SC000006
name: Trip detail
status: In design
state: Signed in
feature: FT000002
users: User
shell: SH000002
---
# Trip detail · #SC000006
> ⚙ #SC000006SIV1.0 · V1.0 in-progress

## Description
One booking in full: status, dates, address once confirmed, what was paid, the cancellation terms with the refund the User would get now, and the way to the owner conversation. Primary action depends on status: Cancel booking before the stay, Write a review after it.
**R1 · GWT**
Given a confirmed upcoming trip
When Trip detail opens
Then it shows the refund the User gets if they cancel right now

## Why
The trip detail is where the User acts on a booking; the refund amount shown here is what makes cancellation predictable.

## Rules
- [#RL000002 Free cancellation up to 48 hours](../rules/rl000002-free-cancellation-up-to-48-hours.md)
- [#RL000004 Reviews only after a completed stay](../rules/rl000004-reviews-only-after-a-completed-stay.md)

## Components
1. [~ Trip header] — status, dates, listing — fixed
2. [~ Address and check-in details] — confirmed bookings only — guidance
3. [~ Price breakdown] — guidance
4. [~ Cancellation terms] — with the refund if cancelled now — fixed
5. [~ Message owner button] — opens Messages on this booking — guidance

## ⚙ In user flows
- [#UF000001 Book a stay](../userflows/uf000001-book-a-stay.md) · at: #FS000006
- [#UF000002 Cancel a booking](../userflows/uf000002-cancel-a-booking.md) · at: #FS000007
- [#UF000002 Cancel a booking](../userflows/uf000002-cancel-a-booking.md) · at: #FS000008
- [#UF000002 Cancel a booking](../userflows/uf000002-cancel-a-booking.md) · at: #FS000012

## ⚙ Edge cases
- [#EC000002 Owner declines a request](../edge-cases/ec000002-owner-declines-a-request.md) · severity: Medium
- [#EC000004 Owner cancels a booking](../edge-cases/ec000004-owner-cancels-a-booking.md) · severity: High
- [#EC000005 Guest no-show](../edge-cases/ec000005-guest-no-show.md) · severity: Medium
