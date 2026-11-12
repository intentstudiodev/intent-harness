# Harness cold start

The first run of the harness on a computer: once, not once per project. It asks nothing that can be detected or defaulted; most users answer zero questions. Re-run when the environment changes; `state.mjs` flags drift at every session start. It has no retro: the setup record is the record.

## Steps

1. **Say hello first**, in your own words, in the user's language, close to this (short sentences, who speaks, what happens next, what the user may answer):

   > Hi, I'm the Intent Harness, working through your coding agent. I keep your product's knowledge — what it is, how it works, why, and what is still open — as plain markdown cards in the Intent Format, so you, your team and your tools always read the same thing.
   >
   > This is my first run on this computer, so I'm setting myself up: checking your tools and the format. No questions; it takes a minute. One thing to confirm when I'm done: the line that tells your agent to read me first.

   Nothing is written to a project without your yes; this setup only writes inside the harness and can be redone.
2. **Detect** what the config needs (`core/config.md`): the language from the message the user wrote; the coding agent from the environment you run in; whether a question widget exists (Claude Code: the AskUserQuestion tool → `question widget: yes` in the setup record, else `no`); the design tool and other tools from step 3. Everything else takes its shipped default. No question here: a config line is asked the first time a step actually needs it (for example `contribute` when the first improvement note is about to be sent, `care` when the user says you ask too much or too little).
3. **Survey the environment** (read only; list, do not open contents): a repository; existing agent instructions (`AGENTS.md`, `CLAUDE.md`, `.cursor/`, `.codex/`); docs, specs, designs; a design library or tokens; a tech stack; an older KB; installed skills (`.claude/skills`, `.agents/skills`, plugin lists) and MCP servers; the format's tool (`intent-format`).
4. **Conflicts.** Only where an existing instruction contradicts a harness rule: show both and ask which wins. Record the answer as a tweak (`tweaks/entry.md`). No conflict → nothing to ask.
5. **Connectors.** For designer, developer and QA: note in the setup record which skills from `<module>/connector.md` (`design/`, `build/`, `qa/`) were found installed. Picking one per case happens the first time a Design, Build or QA route runs, not here. Found skills stay where they are. The shipped connector files are never edited.
6. **Write** `tweaks/config.md` from `core/config.md` (detected values and defaults, each line saying which) and `tweaks/setup-record.md` from `core/setup-record.md`: found, detected, defaults, conflicts, connectors, date. Both live in the harness, not in a project: they are about this computer.
7. **Wire in.** Offer to add one line to the environment's own agent instructions, without overwriting anything: `Read <harness>/ENTRY.md first.` This is the one question most users get, because it writes into their file. Through the question widget when there is one: *Add one line to your AGENTS.md so I'm read first?* · Yes, add it · I'll do it myself · Not now.
8. **Offer the first use case**, in the same voice, saying what you saw: Reverse engineer if a product or repo exists ("I see a repository, so I'd read it first and ask you only what the code can't tell"), Pick up if a KB exists, otherwise the one-question hello of `knowledge/start-project.md` (Which start): where does the product stand — an idea, being made, or already running; the answer decides between Start a project, Catch up and Map what exists. One line of what happens next, then stop and wait.

## Never

Ask what you can detect or default. Change `philosophy/philosophy.md`, the format, or any shipped file. Install anything. Send anything.
