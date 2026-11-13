---
kind: library
shelf: architecture
name: AI features
fits when: the product calls a language or other generative model to answer, write, summarise, classify, search by meaning or take actions, whether as the core or as one feature among many
related: domains/ai-assistant.md, areas/patterns/ai-interfaces.md, areas/architecture/search-and-caching.md, areas/architecture/background-jobs-queues.md, areas/architecture/observability.md, areas/parts/integrations-webhooks.md, areas/practices/privacy-consent.md, areas/practices/security-basics.md
checked: 2026-11
---
# AI features

The parts behind an AI feature: which model is called and where it runs, what context it is given (retrieved documents, user data, tool results), which tools it may use, how its output is checked, and what it costs per answer. The product side lives in `domains/ai-assistant.md` and the screens in `areas/patterns/ai-interfaces.md`; this file is about the containers and the data flowing between them. The tension: **capability and speed of building on someone else's model versus cost, latency, control and the data that leaves the product with every call**.

## Questions worth asking

- What exactly does the model do here: write, summarise, classify, extract, search, act? Narrow jobs need smaller, cheaper setups.
- What data goes into a prompt, and is any of it personal, confidential or a customer's? It decides providers, contracts and regions.
- Does the provider keep or train on what is sent, and where is it processed? Terms differ by plan and change; ask and record the answer.
- What happens when the model is slow, down or wrong? A fallback, a retry or a plain error each shape the design.
- How will the team know a change made answers better or worse? Without examples to test against, every prompt edit is a guess.
- What may the model do on its own: read only, draft, or change data and contact people? Each step up needs its own limits.
- Who pays per call: the product, the customer's plan, or the customer's own key or subscription? Cost per user can exceed price per user.

## Usual shape

### Anatomy
- a model provider called through an API · often · hosted models from a lab or a cloud; the quickest start
- a thin layer that builds prompts, calls the model and parses output · often · keeps provider details in one place so a model can be swapped
- retrieval (RAG): finding relevant documents and passing them in · often · grounds answers in the product's own data, with sources
- an embeddings and vector index · sometimes · for retrieval by meaning; often beside keyword search
- tools the model can call (search, read a record, create a draft) · sometimes · usually through the product's own API, sometimes via the Model Context Protocol
- an agent loop where the model chooses the next step · sometimes · for open tasks; workflows with fixed steps cover many cases
- background jobs for long or batch work · sometimes · summaries, imports, nightly classification
- an evaluation set and runs on every change · sometimes · real examples with expected results, checked by code, people or a grading model
- logs of prompts, outputs, cost and latency · often · for debugging and cost control, with care for personal data

### Conventions
- model output treated as untrusted input: validated, escaped and checked before it is shown or acted on · often
- secrets and permissions stay in the product, not in the prompt · often · the model only gets tools scoped to the current user
- limits on tokens, calls and spend per user and per workspace · often
- the model and prompt version recorded with each result · often · so changes can be traced

## Choices and trade-offs

- **Hosted model or self-hosted.** Hosted models are strongest and need no hardware; data leaves the product and prices and models change on the provider's schedule. Self-hosted open-weight models keep data in-house and give fixed costs, at the price of GPUs, operations and usually weaker results. Some products route sensitive work to a local model and the rest to a hosted one.
- **The product's account or the user's.** Calling the model on the product's own key makes cost and data the team's responsibility; letting people connect their own subscription or key moves both to them and makes the experience depend on their plan.
- **Prompt, retrieval or fine-tuning.** Better prompts and examples are cheapest to try; retrieval adds current, citable knowledge; fine-tuning shapes style and format for narrow, high-volume tasks and needs retraining as things change. Most teams exhaust the first two first.
- **Workflow or agent.** Fixed steps are predictable, testable and cheaper; an agent handles open-ended tasks and is harder to bound, test and price. Many start with a single well-grounded call.
- **One large model or routing.** One strong model is simplest; routing easy requests to a small fast model and hard ones to a large model saves cost and latency and adds evaluation for each path.
- **Streaming or batch.** Streaming makes interactive features feel fast; batch and background processing is cheaper per call and suits work nobody waits for.
- **Build on a framework or call the API directly.** Frameworks speed up the first version and can hide the prompts; direct calls are easier to debug and to move between providers.

## Watch out

- Personal or customer data sent to a provider without checking retention, training use and region · a privacy and contract problem discovered by a customer's security review
- Text from documents, emails or web pages followed as instructions (prompt injection) · the model takes actions the user never asked for; OWASP lists it as the top risk for LLM apps
- A model given broad tools or credentials · one bad answer becomes a deleted record or a sent message
- No evaluation set · each prompt change fixes one case and breaks three unnoticed
- Cost per request never measured · a popular feature or a looping agent becomes the biggest bill
- Tying the whole product to one provider's model name and quirks · a deprecation or price change forces a rushed rewrite
- In the EU, AI Act transparency duties (telling people they deal with AI, marking generated content) apply from August 2026 · ask what applies to the product and read the Commission's guidance

## Go deeper

- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) · workflows versus agents, common patterns, and why to start simple
- [Lewis et al., Retrieval-Augmented Generation (arXiv)](https://arxiv.org/abs/2005.11401) · the paper that named RAG; the idea behind most grounded AI features
- [Hamel Husain: Your AI product needs evals](https://hamel.dev/blog/posts/evals/) · a practical ladder from unit-test assertions to human review to A/B tests
- [OWASP Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) · prompt injection, data leaks, excessive agency, runaway cost and the other common risks
- [European Commission: AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) · EU rules, timeline and transparency duties for AI systems
- [Model Context Protocol](https://modelcontextprotocol.io/) · an open standard for connecting models to tools and data sources

## Related

- `domains/ai-assistant.md` · products whose core is the model: roles, journeys, rules
- `areas/patterns/ai-interfaces.md` · screens for asking, checking, correcting and undoing
- `areas/architecture/search-and-caching.md` · the indexes retrieval runs on
- `areas/architecture/background-jobs-queues.md` · long and batch AI work
- `areas/architecture/observability.md` · tracing calls, cost and latency
- `areas/parts/integrations-webhooks.md` · the tools and outside systems an agent reaches
- `areas/practices/privacy-consent.md` · personal data sent to model providers
- `areas/practices/security-basics.md` · secrets, scopes and untrusted input
