---
standard: IntentFormat/1.2
type: rule
id: RL000002
name: Free cancellation up to 48 hours
status: Approved
---
# Free cancellation up to 48 hours · #RL000002
> ⚙ #RL000002SGV1.0 · V1.0 in-progress

## Description
**R1 · EARS** If a User cancels 48 hours or more before check-in, then the system shall refund the full amount including the platform fee; later cancellations shall refund the amount minus the first night, unless the listing states stricter terms, which are shown before payment.

## Why
A single default makes the terms easy to remember; owners who need stricter terms can set them, but the user sees them before paying.

## ⚙ Applied in
- [#SC000004 Checkout](../screens/sc000004-checkout.md)
- [#SC000006 Trip detail](../screens/sc000006-trip-detail.md)
- [#UF000002 Cancel a booking](../userflows/uf000002-cancel-a-booking.md)
- [#UF000002 Cancel a booking](../userflows/uf000002-cancel-a-booking.md) · at: #FS000009
- [#EC000005 Guest no-show](../edge-cases/ec000005-guest-no-show.md)
