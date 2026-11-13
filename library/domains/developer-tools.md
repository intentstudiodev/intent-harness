---
kind: library
shelf: domain
group: model
name: Developer tools
fits when: the people who use the product are software developers (APIs, SDKs, command-line tools, libraries, hosting and deploy platforms, editors and their extensions, monitoring)
related: areas/parts/integrations-webhooks.md, areas/patterns/command-palette-shortcuts.md, areas/parts/sign-in.md, domains/saas-subscription.md, domains/ai-assistant.md
checked: 2026-11
---
# Developer tools

A product made for people who write software: an API others build on, a library, a command-line tool, a platform that runs their code, an editor extension. Developers judge it by **time to first success** and by whether it keeps working when they upgrade. The tension is that every public name, flag and response field becomes a promise: easy to add, expensive to change, because other people's code depends on it.

## Questions worth asking

- What is the surface: an HTTP API, an SDK, a CLI, a library, a dashboard, all of them? Each surface needs its own docs, versioning and support.
- Who is the developer: a hobbyist trying it at night, a team at a large company, an AI agent calling the API? Onboarding, pricing and trust needs differ.
- How long from sign-up to the first working call or deploy? It is the moment most trials are won or lost.
- What counts as a breaking change, and how will you version and announce it? Deciding late means breaking someone in production.
- How do developers authenticate: keys, tokens, OAuth, cloud identity? Secrets end up in repositories, logs and screenshots.
- Is it open source, source-available or closed? It shapes contributions, trust, licensing and how competitors can use it.
- Where does a developer get help: docs, issues, forum, chat, paid support? Silence on an issue tracker is visible to everyone.
- What is free and where does paying start: usage, seats, features? Developers are wary of surprise bills.

## Usual shape

### Roles
- individual developer evaluating or building · often · the first user, often without a budget
- team or organisation owner who pays and manages access · often
- maintainer or platform team on your side · often · answers issues, reviews contributions
- contributor sending changes · sometimes · open-source projects
- automated client: CI, scripts, AI agents · often · uses the API with no human watching

### Journeys
- sign up, get a key, install the SDK or CLI and make the first call or deploy · often · measured in minutes
- look something up in reference docs · often · the most visited docs page type
- debug: read an error, find logs, reproduce · often
- upgrade to a new version and fix what changed · often
- rotate a key or revoke access after a leak · sometimes
- report an issue or ask for a feature · often

### Screens
- docs site with quickstart, guides, reference and changelog · often
- API keys and tokens page with scopes and last use · often
- dashboard with usage, limits, billing, logs, errors and request explorer · often
- CLI help text and error messages · often · a screen too, in a terminal
- status page for outages · often

### Rules
- versions, a policy for breaking changes and a notice period before removal · often · semantic version numbers, dated API versions, or both
- rate limits per key or plan, returned in responses · often
- keys shown once, stored hashed, with scopes and expiry · often
- errors with a stable code, a human message and a link to docs · often
- machine-readable description of the API (such as OpenAPI) · sometimes · drives docs, SDKs and tests

## Choices and trade-offs

- **API first or SDK first.** A clean HTTP API works from any language; SDKs make the first steps easier and multiply the code you maintain per language. Generating SDKs from an API description is a middle path.
- **Semantic versions or dated versions.** Semantic versions suit libraries installed by developers; dated, per-account API versions let a service change while old integrations keep working, at the cost of keeping old behaviour alive.
- **Hosted service or self-hosted.** Hosted is easy to start and to bill; self-hosted fits strict data rules and large companies and multiplies the setups you support.
- **Open source or closed.** Open code earns trust, contributions and adoption and lets others fork or compete; closed keeps control and leaves trust to docs and reputation.
- **Usage-based or seat-based pricing.** Usage fits APIs and infrastructure and worries people about runaway bills; seats are predictable and fit tools used by people, not machines.
- **Interactive or scriptable CLI.** Prompts and colour help humans; plain output, exit codes and flags matter for scripts and CI. Many tools detect which one they are talking to.

## Watch out

- A quickstart that skips the step that fails in practice · developers stall at sign-up, keys or local setup and leave quietly
- Breaking changes shipped as minor updates · trust drops and people pin old versions forever
- Error messages without a cause or a next step · each one becomes a support ticket or an abandoned trial
- Docs that mix tutorial, how-to and reference in one page · beginners get lost and experts cannot find the detail
- Keys with full access and no expiry · one leaked key in a public repository exposes every customer's data
- Usage bills with no limit or alert · a loop in someone's script becomes a dispute

## Go deeper

- [Diátaxis](https://diataxis.fr/) · a framework that splits docs into tutorials, how-to guides, reference and explanation
- [Command Line Interface Guidelines](https://clig.dev/) · help, output, errors, flags and interactivity for CLIs people and scripts both use
- [Semantic Versioning 2.0.0](https://semver.org/) · the widely used rule for what a major, minor and patch release promises
- [Stripe: API versioning](https://stripe.com/blog/api-versioning) · dated versions pinned per account, and how old behaviour is kept out of core code
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines) · a large company's rules for naming, errors, paging and versioning in HTTP APIs
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) · the standard format for describing HTTP APIs, used to generate docs, SDKs and tests

## Related

- `areas/parts/integrations-webhooks.md` · webhooks and events your API sends
- `areas/patterns/command-palette-shortcuts.md` · keyboard-first tools
- `areas/parts/sign-in.md` · developer sign-in, often through a code host
- `domains/saas-subscription.md` · plans, trials and usage billing
- `domains/ai-assistant.md` · coding assistants and agents as users of your API
- `areas/practices/security-basics.md` · secrets, scopes and key rotation
