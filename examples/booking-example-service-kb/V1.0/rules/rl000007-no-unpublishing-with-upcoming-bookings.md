---
standard: IntentFormat/1.2
type: rule
id: RL000007
name: No unpublishing with upcoming bookings
status: Approved
---
# No unpublishing with upcoming bookings · #RL000007
> ⚙ #RL000007SGV1.0 · V1.0 in-progress

## Description
**R1 · EARS** If a listing has a confirmed booking with a future check-in, then the system shall refuse to unpublish or delete it and shall offer blocking future dates instead.

## Why
A confirmed guest must always be able to find the place they booked; blocking dates gives the owner the same outcome without breaking that.

## ⚙ Applied in
- [#SC000012 Listing editor](../screens/sc000012-listing-editor.md)
