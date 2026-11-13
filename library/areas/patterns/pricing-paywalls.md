---
kind: library
shelf: pattern
name: Pricing pages and paywalls
fits when: the product shows plans and prices, or blocks a feature or content until people pay or upgrade (pricing page, plan comparison, upgrade prompts, mobile paywalls, free trials)
related: areas/parts/subscriptions-billing.md, areas/parts/payments-checkout.md, domains/saas-subscription.md, areas/practices/trust-dark-patterns.md, areas/practices/analytics-experiments.md, areas/patterns/onboarding.md
checked: 2026-11
---
# Pricing pages and paywalls

The screens where a product asks for money: the public pricing page with its plan table, the upgrade prompt when someone hits a limit, the mobile paywall before or after onboarding. They are where business pressure meets interface most directly. The tension: **converting more people today** versus clear, honest terms that keep customers, reviewers and regulators on side tomorrow.

## Questions worth asking

- What is being sold: seats, usage, features, content, time? The unit decides how the plan table reads.
- Who decides and who pays: the user, a manager, a procurement team? Self-serve and sales-led pages look different.
- What is free, and what is the first moment people feel the limit? An upgrade prompt lands better at a moment of need.
- Is there a free trial, and does it need a card up front? It changes both conversion and refunds.
- Where is it sold: the web, Apple's App Store, Google Play, or several? Store rules decide who processes the payment and what can be linked.
- Which currencies, taxes and regions? Prices shown with or without tax is a local expectation and sometimes a rule.
- How are price changes and cancellations handled? That is the subscription side, but the paywall makes the first promise.

## Usual shape

### Anatomy
- plan cards or a comparison table, often three plans with one highlighted · often
- monthly and yearly switch with the saving stated · often
- price with the billing period and what counts (per seat, per month, billed yearly) · often
- feature list per plan, with explanations for unfamiliar terms · often · Baymard found users struggle with unexplained plan features
- free plan or trial, with what happens when it ends · often
- FAQ on billing, cancellation, refunds and taxes · often
- contact sales or custom plan for large buyers · sometimes · B2B
- usage meter and limit prompts inside the product · sometimes · usage-based and freemium plans
- locked feature with a preview and an upgrade path · sometimes
- mobile paywall: benefits, plan options, trial terms, restore purchases, terms and privacy links · often · on app stores

### Conventions
- the full price and period shown next to any monthly equivalent of a yearly plan · often
- trial end date and the amount to be charged stated before it starts · often · and Apple's guideline 3.1.2 asks for a clear description of what people get for the price
- a visible way to close a paywall that is not the only route forward · often
- restore purchases on mobile · often · Apple's guidelines expect restorable purchases to have a restore mechanism

## Choices and trade-offs

- **Public prices or "contact us".** Public prices let people self-qualify and buy without talking to anyone; hidden prices suit complex deals and lose people who only want to compare.
- **Free plan, free trial or neither.** A free plan grows reach and can become the product people settle for; a time-limited trial creates urgency; no free access suits products with clear value or high costs per user.
- **Paywall early or late.** Showing it during onboarding converts some people at peak interest; showing it after first value builds trust and lowers early revenue. Many mobile products test both.
- **Feature tiers or usage tiers.** Feature tiers are easy to explain; usage pricing matches value and makes bills harder to predict.
- **Web checkout or app store purchase.** Store purchases are familiar and handle tax and refunds, with store fees and rules; web checkout keeps margin and control and, on mobile, depends on current store rules about linking out. At the time of checking (2026-11), Apple allows such links on its US storefront and limits them elsewhere, and Google Play offers alternative billing and external offers programmes only in eligible regions.

## Watch out

- A monthly price shown large for a plan billed yearly · people feel tricked at the first charge
- Trials that turn into paid plans without a clear notice · refunds, chargebacks and in several jurisdictions a legal risk worth asking about
- Paywalls with a hidden or delayed close button · store reviewers may reject the app, and people uninstall
- Feature names nobody outside the team understands · the plan table cannot be compared
- Pre-selected expensive plans or paid add-ons · people feel tricked; in the EU, the Consumer Rights Directive (Article 22) rules out pre-ticked boxes for extra payments
- Prices without tax or currency context for the region · surprise at checkout and abandoned carts

## Go deeper

- [Apple App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · section 3.1 on in-app purchase, subscriptions, what must be described before subscribing and external purchase links
- [Apple HIG: in-app purchase](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase) · designing offers, subscription screens and restore on Apple platforms
- [Google Play Console Help: payments policy](https://support.google.com/googleplay/android-developer/answer/9858738) · when Play billing is required and the regional programmes for alternatives
- [Baymard Institute: SaaS UX benchmark](https://baymard.com/research-articles/saas-benchmark) · usability pitfalls on SaaS sites, including plan tables and feature explanations
- [RevenueCat: paywalls documentation](https://www.revenuecat.com/docs/tools/paywalls) · a vendor's view of mobile paywall building blocks and remote testing

## Related

- `areas/parts/subscriptions-billing.md` · renewals, upgrades, cancellation and price changes
- `areas/parts/payments-checkout.md` · taking the payment after the plan is chosen
- `domains/saas-subscription.md` · the business model behind plans and trials
- `areas/practices/trust-dark-patterns.md` · honest framing and what regulators call manipulative
- `areas/practices/analytics-experiments.md` · testing prices and paywall placement
- `areas/patterns/onboarding.md` · where a paywall often sits in the first run
