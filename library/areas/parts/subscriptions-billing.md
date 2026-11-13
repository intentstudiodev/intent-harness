---
kind: library
shelf: part
name: Subscriptions and billing
fits when: people pay on a schedule for ongoing access (plans, seats, usage), with trials, upgrades, invoices and renewals
related: areas/parts/payments-checkout.md, areas/patterns/pricing-paywalls.md, domains/saas-subscription.md, areas/parts/notifications-delivery.md, areas/practices/trust-dark-patterns.md
checked: 2026-11
---
# Subscriptions and billing

Plans, renewals and everything that happens between charges: trials that end, upgrades in the middle of a month, cards that expire, invoices a finance team needs, taxes by country. The one-off payment itself is in payments and checkout. The tension: billing that is easy to start and hard to understand or leave grows revenue for a while, and then grows refunds, chargebacks and regulators' attention.

## Questions worth asking

- What is billed: a flat plan, per seat, per use, or a mix? It decides the data model and every invoice.
- Who pays: a person with a card, or a company that wants invoices, purchase orders and tax IDs? Companies bring invoices, payment terms and tax checks.
- Is it sold through the App Store or Google Play, the web, or both? The stores own the subscription, renewals, refunds and some offers; the web gives control and needs your own billing.
- Is there a trial, and does it need a card up front? It changes who signs up and who converts.
- What happens on upgrade, downgrade and cancel: now or at period end, with or without proration? Each answer shows up on an invoice and in support tickets.
- What happens when a payment fails: how long does access continue, and what do people see? Much unwanted churn starts with a failed card.
- Where are customers? Sales taxes and VAT follow the customer's location for many digital services.

## Usual shape

### Anatomy
- plans and prices, monthly and yearly · often · see pricing and paywalls
- trial, with or without card · often · its end date shown in the product and announced before charging
- billing page: current plan, next charge and date, payment method, invoices · often
- change plan with a preview of what will be charged now and next time · often
- cancel in the product, effective at period end · often
- invoices and receipts with tax details, downloadable · often · business customers ask early
- seats or usage counters with limits and alerts · sometimes
- coupons, promotion codes and credits · sometimes
- failed-payment flow: retries, emails, in-product banner, grace period, then downgrade or lock · often · dunning
- pause instead of cancel · sometimes

### Conventions
- proration on change: credit unused time on the old plan, charge the rest on the new one · often · providers differ in defaults
- upgrade at once, downgrade at next renewal, within a subscription group · often · Apple; billing grace period of 3, 16 or 28 days; some price increases need the subscriber's consent
- grace period, then account hold, after a failed renewal · often · Google Play; base plans and offers, and replacement modes decide how a plan change is charged
- a subscription period of at least seven days, with a purchase screen that says what people get for the price · often · Apple guideline 3.1.2
- clear terms and express consent before charging for a negative-option plan · often · US ROSCA; the FTC's 2024 click-to-cancel rule was vacated by a federal appeals court in July 2025, and at the time of checking (2026-11) a new rulemaking had started; many states have their own auto-renewal laws; ask counsel which apply
- a clearly labelled withdrawal function in online contracts with a right of withdrawal · often · EU, from 19 June 2026 (Directive 2023/2673, as transposed nationally); some countries also require a cancel button for subscriptions
- VAT at the customer's country rate on digital services to consumers · often · EU; often declared through the One Stop Shop

## Choices and trade-offs

- **Card-up-front trial or no-card trial.** Card up front converts a higher share and invites surprise-charge complaints; no card brings more sign-ups and fewer conversions. A reminder before the first charge softens the first.
- **Prorate or change at period end.** Prorating feels fair for upgrades and creates small, confusing charges; changing at renewal is simple and makes people wait. Many products prorate upgrades and delay downgrades, as Apple does.
- **Build billing, use a billing provider, or a merchant of record.** Building gives control and is a long project; a provider handles invoices, retries and proration; a merchant of record also takes on sales tax and refunds, for a larger fee and less control.
- **Lock out or degrade after failed payment.** Locking recovers money quickly and angers teams mid-task; read-only access or a grace period keeps trust and delays revenue.

## Watch out

- Cancel only by email, chat or a maze of offers · unlawful in a growing number of places and a classic dark pattern
- Plan and entitlement kept in two places · people pay and do not get access, or the reverse; one source of truth, fed by provider events
- Trials that renew without a reminder · chargebacks, store complaints, refund requests
- Ignoring time zones and month lengths in renewal dates · charges on the 31st and around daylight saving go wrong
- Downgrade that deletes data above the new limit · keep it read-only or ask first
- Store and web subscriptions for the same person · double billing and confused support; show where a plan was bought

## Go deeper

- [Apple: auto-renewable subscriptions](https://developer.apple.com/app-store/subscriptions/) · groups, upgrades and downgrades, offers, grace period, price increases
- [Android Developers: subscriptions in Google Play Billing](https://developer.android.com/google/play/billing/subscriptions) · base plans, offers, grace period, account hold, plan changes
- [Stripe: prorations](https://docs.stripe.com/billing/subscriptions/prorations) · worked examples of mid-period changes and their invoices
- [Stripe: revenue recovery](https://docs.stripe.com/billing/revenue-recovery) · retries, failed-payment emails and card updates; the parts of dunning most products need
- [EU VAT One Stop Shop](https://vat-one-stop-shop.ec.europa.eu/index_en) · how VAT on cross-border sales to EU consumers is declared

## Related

- `areas/parts/payments-checkout.md` · the first payment, SCA and refunds
- `areas/patterns/pricing-paywalls.md` · presenting plans and limits
- `domains/saas-subscription.md` · the business around the billing
- `areas/parts/notifications-delivery.md` · renewal reminders and failed-payment emails
- `areas/practices/trust-dark-patterns.md` · fair trials and cancellation
