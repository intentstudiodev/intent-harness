---
standard: IntentFormat/1.2
type: screen
id: SC000007
name: Write a review
status: In design
state: Signed in
feature: FT000008
users: User
opens-as: Modal
shell: SH000002
---
# Write a review · #SC000007
> ⚙ #SC000007SIV1.0 · V1.0 in-progress

## Description
A short form over Trip detail after a completed stay: an overall rating, a few words, and optional photos. Primary action: Publish review. Outcome: the review appears on the Listing.
**R1 · GWT**
Given a completed trip within the review window
When the User publishes a rating and text
Then the review is shown on the Listing with the stay month, not the exact dates

## Why
A review asked right after the stay, in a small form, gets written; a long questionnaire does not. [assumed]

## Rules
- [#RL000004 Reviews only after a completed stay](../rules/rl000004-reviews-only-after-a-completed-stay.md)

## Components
1. [~ Star rating] — fixed
2. [~ Review text field] — fixed
3. [~ Photo upload] — guidance
