---
standard: IntentFormat/1.2
type: screen
id: SC000008
name: Messages
status: In design
state: Signed in
feature: FT000009
shell: SH000002
---
# Messages · #SC000008
> ⚙ #SC000008SIV1.0 · V1.0 in-progress

## Description
Conversations between a User and an Owner, one per booking request or trip: a list of conversations and the open thread with a composer. On the web the list and the thread sit side by side; in the app the list opens the thread. Primary action: Send.
**R1 · GWT**
Given a conversation about a booking request
When the thread opens
Then the request's dates, listing and status are shown at the top of the thread

## Why
Tying every conversation to a booking keeps context (dates, place) attached and keeps the inbox free of pre-booking enquiries.

## Rules
none

## Components
1. [~ Conversation list] — one row per booking, unread marker — fixed
2. [~ Message thread] — booking summary on top — fixed
3. [~ Composer] — text and a photo — fixed

## ⚙ Reached from
- [#SH000002 Signed-in app shell](../shells/sh000002-signed-in-app-shell.md) · kind: tab

## ⚙ Edge cases
- [#EC000006 App offline](../edge-cases/ec000006-app-offline.md) · severity: Medium

## ⚙ Decisions
- [#DC000002 No messages before a booking request](../decisions/dc000002-no-messages-before-a-booking-request.md) · status: Decided
