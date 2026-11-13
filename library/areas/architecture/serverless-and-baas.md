---
kind: library
shelf: architecture
name: Serverless and backend-as-a-service
fits when: the backend may run as functions on a platform (Cloudflare Workers, Vercel functions, AWS Lambda) or be largely provided by a hosted service (Supabase, Firebase)
related: areas/architecture/monolith-or-services.md, areas/architecture/hosting-environments.md, areas/architecture/background-jobs-queues.md, areas/architecture/real-time.md, areas/practices/privacy-consent.md, areas/practices/security-basics.md
checked: 2026-11
---
# Serverless and backend-as-a-service

Two ways to run less of your own backend. **Functions** (FaaS) are small pieces of server code that a platform starts on demand per request or event, scales and bills by use. **Backend-as-a-service** (BaaS) hands whole parts over: database, sign-in, file storage, real-time updates and security rules, often called straight from the app. Many products mix both with a little server of their own. The tension: less to build and operate now versus control over cost, limits, data location and the freedom to move later.

## Questions worth asking

- What does the product need on day one: a database, sign-in, files, real-time, scheduled work? A BaaS that covers most of it saves months.
- How predictable is the traffic? Pay-per-use suits spiky or small loads; steady heavy load can be cheaper on a server you rent.
- Where must the data live (EU, US, a specific country)? Regions are chosen per project and are sometimes fixed once set.
- What would it take to leave this provider? The answer is different for a hosted Postgres than for a proprietary document database.
- Are there long or heavy tasks: video processing, large imports, AI calls that take minutes? Function platforms set time and memory limits.
- Who writes the access rules, and how are they tested? With a BaaS the rules often are the security.

## Usual shape

### Anatomy
- hosted database with an auto-generated API and row- or document-level rules · often · Supabase (Postgres) or Firebase (Firestore) style
- sign-in from the same provider · often · fastest path, and a strong tie to that provider
- file storage with access rules · often
- functions for logic that must not run on the device: payments, secrets, calls to outside APIs · often
- edge functions running near the user · sometimes · Cloudflare Workers and similar; fast start, tighter limits on runtime APIs
- scheduled functions and queues · sometimes · see background jobs
- a small conventional server beside the platform · sometimes · for long tasks or libraries the platform cannot run

### Conventions
- secrets and payment logic kept in functions, out of the shipped app · often · anything in the client can be read
- environments as separate projects (development, staging, production) · often · see hosting and environments
- cost alerts and spending caps set at the start · often · pay-per-use bills follow traffic, including abuse

## Choices and trade-offs

- **BaaS or own backend.** A BaaS gives a working database, auth and storage in a day and suits small teams, prototypes and apps whose logic is mostly data access. An own backend costs more up front and gives full control of logic, schema, queries and hosting. Many products start on a BaaS and add their own services as logic grows.
- **Open, portable BaaS or proprietary.** A service built on standard parts (Postgres, S3-style storage, open-source and self-hostable) leaves an exit; a proprietary data model and rules language ties both data and code to one vendor. Lock-in is a trade, not a sin; it is worth knowing what it would cost to undo.
- **Functions or a long-running server.** Functions scale to zero and need no server care, but bring cold starts (on some platforms), time and memory limits, no reliable in-memory state and harder local testing. A server keeps connections, caches and long tasks easily but costs money while idle and needs updating.
- **Edge or one region.** Edge functions answer fast everywhere, but if the database sits in one region each call may travel there anyway; placing compute near the data often matters more than near the user.
- **Client talks to the BaaS directly or through your API.** Direct access is less code; an API in between keeps business rules in one place and makes changing provider easier.

## Watch out

- Access rules left open during development and shipped that way · the database is readable by anyone with the app
- Choosing a region by default · a fixed location in the wrong jurisdiction can mean moving all data later; see privacy and consent
- Pay-per-use without limits · a bug, a loop or a scraper turns into a large bill overnight
- Business logic spread across client code, database rules and functions · nobody can say where a rule lives
- Long jobs squeezed into request-bound functions · timeouts halfway through leave half-done work
- Assuming free-tier limits match paid ones · CPU, memory, connections and request counts differ by plan; check at the time of choosing

## Go deeper

- [Serverless Architectures, Mike Roberts (martinfowler.com)](https://martinfowler.com/articles/serverless.html) · the clearest explanation of BaaS versus FaaS, with benefits and drawbacks including lock-in
- [Cloudflare Workers limits](https://developers.cloudflare.com/workers/platform/limits/) · what an edge function platform allows per request and plan
- [Vercel Functions](https://vercel.com/docs/functions) · functions next to a web front end; regions and runtimes
- [Supabase self-hosting](https://supabase.com/docs/guides/self-hosting) · what running the same backend yourself involves: one measure of the exit
- [Firebase: project locations](https://firebase.google.com/docs/projects/locations) · choosing where data lives, and which location settings cannot be changed later

## Related

- `areas/architecture/monolith-or-services.md` · functions as one more way to split a backend
- `areas/architecture/hosting-environments.md` · regions, environments and where things run
- `areas/architecture/background-jobs-queues.md` · work that outgrows a single function call
- `areas/architecture/real-time.md` · BaaS real-time features and their limits
- `areas/practices/privacy-consent.md` · data location and processors
- `areas/practices/security-basics.md` · access rules, secrets and keys
