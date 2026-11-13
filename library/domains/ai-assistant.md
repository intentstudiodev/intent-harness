---
kind: library
shelf: domain
group: model
name: AI assistant
fits when: the core of the product is an AI model that answers, writes or acts for people (chat assistants, copilots inside another tool, agents that take steps on their own)
related: areas/patterns/ai-interfaces.md, areas/patterns/chat-interfaces.md, areas/practices/privacy-consent.md, areas/practices/security-basics.md, areas/parts/integrations-webhooks.md
checked: 2026-11
---
# AI assistant

A product whose main value comes from a model: it answers questions, drafts and edits, or takes actions such as searching, booking or changing files. It may be a standalone chat, a copilot inside another product, or an agent that works through steps with little supervision. The tension is that the output is **probabilistic**: often impressive, sometimes confidently wrong, so the product has to earn trust it cannot fully guarantee, and decide how much the model may do without asking.

## Questions worth asking

- What does the assistant do: answer, draft, or act? Acting on someone's behalf needs permissions, confirmation and undo that answering does not.
- What is a good result, and how will you know? Without examples and a way to score them, every prompt change is a guess.
- What knowledge does it draw on: the model alone, the user's files, the company's documents, live tools? Each source brings freshness, access and leakage questions.
- Whose model, and where does it run: a vendor's API, an open model you host, on the device? It decides cost, privacy promises and how fast things change under you.
- What happens when it is wrong, and how bad is that? A wrong recipe and a wrong dosage are different products.
- Who pays for each request? Usage cost grows with conversation length, tools and retries; plans and limits often follow from it.
- What is kept: conversations, files, memories? People ask what is stored, for how long, and whether it trains a model.
- Which laws apply where it is offered? In the EU, people interacting with an AI system are told so unless it is obvious; sector rules (health, finance, children) add more.

## Usual shape

### Roles
- end user who asks and reviews · often
- admin who sets which tools, data and models are allowed · often · business products
- reviewer or approver for actions above a threshold · sometimes · agents that spend money or change records
- builder who configures prompts, tools and knowledge · sometimes · products that let customers make their own assistants

### Journeys
- ask, get an answer, follow up · often · the core loop
- attach or point to context: a file, a page, a selection · often
- review and accept, edit or reject a suggestion · often · copilots
- delegate a multi-step task and check back later · sometimes · agents; needs progress and a way to stop
- confirm before an action with side effects · often · sending, paying, deleting
- give feedback on an answer · often · thumbs, corrections, reports

### Screens
- conversation view with input, streaming answer and controls to stop and retry · often
- inline suggestions inside another tool · sometimes · copilots
- sources or citations shown with the answer · often · when it draws on documents
- task or run view showing steps, tool calls and status · sometimes · agents
- history and saved conversations · often
- settings for data use, memory, connected tools and model choice · often

### Rules
- disclosure that the user is talking to AI · often · a legal duty in the EU under the AI Act (Article 50), unless obvious from context; from 2 August 2026 at the time of checking (2026-11)
- tools and data scoped to what the user may access · often · the model acts with the user's rights, not more
- limits on usage per user or plan, with a screen that shows them · often · cost and abuse
- content filters and refusals for harmful requests · often
- logs of prompts, tool calls and outputs for debugging and audit · often · with retention rules, because they hold user data

## Choices and trade-offs

- **Chat as the whole interface, or AI inside existing screens.** Chat is flexible and puts the burden of asking on the user; inline suggestions fit a known task and are easier to trust and measure. The screen-level detail is in `areas/patterns/ai-interfaces.md`.
- **Workflow or agent.** A fixed sequence of model calls is predictable and testable; an agent that chooses its own steps handles open tasks and is harder to bound, test and price. Many products start with workflows and add autonomy where it pays off.
- **Ask before acting, or act and allow undo.** Confirmation is safe and slows everything; acting with undo is smooth and needs actions that can really be undone.
- **One model or several.** A single model is simpler; routing between a fast cheap model and a stronger one saves cost and adds evaluation work for each.
- **Retrieval or fine-tuning for knowledge.** Retrieving documents at question time keeps answers current and citable; fine-tuning shapes style and format and goes stale.
- **Remember across conversations or not.** Memory feels personal and raises privacy questions and surprises; per-conversation context is easier to explain.

## Watch out

- No evaluation set before launch · quality changes with every prompt or model update and nobody can tell if it got better
- Treating text from documents, web pages or emails as trusted · prompt injection lets that text steer the model and its tools
- Giving the agent broad tools "just in case" · excessive agency turns one bad answer into a real action
- Hiding uncertainty and sources · people over-trust fluent text, and one visible mistake costs all trust
- Cost that scales with long chats and retries · a popular feature can lose money on every heavy user
- Showing model output as raw HTML or running it as code · output handling is a security boundary

## Go deeper

- [Google PAIR Guidebook](https://pair.withgoogle.com/guidebook/) · designing human-centred AI: user needs, mental models, explaining, feedback and errors
- [Microsoft HAX: Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/) · 18 research-based guidelines across first use, normal use, mistakes and change over time
- [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) · workflows versus agents, common patterns, and starting simple
- [OWASP Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) · prompt injection, excessive agency, output handling and other recurring risks
- [European Commission: transparency obligations under Article 50 of the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act) · EU: telling people they deal with AI, marking generated content, dates and enforcement; ask a lawyer how it applies to you
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) · US: a voluntary framework and generative AI profile for mapping and managing AI risk

## Related

- `areas/patterns/ai-interfaces.md` · streaming, citations, suggestions and feedback controls
- `areas/patterns/chat-interfaces.md` · the conversation view itself
- `areas/practices/privacy-consent.md` · what is stored and used for training
- `areas/practices/security-basics.md` · injection, secrets and tool permissions
- `areas/parts/integrations-webhooks.md` · tools and connected services the assistant uses
- `domains/developer-tools.md` · when the assistant helps people write code
