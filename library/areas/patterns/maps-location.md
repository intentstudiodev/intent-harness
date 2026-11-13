---
kind: library
shelf: pattern
name: Maps and location
fits when: places, distance or movement matter to the task (find nearby, pick an address, track a delivery, browse listings on a map, record where something happened)
related: areas/patterns/search-filters.md, areas/patterns/lists-feeds.md, areas/practices/privacy-consent.md, areas/practices/accessibility.md, areas/practices/performance.md, domains/on-demand-delivery.md
checked: 2026-11
---
# Maps and location

Maps, pins, address fields and the device's own location: finding the nearest store, choosing where a courier should go, browsing flats by area, following a delivery as it moves. A map is the most expressive way to show *where* and one of the hardest screens to use with a thumb, a keyboard or a screen reader. The tension: **a rich picture of place** versus the plain list or address that many tasks actually need, and the privacy weight of knowing where someone is.

## Questions worth asking

- Is the map the task (pick a spot, see coverage, follow a route) or decoration around a list of places? Many location tasks finish faster in a list.
- Is location needed once (to sort results), while the app is open, or in the background (tracking, geofencing)? Each is a different permission and a different conversation with the user.
- How precise does it need to be: country, city, street, metres? Platforms let people share only an approximate location.
- What happens when people say no to location? Typing a city or postcode is the usual fallback.
- How many points at once: five, five hundred, fifty thousand? Clustering and loading strategy follow from this.
- Which map provider, and what do its terms, costs and attribution rules require?
- Does anyone need it offline, or in places with poor signal?

## Usual shape

### Anatomy
- list of places with distance, sorted by nearest · often · the primary view on phones for many products
- map with pins, often beside or behind the list · often · split view on wide screens
- "use my location" next to a search field for address or postcode · often · asked at the moment it helps
- clusters that split into pins as people zoom in · often · keeps dense areas readable
- selected pin highlighted and linked to its card in the list · often
- "search this area" after panning · sometimes · instead of reloading on every move
- address autocomplete with a confirm-on-map step · sometimes · deliveries and drop-off points
- live position and ETA for something moving · sometimes · delivery and ride tracking
- drawn areas: delivery zones, coverage, boundaries · sometimes
- provider logo and legal attribution kept visible · often · a term of most map providers

### Conventions
- map and list stay in sync: filters, zoom and selection carry between them · often
- the user's location shown with accuracy, not as an exact dot when it is approximate · often
- pinch, drag and scroll to pan and zoom, with visible zoom controls for mouse and keyboard users · often
- essential information also given in text: address, distance, opening hours · often · a common expectation in public-sector accessibility guidance

## Choices and trade-offs

- **List first, map first or split view.** List first suits phones and finding one place; split view suits browsing many listings on a large screen; map first suits tasks about area and route. Research on store finders and hotel search points in different directions by context.
- **Device location or typed place.** Device location is quick and asks for trust; a typed postcode or city works everywhere and avoids a permission prompt.
- **Approximate or precise.** Approximate is enough to sort by distance and easier to grant; precise fits deliveries and navigation.
- **Hosted map platform or open data.** Large platforms give search, routing and familiar maps with usage-based pricing and terms; open map data with your own tiles costs more effort and gives control over style and cost.
- **Live updates or periodic.** Live positions feel reassuring and drain batteries and budgets; updates every few seconds or at milestones often suffice.

## Watch out

- Asking for location on first launch, before people know why · many say no and never revisit it
- Background location without a clear reason · platform reviews look closely at it, and people uninstall
- A full-width map at the top of a phone page · scrolling turns into panning and people get stuck
- Map moves that do not update the list, or the reverse · results look wrong and people stop trusting filters
- Thousands of pins rendered at once · slow phones freeze and the map is unreadable
- Location history kept longer than needed · it reveals homes, workplaces and routines; a privacy risk and often a legal question

## Go deeper

- [Apple HIG: maps](https://developer.apple.com/design/human-interface-guidelines/maps) · map styles, annotations, clustering, selection and keeping attribution visible
- [Nielsen Norman Group: maps and location finders on mobile](https://www.nngroup.com/articles/mobile-maps-locations/) · why list views often beat maps on phones and how to offer both
- [Baymard Institute: hotel and rental search layout](https://baymard.com/blog/accommodations-split-view) · the case for a split list-and-map view on desktop and its pitfalls
- [Android Developers: request location permissions](https://developer.android.com/develop/sensors-and-location/location/permissions) · foreground, background, approximate and precise access
- [Google Maps Platform: marker clustering](https://developers.google.com/maps/documentation/javascript/marker-clustering) · how clustering works for many points, in one vendor's terms
- [Scottish Government Design System: building accessible maps](https://designsystem.gov.scot/guidance/maps/building-accessible-maps) · public-sector guidance on alternatives, keyboard use and testing maps

## Related

- `areas/patterns/search-filters.md` · filtering places by distance and attributes
- `areas/patterns/lists-feeds.md` · the list that sits beside the map
- `areas/practices/privacy-consent.md` · asking for location and keeping it
- `areas/practices/accessibility.md` · text alternatives and keyboard use for maps
- `areas/practices/performance.md` · loading tiles and many markers
- `domains/on-demand-delivery.md` · addresses, zones and live tracking
