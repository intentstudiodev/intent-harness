---
kind: library
shelf: part
name: Integrations, APIs and webhooks
fits when: other software talks to the product (a public API, webhooks, OAuth apps built by others, an integrations directory, connectors to tools people already use)
related: domains/developer-tools.md, areas/parts/import-export.md, areas/parts/audit-history.md, areas/practices/security-basics.md, areas/parts/workspaces-multi-tenancy.md
checked: 2026-11
---
# Integrations, APIs and webhooks

The ways the product joins the rest of someone's stack: an **API** other programs call, **webhooks** that tell them something happened, **OAuth apps** that act for a user, and ready-made **integrations** with popular tools. The tension: openness that makes the product sticky and extensible, versus a public contract that is hard to change and a new door for attackers and outages.

## Questions worth asking

- Who integrates: customers' developers, partners building apps, no-code automation users, the team itself? Each needs different docs, auth and support.
- Which few integrations do customers ask for first? A handful of native ones often matter more than a general API.
- Is the API public, partner-only or internal? A public API is a promise kept for years.
- How do callers authenticate: API keys, OAuth on behalf of a user, service accounts? It sets scopes, revocation and audit.
- Which events would others want pushed to them? Webhook events become part of the contract too.
- What are the limits: requests per minute, payload size, how long events are kept? Limits protect the product and belong in the docs.
- How are versions and breaking changes handled, and with how much notice?

## Usual shape

### Anatomy
- API keys page: create, name, scope, last used, revoke · often
- API reference generated from a description (often OpenAPI), with examples · often
- webhook settings: endpoint URL, chosen events, signing secret, delivery log with resend · often
- integrations directory in the product, with connect, disconnect and status · sometimes
- OAuth app registration for third parties, with a consent screen listing scopes · sometimes · when others build on the product
- connection health: last sync, errors, a reconnect prompt when access expires · often · for native integrations
- sandbox or test mode · sometimes · anything with side effects, such as payments or messages
- SDKs and a public changelog · sometimes
- connectors on automation platforms · sometimes · wide reach without building each integration

### Conventions
- webhooks signed, with an event ID and timestamp; receivers verify, then drop duplicates by ID · often · Standard Webhooks and Stripe describe the same pattern
- receivers answer 2xx fast and do the work in a queue · often
- deliveries retried with backoff over hours or days; endpoints that keep failing are disabled and the owner told · often
- events not assumed to arrive in order · often
- rate limits answered with clear status codes and retry hints · often
- OAuth using authorisation code with PKCE and exact redirect URI matching · often · RFC 9700, the current OAuth security best practice
- tokens scoped to least privilege and to one workspace; every API action logged under the key or app that made it · often

## Choices and trade-offs

- **Native integrations or a general API.** Native ones are polished and costly to maintain one by one; an API with webhooks lets others build, with less control over quality. Automation platforms sit between.
- **REST, GraphQL or both.** REST is widely understood and caches well; GraphQL suits clients that need flexible shapes and makes rate limits and per-field authorisation harder.
- **Polling, webhooks or streams.** Polling is simple and wasteful; webhooks are timely and need signing, retries and a receiver; event streams suit high volume.
- **Thin or full webhook payloads.** Thin events carry IDs and force a fetch, so data is current and less leaks; full snapshots save a call and can be stale.
- **API keys or OAuth.** Keys are easy for a customer's own scripts; OAuth suits third-party apps acting for users and gives consent and revocation per app.
- **Versioning by URL, header or date.** Each works; what customers rely on is a stated policy and long deprecation windows.

## Watch out

- Webhook receivers that accept unsigned requests · anyone can fake an event that triggers fulfilment or access
- Customer-supplied webhook URLs pointing at internal addresses · server-side request forgery from the product's own servers
- IDs checked for existence but not ownership · broken object level authorisation, first on OWASP's API list
- Breaking changes without notice · customers' integrations fail quietly and support hears first
- Keys that never expire or cannot be revoked per app · one leak stays useful indefinitely
- Integrations that stop after a password change or expired token, with no alert · data stops syncing for weeks unnoticed
- Retries without idempotency · duplicate orders, emails or charges

## Go deeper

- [Standard Webhooks specification](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md) · an open spec for webhook headers, signing, retries and idempotency
- [Stripe: receive events in your webhook endpoint](https://docs.stripe.com/webhooks) · a mature real-world example: verification, replay protection, retries, ordering, duplicates
- [RFC 9700: Best Current Practice for OAuth 2.0 Security](https://www.rfc-editor.org/rfc/rfc9700) · PKCE, redirect matching, refresh tokens and flows to avoid
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) · the common format for describing HTTP APIs and generating docs and clients
- [OWASP API Security Top 10 (2023)](https://api-security.owasp.org/editions/2023/en/0x11-t10) · the most common API weaknesses, from object authorisation to unsafe consumption
- [Google API Improvement Proposals](https://google.aip.dev/) · a published, detailed set of API design rules to borrow from

## Related

- `domains/developer-tools.md` · when developers are the main audience
- `areas/parts/import-export.md` · one-off moves instead of ongoing sync
- `areas/parts/audit-history.md` · recording what keys and apps did
- `areas/practices/security-basics.md` · authorisation, secrets and abuse
- `areas/parts/workspaces-multi-tenancy.md` · tokens and events scoped to a tenant
