---
standard: IntentFormat/1.2
type: screen
id: SC000003
name: Listing
status: In design
feature: FT000005
---
# Listing · #SC000003
> ⚙ #SC000003SGV1.0 · V1.0 in-progress

## Description
Everything about one place: photos, description, amenities, house rules, the owner, reviews, and the booking box with dates, guests and the full price. Primary action: Request to book (a Guest is asked to sign in first).
**R1 · GWT**
Given a listing with dates chosen in the booking box
When the dates overlap a confirmed booking or a blocked date
Then the booking box marks them unavailable and Request to book is disabled

## Why
The listing is where trust is built or lost; photos, price and reviews on one page let the decision happen without a back-and-forth.

## Rules
- [#RL000001 No double booking](../rules/rl000001-no-double-booking.md)
- [#RL000006 Platform fee shown before payment](../rules/rl000006-platform-fee-shown-before-payment.md)

## Components
1. [~ Photo gallery] — fixed
2. [~ Listing summary] — title, place, type, capacity, rating — fixed
3. [~ Booking box] — dates, guests, price breakdown, Request to book — fixed
4. [~ Amenities list] — guidance
5. [~ House rules] — guidance
6. [~ Owner card] — name, response time, Verified badge — guidance
7. [~ Reviews list] — rating summary and reviews — fixed

## ⚙ In user flows
- [#UF000001 Book a stay](../userflows/uf000001-book-a-stay.md) · at: #FS000001
- [#UF000004 Publish a listing](../userflows/uf000004-publish-a-listing.md) · at: #FS000024

## ⚙ Decisions
- [#DC000001 Instant book off by default](../decisions/dc000001-instant-book-off-by-default.md) · status: Decided
- [#DC000002 No messages before a booking request](../decisions/dc000002-no-messages-before-a-booking-request.md) · status: Decided
