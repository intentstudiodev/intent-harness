---
standard: IntentFormat/1.2
type: rule
id: RL000001
name: No double booking
status: Approved
---
# No double booking · #RL000001
> ⚙ #RL000001SGV1.0 · V1.0 in-progress

## Description
**R1 · EARS** When a booking is confirmed or a date is blocked, the system shall refuse any other request for a night in that range.

## Why
Two confirmed guests for one night is the worst failure a stay marketplace can have; the system, not the owner, must make it impossible.

## ⚙ Applied in
- [#SC000003 Listing](../screens/sc000003-listing.md)
- [#SC000004 Checkout](../screens/sc000004-checkout.md)
- [#SC000013 Calendar](../screens/sc000013-calendar.md)
- [#UF000001 Book a stay](../userflows/uf000001-book-a-stay.md)
- [#UF000001 Book a stay](../userflows/uf000001-book-a-stay.md) · at: #FS000003
- [#UF000005 Owner accepts a request](../userflows/uf000005-owner-accepts-a-request.md)
- [#EC000003 Dates taken while in checkout](../edge-cases/ec000003-dates-taken-while-in-checkout.md)
