---
kind: library
shelf: architecture
name: Monolith or services
fits when: deciding how many separately deployed backend parts a product has, or whether to split one that exists
related: areas/architecture/c4-model.md, areas/architecture/serverless-and-baas.md, areas/architecture/api-styles.md, areas/architecture/background-jobs-queues.md, areas/architecture/observability.md
checked: 2026-11
---
# Monolith or services

How the server side of a product is cut into containers. A **monolith** is one application deployed as a whole; a **modular monolith** is still one deployment but with firm internal boundaries between areas such as orders, billing and accounts; **services** (microservices at the small end) are separate applications, each deployed and often stored on its own, talking over the network. The tension: simplicity and speed now versus independence later, when several teams need to change and scale parts without waiting on each other.

## Questions worth asking

- How many people will work on the backend in the next year? Splitting mostly solves a coordination problem between teams.
- Are the business areas and their boundaries already clear, or still being discovered? Boundaries drawn too early are expensive to move.
- Does any part have very different needs: heavy computing, spiky load, stricter security, a different release pace?
- Who runs it in production, and how much operations work can they carry? Every service adds deploys, monitoring and failure modes.
- Must some data stay separate (another region, another customer, regulated data)?
- Is there an existing system to grow from, or is this a fresh start?

## Usual shape

### Anatomy
- one backend application with one main database · often · the starting point for most new products and small teams
- background worker as a second container from the same codebase · often · see background jobs; the first split most products make
- internal modules with explicit boundaries and owners · sometimes · the modular monolith; keeps one deploy while limiting tangles
- a few larger services split along clear lines (payments, search, media processing) · sometimes · when one part has a different scale, risk or team
- many small services, each with its own data store · sometimes · larger organisations with several autonomous teams
- an API gateway or front service in front of several services · sometimes · one entry point for clients
- outside managed services doing whole jobs (auth, payments, email) · often · splitting off by buying, not building

### Conventions
- each service owns its data; others ask it rather than read its tables · often · shared tables quietly recreate a monolith with network calls
- boundaries follow business areas, not technical layers · often · "orders" is a service, "database layer" is not
- a split is recorded as a decision with its reason and what would justify merging back · often

## Choices and trade-offs

- **Monolith first or services from day one.** Starting with one application is quicker to build, test, deploy and change while the product is still being shaped; well-known practitioners note that most successful service architectures grew out of a monolith. Starting with services can fit when the team already runs them well and the boundaries are known from a previous product.
- **Plain monolith or modular monolith.** Modules with enforced boundaries cost some discipline but make a later split cheaper and keep teams from stepping on each other. Large companies have stayed on a modular monolith on purpose rather than moving to services.
- **Few large services or many small ones.** A handful of services along obvious seams gives most of the independence; many small ones multiply network calls, versioning and on-call load.
- **Split the code or split the data.** Separate deploys that still share one database are easier but keep the coupling; separate databases bring true independence and the hard parts: no simple joins, no transactions across services, eventual consistency.

## Watch out

- Splitting into services before there are teams to own them · a small team pays the operating cost of many systems with none of the benefit
- Services that call each other in long chains for every request · one slow service slows or breaks everything, and latency adds up
- Several services writing the same table · a distributed monolith: all the coupling plus network failures
- Boundaries drawn around today's screens · they shift with the product and drag the services with them
- No tracing or shared logging across services · a failing request cannot be followed; see observability
- Splitting to fix slowness that comes from the database or the code · the problem moves with it

## Go deeper

- [Microservices, Martin Fowler and James Lewis](https://martinfowler.com/articles/microservices.html) · the article that defined the term and its characteristics
- [MonolithFirst, Martin Fowler](https://martinfowler.com/bliki/MonolithFirst.html) · why starting with a monolith is common among successful service architectures
- [Microservice Premium, Martin Fowler](https://martinfowler.com/bliki/MicroservicePremium.html) · the extra cost services carry and when it is worth paying
- [Deconstructing the monolith (Shopify Engineering)](https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity) · a large product choosing a modular monolith over services, and why
- [Monolith to Microservices, Sam Newman (O'Reilly)](https://samnewman.io/books/monolith-to-microservices/) · patterns for splitting gradually, and when not to split
- [Azure architecture styles](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/) · a neutral comparison of n-tier, services, event-driven and other styles

## Related

- `areas/architecture/c4-model.md` · drawing the containers this choice produces
- `areas/architecture/serverless-and-baas.md` · functions and managed backends as another way to split
- `areas/architecture/api-styles.md` · how services talk to each other and to clients
- `areas/architecture/background-jobs-queues.md` · the worker that is usually the first split
- `areas/architecture/observability.md` · following a request across several containers
