---
standard: IntentFormat/1.2
type: edge-case
id: EC000001
name: Payment fails at checkout
status: Approved
severity: High
---
# Payment fails at checkout · #EC000001
> ⚙ #EC000001SGV1.0 · V1.0 in-progress

## Description
The payment hold is refused or times out while the User is on Checkout.
**R1 · GWT**
Given a User on Checkout who tapped Request to book
When the payment hold is refused or does not answer in time
Then the dates and note stay filled in, the reason is shown by the payment method, and the User can try another method

## Why
A refused card is routine; the User must be able to fix it without losing the dates or re-entering everything.

## Rules
none

## Where
- [#SC000004 Checkout](../screens/sc000004-checkout.md)
- [#FS000004 Hold the payment](../userflows/uf000001-book-a-stay.md#fs000004)
- [#FS000005 Payment held?](../userflows/uf000001-book-a-stay.md#fs000005)
