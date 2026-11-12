---
standard: IntentFormat/1.2
type: edge-case
id: EC000004
name: Owner cancels a booking
status: Idea
severity: High
---
# Owner cancels a booking · #EC000004
> ⚙ #EC000004SGV1.0 · V1.0 in-progress

## Description
The Owner cancels a confirmed booking before check-in.
**R1 · GWT**
Given a confirmed booking
When the Owner cancels it
Then the User is refunded in full including the fee, is told at once, and the Owner's calendar blocks those dates so they cannot be resold

## Why
An owner cancellation leaves a traveller without a place; the User must be made whole in full and the Owner must feel the cost. [assumed]

## Rules
- [#RL000003 Payout released 24 hours after check-in](../rules/rl000003-payout-released-24-hours-after-check-in.md)

## Where
- [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)
- [#SC000006 Trip detail](../screens/sc000006-trip-detail.md)
