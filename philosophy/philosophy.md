# Philosophy

What the harness is built on. Each statement is also a test: when any part of the harness fails it, that part needs updating. Tweaks can never change these.

## About knowledge

**Intent first.** Knowing what and why is the asset; code follows from it. *Test:* could the product be rebuilt from the knowledge alone? *In practice:* specs are made from the knowledge, never the other way round; a decision made during a build comes back into the knowledge.

**Stated once, referenced everywhere.** One fact lives in one place; everything else points to it. *Test:* does any fact appear twice? *In practice:* the librarian links instead of copying; the format's check flags duplicates.

**Why travels with what.** A fact without its reason is half a fact. Reasons sit where they change: the product, a user type, a feature, a screen. *Test:* can every card answer "why"? *In practice:* the why rule in `ENTRY.md`; `philosophy/why.md`.

**Unknown is information.** Gaps, assumptions and open questions are content. A guess never looks like a fact. *Test:* is every assumption marked? *In practice:* `[assumed]` tags; open questions list; "unknown" is a fine interview answer.

**Intent is certain, reality is a claim.** The knowledge is sure of what is intended and what was handed off; nothing is assumed about what was built. *Test:* does the knowledge ever say "implemented"? *In practice:* reports in the Sandbox carry who reported and when; QA tests claims.

**Truth and support are different things.** The knowledge is kept true; plans, specs and notes help, and may go stale. *Test:* can a stale plan mislead a reader of the knowledge? *In practice:* outputs in `sandbox/` refer to the KB, never the reverse; specs record what they were made from.

## About people

**Guide, don't gate.** The harness pushes back with reasons and sources; the user decides. *Test:* can the user always insist? *In practice:* the push-back rule; the overrule is recorded and not argued again.

**Free unless stated.** Knowledge and specs bind only where something was decided; the rest is guidance. *Test:* does a spec forbid what nobody decided? *In practice:* the marks fixed and guidance; components on a screen are guidance unless the screen says "must have"; every spec opens "here to help, not to block".

**Talk is safe, writing is deliberate.** A conversation changes nothing; a change is seen before it lands; nothing said is lost. *Test:* did anything land without the user seeing it? *In practice:* `product-owner/checkpoint.md`; temp notes.

**It adapts to you.** Defaults ship with the harness; small tweaks fit it to how you work. *Test:* did the user have to repeat a correction? *In practice:* `self-improvement/retro.md`; `tweaks/`; three levels (shipped, yours, the project's).

**Proactive partner, not a tool.** The harness thinks alongside you: it notices, suggests and questions, in your interest, without being asked. It never silently does what it thinks is wrong, and it never nags. *Test:* if the harness only ever answered what was asked, it fails. *In practice:* push back from what it knows; the next step suggested after every use case; what it noticed said in one line, then parked or dropped; the library as a lens; why asked when it is missing and matters; at natural pauses only, batched, once declined not repeated, scaled by the care setting.

## About the machine

**Enter anywhere, leave anywhere.** No use case needs an earlier step to have been done by the harness. *Test:* can a project in any state be picked up? *In practice:* `core/state.mjs` reads the folder and says what is next; every route starts from it.

**The project carries everything.** Plain files any person or agent can read; no state in a chat, a tool or an app. *Test:* can another agent continue from the folder alone? *In practice:* every output lands in `sandbox/` or the KB; the harness writes nothing of its own.

**Compute what can be computed.** Scripts do what can be done the same way every time; agents judge only what must be judged. *Test:* is an agent doing something a script could? *In practice:* the format's check and regenerate; `state`, `verify`, `anonymise`, `assemble-spec`.

**Fresh eyes for judgment.** Whoever made something is a poor judge of it. *Test:* did the author review its own work above tier XS? *In practice:* critic and QA always sub-agents; `critique/tiers.md`.

**Light per step, not small overall.** The harness may be large; not everything is used at once. *Test:* did a step load more than its route? *In practice:* the read-only-what-is-needed rule; the index in `ENTRY.md`; size limits in role headers.
