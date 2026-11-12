---
standard: IntentFormat/1.2
type: rule
id: RL000005
name: Identity verified before booking or publishing
status: Approved
---
# Identity verified before booking or publishing · #RL000005
> ⚙ #RL000005SGV1.0 · V1.0 in-progress

## Description
**R1 · EARS** If a User's identity is not verified, then the system shall refuse to send their first booking request and shall refuse to publish any listing of theirs.

## Why
Both sides are letting a stranger into a home or paying a stranger; a verified identity on both sides is the minimum trust the platform owes them.

## ⚙ Applied in
- [#SC000004 Checkout](../screens/sc000004-checkout.md)
- [#SC000010 Owner onboarding](../screens/sc000010-owner-onboarding.md)
- [#SC000012 Listing editor](../screens/sc000012-listing-editor.md)
- [#UF000001 Book a stay](../userflows/uf000001-book-a-stay.md)
- [#UF000003 Become an owner](../userflows/uf000003-become-an-owner.md)
- [#UF000003 Become an owner](../userflows/uf000003-become-an-owner.md) · at: #FS000016
- [#UF000004 Publish a listing](../userflows/uf000004-publish-a-listing.md)
- [#UF000004 Publish a listing](../userflows/uf000004-publish-a-listing.md) · at: #FS000023
