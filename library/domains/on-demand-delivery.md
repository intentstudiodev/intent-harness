---
kind: library
shelf: domain
group: model
name: On-demand delivery
fits when: someone asks for something now and a person is sent to bring it or take them (food ordering, groceries, couriers, rides), matched in real time
related: domains/marketplace.md, areas/patterns/maps-location.md, areas/parts/payments-checkout.md, areas/parts/notifications-delivery.md, domains/logistics.md
checked: 2026-11
---
# On-demand delivery

A product where a request made now is fulfilled within minutes or an hour by someone who moves: a courier with a meal, a shopper with groceries, a driver with a passenger. There are usually **three sides at once** (customer, merchant or pickup point, courier or driver) and an operator in the middle. The heart of it is **dispatch**: matching moving people to fresh requests while the promise shown to the customer (an arrival time, a price) stays believable.

## Questions worth asking

- What travels: a meal, a basket, a parcel, a person? Food goes cold, groceries get substituted, rides carry safety duties; each changes the rules.
- Who are the couriers or drivers: own staff, contractors, a partner fleet, the merchant's own people? It shapes the app, the pay model and the law that applies.
- Does the product dispatch, or does it only pass orders to merchants who deliver themselves? Owning dispatch is the hardest and most expensive part.
- One order per trip, or batched and stacked orders? Batching lowers cost and lengthens some waits.
- How is the price set: fixed fee, distance and time, or a price that rises with demand? Surge pricing is effective and much argued about, so it needs a WHY.
- What is promised and when: an estimate before ordering, a window, a live countdown? Late against a promise feels worse than slow.
- What happens when it goes wrong: an item missing, the courier cannot find the door, the merchant cancels? Most support volume lives here.
- Which cities or zones, and does each run differently? Zones often get their own fees, hours and rules.

## Usual shape

### Roles
- customer who orders or requests a ride · often · the main journey, usually on a phone
- courier or driver · often · a separate app built for one hand, glances and bad signal
- merchant or store staff · often · accept, prepare, mark ready; a tablet or a printer at the counter
- shopper who picks items in a store · sometimes · groceries; settles substitutions and out-of-stock items with the customer
- operations and support staff · often · watch zones live, reassign, refund, deactivate
- business account that orders for staff · sometimes · corporate rides and meals

### Journeys
- browse, build an order and pay, for now or for later · often · menus with options and modifiers are a large share of the work
- live tracking from accepted to delivered or dropped off · often · map, status steps and an updated arrival time
- courier accepts an offer, picks up, delivers with proof (photo, code, signature) · often
- rate, tip or report a problem after the trip, and later reorder · often · reorders are a large share of repeat use
- courier onboarding with documents, checks and payout details · often

### Screens
- store or restaurant list, menu and item detail with options, notes and allergens, or a pickup and destination picker for rides · often
- cart and checkout with fees broken down · often
- order or trip tracking with map, steps and contact buttons · often
- courier: offer card with pay, distance and time, then a step-by-step job view · often
- merchant: incoming orders queue with accept, prep time and ready · often
- operations: live map of zones, couriers and late orders · often

### Rules
- an order or trip moves through a fixed set of states (placed, accepted, preparing, picked up, delivered, cancelled) · often · every side and every message depends on them
- dispatch timed against preparation time · often · too early and couriers wait, too late and food waits
- service zones and delivery radius per merchant · often · some products also set fees and surge levels per zone and time
- masked phone numbers and in-app chat between sides · often · privacy for both customer and courier
- cancellation fees that depend on how far the job has gone · often · a business rule; record why
- an offer that expires within seconds if not accepted · often · keeps dispatch moving

## Choices and trade-offs

- **Own fleet or open marketplace of couriers.** Own staff give control over quality and hours and cost more when demand is low; independent couriers flex with demand and bring classification questions and less control.
- **Platform dispatches or merchant delivers.** Dispatching yourself controls the experience; passing orders to merchants who deliver is simpler and leaves tracking and timing to them.
- **Push offers or let couriers choose from a board.** Pushed offers are faster and easier to optimise; a job board gives couriers choice and makes coverage less predictable.
- **Fixed fees or dynamic pricing.** Fixed is easy to explain; dynamic pricing balances supply and demand and costs trust when it surprises people.
- **Exact address or a pin on the map.** Addresses are familiar; pins and notes ("blue gate, second floor") fix the last 50 metres, where many failures happen.

## Watch out

- An arrival time that is optimistic by default · every late order becomes a broken promise and a support ticket
- Treating the courier app as a smaller customer app · couriers work at speed, outdoors, with gloves and poor signal; it is its own product
- Fees revealed only at checkout · abandoned carts and complaints about hidden charges
- No path for the half-done order (merchant closed, courier stuck, customer unreachable) · operations staff fix it by hand and refunds go unrecorded
- Live location kept or shown longer than the job needs · a privacy risk for both customer and courier
- Ratings that silently decide courier access · unfair outcomes and, in some places, legal exposure; see the EU directive in Go deeper

## Go deeper

- [Baymard Institute: food delivery and takeout research](https://baymard.com/research/online-food-delivery) · usability findings on menus, item customisation, cart, checkout and reordering
- [Google Maps Platform: Fleet Engine](https://developers.google.com/maps/documentation/mobility/fleet-engine) · how a mapping vendor models on-demand trips, scheduled deliveries, vehicles and the customer's tracking view
- [H3 hexagonal geospatial index](https://h3geo.org/docs/) · the open-source grid built at a ride company for zones, demand heatmaps and nearby searches
- [Apple Human Interface Guidelines: Live Activities](https://developer.apple.com/design/human-interface-guidelines/live-activities) · showing a delivery or ride in progress on the Lock Screen and Dynamic Island
- [EU Platform Work Directive (EU) 2024/2831](https://eur-lex.europa.eu/eli/dir/2024/2831/oj) · EU: presumption of employment, transparency and human review of automated decisions about platform workers; member states transpose it by 2 December 2026. Ask a lawyer how your country applies it; other places (for example US states) have their own classification rules

## Related

- `domains/marketplace.md` · the two- or three-sided model underneath
- `areas/patterns/maps-location.md` · pickers, live maps and arrival estimates
- `areas/parts/payments-checkout.md` · fees, tips, holds and refunds
- `areas/parts/notifications-delivery.md` · status updates as the order moves
- `domains/logistics.md` · scheduled and long-distance delivery rather than minutes-away
- `areas/practices/offline-sync.md` · couriers losing signal mid-job
