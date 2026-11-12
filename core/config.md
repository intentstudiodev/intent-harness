---
kind: template
---
# Config (written at Harness cold start; edit freely)

Nothing is asked at cold start. Every line is detected or a shipped default, and says which. A line is asked the first time a step needs it; the answer replaces the default here.

- language: <detected from the user's first message; files stay English>   # detected
- care: normal            # default · fast · normal · careful — how much Critique, how many questions; asked when the user says you ask too much or too little
- no-owner: carry-on      # default · carry-on with marked assumptions · stop
- write-as-you-go: yes    # default · notes from the first exchange (checkpoint opens sandbox/notes/<date>.md)
- contribute: ask         # default · yes · no · ask — asked the first time an improvement note is about to be sent
- maintainer-repo: intentstudiodev/intent-harness   # default · where share-note opens issues
- coding-agent: <detected from the environment, or —>   # detected
- design-tool: <detected from the survey, or —>          # detected
- format-tool: intent-format        # default · the Intent Format's command
- projects: <filled when the first project is started, or —>
