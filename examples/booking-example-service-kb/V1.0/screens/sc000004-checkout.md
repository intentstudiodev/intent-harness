---
standard: IntentFormat/1.2
type: screen
id: SC000004
name: Checkout
status: In design
state: Signed in
feature: FT000006
users: User
shell: SH000002
---
# Checkout · #SC000004
> ⚙ #SC000004SIV1.0 · V1.0 in-progress

## Description
One page to confirm a booking request: the trip summary, the price with the platform fee, the cancellation terms that apply, the payment method and an optional note to the owner. Primary action: Request to book. Outcome: a request the owner can accept.
**R1 · GWT**
Given a User on Checkout
When the page opens
Then the platform fee and the refund terms are visible above the payment method, before any payment input

## Why
A single page keeps the price, the terms and the payment in one view, so the User agrees to all three at once.

## Rules
- [#RL000001 No double booking](../rules/rl000001-no-double-booking.md)
- [#RL000002 Free cancellation up to 48 hours](../rules/rl000002-free-cancellation-up-to-48-hours.md)
- [#RL000005 Identity verified before booking or publishing](../rules/rl000005-identity-verified-before-booking-or-publishing.md)
- [#RL000006 Platform fee shown before payment](../rules/rl000006-platform-fee-shown-before-payment.md)

## Components
1. [~ Trip summary] — listing, dates, guests — fixed
2. [~ Price breakdown] — nights, cleaning, platform fee, total — fixed
3. [~ Cancellation terms] — the terms for these dates — fixed
4. [~ Payment method form] — saved methods or a new card — fixed
5. [~ Message to owner field] — optional — guidance

## ⚙ In user flows
- [#UF000001 Book a stay](../userflows/uf000001-book-a-stay.md) · at: #FS000002

## ⚙ Edge cases
- [#EC000001 Payment fails at checkout](../edge-cases/ec000001-payment-fails-at-checkout.md) · severity: High
- [#EC000003 Dates taken while in checkout](../edge-cases/ec000003-dates-taken-while-in-checkout.md) · severity: Medium
- [#EC000006 App offline](../edge-cases/ec000006-app-offline.md) · severity: Medium

## ⚙ Decisions
- [#DC000001 Instant book off by default](../decisions/dc000001-instant-book-off-by-default.md) · status: Decided
- [#DC000003 One currency per listing](../decisions/dc000003-one-currency-per-listing.md) · status: Decided
