---
kind: library
shelf: architecture
name: API styles
fits when: apps, services or outside partners call each other's functions and data, and the shape of those calls has to be chosen and kept stable
related: areas/architecture/c4-model.md, areas/architecture/monolith-or-services.md, areas/architecture/real-time.md, areas/architecture/background-jobs-queues.md, areas/parts/integrations-webhooks.md, areas/practices/security-basics.md
checked: 2026-11
---
# API styles

The agreed way one container asks another for data or action: the mobile app asking the server, a service asking another, a partner calling your public API. **REST** models resources over plain HTTP; **GraphQL** lets the client ask for exactly the fields it needs from one endpoint; **RPC** (gRPC, JSON-RPC, typed RPC inside one codebase) calls named functions. The tension: freedom to change the backend quickly versus a stable promise to every client that already depends on it, some of which, like old app versions, cannot be updated on your schedule.

## Questions worth asking

- Who calls this API: your own web app, your own mobile app, other services, outside developers? Each audience tolerates change differently.
- Will old clients stay in use for months (installed apps, partner integrations)? Then breaking changes need a plan.
- Do screens need data from many places at once, or mostly one record at a time?
- Is there one team on both sides, in one language, or many teams and languages?
- Is the API part of what is sold? A public API is a product with its own docs, keys, limits and support.
- Do clients need updates pushed to them? That is a different channel; see real-time.

## Usual shape

### Anatomy
- one main API between the apps and the backend · often · the most important arrow on the container diagram
- a written contract: OpenAPI for HTTP APIs, a schema for GraphQL, protocol buffers for gRPC · often · the source for docs, client code and tests
- authentication on every call (session, token or key) and rate limits · often · see security basics
- consistent error format with a machine-readable code and a human message · often · RFC 9457 "problem details" is a standard shape for HTTP
- pagination for lists, with cursors for large or changing data · often
- idempotency keys on calls that create or pay · sometimes · a retried request does not charge twice
- separate public API for partners, versioned on its own · sometimes
- webhooks for telling outside systems that something happened · sometimes · see integrations and webhooks

### Conventions
- REST: nouns for resources, HTTP methods for actions, status codes that mean what HTTP says · often
- adding fields is safe; removing, renaming or changing their meaning breaks clients · often · the core rule of compatibility
- a version in the URL, a header, or a dated version pinned per account · often · the last is how some large payment APIs do it
- deprecations announced ahead, with dates; the HTTP Deprecation and Sunset headers can signal them · sometimes
- names and formats (dates, money, IDs) the same across all endpoints · often · design guides from large API providers set this out

## Choices and trade-offs

- **REST or GraphQL.** REST is simple, cacheable by ordinary HTTP tools, and familiar to every partner. GraphQL suits screens that combine many kinds of data and teams with many clients, as it cuts over- and under-fetching; it moves complexity to the server (query cost, caching, permissions per field).
- **REST or RPC.** RPC fits actions that are not natural resources ("recalculate invoice") and internal calls. gRPC is fast and strongly typed between services but awkward from browsers without a proxy. Typed RPC within one codebase (client and server sharing types) is very quick for one team and hard to open to outsiders.
- **Contract first or code first.** Writing the contract first lets front end and back end work in parallel and makes review possible before code; generating it from code keeps it in step with what runs. Either way, a contract checked in tests stays honest.
- **Versions or evolution.** Explicit versions make breaking changes possible at the cost of running several at once. Evolving one version by only adding works well for your own clients and needs discipline.
- **Backend for each front end or one shared API.** A thin API per client (web, mobile) shapes data for each screen; one shared API is less to maintain.

## Watch out

- Shipping a breaking change while old app versions are still installed · users on those versions see errors they cannot fix
- An API shaped exactly like the database tables · every schema change becomes a client change
- Lists without pagination · fine at a hundred rows, outages at a million
- Errors returned as 200 with a message inside · clients, caches and monitoring all treat failure as success
- No contract or docs for your own internal API · each new client guesses, and the AI agent guesses too
- Retries on payment or create calls without idempotency · duplicate orders and charges

## Go deeper

- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) · the standard contract format for HTTP APIs
- [GraphQL: learn](https://graphql.org/learn/) · the official introduction, including best practices on versioning and pagination
- [gRPC: introduction](https://grpc.io/docs/what-is-grpc/introduction/) · how RPC with protocol buffers works and where it fits
- [Google API design guide](https://cloud.google.com/apis/design) · resource-oriented design, naming, errors and compatibility from a large provider
- [APIs as infrastructure: versioning (Stripe blog)](https://stripe.com/blog/api-versioning) · dated versions pinned per account, so old integrations keep working
- [RFC 9457: Problem Details for HTTP APIs](https://www.rfc-editor.org/rfc/rfc9457) · a standard shape for error responses

## Related

- `areas/architecture/c4-model.md` · the arrows these APIs become on the container diagram
- `areas/architecture/monolith-or-services.md` · how many APIs exist depends on how many containers
- `areas/architecture/real-time.md` · pushing changes instead of asking for them
- `areas/architecture/background-jobs-queues.md` · when a call starts work that finishes later
- `areas/parts/integrations-webhooks.md` · public APIs, partner keys and webhooks
- `areas/practices/security-basics.md` · authentication, keys and rate limits
