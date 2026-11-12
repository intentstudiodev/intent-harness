---
standard: IntentFormat/1.2
type: screen
id: SC000009
name: Account
status: In design
state: Signed in
feature: FT000003
shell: SH000002
---
# Account · #SC000009
> ⚙ #SC000009SIV1.0 · V1.0 in-progress

## Description
Who the User is on the platform: profile, email and password, payment methods, notification settings, and the entry to Become an owner (or to the Owner area once registered). Primary action: none; each row opens its setting.
**R1 · GWT**
Given a User who is not an Owner
When Account opens
Then a Become an owner call-out is shown; for an Owner the same place leads to the Owner area

## Why
Settings are visited rarely; one plain list beats a nested settings tree. [assumed]

## Rules
none

## Components
1. [~ Profile summary] — photo, name, Verified badge — guidance
2. [~ Settings list] — email, password, notifications — guidance
3. [~ Payment methods] — guidance
4. [~ Become an owner call-out] — Users only — guidance

## ⚙ Reached from
- [#SH000002 Signed-in app shell](../shells/sh000002-signed-in-app-shell.md) · kind: tab

## ⚙ In user flows
- [#UF000003 Become an owner](../userflows/uf000003-become-an-owner.md) · at: #FS000013
