---
kind: library
shelf: domain
group: sector
name: Real estate
fits when: the product lists, sells, rents, finances or manages property (listing portals, agency tools, rental and tenant apps, property management, mortgage and conveyancing tools)
related: domains/marketplace.md, domains/booking.md, domains/finance.md, areas/patterns/search-filters.md, areas/patterns/maps-location.md, areas/parts/files-storage.md, areas/patterns/media-upload-galleries.md
checked: 2026-11
---
# Real estate

Products around homes and buildings: listing portals, agency and broker tools, rental platforms, tenant and landlord apps, property management, mortgage and conveyancing tools. The tension at its heart: **the largest purchase or longest commitment most people make, decided from photos and a few visits**, through a chain of agents, lenders and lawyers who each hold part of the information and part of the liability.

## Questions worth asking

- Sales, lettings or both, residential or commercial? Each has different actors, timelines and law.
- Where are the properties? Real estate law is national and often regional: listing rules, tenancy law, deposits and fees all change at a border.
- Who supplies listing data: agents directly, a multiple listing service feed, owners themselves? It sets data quality, licensing terms and who is liable for errors.
- What does every listing have to disclose by law? Many places require price, energy rating, fees, known defects or material information before a viewing.
- Does the product screen tenants or buyers? Screening touches fair-housing and anti-discrimination law, credit reporting and data protection.
- Does money pass through the product: deposits, rent, holding fees? Client money often has its own protection rules.
- Does it help with anti-money-laundering checks? Agents and conveyancers are obliged parties in many jurisdictions.

## Usual shape

### Roles
- buyer or renter · often · searches, saves, enquires, views, offers or applies
- seller or landlord · often · lists, chooses offers or tenants, signs
- agent or broker · often · runs listings, viewings, negotiation; often the paying customer of the product
- property manager · sometimes · rent collection, maintenance, inspections, renewals
- lender, surveyor, conveyancer · sometimes · the parts of the chain after an offer
- tenant in residence · sometimes · pays rent, reports repairs, renews

### Journeys
- search by place, price, size and must-haves · often · saved searches and alerts carry most of the value
- view listing and book a viewing · often · viewing mechanics in `domains/booking.md`
- enquire or apply · often · lettings applications with references and checks
- offer, negotiate, accept · often · sales; slow, with many parties
- sign and pay deposit · often · digital signatures, deposit protection
- move in, report repairs, renew or leave · sometimes · the long tail of a tenancy

### Screens
- map and list search with filters, saved homes and alerts · often
- listing detail: photos, floor plan, facts, costs, location · often
- agent pipeline: listings, leads, viewings, offers · often
- application or offer status · often
- maintenance requests and property documents · sometimes

### Rules
- no discrimination in advertising, screening or terms · often · the Fair Housing Act (US: race, colour, religion, sex, national origin, familial status, disability) and equality law elsewhere
- material information on listings · often · UK National Trading Standards guidance for agents under consumer protection law
- energy rating shown in sale and rental adverts · often · EU Energy Performance of Buildings Directive, via national law
- tenancy rules on bidding, deposits and fees · often · for example in England the Renters' Rights Act (from 1 May 2026) bans accepting offers above the advertised rent
- standard mortgage cost disclosures · sometimes · TRID loan estimate and closing disclosure (US)
- customer due diligence on buyers and sellers · sometimes · AML rules for agents and conveyancers in the EU, UK and elsewhere

## Choices and trade-offs

- **Portal or agent tool.** A portal wins on inventory and traffic and depends on agents for listings; an agent tool wins on workflow and depends on agents adopting it. Products that try both often compete with their own customers.
- **Feed or direct listings.** Data feeds and standards (such as the RESO Data Dictionary in the US) bring volume and consistency, with licence terms; direct entry gives control and needs moderation.
- **Lead generation or transaction.** Selling leads is simpler; taking part in the transaction (offers, signing, deposits) earns more and brings regulation and liability.
- **Automated valuation or none.** Price estimates attract visitors and anger owners when wrong; showing ranges and sources reduces the damage.

## Watch out

- Filters or ad targeting that act as proxies for protected characteristics · discrimination can be built into an algorithm without anyone intending it
- Listings that stay live after they are let or sold · wasted viewings, and in some places misleading advertising
- Fees and total monthly cost hidden until late · renters compare on the headline rent
- Floor area, units and room counts that differ between sources · comparisons break, and disputes follow
- Tenant screening data kept longer than needed · sensitive data with little ongoing purpose
- Map pins placed at an exact address for private sellers · safety and privacy risks; approximate areas are common

## Go deeper

- [HUD: Housing discrimination under the Fair Housing Act](https://www.hud.gov/helping-americans/fair-housing-act-overview) · protected classes and what counts as discrimination in US housing
- [RESO Data Dictionary](https://www.reso.org/data-dictionary/) · the shared US data standard for listing fields; a good start for a property data model anywhere
- [National Trading Standards: material information guidance](https://www.nationaltradingstandards.uk/news/full-material-information-guidance-published/) · what UK agents are expected to disclose on listings
- [GOV.UK: Renters' Rights Act overview for landlords](https://www.gov.uk/guidance/renters-rights-act-an-overview-for-landlords) · the 2026 changes to renting in England, from advertised rent to evictions
- [European Commission: Energy Performance of Buildings Directive](https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficient-buildings/energy-performance-buildings-directive_en) · the EU frame for energy performance certificates
- [CFPB: TILA-RESPA Integrated Disclosures](https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/tila-respa-integrated-disclosures/) · the US mortgage disclosures a buyer sees, with timing rules

## Related

- `domains/marketplace.md` · many agents or landlords on one platform
- `domains/booking.md` · viewings and appointments
- `domains/finance.md` · deposits, rent collection, mortgages
- `areas/patterns/search-filters.md` · the long filter list of property search
- `areas/patterns/maps-location.md` · searching on a map
- `areas/parts/files-storage.md` · contracts, certificates, inspection reports
- `areas/patterns/media-upload-galleries.md` · listing photos and floor plans
