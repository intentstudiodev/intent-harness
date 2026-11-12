---
standard: IntentFormat/1.2
type: edge-case
id: EC000002
name: Owner declines a request
status: Approved
severity: Medium
---
# Owner declines a request · #EC000002
> ⚙ #EC000002SGV1.0 · V1.0 in-progress

## Description
The Owner declines, or does not answer within 24 hours.
**R1 · GWT**
Given a request the Owner declines or leaves unanswered for 24 hours
When the request closes
Then the payment hold is released, the User is told by email and in Trips, and Trip detail offers similar stays for the same dates

## Why
A declined request feels like rejection; the User should hear it quickly, get the hold released and be pointed at similar stays. [assumed]

## Rules
none

## Where
- [#FS000027 Accept?](../userflows/uf000005-owner-accepts-a-request.md#fs000027)
- [#FS000030 Request declined](../userflows/uf000005-owner-accepts-a-request.md#fs000030)
- [#SC000006 Trip detail](../screens/sc000006-trip-detail.md)
- [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)
