---
standard: IntentFormat/1.2
type: edge-case
id: EC000006
name: App offline
status: Approved
severity: Medium
---
# App offline · #EC000006
> ⚙ #EC000006SGV1.0 · V1.0 in-progress

## Description
The mobile app loses its connection while the user is doing something.
**R1 · GWT**
Given the mobile app without a connection
When a screen opens or an action is attempted
Then already loaded trips, messages and listings stay readable, an offline notice is shown, and payment, calendar changes and sending messages are disabled until the connection returns

## Why
Travellers are often offline on the way; reading what was already loaded must keep working, while paying and changing availability must not pretend to succeed. [assumed]

## Rules
none

## Where
- [#SH000002 Signed-in app shell](../shells/sh000002-signed-in-app-shell.md)
- [#SC000004 Checkout](../screens/sc000004-checkout.md)
- [#SC000013 Calendar](../screens/sc000013-calendar.md)
- [#SC000008 Messages](../screens/sc000008-messages.md)
