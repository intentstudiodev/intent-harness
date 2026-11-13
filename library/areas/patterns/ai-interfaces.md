---
kind: library
shelf: pattern
name: AI interfaces
fits when: the product uses a model to generate, summarise, suggest, decide or act (a prompt box, an assistant panel, inline suggestions, an agent that does tasks)
related: domains/ai-assistant.md, areas/patterns/chat-interfaces.md, areas/patterns/empty-loading-error-states.md, areas/practices/trust-dark-patterns.md, areas/practices/privacy-consent.md, areas/parts/audit-history.md
checked: 2026-11
---
# AI interfaces

The parts of a product where people ask a model for something and judge what comes back: a prompt box, a chat panel, a suggestion inside a form, an agent that edits files or sends things. The output is fluent, varies from run to run and is sometimes wrong in ways that look right. The tension: **the more capable and confident the AI looks, the less people check it**, so the interface has to make checking, correcting and undoing cheap.

## Questions worth asking

- What does the AI do here: answer, draft, transform the user's own content, or act on their behalf? Acting needs far more control than drafting.
- What does a wrong result cost: a bad sentence, a wrong number in a report, a sent email, a deleted file? It sets how much review and confirmation is worth.
- How will people tell good output from bad: sources, a preview of changes, or their own expertise? Without a way to check, people over-trust or give up.
- Is a chat the right form, or would a button, a suggestion in place, or a form with defaults serve better? Chat leaves the work of asking to the user.
- What can the AI see: this document, the user's account, other people's data? People need to know before they type.
- What happens to prompts and outputs: stored, used for training, shown to admins? This is a privacy and contract question, not just UI.
- How will the team learn what goes wrong: feedback buttons, reviewed samples, evaluation sets? Without a loop, quality drifts unnoticed.

## Usual shape

### Anatomy
- input: a prompt field, often with suggested starters and attachments · often · a blank box is hard to start from
- scope controls: what the AI may read or change (this file, a selection, a source list) · sometimes · narrows mistakes and privacy surprises
- streaming output with a visible stop control · often · long answers feel faster and can be cut short
- progress for multi-step or agent work: steps, current action, time so far · often · an agent working silently looks broken
- sources or citations next to the claims they support · sometimes · research, search and knowledge tools
- a short, specific note on limits near the input · often · generic disclaimers in footers go unread
- actions on the result: copy, insert, retry, edit the prompt, regenerate · often
- a preview or diff before changes are applied · sometimes · when the AI edits the user's own work
- confirmation before actions with effects outside the product · often · sending, paying, deleting, publishing
- undo or version history after AI changes · often · the cheapest safety net
- feedback: thumbs, a reason, a report · often · input for improving prompts and models
- clear labelling of AI-made content · often · and in some jurisdictions a legal duty (see Go deeper)

### Conventions
- AI features marked consistently with one icon or label, not decoration everywhere · often
- the user's original content kept until they accept a change · often
- errors and refusals explained in plain words with a next step · often
- model or mode choice only where people understand the difference · sometimes

## Choices and trade-offs

- **Chat or embedded.** Chat is flexible and fits open questions; embedded suggestions (a button, inline completion, a filled-in default) fit known tasks and need less prompting skill. Many products offer both.
- **Suggest or act.** Suggestions keep people in charge and cost a click each; letting the AI act saves time and needs scopes, confirmations, logs and undo. A common middle is acting on a draft or a copy.
- **Show reasoning or show sources.** Step-by-step reasoning reads as transparency but may not reflect how the answer was made; sources can be checked, though people rarely click them unless they are close and specific.
- **Streaming or complete.** Streaming shows progress and lets people stop early; a complete answer is easier to review, validate and format before showing.
- **One answer or several.** Several drafts invite comparison and choice; one keeps things simple and is easier to measure.

## Watch out

- A confident tone and polished formatting on uncertain content · people skip checking; research finds trust rises even when citations are wrong
- Citations that do not support the claim or lead nowhere · they add false credibility rather than a way to verify
- AI acting outside the product without confirmation · one wrong send or delete undoes months of trust
- No way to stop, undo or return to the original · people stop using the feature after the first bad result
- Human-like first-person narration ("I think", "I'm happy to") · it suggests more understanding than there is
- Feedback buttons nobody reads · users notice nothing changes and stop giving it
- Sensitive data typed into a prompt without knowing where it goes · a privacy incident, and in workplaces a policy breach

## Go deeper

- [Google PAIR: People + AI Guidebook](https://pair.withgoogle.com/guidebook/) · chapters and patterns on mental models, explainability, feedback, errors and graceful failure
- [Microsoft HAX Toolkit: Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/) · 18 research-based guidelines grouped by moment: at first use, during use, when wrong, over time
- [Nielsen Norman Group: explainable AI in chat interfaces](https://www.nngroup.com/articles/explainable-ai/) · 2025 research on why citations, reasoning traces and disclaimers often raise trust without helping verification, and what helps instead
- [Nielsen Norman Group: AI chatbots discourage error checking](https://www.nngroup.com/articles/ai-chatbots-discourage-error-checking/) · why checking AI output is costly and design moves that make it easier
- [Apple HIG: generative AI](https://developer.apple.com/design/human-interface-guidelines/generative-ai) · keeping people in control, identifying AI use, inclusive output, handling mistakes
- [EU AI Act Service Desk: Article 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50) · EU transparency duties: telling people they are dealing with AI and marking generated content; at the time of checking (2026-11) these apply from 2 August 2026, with some transition periods, so ask a lawyer about scope and timing

## Related

- `domains/ai-assistant.md` · when the AI assistant is the product
- `areas/patterns/chat-interfaces.md` · the message stream and composer conventions AI chat borrows
- `areas/patterns/empty-loading-error-states.md` · waiting, partial results and failures
- `areas/practices/trust-dark-patterns.md` · overtrust, disclosure and honest framing
- `areas/practices/privacy-consent.md` · what happens to prompts and outputs
- `areas/parts/audit-history.md` · logs and versions behind undo for AI actions
