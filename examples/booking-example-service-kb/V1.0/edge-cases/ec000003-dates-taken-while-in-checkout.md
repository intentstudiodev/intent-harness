---
standard: IntentFormat/1.2
type: edge-case
id: EC000003
name: Dates taken while in checkout
status: Approved
severity: Medium
---
# Dates taken while in checkout · #EC000003
> ⚙ #EC000003SGV1.0 · V1.0 in-progress

## Description
Another request for the same nights was accepted while the User was on Checkout.
**R1 · GWT**
Given a User on Checkout
When the dates were taken before the payment hold
Then no payment is taken, Checkout says the dates just went, and the User is returned to the Listing with the nearest free dates suggested

## Why
The no-double-booking rule has to win even when it means disappointing someone mid-checkout; saying so clearly is the only decent handling.

## Rules
- [#RL000001 No double booking](../rules/rl000001-no-double-booking.md)

## Where
- [#SC000004 Checkout](../screens/sc000004-checkout.md)
- [#FS000003 Dates still free?](../userflows/uf000001-book-a-stay.md#fs000003)
