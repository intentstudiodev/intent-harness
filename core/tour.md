---
kind: template
description: The welcome tour: eight short stops, one screen each, a widget under each. When the user picks "Welcome tour" or asks what you can do.
---
# Welcome tour

Eight stops. **The message is the text between `<!-- message -->` and `<!-- end of message -->`.** Copy all of it into your reply: diagrams, tables, bold, every line. Translate only; never shorten, summarise, paraphrase or announce it ("here is the welcome"). Its length is intended: it is what the user came for. Then the widget. WHY always in capitals; diagrams in their code block, exactly. **One stop per message**, then the widget at once (header *Tour · n/8*; without a widget, the same options as a short numbered list). Never two stops in one message, never a summary of the stops to come.

Every widget has **Next** first. The other options are per stop, below. Whatever the user picks, the tour waits where it is: after a "Show me" or an answer, offer **Next** again. Typed words instead of an option: answer them, then offer **Next**. "Start", "skip" or "enough" at any point → the Welcome's question in `core/welcome.md` (without the welcome text).

"Show me" reads the example project in the harness, `examples/booking-example-service-kb/`: show a short excerpt and say which file it is. Read only; never write there.

## 1 · Where I sit

<!-- message -->
```
 ideas   docs   designs   code   feedback
   └──────┴────────┼───────┴────────┘
                   ▼
Intent ──▶ PRODUCT KNOWLEDGE ──▶ SPEC ──▶ DESIGN · DEV
                   ▲ I'm here
```

Spec-driven development starts from a spec. But a spec is only as good as what it's made from: what the product is, who it's for, what was decided, and **WHY**. That's my part, the first step. Spec tools like Spec Kit, Kiro, BMAD or OpenSpec take it from there, and what they learn comes back to me.
<!-- end of message -->

Options: Next · Ask about this

## 2 · Wherever your product stands

<!-- message -->
You don't start from zero, and you don't start the same way twice. Tell me where your product is, and I start from there:

**New idea.** Nothing built yet, maybe a brief or some notes. I interview you a few questions at a time, only what you alone know. For a common kind of product I show its typical shape (sign-in, checkout …) and you keep or drop each part. Then I propose the features, screens, flows and rules I'd write, my guesses marked. You check it; only then do the cards appear.

**In development.** Docs, designs, tickets, a prototype, some code. I read everything first and ask nothing until I have. Then two lists: *what your documents say* (with file and place) and *my guesses*. My questions are "is this what you meant?", never "what do you want?".

**Running.** People already use it. I map it as it is, from the code, the running app, screenshots or recordings. Nothing invented, no "this could be better" yet. Every card links to where I found it; a **WHY** the code doesn't state stays a question for you, never my guess. First you get the map and a list of contradictions.

In every case, "I don't know" and "later" are good answers. Unknown stays marked as unknown; "later" comes back in two days.
<!-- end of message -->

Options: Next · New idea · In development · Running

A situation picked → its steps, short, then the options **Start this way** (→ `knowledge/start-project.md` from *Say the situation back*, with that answer) · **Back to the tour** (→ Next) · Ask about this:
- New idea: a few questions at a time → the typical shape to keep or drop → my proposal, guesses marked → you check it → the cards, and the list of what's still open.
- In development: five questions about where the project stands → I read everything you give me → my proposal: from your documents, and my guesses → the gaps, three to five at a time.
- Running: point me at the code, the app, screenshots → I map what is there → the map and the contradictions → the WHYs, asked one batch at a time.

## 3 · What you can bring

<!-- message -->
Anything, in any state:
- **Talk.** Just say it: a decision, a change, "the tester says checkout breaks".
- **Paste.** Emails, chat logs, meeting notes, a tester's report.
- **Drop files** into `inputs/`: docs, briefs, designs, screenshots, recordings, tickets.
- **Point me** at a repository or a running app.

Everything is saved as given, with one line saying what it is and whose. Saving decides nothing: it becomes knowledge only when you agree, and every card can link back to the input it came from.
<!-- end of message -->

Options: Next · Show me an input (`inputs/brief.md`: its header line and the first lines) · Ask about this

## 4 · What I know about your product

<!-- message -->
I know your product the way a product team does: not as one long document, but as connected pieces.

