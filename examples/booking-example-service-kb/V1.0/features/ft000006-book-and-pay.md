---
standard: IntentFormat/1.2
type: feature
id: FT000006
name: Book and pay
status: In design
parent: FT000002
priority: High
---
# Book and pay · #FT000006
> ⚙ #FT000006SGV1.0 · V1.0 in-progress

## Description
Lets a User request a stay for chosen dates and pay for it in one pass.
**R1 · User story** As a User, I want to see the full price before I pay, so that nothing surprises me at the end.

## Why
A request without payment on file leads to owners accepting guests who never pay.

## ⚙ Screens
- [#SC000004 Checkout](../screens/sc000004-checkout.md)

## ⚙ Also uses
- [#SC000003 Listing](../screens/sc000003-listing.md) · home: #FT000005
- [#SC000006 Trip detail](../screens/sc000006-trip-detail.md) · home: #FT000002

## ⚙ User flows
- [#UF000001 Book a stay](../userflows/uf000001-book-a-stay.md)

## ⚙ Also connects
- [#UF000005 Owner accepts a request](../userflows/uf000005-owner-accepts-a-request.md) · home: #FT000013
