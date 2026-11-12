---
standard: IntentFormat/1.2
type: decision
id: DC000001
name: Instant book off by default
status: Decided
decided: 2026-11-10
by: owner
---
# Instant book off by default · #DC000001
> ⚙ #DC000001SGV1.0 · V1.0 in-progress

## Question
Should a booking request be confirmed at once when the dates are free, or should the Owner approve each request?

## Why
A young marketplace lives on owner trust more than on booking speed; approval is what owners ask for first.

## Options
1. Instant book for every listing — fastest for users; owners lose the right to say no and churn when they get guests they did not want.
2. Owner approves each request (chosen) — slower by up to a day; owners stay in control, which is what brings them onto a new marketplace.
3. Instant book as an owner setting, off by default — more to build and explain; a good second step.

## Outcome
Owners approve each request in the first release; option 3 is parked for a later version.
## Affects
- [#FT000013 Requests and bookings](../features/ft000013-requests-and-bookings.md)
- [#UF000001 Book a stay](../userflows/uf000001-book-a-stay.md)
- [#UF000005 Owner accepts a request](../userflows/uf000005-owner-accepts-a-request.md)
- [#SC000003 Listing](../screens/sc000003-listing.md)
- [#SC000004 Checkout](../screens/sc000004-checkout.md)
