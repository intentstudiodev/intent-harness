---
standard: IntentFormat/1.2
type: userflow
id: UF000001
name: Book a stay
status: In design
state: Signed in
feature: FT000006
users: User
---
# Book a stay · #UF000001
> ⚙ #UF000001SIV1.0 · V1.0 in-progress

## Description
A User turns a listing with chosen dates into a paid booking request the Owner can accept. Success: the request is sent, the payment is held, and the User sees it under Trips.

## Why
Holding the payment at request time means an accepted request is a done deal; the User never pays twice and the Owner never accepts a guest who cannot pay.

## Rules
- [#RL000001 No double booking](../rules/rl000001-no-double-booking.md)
- [#RL000005 Identity verified before booking or publishing](../rules/rl000005-identity-verified-before-booking-or-publishing.md)
- [#RL000006 Platform fee shown before payment](../rules/rl000006-platform-fee-shown-before-payment.md)

## Step list
1. [#FS000001 Start from the listing](#fs000001)
2. [#FS000002 Confirm dates, price and payment](#fs000002)
3. [#FS000003 Dates still free?](#fs000003)
4. [#FS000004 Hold the payment](#fs000004)
5. [#FS000005 Payment held?](#fs000005)
6. [#FS000006 Request sent](#fs000006)

## Steps
### ○ Start from the listing · #FS000001
<a id="fs000001"></a>

- Entry: the User chooses dates and guests in the booking box and taps Request to book.
- Screen: [#SC000003 Listing](../screens/sc000003-listing.md)

### □ Confirm dates, price and payment · #FS000002
<a id="fs000002"></a>

- Screen: [#SC000004 Checkout](../screens/sc000004-checkout.md)

The User reads the price with the platform fee and the cancellation terms, picks a payment method and may add a note to the Owner.

### ◇ Dates still free? · #FS000003
<a id="fs000003"></a>

- Branch: Yes → [#FS000004 Hold the payment](#fs000004) · primary
- Branch: No → [#FS000002 Confirm dates, price and payment](#fs000002) · rule: #RL000001

### ⚡ Hold the payment · #FS000004
<a id="fs000004"></a>

- API: [~ Authorise payment]

The full amount is authorised, not captured, until the Owner answers.

### ◇ Payment held? · #FS000005
<a id="fs000005"></a>

- Branch: Yes → [#FS000006 Request sent](#fs000006) · primary
- Branch: No → [#FS000002 Confirm dates, price and payment](#fs000002)

### ◎ Request sent · #FS000006
<a id="fs000006"></a>

- Outcome: the request is with the Owner, the payment is held, and the trip shows as Requested.
- Screen: [#SC000006 Trip detail](../screens/sc000006-trip-detail.md)
- Hand-off: [#UF000005 Owner accepts a request](uf000005-owner-accepts-a-request.md)

## ⚙ Edge cases
- [#EC000001 Payment fails at checkout](../edge-cases/ec000001-payment-fails-at-checkout.md) · at: #FS000004 · severity: High
- [#EC000001 Payment fails at checkout](../edge-cases/ec000001-payment-fails-at-checkout.md) · at: #FS000005 · severity: High
- [#EC000003 Dates taken while in checkout](../edge-cases/ec000003-dates-taken-while-in-checkout.md) · at: #FS000003 · severity: Medium

## ⚙ Decisions
- [#DC000001 Instant book off by default](../decisions/dc000001-instant-book-off-by-default.md) · status: Decided
