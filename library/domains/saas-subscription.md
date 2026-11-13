---
kind: library
shelf: domain
group: model
name: SaaS and subscriptions
fits when: software is sold as ongoing access, by plan, seat or usage, renewed monthly or yearly (business tools, consumer apps with premium tiers, APIs)
related: areas/parts/subscriptions-billing.md, areas/patterns/pricing-paywalls.md, areas/parts/workspaces-multi-tenancy.md, areas/parts/roles-permissions.md, areas/patterns/onboarding.md, domains/developer-tools.md
checked: 2026-11
---
# SaaS and subscriptions

A product people pay for again and again for as long as it stays useful: a team tool billed per seat, an app with a premium tier, an API billed by usage. The heart of it is **value that has to keep arriving**: the sale is never finished, so the first days decide whether a trial becomes a customer and every renewal is a quiet vote on whether to stay.

## Questions worth asking

- Who pays, and who uses? In business tools the buyer, the admin and the daily user are often three different people.
- What is the pricing unit: per seat, per workspace, by usage, flat tiers, or a mix? It shapes plans, limits and the upgrade moment.
- How do people start: free plan, free trial with or without a card, demo and sales call? Each sets a different first-week journey.
- What is the moment of value, and how quickly can a new user reach it? Activation is usually measured against it.
- What happens when a payment fails, a plan is downgraded or a trial ends? Access, data and limits need clear rules.
- Is it sold self-serve, through sales, or both? Contracts, invoices and procurement come with sales.
- Where are the customers? Tax, cancellation and renewal rules differ by country and, in the US, by state.

## Usual shape

### Roles
- account owner or billing admin · often · holds the plan and the payment method
- admin who manages members and settings · often · business tools
- member or end user · often · uses the product daily, rarely sees billing
- guest or free user · sometimes · freemium, invited collaborators
- support and sales staff · sometimes · trials, discounts, contract changes

### Journeys
- sign up and set up a workspace · often · the first minutes decide activation
- first value: the core task done once · often
- invite teammates · often · seat-based products grow here
- hit a limit, see the upgrade, upgrade · often · the paywall moment
- trial ends: convert, extend or fall back to free · often
- payment fails, retries and reminders (dunning) · often · a large share of avoidable churn
- change plan, add or remove seats · often · with proration
- cancel, pause or downgrade · often · where trust is won or lost

### Screens
- pricing page with plan comparison · often
- onboarding checklist or guided first task · often
- billing: plan, seats, usage, invoices, payment method · often
- members and roles · often
- usage and limits meters · sometimes · usage-based pricing
- cancellation flow · often

### Rules
- entitlements: what each plan unlocks, checked in one place · often · scattered checks drift apart
- subscription states (trialing, active, past due, cancelled, paused) mapped to access · often · billing providers expose these states
- proration on mid-cycle changes · often · or a clear "from next period" rule
- data kept for a period after cancellation, then deleted · often · say how long
- renewal reminders and easy cancellation · often · required in some places: the UK DMCC Act 2024 sets reminder and easy-exit duties (being brought into force in stages), US states have automatic-renewal laws, and the FTC's 2024 click-to-cancel rule was vacated in July 2025, with a new rulemaking under way at the time of checking (2026-11)

## Choices and trade-offs

- **Free plan or free trial.** A free plan grows reach and can become a permanent home for non-payers; a trial creates a deadline and needs the value to show inside it.
- **Card up front or not.** Asking for a card at trial start filters for intent and lowers sign-ups; no card brings more trials and fewer conversions.
- **Seats, usage or tiers.** Seats are easy to predict and discourage inviting people; usage tracks value and makes bills hard to forecast; tiers are simple and leave gaps between them.
- **Self-serve or sales-led.** Self-serve scales cheaply for small customers; sales suits large accounts with procurement, contracts and security reviews. Many products run both.
- **Monthly or annual.** Annual brings cash and lower churn at the price of a discount and harder refunds; monthly is easier to start.

## Watch out

- Plan checks spread through the code · features leak to the wrong plan or vanish for paying customers
- Cancellation hidden or made long · complaints, chargebacks and regulator interest
- Treating every churned customer as a lost cause · many are failed payments that a retry or reminder would save
- Pricing pages that list features nobody understands · plan comparison is a known weak spot in SaaS site testing
- A downgrade that silently deletes data or locks people out · the customer feels punished for leaving
- Measuring sign-ups instead of activation · growth looks fine while trials never reach the value

## Go deeper

- [SaaS Metrics 2.0, David Skok (For Entrepreneurs)](https://www.forentrepreneurs.com/saas-metrics-2/) · the core numbers: MRR, churn, CAC, LTV and how they fit together
- [Stripe: how subscriptions work](https://docs.stripe.com/billing/subscriptions/overview) · a clear model of subscription states, failed payments and provisioning access
- [Baymard Institute: UX fixes for SaaS websites](https://baymard.com/research-articles/saas-website-ux-best-practices) · testing-based findings on plan matrices and showing the product
- [UK DMCC Act 2024, subscription contracts](https://www.legislation.gov.uk/ukpga/2024/13/part/4/chapter/2) · UK duties on pre-contract information, reminders, easy exit and cooling-off
- [FTC: Negative Option Rule](https://www.ftc.gov/legal-library/browse/rules/negative-option-rule) · the US federal rule's current text and the 2026 rulemaking on automatic renewals

## Related

- `areas/parts/subscriptions-billing.md` · plans, invoices, dunning and proration in detail
- `areas/patterns/pricing-paywalls.md` · showing plans and the upgrade moment
- `areas/parts/workspaces-multi-tenancy.md` · accounts, workspaces and data separation
- `areas/parts/roles-permissions.md` · owners, admins and members
- `areas/patterns/onboarding.md` · reaching first value
- `domains/developer-tools.md` · APIs and usage-based billing
