---
kind: library
shelf: domain
group: model
name: Marketplace
fits when: the product brings together two or more groups who trade with each other (buyers and sellers, clients and providers, teams offering and teams needing), and the product is the meeting place rather than the seller
related: domains/online-shop.md, domains/booking.md, domains/on-demand-delivery.md, areas/parts/payments-checkout.md, areas/parts/reviews-ratings.md, areas/parts/admin-back-office.md
checked: 2026-11
---
# Marketplace

A product where one group offers something and another group looks for it, and the product makes the match: goods, services, rentals, freelance work, or inside a company, people, rooms, projects and budgets. The heart of it is **trust between strangers and balance between sides**: each side only comes if the other is already there, and the product earns its place by making the match safer and easier than going direct.

## Questions worth asking

- Who are the sides, and which one is harder to get? The scarce side usually decides what is built first.
- What is traded: a thing, a service, time, or access? Goods need shipping and returns; services need scheduling and proof of work.
- Does the product handle the money, or only the introduction? Handling money brings payouts, refunds, disputes and often identity checks.
- How do the sides find each other: search and browse, the product proposes a match, or a request that providers answer?
- What stops people from meeting here and then trading outside? Disintermediation quietly ends many marketplaces.
- Is it public or internal (inside one company)? Internal ones trade time, skills or budget, use company sign-in, and care about approvals more than payments.
- Who is responsible when something goes wrong: the seller, the platform, or both? Laws and payment providers have views on this.

## Usual shape

### Roles
- buyer or client who looks and chooses · often · the demand side
- seller or provider who lists and fulfils · often · the supply side, with its own dashboard
- operator or trust and safety team · often · reviews listings, handles disputes and reports
- seller's team members · sometimes · a shop or agency with several people behind one account
- approver or budget owner · sometimes · internal marketplaces and B2B buying

### Journeys
- seller onboarding: account, identity or business checks, first listing, payout details · often · the slowest and most abandoned flow
- search, compare and choose · often · filters, sorting, profile or listing pages
- request, offer or order · often · fixed price, quote, or bid depending on what is traded
- message before or after the deal · often · questions, changes, proof of delivery
- fulfilment and confirmation · often · the moment money can be released
- review both ways · often · trust for the next trade
- dispute, refund or cancellation · often · rarer than buying, but it decides trust
- payout to sellers · often · schedules, holds, fees shown clearly

### Screens
- search results and filters · often
- listing or provider profile with reviews · often
- seller dashboard: listings, orders, earnings, payouts · often
- conversation between the sides · often
- order or job detail shared by both sides · often · one source of truth for status
- operator back office: listings queue, users, disputes, reports · often

### Rules
- commission or fee per transaction, sometimes a listing or subscription fee · often · how the platform earns; show who pays it
- money held until delivery is confirmed, then released · often · protects buyers, delays sellers
- seller verification before selling or before payout · often · payment providers and some laws require it
- ranking that weighs relevance, quality and paid placement · often · the rules people will ask about
- contact details hidden until a deal is made · sometimes · against going around the platform

## Choices and trade-offs

- **Open listing or curated supply.** Open grows fast and lets quality vary; curation (applications, vetting) is slower to grow and easier to trust. Many start curated in one niche and open later.
- **Search or matching.** Search gives choice and suits comparable offers; the product proposing a match suits urgent or hard-to-judge services but makes the algorithm the product.
- **Platform as merchant of record or sellers as merchants.** Being the merchant simplifies the buyer experience and takes on tax, refunds and liability; sellers as merchants keep the platform lighter and the experience less uniform.
- **Commission or subscription.** A cut of each deal ties revenue to value and invites going around the platform; a flat seller fee is predictable and puts the cost before any value arrives.
- **Many niches or one.** A broad marketplace spreads thin on both sides; a narrow one can reach density, where buyers find what they want and sellers get enough work.

## Watch out

- Building both sides equally from day one · the scarce side never reaches density and the empty one leaves
- Reviews that are almost all five stars · they stop telling anyone anything; consider structured or two-sided blind reviews
- Payouts and fees explained only in the terms · sellers find out on their first payout and leave or complain
- No plan for disputes · operators decide case by case, inconsistently, and both sides lose trust
- Treating seller onboarding as a sign-up form · identity and payout checks fail later and stall the first sale
- Ranking rules nobody can explain · sellers suspect favouritism; EU rules ask platforms to describe the main ranking factors

## Go deeper

- [Network Effects Aren't Enough, Hagiu and Rothman (Harvard Business Review, 2016)](https://hbr.org/2016/04/network-effects-arent-enough) · the common traps: growing too fast, trust and safety, disintermediation
- [EU Digital Services Act (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act) · EU duties for online marketplaces: trader traceability, notice and action, explaining removals
- [FTC: INFORM Consumers Act guidance](https://www.ftc.gov/business-guidance/resources/informing-businesses-about-inform-consumers-act) · US rules for collecting, verifying and showing details of high-volume sellers
- [Stripe: build a marketplace](https://docs.stripe.com/connect/marketplace) · a vendor's view of the money flow: merchant of record, fees, payouts and who carries the risk
- [Sharetribe Marketplace Academy](https://www.sharetribe.com/academy/) · practical guides on starting, pricing and growing a marketplace

## Related

- `domains/online-shop.md` · when there is only one seller
- `domains/booking.md` · when what is traded is a slot in someone's calendar
- `domains/on-demand-delivery.md` · when the match has to happen in minutes
- `areas/parts/payments-checkout.md` · split payments, holds and refunds
- `areas/parts/reviews-ratings.md` · trust between the sides
- `areas/parts/admin-back-office.md` · moderation, disputes and seller management
