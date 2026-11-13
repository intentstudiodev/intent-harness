---
kind: library
shelf: domain
group: model
name: Events and ticketing
fits when: people discover events, buy or register for a place at them, and get in on the day (concerts, sports, conferences, meetups, festivals, workshops, online events)
related: domains/booking.md, domains/marketplace.md, areas/parts/payments-checkout.md, areas/parts/notifications-delivery.md, areas/practices/performance.md, areas/patterns/maps-location.md
checked: 2026-11
---
# Events and ticketing

A product where an organiser sells or gives out places at an event that happens once, at a fixed time, and people show a ticket to get in. Close to booking, but shaped by **scarcity and peaks**: a popular on-sale brings everyone at the same minute, every ticket is worth exactly as much as the event, and the day itself has to work even when the venue's network does not.

## Questions worth asking

- Who is the customer: the organiser who sells, the attendee who buys, or both? A ticketing platform serves organisers; an event app may serve one organiser's attendees.
- General admission, reserved seats, or tiers and time slots? Seat maps are a large piece of work on their own.
- How big are the peaks? A sell-out on-sale needs queues and holds; a meetup does not.
- Paid, free, or by registration and approval? Free events still need capacity and no-show handling.
- How do people get in: scanned barcode, wallet pass, name on a list, a link for online events? Scanning offline is a common need.
- Can tickets be transferred or resold, and at what price? It is a business and legal question in several countries.
- What happens if the event is cancelled, moved or goes online? It decides refund rules and the notices people get.

## Usual shape

### Roles
- attendee who buys or registers, sometimes for others · often · group bookings: one buyer, several attendees
- organiser who creates events and sees sales · often
- door staff who scan tickets · often · on phones or scanners, often with poor signal
- speaker, performer or exhibitor · sometimes · conferences and festivals
- reseller · sometimes · secondary market, inside the product or outside it

### Journeys
- discover an event: listing, search, a shared link · often
- join a queue at on-sale · sometimes · high-demand events
- pick ticket type and quantity, or seats on a map, and check out · often
- receive tickets: email, account, wallet pass · often
- transfer a ticket to a friend · sometimes
- arrive and get scanned · often
- event changes: moved, cancelled, refund · often · rare per event, frequent across many

### Screens
- event page: date, place, line-up or agenda, prices, availability · often
- ticket selection or seat map, then checkout with a timer · often
- my tickets with a scannable code · often
- organiser dashboard: sales, capacity, attendees, payouts · often
- check-in or scanning screen · often
- event-day info: schedule, map, updates · sometimes · conferences and festivals

### Rules
- capacity per ticket type and per event · often
- tickets held for a few minutes during checkout, then released · often · the same need as booking holds
- total price including mandatory fees shown up front · often · in the US, the FTC fees rule requires this for live-event tickets since May 2025
- limits per buyer and bot protection · often · in the US, the BOTS Act bans bypassing ticket sellers' purchase controls
- resale information and caps · sometimes · the UK Consumer Rights Act sets what resale listings must state; some places cap resale prices
- one valid scan per ticket, with rotating or unique codes · often · against screenshots and copies

## Choices and trade-offs

- **General admission or reserved seating.** General admission is simple to sell and to scan; reserved seats raise prices for good places and need a seat map, holds per seat and accessible-seat rules.
- **First come or queue and lottery.** First come rewards the fastest connections and bots; a virtual queue or a ballot is fairer under heavy demand and adds waiting and explanation.
- **Own ticketing or a ticketing platform.** A platform brings checkout, scanning and payouts and takes a fee per ticket; building fits a single organiser with unusual needs.
- **Open transfer or locked tickets.** Transfers help friends and fuel touting; locking tickets to names stops touts and frustrates real fans whose plans change. Controlled transfer and face-value resale sit between.
- **Online, in person or hybrid.** Online events trade scanning for links and access control; hybrid events carry both sets of problems.

## Watch out

- On-sale traffic treated as ordinary traffic · the site falls over at the moment of highest value
- Fees revealed only at checkout · now illegal for live events in the US and a common complaint elsewhere
- Check-in that needs a live connection · queues at the door when the venue network fails
- Seat maps that are not usable by keyboard or screen reader · and accessible seats that cannot be chosen online
- Cancellation and refund rules unclear until something goes wrong · disputes and chargebacks in bulk
- Ticket codes that can be copied from a screenshot · two people at the door with one ticket

## Go deeper

- [FTC: Rule on Unfair or Deceptive Fees, FAQ](https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions) · US rules on showing total prices for live-event tickets
- [FTC: Better Online Ticket Sales (BOTS) Act](https://www.ftc.gov/legal-library/browse/statutes/better-online-ticket-sales-act) · the US law against bots and circumventing ticket purchase limits
- [UK CMA: secondary ticketing websites](https://www.gov.uk/cma-cases/secondary-ticketing-websites) · UK enforcement history and recommendations for resale platforms
- [Google Wallet: event tickets](https://developers.google.com/wallet/tickets/events) · wallet passes, barcodes and NFC for entry
- [Google Search Central: event structured data](https://developers.google.com/search/docs/appearance/structured-data/event) · describing events, including cancelled, postponed and rescheduled ones, for search

## Related

- `domains/booking.md` · reservations of slots that repeat, rather than one-off events
- `domains/marketplace.md` · many organisers on one platform, or resale between fans
- `areas/parts/payments-checkout.md` · holds, fees and refunds
- `areas/parts/notifications-delivery.md` · tickets, reminders and change notices
- `areas/practices/performance.md` · surviving on-sale peaks
- `areas/patterns/maps-location.md` · venues, seat maps and directions
