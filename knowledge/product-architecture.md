---
kind: skill
name: product-architecture
description: Product Architecture — the parts a product runs on (apps, services, data, outside services, environments), how they connect, and WHY. Kept at the C4 model's context and container level as format cards; derived from what is known, then confirmed. Not the tech stack (what each part is built with), not domains (what the product is).
---
# product-architecture

**Product Architecture** is the map of the parts the product runs on, how they talk, and **WHY** they are that way. The **tech stack** hangs off it: each part is *built with* something. The depth is the C4 model's first two levels and no deeper: **context** (the product, its people, the outside systems) and **containers** (apps, services, databases, queues, outside services). Classes, modules and code structure belong to the code and the spec tools.

## Where it lives: the format's cards

| What | Card | How |
|---|---|---|
| apps and surfaces: web app, mobile app, admin console, public site, partner API, extension | `backend`, `backend-type: service`, tag `client` | until the format has a client node; the description names the platform and who uses it |
| servers, services, background jobs, functions | `backend`, `server` or `service` | one card per part that is deployed or run on its own |
| databases, file storage, caches, search indexes | `backend`, `database` or `storage` | the description names the main things kept there and where the data lives |
| outside services: payments, email, sign-in, maps, AI models, calendars | `backend`, `integration` | who calls whom; how critical it is |
| environments, repositories | `backend`, `environment` or `repo` | only when they matter to the product (regions, separate customer environments) |
| the arrows | each node's `## Connections`: `calls` · `stores` · `deploys` · `belongs` | a short note says how (request, real-time, event, webhook) |
| the calls the UI makes | `api` cards, *Served by* one node | linked from screens and flows |
| what each part is built with | `tech` cards, *Built with* | the tech stack |
| the people | `role` cards | C4's persons are the product's user types |

**Records in other places, when they matter.** The WHY of a choice ("one database per region") → a `decision` card. A constraint that drives the shape (data stays in the EU, works offline, 10,000 users at once) → a `rule` or the project card's constraints. What happens when an outside service is down → an `edge-case`. Architecture documents, diagrams, ADRs and code → `## Links` (type Doc or Code), never copied. Anything deeper than containers → a link, not a card.

## What to learn

| Ask or find | Why it matters |
|---|---|
| which apps and surfaces exist, on which platforms, for whom | every app is a place screens live and a thing to build and ship |
| one backend or several; jobs that run on their own | the cost of every change |
| where data is kept, the main things kept, where personal data lives | privacy, regions, what breaks if it is lost |
| which outside services, who calls whom, how critical | lock-in, costs, what fails when they fail |
| how people sign in (own accounts, company sign-in, a provider) | it shapes onboarding, roles and B2B sales |
| how parts talk: requests, real-time, events, webhooks | what users see as instant or delayed |
| where it runs: hosting, environments, regions | data residency, costs, who can deploy |
| the drivers: scale, availability, offline, compliance, budget | the WHY behind the whole shape |

## When, per start: derive, then confirm

Most of the architecture follows from what is already known: platforms, parts (payments → a payment integration), audience (B2B → company sign-in, data kept apart per company), region (EU → where data lives). Derive first; ask only what cannot be derived; confirm in one go.

| Start | How |
|---|---|
| New idea | Setup asks the one thing an owner knows: what it must *connect to* (*Build*, `knowledge/project-setup.md`). The proposal then holds a **draft architecture**: every node a row of the inventory, marked by confidence, the diagram shown at the checkpoint. |
| In development | Read architecture documents, the README and the code first; then setup's *Architecture* widget confirms what was found. Documents and code that disagree are a contradiction to list, not a guess to make. |
| Running | `research/map-existing.md` builds it from the repository: the apps in it, infrastructure and deployment files, environment variable names (they name the outside services), the database schema. Every node `as found`, its Source the file it came from; then the *Architecture* widget confirms. |
| later | Change: `knowledge/change-impact.md` names the nodes a change touches. Build: the feature pack carries the nodes, APIs and tech the feature touches (`build/hand-to-pipeline.md`). Read back: a spec tool's architecture document (BMAD's architecture, Spec Kit's `plan.md`, Kiro's `design.md` and steering `tech.md`, `structure.md`, OpenSpec's `design.md`) is read by `build/follow-pipeline.md`; changes to the map go through the checkpoint like any other. |

## The view

`node <harness>/core/architecture.mjs <project>` draws the map from the cards: a Mermaid diagram at container level, then one line per node with its connections and what it is built with. Show it at the checkpoint, when the owner asks "how is it built", and in packs for spec tools. It is generated; never edit it by hand, never keep a copy.

The library's `areas/architecture/` files are a lens for the choices (monolith or services, serverless, real-time, data, hosting, AI features): their questions sharpen yours (`library/use-library.md`).

**Never.** Go below containers in cards. Invent a node in a running product. Record an architecture choice without its WHY (a decision card, or `—` and an `[ask]`). Write a node outside the checkpoint's yes.
