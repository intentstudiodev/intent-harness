---
standard: IntentFormat/1.2
type: userflow
id: UF000002
name: Cancel a booking
status: In design
state: Signed in
feature: FT000007
users: User
---
# Cancel a booking · #UF000002
> ⚙ #UF000002SIV1.0 · V1.0 in-progress

## Description
A User cancels an upcoming booking from Trip detail and gets the refund the terms allow. Success: the dates are free again and the refund is on its way.

## Why
Showing the refund before the confirmation is what keeps cancellations from turning into support tickets.

## Rules
- [#RL000002 Free cancellation up to 48 hours](../rules/rl000002-free-cancellation-up-to-48-hours.md)

## Step list
1. [#FS000007 Start from the trip](#fs000007)
2. [#FS000008 Review the refund and confirm](#fs000008)
3. [#FS000009 Within free cancellation?](#fs000009)
4. [#FS000010 Refund in full](#fs000010)
5. [#FS000011 Refund minus the late fee](#fs000011)
6. [#FS000012 Booking cancelled](#fs000012)

## Steps
### ○ Start from the trip · #FS000007
<a id="fs000007"></a>

- Entry: the User taps Cancel booking on an upcoming trip.
- Screen: [#SC000006 Trip detail](../screens/sc000006-trip-detail.md)

### □ Review the refund and confirm · #FS000008
<a id="fs000008"></a>

- Screen: [#SC000006 Trip detail](../screens/sc000006-trip-detail.md)

The refund for cancelling right now is shown; the User confirms in a dialog.

### ◇ Within free cancellation? · #FS000009
<a id="fs000009"></a>

- Branch: Yes → [#FS000010 Refund in full](#fs000010) · primary · rule: #RL000002
- Branch: No → [#FS000011 Refund minus the late fee](#fs000011) · rule: #RL000002

### ⚡ Refund in full · #FS000010
<a id="fs000010"></a>

- API: [~ Refund payment]

### ⚡ Refund minus the late fee · #FS000011
<a id="fs000011"></a>

- API: [~ Refund payment]

### ◎ Booking cancelled · #FS000012
<a id="fs000012"></a>

- Outcome: the trip shows as Cancelled with the refund amount; the Owner is told and the dates reopen.
- Screen: [#SC000006 Trip detail](../screens/sc000006-trip-detail.md)
