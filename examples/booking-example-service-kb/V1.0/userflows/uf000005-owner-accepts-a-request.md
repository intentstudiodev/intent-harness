---
standard: IntentFormat/1.2
type: userflow
id: UF000005
name: Owner accepts a request
status: In design
state: Signed in
feature: FT000013
users: Owner
---
# Owner accepts a request · #UF000005
> ⚙ #UF000005SIV1.0 · V1.0 in-progress

## Description
An Owner answers a booking request from the dashboard. Success: the booking is confirmed, the held payment is captured, and both sides are told.

## Why
Owners approve requests by default, so this short flow is the heart of the owner side; it must be doable in under a minute on a phone.

## Rules
- [#RL000001 No double booking](../rules/rl000001-no-double-booking.md)
- [#RL000003 Payout released 24 hours after check-in](../rules/rl000003-payout-released-24-hours-after-check-in.md)

## Step list
1. [#FS000025 Start from a request](#fs000025)
2. [#FS000026 Review the request](#fs000026)
3. [#FS000027 Accept?](#fs000027)
4. [#FS000028 Capture the payment](#fs000028)
5. [#FS000029 Booking confirmed](#fs000029)
6. [#FS000030 Request declined](#fs000030)

## Steps
### ○ Start from a request · #FS000025
<a id="fs000025"></a>

- Entry: the Owner opens a request from the dashboard or from the notification.
- Screen: [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)

### □ Review the request · #FS000026
<a id="fs000026"></a>

- Screen: [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)

Guest, dates, guests, the Owner's earnings and the guest's note; the Owner may message the guest first.

### ◇ Accept? · #FS000027
<a id="fs000027"></a>

- Branch: Accept → [#FS000028 Capture the payment](#fs000028) · primary
- Branch: Decline → [#FS000030 Request declined](#fs000030)

### ⚡ Capture the payment · #FS000028
<a id="fs000028"></a>

- API: [~ Capture payment]

### ◎ Booking confirmed · #FS000029
<a id="fs000029"></a>

- Outcome: the booking is confirmed on both sides; the dates are closed on the calendar and the payout is scheduled.
- Screen: [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)

### ◎ Request declined · #FS000030
<a id="fs000030"></a>

- Outcome: the hold is released, the User is told, and the dates stay open.
- Screen: [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)

## ⚙ Entered from
- [#UF000001 Book a stay](uf000001-book-a-stay.md) · at: #FS000006 · as: hand-off

## ⚙ Edge cases
- [#EC000002 Owner declines a request](../edge-cases/ec000002-owner-declines-a-request.md) · at: #FS000027 · severity: Medium
- [#EC000002 Owner declines a request](../edge-cases/ec000002-owner-declines-a-request.md) · at: #FS000030 · severity: Medium

## ⚙ Decisions
- [#DC000001 Instant book off by default](../decisions/dc000001-instant-book-off-by-default.md) · status: Decided
