---
kind: library
shelf: domain
group: sector
name: Travel and hospitality
fits when: the product sells, plans or runs trips and stays (flights, hotels, short-term rentals, tours, restaurants, transport, travel agencies, property management for hosts)
related: domains/booking.md, domains/marketplace.md, areas/parts/payments-checkout.md, areas/parts/reviews-ratings.md, areas/patterns/maps-location.md, areas/practices/localization.md, areas/practices/offline-sync.md
checked: 2026-11
---
# Travel and hospitality

Products for getting somewhere and staying there: flight and hotel search, short-term rentals, tours and activities, restaurants, trip planners, travel agencies, and the tools hosts and hotels run on. The tension at its heart: **people buy a promise far ahead, from far away, and find out whether it was kept only when they arrive**, while prices and availability change by the minute and most inventory belongs to someone else.

## Questions worth asking

- Whose inventory is sold: your own, a supplier's through an API, or many hosts on a marketplace? It decides who answers for overbooking, refunds and changes.
- Is the product the seller, an agent, or a referral? Being the merchant of record carries payment, tax and consumer-law duties that a referral does not.
- Are several services sold together (flight plus hotel, stay plus tour)? In the EU and UK that can make a package or a linked travel arrangement, with insolvency protection and liability for the whole trip.
- Which price is shown first: base or total with every mandatory fee? Several jurisdictions now require the total up front.
- What is the change and cancellation policy, and who sets it: the product, the supplier, a fare rule? It decides who carries the cost when plans change.
- Where are guests and hosts? Tourist taxes, host registration and short-term rental data rules are local.
- What happens when something goes wrong on the day: delay, overbooking, a closed property? Support at 2 a.m. in another time zone is part of the product.

## Usual shape

### Roles
- traveller or guest · often · searches, books, changes, travels; often booking for others too
- host, hotel or operator · often · sets rates and availability, handles arrivals
- supplier systems · often · airlines, channel managers, global distribution systems, behind APIs
- travel agent or corporate travel manager · sometimes · books for others under a policy
- support and operations · often · disruption, refunds, disputes, fraud

### Journeys
- search with dates, place and party · often · flexible dates and maps change everything downstream
- compare and choose · often · price, location, photos, reviews, policy
- book and pay · often · mechanics in `domains/booking.md`
- pre-trip: documents, check-in, upsells · often · reminders, travel documents, add-ons
- change, cancel, rebook · often · the costliest support journey
- in-trip help and disruption handling · sometimes · delays, missed connections, no room on arrival
- review after the stay · often · feeds the next traveller's decision

### Screens
- search results with filters, map and price sort · often
- property or offer detail: photos, amenities, policy, location · often
- price breakdown with taxes and fees · often
- trip itinerary, available offline · often
- host or hotel calendar with rates and restrictions · often
- messaging between guest and host · sometimes

### Rules
- total price with mandatory fees in the first price shown · often · the FTC Rule on Unfair or Deceptive Fees (US, short-term lodging and live events, since May 2025); EU and UK consumer law expects the full price too
- passenger rights to compensation, care and rerouting · often · EU Regulation 261/2004 and its UK copy for flights; similar EU rules for rail, bus and sea
- package travel protection and single-point liability · sometimes · EU Package Travel Directive (2015/2302) and the UK Package Travel Regulations
- short-term rental data sharing and host registration numbers · sometimes · EU Regulation 2024/1028 applies from 20 May 2026; many cities add their own rules
- no 14-day withdrawal right for date-specific accommodation and transport · often · EU Consumer Rights Directive, Article 16; the booking's own policy governs
- accessible booking for rooms and features · sometimes · ADA rules on hotel reservations (US); describe accessible features precisely

## Choices and trade-offs

- **Merchant or agent model.** Taking payment as merchant gives control over the flow and margin, and brings refunds, chargebacks and tax collection; the agency model passes payment to the supplier and leaves less to control.
- **Refundable or cheaper.** Non-refundable rates sell lower and cause the angriest support cases; flexible rates and paid flexibility add-ons sit between.
- **Live supplier lookups or cached inventory.** Live calls are accurate and slow and cost money per search; caches are fast and sometimes wrong at checkout. Most products cache search and confirm price and availability at booking.
- **Own reviews or imported.** Reviews only from verified stays are more trusted and slower to build; imported ratings fill a new product and blur accountability.

## Watch out

- A low headline price that grows at checkout · lost trust, and in the US a direct conflict with the fees rule
- Time zones and dates across the date line · a check-in date or departure time shown in the wrong zone is a missed trip
- Itineraries that need a connection to open · travellers are often offline or roaming at the moment it matters
- Disruption handled only by phone · queues explode exactly when many people need help at once
- Photos and descriptions that oversell · the gap appears on arrival, as refunds and bad reviews
- Party size, children's ages and accessibility asked too late · the result list changes and people start over

## Go deeper

- [Your Europe: Air passenger rights](https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm) · plain summary of EU rights on delay, cancellation, denied boarding and lost baggage
- [Your Europe: Package travel and linked travel arrangements](https://europa.eu/youreurope/citizens/travel/holidays/package-travel/index_en.htm) · when combining services becomes a package and what protection follows
- [FTC: The Junk Fees Rule and your business](https://www.ftc.gov/business-guidance/blog/2024/12/getting-bottom-line-ftcs-bipartisan-junk-fees-rule-your-business) · what the US rule on total-price display means for lodging and tickets
- [EU Tourism Platform: Regulation on short-term accommodation rentals](https://transition-pathways.europa.eu/tourism/legislation/eu-regulation-data-collection-and-sharing-short-term-accommodation-rentals) · what the EU short-term rental data rules ask of platforms and hosts
- [Baymard Institute: UX best practices for accommodation and tours sites](https://baymard.com/blog/travel-site-ux-best-practices) · usability findings from testing hotel and activity booking sites

## Related

- `domains/booking.md` · slots, holds, cancellations and reminders
- `domains/marketplace.md` · many hosts or suppliers in one product
- `areas/parts/payments-checkout.md` · deposits, currencies, refunds
- `areas/parts/reviews-ratings.md` · verified stays and review trust
- `areas/patterns/maps-location.md` · searching by place and showing distance
- `areas/practices/localization.md` · languages, currencies, date formats
- `areas/practices/offline-sync.md` · itineraries and tickets without a connection
