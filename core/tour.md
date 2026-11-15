---
kind: template
description: The welcome tour: one short message, eight numbered points under the diagram. When the user picks "Welcome tour" or asks what you can do.
---
# Welcome tour

**The tour is one message.** Copy the text between `<!-- message -->` and `<!-- end of message -->` whole into your reply: the link line, the diagram in its code block exactly, all eight points. Translate only; never shorten, summarise, paraphrase or announce it. WHY in capitals.

**No question widget in that reply**, even when the setup record says `question widget: yes`: a widget right after the text hides the text. The reply ends with the message's last line.

Then, by what the user says:
- "start", or where their product is → the Welcome's question in `core/welcome.md`, in the widget, alone (no text before it, no welcome text).
- A number, or a question about a point → answer it in a few plain lines. "Show me" reads the example project, `examples/booking-example-service-kb/` (read only; say which file). Then end with: *Type **start** when you're ready.*
- "enough", "later" → one line: "Say hello when you're ready."

## 1 · The tour

<!-- message -->
Here's the tour: http://intentstudio.dev/ — complete instructions on how to use the harness.

```
 ideas   docs   designs   code   feedback
   └──────┴────────┼───────┴────────┘
                   ▼
Intent ──▶ PRODUCT KNOWLEDGE ──▶ SPEC ──▶ DESIGN · DEV
                   ▲ I'm here
```

1. **Where I sit.** I come before the spec. I collect what your product is, who it's for, what was decided, and **WHY**. Spec tools like Spec Kit, Kiro, BMAD or OpenSpec build from that.
2. **Any starting point.** New idea: I ask you questions. In development: I read your docs first. Already running: I map what's there, from the code and the app.
3. **What you can bring.** Talk, paste, drop files into `inputs/`, or point me at a repository or a running app. Nothing becomes knowledge until you agree.
4. **What I keep.** Your product as small linked cards: users, features, screens, flows, rules, decisions. One plain file each. You talk, I file.
5. **How we work.** I ask three to five questions at a time, each with my guess. Every guess is marked. "I don't know" and "later" are fine answers. I push back once when something doesn't add up.
6. **What you get.** Feature packs for spec tools, design briefs, test cases, critiques. What the build learns comes back to me.
7. **Your tools.** I work with the tools you use: Spec Kit or BMAD to build, Figma to design, Playwright to test. None is required, and I never install anything.
8. **Kept right.** I check every card, show what a change touches before I make it, keep shipped versions intact, and share through git.

Ask about any point, or type **start** to begin a project.
<!-- end of message -->
