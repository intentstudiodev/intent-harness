---
standard: IntentFormat/1.2
type: screen
id: SC000012
name: Listing editor
status: In design
state: Signed in
feature: FT000011
users: Owner
shell: SH000003
---
# Listing editor · #SC000012
> ⚙ #SC000012SIV1.0 · V1.0 in-progress

## Description
Where an Owner creates or edits one listing: details, photos, pricing in the listing's currency, house rules, and the publish state. Primary action: Save, or Publish for a draft. Outcome: a listing that is live or saved as a draft.
**R1 · GWT**
Given a published listing with an upcoming booking
When the Owner tries to unpublish it
Then the editor refuses, names the booking and offers to block future dates instead

## Why
One editor for create and edit avoids two forms drifting apart.

## Rules
- [#RL000005 Identity verified before booking or publishing](../rules/rl000005-identity-verified-before-booking-or-publishing.md)
- [#RL000007 No unpublishing with upcoming bookings](../rules/rl000007-no-unpublishing-with-upcoming-bookings.md)

## Components
1. [~ Listing details form] — title, description, type, capacity — fixed
2. [~ Photo manager] — upload, order, cover — fixed
3. [~ Pricing form] — nightly price, cleaning fee, currency — fixed
4. [~ House rules form] — guidance
5. [~ Publish toggle] — draft or live — fixed

## ⚙ Reached from
- [#SH000003 Owner area](../shells/sh000003-owner-area.md) · kind: tab

## ⚙ In user flows
- [#UF000004 Publish a listing](../userflows/uf000004-publish-a-listing.md) · at: #FS000020
- [#UF000004 Publish a listing](../userflows/uf000004-publish-a-listing.md) · at: #FS000021

## ⚙ Decisions
- [#DC000003 One currency per listing](../decisions/dc000003-one-currency-per-listing.md) · status: Decided
