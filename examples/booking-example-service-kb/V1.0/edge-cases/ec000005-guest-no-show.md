---
standard: IntentFormat/1.2
type: edge-case
id: EC000005
name: Guest no-show
status: Idea
severity: Medium
---
# Guest no-show · #EC000005
> ⚙ #EC000005SGV1.0 · V1.0 in-progress

## Description
The guest never arrives for a confirmed stay.
**R1 · GWT**
Given a confirmed booking whose check-in time has passed
When the guest does not arrive
Then nothing changes: the payout is released on schedule and the User may still cancel, with the late terms applying

## Why
The Owner kept the dates and should be paid as agreed; the normal payout timing already covers this without a special path. [assumed]

## Rules
- [#RL000002 Free cancellation up to 48 hours](../rules/rl000002-free-cancellation-up-to-48-hours.md)
- [#RL000003 Payout released 24 hours after check-in](../rules/rl000003-payout-released-24-hours-after-check-in.md)

## Where
- [#SC000006 Trip detail](../screens/sc000006-trip-detail.md)
- [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)
