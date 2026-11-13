---
kind: library
shelf: architecture
name: C4 model and decision records
fits when: someone needs to say what parts a product has, how they talk and why they were chosen, at a level a product owner can follow
related: areas/architecture/monolith-or-services.md, areas/architecture/api-styles.md, areas/architecture/hosting-environments.md, areas/architecture/data-modelling.md, areas/parts/integrations-webhooks.md
checked: 2026-11
---
# C4 model and decision records

A way to describe a product's architecture in two zoom levels and to keep the reasons beside it. **Context** shows the product as one box with the people who use it and the outside systems it depends on; **containers** open that box into the things that run or store data: web app, mobile app, server, database, file store, queue, functions. Decision records say why each part is the way it is. The tension: a picture detailed enough to be useful versus one simple enough to stay true as the product changes.

## Questions worth asking

- Who reads this: the owner, a designer, a new developer, an AI agent? It sets how much detail each box carries.
- Which outside systems does the product lean on (payments, sign-in, email, maps, AI models)? They are where outages and costs come from.
- What runs where: on the user's device, on a server you run, on someone else's platform?
- Which choices would be expensive to undo? Those are the ones worth a written record.
- What matters most in quality terms: speed, cost, privacy, uptime, simplicity? Without this, every choice looks equally right.
- What is fixed from outside: a budget, a region for the data, a platform, a team that knows one stack?

## Usual shape

### Anatomy
- context diagram: the product, its kinds of users, the outside systems · often · the first picture anyone needs
- container diagram: each app, service and data store, with its technology · often · where most product decisions show up
- labelled relationships ("sends order events to", "reads profiles from"), with the protocol between containers · often · a bare "uses" hides the important part
- a key that explains shapes, colours and line styles · often · C4 leaves notation free, so each diagram explains its own
- deployment view: where containers run (regions, platforms, devices) · sometimes · when hosting, data location or cost matter
- dynamic view of one important flow (sign-up, checkout) · sometimes · order of steps across containers
- component and code levels · sometimes · C4 has them, but they belong to engineers and age quickly; this shelf stops at containers

### Conventions
- a "container" in C4 means anything that runs or holds data, not a Docker container · often · a common confusion
- every element states its type, a one-line responsibility and its technology · often
- one decision per record: context, options considered, outcome, consequences, status · often · Michael Nygard's original shape; MADR adds decision drivers and pros and cons per option
- records are kept when reversed and marked superseded by the newer one · often · the history of "why not X" is the valuable part
- records live next to the code or the product knowledge, numbered, in plain text · often
- in the Intent Format, containers are backend cards, what they offer is api cards, chosen technologies are tech cards (with why and alternatives) and records are decision cards (question, options, outcome, what it affects) · often · the same model without separate diagrams

## Choices and trade-offs

- **Diagrams drawn or diagrams from a model.** A drawing tool is quick and anyone can edit it, but each diagram drifts on its own. A model as text (Structurizr DSL and similar) produces several views from one source and lives in version control, at the cost of a small language to learn.
- **C4 alone or with arc42.** C4 covers structure. arc42 is a fuller template of twelve sections; the ones that help most even without adopting it are quality goals, constraints, context, deployment, risks and the glossary. Taking those questions and leaving the rest is common.
- **Records for everything or for the expensive choices.** Recording every small choice creates noise nobody reads; recording none leaves the next person to repeat old debates. Many teams record what is hard to reverse, surprising, or argued about.
- **Short records or full ones.** A five-part Nygard record fits on half a page; MADR's longer form helps when several options were seriously weighed and someone will ask later.

## Watch out

- Going below containers in documents meant for the whole team · class-level detail is stale within weeks and hides the picture
- Arrows labelled "uses" or left unlabelled · the reader cannot tell who calls whom, with what, or why
- Outside services left off the context diagram · their limits, prices and outages arrive as surprises
- Decisions recorded without the options that lost · the next person reopens the question from zero
- Deleting a decision when it changes · the reason it once made sense is lost with it
- A diagram nobody updates after the first release · a wrong map is worse than none

## Go deeper

- [The C4 model](https://c4model.com/) · the official site: the four levels, what counts as a container, notation guidance and supplementary diagrams
- [Structurizr documentation](https://docs.structurizr.com/) · the reference tool for C4: one model as code, many diagrams
- [Documenting Architecture Decisions, Michael Nygard (Cognitect blog)](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions) · the original short post that defined the decision record and its five parts
- [MADR](https://adr.github.io/madr/) · a Markdown template for decision records with drivers, options and their pros and cons
- [arc42 overview](https://arc42.org/overview) · the twelve-section template; useful as a checklist of what an architecture description can cover
- [ADR GitHub organisation](https://adr.github.io/) · templates, tools and background on architecture decision records

## Related

- `areas/architecture/monolith-or-services.md` · how many containers to have in the first place
- `areas/architecture/api-styles.md` · what the arrows between containers carry
- `areas/architecture/hosting-environments.md` · the deployment view: where containers run
- `areas/architecture/data-modelling.md` · what the data stores hold
- `areas/parts/integrations-webhooks.md` · the outside systems on the context diagram
