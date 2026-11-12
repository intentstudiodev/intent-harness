---
kind: skill
name: catch-up
description: A product in development — docs, designs, tickets, a prototype, some code — and no cards yet. First where the project stands, then read everything before asking anything; questions are "is this what you meant", never "what do you want".
---
# catch-up

The owner has decided most of it already. Our job is to catch up, not to interview. Project status `In design`, `Approved` or `In build` brings you here (`knowledge/start-project.md`, Which start).

1. **Where are you.** One batch of five questions at most, about the project, not the product (ask-questions; the widget when there is one): what stage (idea · in development: design, build, beta · running); what exists and where — files, links, tools, so that each lands in `inputs/` or on one line of `inputs/links.md` (intake); what is decided for good and what is still open; what is being worked on now and what comes next; who decides. The answers go to `inputs/<date>-where-we-are.md` with a header line; the project card gets its `status` from them.
2. **Read everything first.** Every input through `read-input` (a researcher sub-agent per input above the size limit). The picture is built from the documents, not from questions. Marks follow the source: stated in a document → unmarked, with the Source link; implied → `[likely]`, naming the line it follows from; nothing in the documents → `[assumed]`, and that goes to the question batch. Contradictions between documents, or between a document and what the owner said in step 1, become the first questions: "the spec says three, the ticket says five — which is it now?" Never ask what a file in `inputs/` answers; in the lab that counts as a miss (Q2).
3. **Proposal and checkpoint**, as `start-project` does from Proposal on, with two columns in the pending list: *from your documents* (with the file and the place) and *my guesses*. The owner answers per item or "all"; "all" accepts destinations, not facts (`ask-questions`).
4. **Then the gaps**, three to five at a time, in the owner's language, the guess first. Question style: "is this what you meant?", never "what do you want?".

**Never.** Interview an owner who has written it down. Ask before reading. Turn a document's statement into a guess, or a guess into a statement. Rewrite what a document says because a newer message contradicts it: that is an Open decision or an `[ask]` on the card, with both sources named.
