---
kind: library
shelf: domain
group: model
name: Learning
fits when: people learn something through the product (online courses, tutoring, language practice, professional training, company onboarding and compliance training)
related: domains/kids-family.md, domains/content-media.md, domains/booking.md, domains/marketplace.md, areas/patterns/onboarding.md, areas/practices/accessibility.md, areas/parts/roles-permissions.md
checked: 2026-11
---
# Learning

A product that helps adults or older learners gain a skill or knowledge: a course platform, a tutoring service, a language app, a company's training portal. The heart of it is **progress that is real, not just felt**: finishing lessons is easy to measure and easy to game, while actual learning needs practice, feedback and time, and most learners drop out long before the end.

## Questions worth asking

- Who is the learner, and who else cares about their progress: an employer, a teacher, an accrediting body? Each wants a different view.
- Self-paced, cohort-based, or live with a tutor? It changes scheduling, community and the cost per learner.
- How is learning checked: quizzes, assignments marked by people, practice with feedback, a final exam? It decides what "done" means.
- Is there a certificate, and does anyone outside rely on it? Proctoring and identity checks follow if they do.
- Who makes the content: one team, many instructors, the learners' own employer? Many instructors make it a marketplace.
- Does it need to plug into an existing learning platform (an LMS) or report to one? Standards such as LTI, SCORM and xAPI exist for this.
- Are learners under 18, or is it used in schools? Then the kids and family file applies, with its own laws and consent rules.

## Usual shape

### Roles
- learner · often · enrols, studies, practises, gets feedback
- instructor or tutor · often · creates content, marks work, answers questions
- training manager or admin · sometimes · company training: assigns courses, tracks completion
- course author or content team · sometimes · builds courses separately from teaching them
- reviewer or examiner · sometimes · marks assessments, issues certificates

### Journeys
- find a course or get one assigned, enrol, possibly pay · often
- study a lesson and practise · often · video, reading, exercises
- take a quiz or submit an assignment, get feedback · often
- see progress and what comes next · often
- come back after a break · often · reminders and "resume" matter more than new content
- finish and receive a certificate · sometimes
- book a live session with a tutor · sometimes · see booking

### Screens
- catalogue or "my learning" list · often
- course outline with progress · often
- lesson view: video, text, exercise · often
- quiz or assignment, then feedback and grades · often
- instructor or admin dashboard: learners, submissions, completion · often
- discussion or cohort space · sometimes

### Rules
- prerequisites, unlock order and deadlines · sometimes · guided paths, cohorts and compliance training
- passing scores and retake limits · often · when a certificate depends on them
- completion tracked and reported to an employer or LMS · sometimes
- accessibility of course material · often · public institutions in the US face the ADA Title II web rule (WCAG 2.1 AA); many other buyers ask for WCAG too
- learner records privacy · sometimes · in the US, FERPA covers education records at institutions that receive federal education funding

## Choices and trade-offs

- **Self-paced or cohort.** Self-paced scales and fits busy adults, and most learners do not finish; cohorts and deadlines raise completion and cost scheduling and staff.
- **Content-first or practice-first.** Videos and reading are easy to produce; frequent practice with feedback (retrieval, spacing) is better supported by learning research and harder to build.
- **Automatic or human feedback.** Automatic marking is instant and suits facts and code; human or AI-assisted feedback suits writing and judgement, at a cost in time or trust.
- **Streaks and points or not.** Gamification can build a habit and can turn learning into protecting a streak. It depends on whether the habit or the skill is the goal.
- **Standalone or plugged into an LMS.** Standalone gives full control of the experience; plugging in (LTI, xAPI) is often what schools and companies need to buy.

## Watch out

- Measuring completion as learning · people click through and nothing changes; check with practice or assessment
- Long videos as the only format · attention drops and there is nothing to practise
- No path back after a missed week · learners feel behind and quit; a gentle restart helps
- Certificates that anyone can earn without identity checks · employers stop trusting them
- Treating instructors as content uploaders · marking, questions and feedback are most of the work
- Course material that is not accessible · excludes learners and blocks sales to public bodies

## Go deeper

- [The Learning Scientists: six strategies for effective learning](https://www.learningscientists.org/downloadable-materials) · spaced practice, retrieval, interleaving and more, explained from cognitive research
- [1EdTech: Learning Tools Interoperability (LTI)](https://www.1edtech.org/standards/lti) · how tools launch inside an LMS and send grades back
- [xAPI overview (xapi.com)](https://xapi.com/overview/) · tracking learning activity beyond SCORM, and what a learning record store does
- [ADA.gov: web and mobile accessibility rule](https://www.ada.gov/resources/2024-03-08-web-rule/) · US accessibility duties for state and local governments, including public colleges, and the compliance dates
- [US Department of Education: FERPA](https://studentprivacy.ed.gov/ferpa) · the US rules on education records and who may see them

## Related

- `domains/kids-family.md` · schools, minors and parental consent
- `domains/content-media.md` · when the product is mostly video or reading
- `domains/booking.md` · scheduling live lessons and tutoring
- `domains/marketplace.md` · many instructors selling to many learners
- `areas/patterns/onboarding.md` · the first lesson as onboarding
- `areas/practices/accessibility.md` · accessible course material and players
- `areas/parts/roles-permissions.md` · learners, instructors, admins
