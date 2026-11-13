---
kind: library
shelf: domain
group: model
name: Booking
fits when: people reserve a time, a place or a thing ahead of using it (appointments, rooms, rentals, classes, tables, desks)
related: areas/patterns/calendars-scheduling.md, areas/parts/payments-checkout.md, areas/parts/notifications-delivery.md, domains/marketplace.md
checked: 2026-11
---
# Booking

A product where someone claims a slot in the future: an hour with a person, a night in a room, a seat in a class, a car for a weekend. The heart of it is **availability that must stay true** while many people look at the same calendar, and a promise that has to survive changes on both sides: cancellations, no-shows, moved appointments.

## Questions worth asking

- What exactly is booked: a person's time, a place, a thing, a seat in a group? It decides the whole model of availability.
- Who sets availability, and how often does it change? Fixed opening hours and a busy professional's calendar are different products.
- Does a booking need approval, or is it confirmed at once? Instant booking converts better; approval protects the provider.
- What happens on cancellation and no-show: free until when, a fee, a deposit kept? This is a business rule people argue about, so it needs a WHY.
- Is payment taken at booking, at the visit, or partly as a deposit?
- Does it sync with calendars people already use (Google, Outlook, Apple)? Double bookings start there.
- Which time zone is the truth: the provider's, the customer's, the place's?

## Usual shape

### Roles
- customer who books · often · the main journey
- provider whose time or place is booked · often · sets availability, sees the schedule
- front desk or admin who books for others · sometimes · clinics, salons, studios; needs to book on someone's behalf
- owner of several locations or staff · sometimes · one view over many calendars

### Journeys
- find a slot and book it · often · the core, measured in taps to confirm
- reschedule · often · more common than cancel; better as one step than cancel plus rebook
- cancel, with the policy shown before confirming · often
- reminders before the slot · often · the cheapest cure for no-shows
- waitlist for a full slot · sometimes · classes, popular tables
- recurring booking · sometimes · weekly lessons, standing appointments

### Screens
- availability: a calendar, a list of free slots, or both · often
- booking summary with policy and price · often
- my bookings, upcoming and past · often
- provider schedule (day and week) · often
- availability settings: hours, breaks, buffers, days off · often

### Rules
- a slot can be held for a short time during checkout, then released · often · prevents two people paying for one slot
- buffer time between bookings · sometimes · cleaning, travel, preparation
- lead time (no bookings less than N hours ahead) and horizon (not more than N weeks ahead) · often
- cancellation window and fee · often · a business rule; record why the window is what it is

## Choices and trade-offs

- **Instant or request-to-book.** Instant is faster and converts better; request-to-book lets a provider choose and suits high-trust or high-value bookings. Some products allow both per provider.
- **Slots or free time ranges.** Fixed slots (every 30 minutes) are simple to show and to sell; free ranges fit rentals and flexible services but need clear rules about minimum length.
- **Pay now, pay later, or deposit.** Paying now cuts no-shows and adds friction; a deposit sits between; paying on site is common where trust is local.
- **Own calendar or synced calendars.** Syncing removes double entry and adds a dependency: outages and permission changes in someone else's system become your support tickets.

## Watch out

- Two people booking the same slot at the same moment · it is a concurrency problem, not a UI one; it needs a hold or a lock where the data lives
- Time zones and daylight-saving changes · a booking that moves by an hour is a broken promise
- A cancellation policy shown only after paying · disputes and chargebacks follow
- Availability that ignores travel or preparation time · providers block their calendars by hand and stop trusting it
- Treating reschedule as cancel plus new booking · the customer can lose the slot and the payment link

## Go deeper

- [Designing Data-Intensive Applications, Martin Kleppmann (O'Reilly)](https://dataintensive.net/) · the meeting-room booking example of write skew: why double bookings happen and how to prevent them
- [EU Consumer Rights Directive 2011/83/EU](https://eur-lex.europa.eu/eli/dir/2011/83/oj) · Article 16: when the right to cancel within 14 days does not apply to bookings for specific dates
- [Nielsen Norman Group: date-input fields](https://www.nngroup.com/articles/date-input/) · choosing between calendars, text fields and dropdowns for dates
- [Baymard Institute research](https://baymard.com/research) · checkout usability that carries over to paying for a booking

## Related

- `areas/patterns/calendars-scheduling.md` · showing availability and picking a slot
- `areas/parts/payments-checkout.md` · deposits, holds and refunds
- `areas/parts/notifications-delivery.md` · confirmations and reminders
- `domains/marketplace.md` · when many providers are booked through one product
