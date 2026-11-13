---
kind: library
shelf: domain
group: sector
name: Logistics
fits when: the product moves or stores goods between businesses or to customers (freight, shipping, warehousing, fleet and transport management, parcel tracking, customs, supply chain visibility)
related: domains/on-demand-delivery.md, domains/connected-devices.md, areas/patterns/maps-location.md, areas/practices/offline-sync.md, areas/parts/integrations-webhooks.md, areas/parts/import-export.md, areas/patterns/tables-data-grids.md
checked: 2026-11
---
# Logistics

Products that move and store goods: freight booking and forwarding, transport and fleet management, warehouse systems, parcel tracking, customs filing, supply chain visibility. The tension at its heart: **a shipment is one thing to the customer and dozens of hand-offs between companies, systems and countries**, each with its own codes and paperwork; the product promises a clear status over a chain it does not control.

## Questions worth asking

- Which part of the chain is it: shipper, carrier, forwarder, warehouse, marketplace between them? The same "shipment" means different things to each.
- Which modes: road, sea, air, rail, parcel, or several? Each has its own documents, units and timing.
- Does it cross borders? Customs declarations, advance cargo data and duties appear, and who files them is a contract question.
- Are dangerous or controlled goods involved (batteries, chemicals, food, medicine)? Separate rules govern packing, labels and carriers.
- Who uses it in the field: drivers, warehouse staff with scanners, dock workers? Gloves, sunlight, poor signal and shift work shape the screens.
- Which identifiers are already in use: GS1 barcodes, container numbers, carrier tracking numbers, the customer's own references? Reusing them avoids a second set of codes to reconcile.
- Who is liable for loss, damage and delay, and under which terms? Incoterms and carriage conventions decide who pays and when risk passes.

## Usual shape

### Roles
- shipper or customer · often · books, tracks, pays, claims
- dispatcher or planner · often · assigns loads, routes, slots
- driver or courier · often · works from a phone or handheld, often offline
- warehouse operative · often · receives, stores, picks, packs with a scanner
- carrier or subcontractor · often · a separate company with its own system
- customs broker or compliance team · sometimes · declarations, holds, documents
- consignee · often · receives, signs, reports damage

### Journeys
- quote and book · often · rates by weight, volume, lane and service level
- plan and dispatch · often · loads, routes, time windows, vehicle limits
- track with events and estimated arrival · often · the screen most people see
- proof of pickup and delivery · often · signature, photo, scan, location
- exceptions: delay, damage, failed delivery, customs hold · often · where the product earns trust
- invoicing, reconciliation, claims and returns · often · often months after delivery; returns run in reverse with their own rules

### Screens
- shipment list with status and filters · often · see tables and data grids
- shipment timeline of events · often
- dispatch board, sometimes with a map of vehicles or shipments · often
- scanner screens for receiving and picking · sometimes · large targets, sound and vibration feedback
- documents per shipment: labels, waybills, customs papers · often

### Rules
- drivers' hours and rest periods · often · EU Regulation 561/2006 with tachographs; US hours-of-service rules with electronic logging devices
- advance cargo data before goods enter · sometimes · EU Import Control System 2 (ICS2); similar schemes in the US and UK
- dangerous goods classification, packing and labels · sometimes · IATA rules for air, ADR for road in Europe, the IMDG Code for sea
- trade terms that set who pays and where risk passes · often · Incoterms 2020 (ICC), the current edition at the time of checking (2026-11)
- electronic freight documents accepted by authorities · sometimes · EU eFTI Regulation, accepted from 9 July 2027
- cold chain and product traceability · sometimes · food and medicine rules require temperature and lot records

## Choices and trade-offs

- **Own fleet or network of carriers.** Own fleet gives control over service and data; a carrier network scales and leaves the product depending on others' events and data quality.
- **Event feed or estimated status.** Real scan and GPS events are honest and patchy; predicted arrival times are smooth and wrong at the moments that matter. Many products show both and say which is which.
- **Integrate or let people upload.** EDI and APIs to carriers and customers bring reliable data at high setup cost; spreadsheets and portals are quick to start and keep people re-typing.
- **Native handheld app or web.** Native apps handle scanners, cameras and offline work well; web apps deploy easily to mixed devices and struggle without signal.

## Watch out

- One status field for a multi-leg shipment · "in transit" for three weeks says nothing; model legs and events
- Time zones and local times at each stop · arrival windows and driver hours break across zones
- Units and codes mixed silently (kg and lb, pallets and cartons, local and UN location codes) · billing and capacity errors
- Field apps that need a connection · drivers and warehouses lose signal daily; work that queues and syncs later fits them better
- Exceptions buried in a list · a held container or a failed delivery needs a person's attention now
- Customer and recipient data kept forever in tracking pages · addresses and phone numbers are personal data under GDPR and similar laws

## Go deeper

- [ICC: Incoterms rules](https://iccwbo.org/business-solutions/incoterms-rules/) · the trade terms that split cost and risk between seller and buyer
- [European Commission: Import Control System 2](https://taxation-customs.ec.europa.eu/customs-4/customs-security/import-control-system-2-ics2-0_en) · the advance cargo data the EU expects before goods arrive
- [European Commission: eFTI Regulation](https://transport.ec.europa.eu/transport-themes/logistics-and-multimodal-transport/efti-regulation_en) · electronic freight transport information replacing paper in the EU
- [European Commission: Driving time and rest periods](https://transport.ec.europa.eu/transport-modes/road/social-provisions/driving-time-and-rest-periods_en) · EU rules on drivers' hours and the tachograph
- [IATA: Dangerous goods](https://www.iata.org/en/programs/cargo/dgr/) · the air cargo rules for hazardous goods, including lithium batteries

## Related

- `domains/on-demand-delivery.md` · last-mile delivery to consumers in minutes or hours
- `domains/connected-devices.md` · trackers, telematics, temperature sensors
- `areas/patterns/maps-location.md` · vehicles, routes and stops on a map
- `areas/practices/offline-sync.md` · drivers and warehouses without signal
- `areas/parts/integrations-webhooks.md` · carrier APIs, EDI and tracking events
- `areas/parts/import-export.md` · bulk orders and manifests in spreadsheets
- `areas/patterns/tables-data-grids.md` · shipment lists and dispatch boards
