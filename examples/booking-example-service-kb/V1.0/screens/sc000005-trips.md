---
standard: IntentFormat/1.2
type: screen
id: SC000005
name: Trips
status: In design
state: Signed in
feature: FT000002
users: User
shell: SH000002
---
# Trips · #SC000005
> ⚙ #SC000005SIV1.0 · V1.0 in-progress

## Description
The User's stays in two groups, upcoming and past; each card shows the place, the dates and the booking status (requested, confirmed, cancelled, completed). Choosing a card opens Trip detail. Primary action: open a trip.
**R1 · GWT**
Given a User with no trips
When Trips opens
Then an empty state with a link to Home and search is shown

## Why
After booking the User comes back to check status and dates; a list by time answers that fastest. [assumed]

## Rules
none

## Components
1. [~ Upcoming/past switch] — guidance
2. [~ Trip card] — one per booking, with status — fixed
3. [~ Empty state] — guidance

## ⚙ Reached from
- [#SH000002 Signed-in app shell](../shells/sh000002-signed-in-app-shell.md) · kind: tab
