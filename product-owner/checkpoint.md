---
kind: skill
name: checkpoint
description: Collect while talking, then write one batch on the user's yes. The only way talk becomes writing.
---
# checkpoint

**Collect.** During any conversation keep a pending list, one line each: `kind · what · source`. Kinds: fact, decision, question, idea, correction, file (something in `inputs/` no card cites yet). Setting `write-as-you-go` (default yes): at the first exchange of the session create `sandbox/notes/<date>.md` if it does not exist, then append each line as it comes, so a dead session loses nothing. Otherwise lines live only in context until the checkpoint.

**Trigger.** Notice on your own: after every exchange, if the list holds a decision, or a fact that contradicts a card, or has passed seven lines, or the topic changed, or the user pauses or says "write it down". Do not wait to be asked, and do not interrupt mid-thought.

**Offer.** Show the list with a proposed destination per item: KB (which card, new or changed; what its why will say and whether it is marked), decision (which option, who), idea (raw, or shaped → a Parked card), question (into its card: `[ask: …]` in the sentence, `—` for a value, `[assumed]` for a guess, or an Open decision; no card yet → the card is created with it; about the product as a whole → the project card), file (cited by which card; or kept uncited for now), dropped (facts and ideas only — a question is never dropped by us). Also every open line of `sandbox/ideas.md` gets a proposal. One message. The user answers per item or "all". "All" accepts the destinations, not the facts: an item the owner answered *unknown* on earlier stays open (a decision stays `Open`, its Outcome names the recommended option as the working assumption, `[assumed]`), and an item they said *later* on becomes `[ask: … · later <date>]` — the fate table in `open-questions/ask-questions.md`.

**Apply.** On yes: the librarian writes KB items (`write-knowledge`), decisions as decision cards (`decided:`, `by:`), shaped ideas as cards with `status: Parked`. Questions go into cards, never into a sandbox file. Everything else is a line appended to the sandbox, never an edit of an existing line:
- a raw idea: `- I<n> · <date> · <idea>` in `sandbox/ideas.md` (next free number);
- a fate for an existing line: `- I3 → KB #DC000003 · <date>` · `- I3 → dropped: <reason> · <date>`.
Each line of the notes file that was applied gets its own fate line too. When `sandbox/ideas.md` passes sixty lines, or a version closes: `node <harness>/core/sandbox.mjs archive <project>` (finished lines move to `sandbox/archive/`; open lines stay).

**Report.** One line: what was written where, and the `intent-format open` numbers if cards changed. Then the next-step suggestion.

Never write outside this skill's apply step, except notes as you go and intake's saving of a hand-over. Never rewrite a live sandbox file.
