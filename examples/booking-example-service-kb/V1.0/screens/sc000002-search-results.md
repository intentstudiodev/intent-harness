---
standard: IntentFormat/1.2
type: screen
id: SC000002
name: Search results
status: In design
feature: FT000001
---
# Search results · #SC000002
> ⚙ #SC000002SGV1.0 · V1.0 in-progress

## Description
Lists the stays that match the search as cards with photo, nightly price, rating and distance; filters narrow the list. Choosing a card opens the Listing. Primary action: open a listing.
**R1 · GWT**
Given a search with dates
When results are shown
Then every card shows the total for those dates, not only the nightly price

## Why
Comparison happens here; price and rating must be readable at a glance on a phone.

## Rules
- [#RL000006 Platform fee shown before payment](../rules/rl000006-platform-fee-shown-before-payment.md)

## Components
1. [~ Compact search bar] — edits place, dates, guests in place — fixed
2. [~ Filter bar] — price range, type, amenities — guidance
3. [~ Listing card] — one per result — fixed
4. [~ Results map] — web only — guidance
5. [~ Empty results message] — suggests widening dates or place — guidance

## ⚙ Reached from
- [#SH000001 Guest web shell](../shells/sh000001-guest-web-shell.md) · kind: link
