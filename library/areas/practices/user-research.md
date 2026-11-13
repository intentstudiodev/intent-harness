---
kind: library
shelf: practice
name: User research
fits when: the team is deciding what to build, checking whether a design works, or trying to understand why people behave as the numbers show
related: areas/practices/analytics-experiments.md, areas/practices/accessibility.md, areas/practices/privacy-consent.md, areas/patterns/onboarding.md
checked: 2026-11
---
# User research

Learning from the people a product is for, by talking to them, watching them use it, or asking many of them a few questions. Even a small team can do it in hours rather than weeks: five usability sessions find most of the obvious problems, and a handful of good interviews can change a roadmap. The tension: research slows a team down in the short term and saves it from building the wrong thing; and what people say they do differs from what they actually do.

## Questions worth asking

- What decision is this research for? A question without a decision behind it tends to produce a report nobody uses.
- Is the question about the problem (do people need this, how do they do it today) or the solution (can they use what we made)? They call for different methods.
- Who are the participants, and can the team reach them? Recruiting is often the slowest part; existing customers, support contacts and communities are a start.
- How much time and money is there? A week and no budget still allows a few interviews and a quick test.
- Who will watch or read the sessions? Teams that see people struggle first-hand act on it faster than teams that read a summary.
- What personal data will be collected, and how is consent handled? Recordings and notes are personal data.

## Usual shape

### Anatomy
- interviews about people's work, habits and problems · often · early, before building; asks about past behaviour, not opinions of an idea
- moderated usability tests: a person tries real tasks while thinking aloud · often · on prototypes or the live product; about five people per round
- unmoderated remote tests · sometimes · faster and cheaper, no follow-up questions
- surveys · sometimes · to measure how common something is once you know what to ask; weak for discovering new problems
- reading support tickets, reviews and sales calls · often · free and continuous
- analytics alongside research · often · numbers show where, sessions show why (see analytics and experiments)
- diary studies and field visits · sometimes · long or physical processes, workplace tools
- card sorting and tree testing · sometimes · naming and structuring navigation
- a research log or repository of findings · sometimes · so insights survive beyond the people who heard them

### Conventions
- a short plan: the decision, the questions, the participants, the tasks · often
- questions about specific past events ("Tell me about the last time you…") rather than hypotheticals ("Would you use…") · often · people are poor predictors of their own future behaviour and polite about ideas
- small rounds repeated after each change rather than one large study · often · per Nielsen Norman Group's guidance on test size
- three or more participants per distinct user group · often · different groups find different problems
- informed consent, and recordings stored and deleted on purpose · often · GDPR applies to research participants in the EU and UK
- including disabled participants · sometimes · finds what automated accessibility checks miss
- incentives for participants' time · often · gift cards, credits or donations

## Choices and trade-offs

- **Interviews or surveys.** Interviews explain why and uncover what you did not think to ask, with few people; surveys count how many, and only answer the questions you wrote.
- **Moderated or unmoderated tests.** Moderated sessions allow follow-up and catch confusion as it happens; unmoderated ones scale and suit simple, well-defined tasks.
- **Test the prototype or the live product.** Prototypes are cheap to change and good for direction; the live product finds real-data, speed and edge-case problems.
- **Continuous or project-based.** A habit of a conversation or two every week keeps the team close to users; a focused study before a big decision goes deeper. Many teams do some of each.
- **Researcher or whole team.** A dedicated researcher brings method and rigour; small teams often research themselves, which works with a simple guide and someone else checking for leading questions.

## Watch out

- Asking people if they would use or pay for an idea · polite yeses that predict nothing
- Leading questions and helping during tests · the team hears its own hopes back
- Recruiting only friendly or expert users · problems for newcomers and edge cases stay hidden
- Surveys used to discover problems · you only learn about the options you thought of
- Large, rare studies whose report arrives after the decision · research becomes ceremony
- Findings kept in one person's head or a forgotten folder · the same questions get researched again

## Go deeper

- [Nielsen Norman Group: when to use which research method](https://www.nngroup.com/articles/which-ux-research-methods/) · a map of methods by what people say or do, and by question type
- [Nielsen Norman Group: why you only need to test with 5 users](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) · the case for small, repeated usability tests, and its caveats
- [The Mom Test, Rob Fitzpatrick](https://www.momtestbook.com/) · asking about real past behaviour so interviews give honest answers about an idea
- [GOV.UK Service Manual: user research](https://www.gov.uk/service-manual/user-research) · practical guides to planning, recruiting, consent, methods and analysis
- [Continuous Discovery Habits, Teresa Torres](https://www.producttalk.org/continuous-discovery-habits/) · weekly customer contact as a routine for a product team

## Related

- `areas/practices/analytics-experiments.md` · the quantitative side; tests when traffic allows
- `areas/practices/accessibility.md` · research with disabled people
- `areas/practices/privacy-consent.md` · consent and personal data of participants
- `areas/patterns/onboarding.md` · first-use tests are among the most revealing
