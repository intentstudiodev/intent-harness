---
kind: library
shelf: practice
name: Analytics and experiments
fits when: the team wants to know how the product is used, whether a change helped, or which of two versions works better
related: areas/practices/privacy-consent.md, areas/practices/user-research.md, areas/practices/trust-dark-patterns.md, areas/patterns/dashboards.md, areas/patterns/charts-data-visualisation.md
checked: 2026-11
---
# Analytics and experiments

**Product analytics** records what people do (events such as "signed up", "created project", "invited teammate") so a team can see funnels, retention and usage. **Experiments** (A/B tests) show different versions to random groups and compare outcomes, so a change can be judged by evidence rather than opinion. The tension: numbers say what happened, not why, and a test only answers the question it was designed for; collecting everything "just in case" costs privacy, trust and attention.

## Questions worth asking

- Which decisions will the numbers inform? A metric nobody acts on is noise.
- What is the one outcome that says the product works for people (a project created, an order repeated, a week of active use)? Page views rarely are.
- How much traffic is there? A/B tests need thousands of people per variant to detect modest effects; small products often learn faster from research.
- What is collected, about whom, and with what consent? Laws on cookies and personal data apply to analytics as much as to ads.
- Who owns the event names and definitions? Without an owner, "active user" means three things in three dashboards.
- Is the data kept in a vendor tool, in the product's own database, or a warehouse? It decides cost, access and how long it lives.

## Usual shape

### Anatomy
- an event plan or tracking plan: names, properties, when each fires · often · the single source for what is measured
- a small set of key metrics: activation, retention, conversion, a north-star measure · often
- funnels for the main journeys · often · where people drop off
- cohort retention · often · whether people come back, by sign-up week
- feature flags that turn changes on per group · often · the base for both gradual rollouts and experiments
- an experiment record: hypothesis, primary metric, guardrail metrics, sample size, duration, result · sometimes · stops tests being reinterpreted after the fact
- session replay or heatmaps · sometimes · useful for spotting confusion; heavy on privacy
- server-side events for things that matter (payments, sign-ups) · sometimes · browser events get blocked or lost

### Conventions
- event names in one tense and pattern ("Project Created") · often
- user IDs pseudonymous, no personal data in event properties · often
- sample size and duration fixed before the test starts · often · checking daily and stopping on a good result inflates false positives
- guardrail metrics alongside the target (errors, speed, cancellations, complaints) · often · a win on clicks can hide a loss elsewhere
- frameworks such as Google's HEART (happiness, engagement, adoption, retention, task success) with goals, signals, metrics · sometimes · to pick metrics from goals

## Choices and trade-offs

- **Vendor tool or own pipeline.** A vendor product (hosted analytics, a feature-flag service) is fast to start and has costs that grow with volume; own events in a database or warehouse give control and need engineering time.
- **Client-side or server-side tracking.** Client-side sees interface detail and is blocked by ad blockers and consent choices; server-side is reliable for business events and sees less of the interface.
- **Cookieless and aggregate or user-level.** Aggregate, privacy-first analytics may avoid consent banners in some jurisdictions and cannot follow individual journeys; user-level data enables funnels and cohorts and needs consent and care.
- **A/B test or staged rollout.** A test with a control group gives a causal answer if traffic allows; a staged rollout (1%, 10%, 50%) catches breakage and is weaker evidence about value.
- **Fixed-horizon or sequential tests.** Fixed-horizon tests are simple and need patience; sequential or Bayesian methods allow early decisions with the right maths, and are easy to misuse.

## Watch out

- Peeking and stopping when it looks significant · in Evan Miller's worked example, a change that does nothing "wins" about a quarter of the time
- Testing many metrics and reporting the one that moved · a false positive presented as a finding
- Optimising a proxy (clicks, time in app) against the person's interest · it slides into dark patterns and erodes trust
- Events renamed or redefined without notice · charts break silently and trends become fiction
- Personal data in URLs, event properties or replays · privacy incidents and breaches of consent
- Too little traffic for the test · weeks of waiting for an answer that stays unclear

## Go deeper

- [Trustworthy Online Controlled Experiments, Kohavi, Tang and Xu (Cambridge University Press)](https://experimentguide.com/) · the standard book on running A/B tests at scale and the pitfalls
- [Evan Miller: How not to run an A/B test](https://www.evanmiller.org/how-not-to-run-an-ab-test.html) · why peeking breaks significance, with numbers
- [Evan Miller: sample size calculator](https://www.evanmiller.org/ab-testing/sample-size.html) · how many people a test needs before it starts
- [Nielsen Norman Group: A/B Testing 101](https://www.nngroup.com/articles/ab-testing/) · when tests work and their limits for low traffic and the "why"
- [Rodden, Hutchinson and Fu: user-centered metrics (CHI 2010)](https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/) · the HEART framework and the goals, signals, metrics process

## Related

- `areas/practices/privacy-consent.md` · consent, cookies and personal data in analytics
- `areas/practices/user-research.md` · the "why" behind the numbers; better than tests at low traffic
- `areas/practices/trust-dark-patterns.md` · where optimisation turns into manipulation
- `areas/patterns/dashboards.md` · showing the metrics to the team
- `areas/patterns/charts-data-visualisation.md` · charting trends and funnels honestly
