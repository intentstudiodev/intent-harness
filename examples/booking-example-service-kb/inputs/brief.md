# BookingExampleService — product brief

*Written by the product owner, 2026-11-10. One page, on purpose.*

## The idea
A marketplace where people book short stays in other people's places, and where owners can list a place without a travel agency in between. Only the client-facing side: what guests, users and owners see on the web and in the phone app. Our own back-office (support, moderation, finance) is a separate product and is not part of this.

## Who it is for
- **Guests** — people who have not signed up. They search, browse, read listings and reviews. We want them to see everything before we ask for an account.
- **Users** — signed-in travellers. They book and pay, keep track of trips, cancel when they must, message the owner about a booking, write reviews and manage their account.
- **Owners** — users who registered as owners. They go through onboarding with an identity check, create and edit listings with photos, pricing, a calendar and availability, accept or decline requests, see their bookings and their payouts.

Web first; the mobile app follows on the same core, so a rule written once holds everywhere.

## What matters
1. **No double bookings, ever.** The system guarantees it, not the owner.
2. **Honest prices.** The platform fee and the total the user pays are visible before any payment input.
3. **Owners stay in control.** They approve each request in the first release. Instant book can come later as a setting.
4. **Trust on both sides.** Identity verified before a first booking and before a listing goes live. Reviews only from completed stays.
5. **Predictable money.** Free cancellation up to 48 hours before check-in unless the listing says otherwise; owner payout released 24 hours after check-in.
6. **Fast on a phone.** Search results in about two seconds on a normal mobile connection.

## Out of scope for the first release
Admin and support tools · instant book · map-based exploring · wish lists and saved searches · experiences or anything that is not a stay · multi-property teams · syncing calendars with other marketplaces · travel insurance · group payment splitting · deleting the account in-app (support does it).

## What I don't know yet
- Whether owners will accept 24 hours as the time to answer a request, or whether it should be shorter.
- How strict the stricter cancellation terms may be, and how many tiers we allow.
- Whether we need an owner response to reviews in the first release.
- Which identity verification provider, and how often checks fail for honest people.
- Whether the mobile app's owner side ships with the guest side or later.
