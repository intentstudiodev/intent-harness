---
kind: skill
name: intake
description: Saves anything the user hands over into inputs/, as given, with one header line, and routes it to its reader. Step 1 of read-input and reverse-engineer. Saving decides nothing about the product.
---
# intake

**Everything lands in `inputs/`.** A paste, a drop, "here is the brief", "look at this": all of it goes to `inputs/<date>-<short-title>.<ext>`, exactly as given. `inputs/` is the format's folder for evidence; a card cites a file there with a Source link. Saving a file says nothing about the product — only a card does — so what the user says about a file cannot be wrong.

1. **Save or link.** A file or a paste is written at once, without a checkpoint; losing it is the worse outcome. Pasted text gets one header line above the verbatim text: `handed over by: <who> · date: <date> · source: <what the user named, or —>`. A binary (image, PDF, export) is copied as is; its header line goes into `inputs/links.md` beside the file name. Something that lives elsewhere (a repository, a running product, a Figma file, a URL) is one line in `inputs/links.md`, not a copy.
2. **Type it**, in the same header line: `type: text · file · screenshot · link · recording · transcript · repo · product · export · spec · competitor · data · feedback · conversation` · `whose: ours` (states or shows our product) · `reference` (someone else's; never enters the KB as ours) · `shows: exists` (a result: code, a product, a screenshot) · `wanted` (an intent: a brief, a spec). Ask only when you cannot tell and it matters now; one question.
3. **Route.** `wanted` → `research/read-input.md`; `exists` → `research/reverse-engineer.md`; `feedback` and `data` → read-input with counting; a `reference` of any type → reverse-engineer with purpose `reference`.
4. Say what was saved where, in one line. Nothing else is written.

Files in `inputs/` are never moved, renamed or deleted; a card that cites one depends on its path. A file no card cites is still kept: the state script lists it as not yet cited.
