---
standard: IntentFormat/1.2
type: screen
id: SC000001
name: Home and search
status: In design
feature: FT000001
---
# Home and search · #SC000001
> ⚙ #SC000001SGV1.0 · V1.0 in-progress

## Description
The starting place on both platforms: a search form for place, dates and guests, and a few featured listings underneath for people who have no plan yet. Primary action: Search.
**R1 · GWT**
Given a Guest or User on Home and search
When they submit a place and dates
Then Search results opens with those filters applied and the dates kept

## Why
People arrive with a trip in mind or with curiosity; the form serves the first, the featured listings the second.

## Rules
none

## Components
1. [~ Search form] — place, dates, guests — fixed
2. [~ Featured listings] — a short row of listing cards — guidance
3. [~ How it works strip] — three steps for first-time visitors — guidance

## ⚙ Reached from
- [#SH000001 Guest web shell](../shells/sh000001-guest-web-shell.md) · kind: tab
- [#SH000002 Signed-in app shell](../shells/sh000002-signed-in-app-shell.md) · kind: tab
