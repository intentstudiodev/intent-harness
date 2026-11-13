---
kind: library
shelf: architecture
name: Hosting and environments
fits when: the product runs on servers or cloud services someone has to choose, deploy to and keep separate for development, testing and real users
related: areas/architecture/serverless-and-baas.md, areas/architecture/monolith-or-services.md, areas/architecture/observability.md, areas/architecture/data-modelling.md, areas/practices/security-basics.md, areas/practices/privacy-consent.md
checked: 2026-11
---
# Hosting and environments

Where the product runs and how a change travels from a laptop to real users: the environments (development, staging, production), the pipeline that builds, tests and deploys, and the provider and regions underneath. It decides how often the team can ship safely and where people's data physically lives. The tension: **a managed platform that ships today versus control, cost and portability later**, with data residency able to overrule both.

## Questions worth asking

- Where are the users, and are any bound by rules on where data lives (EU, UK, public sector, health, finance)? It narrows providers and regions before anything else.
- Who will run it at 3 a.m.? A solo developer and a team with an on-call rota can afford very different setups.
- How often does the team want to ship: several times a day, weekly, per release? The pipeline and environments follow.
- What does staging need to prove before production: that it builds, that migrations run, that a person approved it?
- What would moving providers cost, and how likely is it? Lock-in is fine when chosen, painful when discovered.
- What is the monthly budget, and what happens to the bill if usage jumps tenfold overnight?
- Are there customers who will ask for their own region, a private deployment or an uptime commitment?

## Usual shape

### Anatomy
- local development environment · often · runs the product on a laptop, ideally with the same kinds of services as production
- production · often · the real users and the real data
- staging (also pre-production) · often · a copy of production's setup with test data, for a final check
- preview environments per change · sometimes · a temporary copy for each pull request, common on managed web platforms
- a CI/CD pipeline · often · builds, tests and deploys on every change; manual steps only where a person adds judgement
- configuration and secrets kept outside the code, per environment · often · the same build runs everywhere with different settings
- one or more regions · often · usually one region near the users, with backups elsewhere
- domains, TLS certificates and a CDN in front · often

### Conventions
- environments as alike as practical: same kinds and versions of services · often · differences hide bugs until production
- production data stays in production; staging uses synthetic or masked copies · often · a staging leak is still a breach
- every deploy can be rolled back or rolled forward quickly · often
- infrastructure described in files and kept in version control · sometimes · repeatable and reviewable, worth it once there is more than one environment

## Choices and trade-offs

- **Managed platform or cloud provider.** Platform-as-a-service and edge platforms deploy from a repository with little setup and charge more per unit at scale; the big clouds give every building block and need more knowledge to assemble and secure. Many small teams start on a platform and move pieces to a cloud only when cost or a missing feature demands it. Serverless and backend-as-a-service are in their own file.
- **One provider or several.** One provider is simpler and gets volume discounts; spreading across providers avoids a single dependency and doubles the things to learn and monitor. Portability is often bought more cheaply by using open standards (containers, PostgreSQL, OpenTelemetry) than by running everywhere.
- **Staging or straight to production.** A staging environment catches setup and migration problems; it also costs money and drifts. Some teams replace it with preview environments, feature flags and quick rollback.
- **Continuous deployment or scheduled releases.** Deploying every merged change keeps each step small and recoverable; scheduled releases suit apps that go through store review, regulated products and customers who need notice.
- **One region or several.** One region is simpler and cheaper; several bring lower latency far away, resilience to a regional outage and a way to keep a customer's data in their own jurisdiction, at the cost of data that has to be kept in step or split.
- **Region by default or region per customer.** A single region fits most products; enterprise and public-sector buyers sometimes ask to choose, which touches data modelling, billing and support.

## Watch out

- Building a multi-region, multi-service, Kubernetes setup before the first users · weeks of operations work for problems the product does not have yet
- A managed service picked for its free tier · prices, limits and egress fees appear when the product succeeds
- Data stored in a region the team never chose, or copied to one by a sub-processor · under EU and UK GDPR (Chapter V), transfers abroad need a legal basis; ask before launch, not after a customer's questionnaire
- Secrets committed to the repository or shared between environments · one leak opens production
- Production data copied into staging or laptops "to test properly" · personal data ends up where nobody protects it
- Deploys that only one person knows how to do · the release stops when they are away

## Go deeper

- [The Twelve-Factor App: dev/prod parity](https://12factor.net/dev-prod-parity) · why environments should stay alike, and the rest of a widely used checklist for deployable apps
- [Martin Fowler: Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html) · the practice behind CI/CD pipelines, revised in 2023
- [DORA: software delivery performance metrics](https://dora.dev/guides/dora-metrics/) · research-backed measures of how fast and safely a team ships
- [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/) · six pillars (operations, security, reliability, performance, cost, sustainability) that apply beyond AWS
- [UK ICO: international transfers](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/) · what counts as a restricted transfer of personal data out of the UK, and the safeguards it needs

## Related

- `areas/architecture/serverless-and-baas.md` · hosting where the provider runs the servers
- `areas/architecture/monolith-or-services.md` · how many things there are to deploy
- `areas/architecture/observability.md` · knowing whether a deploy is healthy
- `areas/architecture/data-modelling.md` · which data must stay in which region
- `areas/practices/security-basics.md` · secrets, access and patching
- `areas/practices/privacy-consent.md` · personal data and where it may go
