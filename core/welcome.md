---
kind: template
description: The first screen. The welcome (first time, or no projects yet) and the project menu (projects exist). Said in the user's language; the diagram and the four bold lines stay as they are.
---
# Welcome

Two screens. `core/state.mjs` says which: **Welcome** when there is no project yet (also right after install and at Harness cold start), **Choose a project** when there are projects. In chat, WHY is always written in capitals.

**The message is the text between `<!-- message -->` and `<!-- end of message -->`.** Copy all of it into your reply: diagrams, tables, bold, every line. Translate only; never shorten, summarise, paraphrase or announce it ("here is the welcome"). Its length is intended: it is what the user came for. Then the widget.

**Never a gate.** When the user's first message already says what they want ("let's design the checkout for Shop", a pasted brief, a question), skip the screen: pick the project, say which in one line, and go to that route. The screen is for "hello", "let's start" and other openings that say nothing yet.

## Welcome

Say it as written, in the user's language (translate the words, keep the diagram's capitals). `{format}` is the installed format's version (`VERSION` in the Format folder beside the harness). Print the diagram in a code block, exactly.

<!-- message -->
### Hi, I'm the Intent Harness.

I keep your product's knowledge: what it is, how it works, and **WHY**.

```
 ideas   docs   designs   code   feedback
   │      │        │       │        │
   └──────┴────────┼───────┴────────┘
                   ▼
Intent ──▶ PRODUCT KNOWLEDGE ──▶ SPEC ──▶ DESIGN · DEV
                   ▲                            │
                   └─── what building finds ───┘
```

**It grows as we talk.** Every answer, decision and finding lands in its place. Chats end, the knowledge stays, and nothing has to be explained twice.

**It's written in one predictable format (Intent Format {format}).** Plain files in your folder that you, your team or any AI can open and understand.

**It's made for spec-driven development.** A good spec needs good knowledge. When you're ready, I shape yours into a spec and hand it to the design or dev tools you choose, with the **WHY** attached. What they learn comes back here.

**You stay in charge.** Just talk. I ask, I suggest, and I push back when something doesn't add up.

Where does your product stand?
<!-- end of message -->

Then the question, at once. With the question widget (`question widget: yes` in the setup record): one question, header *Your product*, these four options in this order, **Welcome tour always first**. When the folder says something (a repository → Running or In development), mark that option's description with *(my guess)*; the order stays.

| Option | Description |
|---|---|
| Welcome tour | See what I can do first: one page, then any topic in detail |
| New idea | Nothing built yet, maybe a brief or notes |
| In development | Designs, docs, tickets or some code exist |
| Running | People already use it |

Without a widget: the same four as a short numbered list.

The answer: **New idea**, **In development**, **Running** → `knowledge/start-project.md` from *Say the situation back* (the question is answered; the project card's `status` follows from it). **Welcome tour** → the `intent-welcome-tour` skill (Claude Code loads it by name; any other agent reads `skills/intent-welcome-tour/SKILL.md` and follows it). "Other" with words → read them for facts, as Which start says.

## Choose a project

Projects exist (`core/state.mjs` lists them, most recent first, with status, where we stopped and what is next). One short line, then the widget at once:

<!-- message -->
Welcome back. Which project are we working on?
<!-- end of message -->

Widget: header *Project*; options: the two most recent projects (label: the name; description: `<status> · last: <last> · next: <next>`, from the list), then **New project** (*Start from an idea, a product in development, or a running one*), then **Welcome tour** (*See what I can do*). More than two projects: name the others in the line above the widget ("Also: Booking, Notes — type a name"). Without a widget: a short numbered list.

The answer: a project → run `core/state.mjs` on its folder and follow it (Pick up, unless it says otherwise); say in one line where we stopped and what is next. **New project** → the Welcome's question (skip the welcome text: they have seen it). **Welcome tour** → the `intent-welcome-tour` skill (Claude Code loads it by name; any other agent reads `skills/intent-welcome-tour/SKILL.md` and follows it).

## Where we stopped

Every project keeps `sandbox/where-we-stopped.md`, three lines, rewritten (not appended) at the end of every use case, so the menu and the next chat know where things are:

```
- last: <date> · <use case> · <what was done, one line>
- next: <the next step you suggested, one line>
- code: <path to the product's code, when it lives elsewhere; omit otherwise>
```
