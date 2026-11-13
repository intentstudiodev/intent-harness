---
kind: library
shelf: practice
name: Trust and dark patterns
fits when: the product asks people to pay, subscribe, share data, consent, stay, invite others or make choices the business cares about
related: areas/practices/privacy-consent.md, areas/practices/microcopy-content.md, areas/practices/analytics-experiments.md, areas/patterns/pricing-paywalls.md, areas/parts/subscriptions-billing.md, areas/patterns/onboarding.md
checked: 2026-11
---
# Trust and dark patterns

**Dark patterns** (also called deceptive design) are interface choices that steer people into decisions they would not otherwise make: hidden costs, pre-ticked boxes, cancellation mazes, fake countdowns, guilt-tripping buttons. **Trust** is the opposite habit: honest defaults, clear prices, easy exits. The tension is real: many deceptive patterns lift a short-term number, and the cost shows up later as churn, chargebacks, complaints, bad reviews and, increasingly, regulators.

## Questions worth asking

- Where does the business benefit if people choose one way: sign-up, upgrade, consent, renewal, staying subscribed? Those are the places to look first.
- Is leaving as easy as joining? Cancellation, downgrade, unsubscribe and account deletion are where complaints and laws focus.
- Are all costs shown before the commitment: fees, taxes, renewal price, trial end date? Costs that appear late are a named dark pattern (drip pricing).
- Which defaults favour the business over the person (pre-selected add-ons, opt-out marketing, data sharing on)? Defaults decide what most people end up with.
- Are urgency, scarcity and social proof true, and could the team prove it? "Only 2 left" and "12 people are viewing" need real data behind them.
- Which markets does the product sell in, and to consumers or businesses? Consumer law is stricter and rules differ; worth asking counsel (this is not legal advice).
- Does it sell in the **EU**? The Digital Services Act bans deceptive design by online platforms (Article 25), and the Unfair Commercial Practices Directive and its 2021 guidance cover all traders; a Digital Fairness Act on dark patterns and subscription traps was being proposed at the time of checking (2026-11).
- Does it ask for consent to tracking or marketing? In the EU, GDPR and ePrivacy rules decide what counts as a valid choice.
- Does it sell in the **US**? The FTC enforces Section 5 of the FTC Act and, for subscriptions, the Restore Online Shoppers' Confidence Act (ROSCA); its 2024 click-to-cancel rule was vacated in July 2025, with a new rulemaking under way at the time of checking (2026-11). State auto-renewal laws add more.
- Does it sell in the **UK**? The Digital Markets, Competition and Consumers Act 2024 and the CMA's work on harmful choice architecture apply.
- How are experiments reviewed? A test that rewards confusion will "win".

## Usual shape

### Anatomy
- prices with all mandatory fees included up front · often · surprise costs are a leading reason for abandoned checkouts and a target of consumer law
- clear trial terms: end date, price after, how to cancel, a reminder before charging · often
- cancellation in the same channel and roughly the same effort as sign-up · often · several US state auto-renewal laws require an online way to cancel what was bought online
- choices presented with equal weight (accept and decline alike) · often · especially for consent
- confirmations that restate what will happen and what it costs · often
- honest social proof and urgency, or none · often
- account deletion and data export that work without contacting support · sometimes · expected under GDPR-style rights
- an internal review of growth experiments for manipulation · sometimes · larger teams and regulated sectors

### Conventions
- the common catalogue: sneaking, hidden costs, hidden subscriptions, hard to cancel, obstruction, preselection, forced action, trick wording, visual interference, confirmshaming, nagging, fake urgency, fake scarcity, fake social proof, disguised ads · often · per deceptive.design's taxonomy
- trust signals that are verifiable: real reviews, named policies, refund terms, contact details · often
- the decline option worded neutrally ("No thanks") · often

## Choices and trade-offs

- **Friction on leaving or a better exit.** A retention offer or pause option during cancellation can help both sides; repeated screens, hidden links or a required phone call cross into obstruction, a frequent focus of enforcement.
- **Defaults that help the person or the metric.** Opt-in for marketing and extras costs reach; pre-selection gains it and is restricted in EU and UK consumer and data law.
- **Urgency or calm.** Real deadlines (a sale that ends, a seat held for ten minutes) are fair information; invented timers and stock counts are deceptive and easy for regulators to test.
- **Ask at the moment or ask up front.** Asking for permissions or data when the feature needs them earns more honest yeses than a wall of requests at sign-up.

## Watch out

- A/B tests that optimise conversion alone · they select the most confusing variant; guardrails on refunds, complaints and cancellations help
- "Free trial" that quietly converts to an annual charge · chargebacks, store complaints and regulatory attention
- Confirmshaming and guilt in decline buttons · cheap to build, lasting damage to tone
- Consent banners with a bright accept and a buried reject · named in EU data-protection and consumer guidance
- Dark patterns added by third-party scripts (urgency widgets, review popups) · the product is still responsible
- Treating it as a legal question only · people notice manipulation well before regulators do

## Go deeper

- [Deceptive Patterns: types](https://www.deceptive.design/types) · the best-known catalogue of patterns, with examples and the laws that apply to each
- [FTC staff report: Bringing Dark Patterns to Light (2022)](https://www.ftc.gov/reports/bringing-dark-patterns-light) · the US regulator's view of common patterns and enforcement
- [European Commission: Digital Services Act](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act) · the EU's platform rules, including the ban on deceptive design
- [European Commission: Unfair Commercial Practices Directive](https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-law/unfair-commercial-practices-directive_en) · the general EU consumer rules and the guidance that covers dark patterns
- [CMA: Online choice architecture](https://www.gov.uk/government/publications/online-choice-architecture-how-digital-design-can-harm-competition-and-consumers) · the UK competition authority's papers on how design can harm consumers
- [Mathur et al.: Dark Patterns at Scale (CSCW 2019)](https://webtransparency.cs.princeton.edu/dark-patterns/) · a crawl of about 11,000 shopping sites; how widespread the patterns are

## Related

- `areas/practices/privacy-consent.md` · consent banners and data choices done fairly
- `areas/practices/microcopy-content.md` · wording that informs instead of pressures
- `areas/practices/analytics-experiments.md` · guardrails so tests do not reward manipulation
- `areas/patterns/pricing-paywalls.md` · honest pricing and upgrade prompts
- `areas/parts/subscriptions-billing.md` · trials, renewals and cancellation
- `areas/patterns/onboarding.md` · asking for permissions and data at the right moment
