---
standard: IntentFormat/1.2
type: screen
id: SC000010
name: Owner onboarding
status: In design
state: Signed in
feature: FT000010
users: User
shell: SH000002
---
# Owner onboarding · #SC000010
> ⚙ #SC000010SIV1.0 · V1.0 in-progress

## Description
Turns a User into an Owner in three parts on one page: owner details, a payout account, and the identity check through the verification provider. Primary action: Continue, then Finish. Outcome: an Owner who can create a listing.
**R1 · GWT**
Given a User who started onboarding
When the identity check is still pending
Then they can leave and come back; the page resumes at the check with its status

## Why
The identity check is the one step owners cannot skip, so it sits inside onboarding rather than appearing as a surprise at publish time.

## Rules
- [#RL000005 Identity verified before booking or publishing](../rules/rl000005-identity-verified-before-booking-or-publishing.md)

## Components
1. [~ Owner details form] — legal name, address, phone — fixed
2. [~ Payout account form] — bank account for payouts — fixed
3. [~ Identity check] — document and selfie through the provider — fixed

## ⚙ In user flows
- [#UF000003 Become an owner](../userflows/uf000003-become-an-owner.md) · at: #FS000014
- [#UF000003 Become an owner](../userflows/uf000003-become-an-owner.md) · at: #FS000015
- [#UF000003 Become an owner](../userflows/uf000003-become-an-owner.md) · at: #FS000018