| | Kind | What it captures |
|---|---|---|
| **The product** | Project | what it is, who it's for, where it stands |
| | User types | who uses it: guest, member, admin … and what each can do |
| | Features | what it does, and **WHY** each part exists |
| **The experience** | Information architecture | the map of places and how you move between them |
| | User flows | the journeys: sign up, book, pay, cancel |
| | Screens | what each place shows and what you can do there |
| | Shells | what stays around the screens: header, tab bar, menus |
| | Components | the reusable parts: buttons, cards, forms |
| **The logic** | Rules | what must always be true ("reviews only after a stay") |
| | Edge cases | what happens when things go wrong or get unusual |
| **The build** | APIs · Backend · Tech | how it's built, as found or as planned |
| **The memory** | Decisions | what was chosen, what was dropped, and **WHY** |
| | Comments | notes and feedback pinned to the right place |

Each piece is a card: one plain file, in one predictable format (Intent Format), linked to the others. You don't have to fill them in or even know the words: you talk, I file each thing where it belongs.
<!-- end of message -->

Options: Next · Show me the example's map (its features from `V1.0/features/_index.md`, then its screens from `V1.0/screens/_index.md`) · Ask about this

## 5 · How we work

<!-- message -->
- **I ask in batches**, three to five questions at a time, each with my guess, so you mostly say "yes" or correct me.
- **"I don't know" and "later" are good answers.** Unknown stays marked; "later" comes back in two days.
- **Every guess is marked**, every question stays in the card it's about: `[assumed]` my guess · `[likely]` found in your material · `[ask: …]` a question for you · `—` unknown.
- **One list of open questions.** Ask *"what's still open?"* and you get the whole list across the product: unknown, guessed, undecided. Nothing gets lost when a chat ends.
- **I push back** once when something doesn't add up, with an alternative. Then it's your call.
- **I remember where we stopped.** Next time I say where we left off and what's next.
<!-- end of message -->

Options: Next · Show me a marked guess (`V1.0/rules/rl000004-reviews-only-after-a-completed-stay.md`: the rule, its Why with `[assumed]`, where it applies) · Ask about this

## 6 · What comes out

<!-- message -->
When something is ready to be built, I shape the knowledge into what the next step needs, with the **WHY** attached:
- **A feature pack** for a spec tool: the feature's screens, flows, rules, decisions and open questions in one file.
- **A design brief**: what to design, for whom, under which rules, with your design system.
- **Test cases** made from the rules and flows, so testing checks what was meant, not only what was built.
- **A critique** of any plan, spec or design, against the knowledge.

**What comes back counts.** The spec a tool wrote, the decisions it made, what testing found: it lands in `inputs/` and becomes knowledge. The next spec starts from what the last build learned.
<!-- end of message -->

Options: Next · Show me a feature pack (assemble the pack for the example's Reviews feature in the chat, as `build/hand-to-pipeline.md` builds it; write nothing) · Ask about this

## 7 · Connectors

<!-- message -->
I don't replace your tools; I feed them. A **connector** tells me which tools fit each job:

| Job | Recommended | Alternatives |
|---|---|---|
| Spec and build | Spec Kit | Kiro · BMAD · OpenSpec · just your coding agent |
| Design | Figma skills | ui-ux-pro-max · impeccable |
| Testing | Playwright | your own test runner |

- **Your tools first.** On the first start I look at what you already have and put it first.
- **Connected, not copied.** A spec tool gets a short note in the file it always reads: where the knowledge is, and what not to invent. Removable any time.
- **Or skip me.** Prefer to work straight in BMAD or Spec Kit? Do it. I connect it once and step back; when you come back, I read what changed there: progress, tech, decisions.
- **Several, or switch later.** BMAD for planning and Spec Kit for features, or a move from one tool to another: features in progress are never lost on the way.
- **Links, not installs.** You get each tool's link and licence; you install it, never me.
- **Nothing is required.** Without a tool, I do the job myself. Change it any time: "use BMAD for builds" is enough.
<!-- end of message -->

Options: Next · Which tools do I have? (the user's own from `tweaks/connectors.md`, then the defaults per job from `build/connector.md`, `design/connector.md`, `qa/connector.md`) · Ask about this

## 8 · Keeping it right

<!-- message -->
- **Checks.** The format's own tool checks every card: broken links, missing pieces, a **WHY** still owed.
- **Change with care.** Change a rule and I show everything it touches before anything is rewritten.
- **Versions.** What shipped stays intact; the next version grows beside it.
- **Your team.** A project is a folder: put it in git and share it. Whoever opens it is offered the harness, and their agent reads the same knowledge.
- **I learn how you work.** Your preferences are kept as tweaks; updates never overwrite them.

That's the tour.
<!-- end of message -->

Options (no Next): Start a project (→ the Welcome's question, without the welcome text) · See the whole example (its features, then one card with its WHY) · Ask me something · Done for now (one line: "Say hello when you're ready.")
