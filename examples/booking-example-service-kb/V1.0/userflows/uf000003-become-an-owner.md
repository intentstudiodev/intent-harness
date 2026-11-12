---
standard: IntentFormat/1.2
type: userflow
id: UF000003
name: Become an owner
status: In design
state: Signed in
feature: FT000010
users: User
---
# Become an owner · #UF000003
> ⚙ #UF000003SIV1.0 · V1.0 in-progress

## Description
A User registers as an Owner: details, a payout account and the identity check. Success: the User can open the Owner area and create a listing.

## Why
The identity check is the gate for publishing, so it belongs to onboarding and not to the first publish.

## Rules
- [#RL000005 Identity verified before booking or publishing](../rules/rl000005-identity-verified-before-booking-or-publishing.md)

## Step list
1. [#FS000013 Start from Account](#fs000013)
2. [#FS000014 Enter owner details and payout account](#fs000014)
3. [#FS000015 Verify identity](#fs000015)
4. [#FS000016 Identity verified?](#fs000016)
5. [#FS000017 Owner registered](#fs000017)
6. [#FS000018 Verification pending](#fs000018)

## Steps
### ○ Start from Account · #FS000013
<a id="fs000013"></a>

- Entry: the User taps Become an owner on Account.
- Screen: [#SC000009 Account](../screens/sc000009-account.md)

### □ Enter owner details and payout account · #FS000014
<a id="fs000014"></a>

- Screen: [#SC000010 Owner onboarding](../screens/sc000010-owner-onboarding.md)

### □ Verify identity · #FS000015
<a id="fs000015"></a>

- Screen: [#SC000010 Owner onboarding](../screens/sc000010-owner-onboarding.md)

The User photographs an identity document and takes a selfie; the verification provider answers within minutes, sometimes hours.

### ◇ Identity verified? · #FS000016
<a id="fs000016"></a>

- Branch: Yes → [#FS000017 Owner registered](#fs000017) · primary · rule: #RL000005
- Branch: Not yet → [#FS000018 Verification pending](#fs000018)

### ◎ Owner registered · #FS000017
<a id="fs000017"></a>

- Outcome: the User is an Owner; the Owner area opens on an empty dashboard with Create a listing.
- Screen: [#SC000011 Owner dashboard](../screens/sc000011-owner-dashboard.md)
- Hand-off: [#UF000004 Publish a listing](uf000004-publish-a-listing.md)

### ◎ Verification pending · #FS000018
<a id="fs000018"></a>

- Outcome: onboarding is saved; the User is emailed when the check completes and can return to the same place.
- Screen: [#SC000010 Owner onboarding](../screens/sc000010-owner-onboarding.md)
