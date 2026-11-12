---
standard: IntentFormat/1.2
type: userflow
id: UF000004
name: Publish a listing
status: In design
state: Signed in
feature: FT000011
users: Owner
---
# Publish a listing · #UF000004
> ⚙ #UF000004SIV1.0 · V1.0 in-progress

## Description
An Owner creates a listing and makes it live: description, photos and price, then availability. Success: the listing appears in search for its open dates.

## Why
A listing without photos, a price and open dates cannot be booked, so publishing checks all three before anything shows in search. [assumed]

## Rules
- [#RL000005 Identity verified before booking or publishing](../rules/rl000005-identity-verified-before-booking-or-publishing.md)

## Step list
1. [#FS000019 Start from the Owner dashboard](#fs000019)
2. [#FS000020 Describe the place](#fs000020)
3. [#FS000021 Add photos and price](#fs000021)
4. [#FS000022 Set availability](#fs000022)
5. [#FS000023 Ready to publish?](#fs000023)
6. [#FS000024 Listing live](#fs000024)

## Steps
### ○ Start from the Owner dashboard · #FS000019
<a id="fs000019"></a>

- Entry: the Owner taps Create a listing.
- Screen: [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)

### □ Describe the place · #FS000020
<a id="fs000020"></a>

- Screen: [#SC000012 Listing editor](../screens/sc000012-listing-editor.md)

### □ Add photos and price · #FS000021
<a id="fs000021"></a>

- Screen: [#SC000012 Listing editor](../screens/sc000012-listing-editor.md)

At least three photos and a nightly price in one currency.

### □ Set availability · #FS000022
<a id="fs000022"></a>

- Screen: [#SC000013 Calendar](../screens/sc000013-calendar.md)

### ◇ Ready to publish? · #FS000023
<a id="fs000023"></a>

- Branch: Yes → [#FS000024 Listing live](#fs000024) · primary
- Branch: Something missing → [#FS000020 Describe the place](#fs000020) · rule: #RL000005

### ◎ Listing live · #FS000024
<a id="fs000024"></a>

- Outcome: the listing is published and bookable for its open dates; the Owner sees it as a Guest would.
- Screen: [#SC000003 Listing](../screens/sc000003-listing.md)

## ⚙ Entered from
- [#UF000003 Become an owner](uf000003-become-an-owner.md) · at: #FS000017 · as: hand-off
