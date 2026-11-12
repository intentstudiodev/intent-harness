---
standard: IntentFormat/1.2
type: rule
id: RL000003
name: Payout released 24 hours after check-in
status: Approved
---
# Payout released 24 hours after check-in · #RL000003
> ⚙ #RL000003SGV1.0 · V1.0 in-progress

## Description
**R1 · EARS** When 24 hours have passed since the booking's check-in time, the system shall release the Owner's payout for that booking.

## Why
A day's delay lets a guest report that the place is not as described before the money moves; releasing earlier puts refunds at risk.

## ⚙ Applied in
- [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)
- [#UF000005 Owner accepts a request](../userflows/uf000005-owner-accepts-a-request.md)
- [#EC000004 Owner cancels a booking](../edge-cases/ec000004-owner-cancels-a-booking.md)
- [#EC000005 Guest no-show](../edge-cases/ec000005-guest-no-show.md)
