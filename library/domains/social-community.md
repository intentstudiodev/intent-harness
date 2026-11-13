---
kind: library
shelf: domain
group: model
name: Social and community
fits when: people create profiles, post, follow, react to and discuss each other's content, publicly or in groups (social networks, forums, interest communities, member communities)
related: domains/messaging.md, domains/content-media.md, areas/patterns/lists-feeds.md, areas/parts/accounts-profiles.md, areas/parts/admin-back-office.md, areas/practices/trust-dark-patterns.md, domains/kids-family.md
checked: 2026-11
---
# Social and community

A product whose content comes mostly from its members: posts, comments, questions, photos, reactions, groups. The heart of it is **a shared space that has to stay worth visiting**: it grows only when people contribute, and it stays healthy only when the few who harm it are handled quickly and fairly, without silencing the many.

## Questions worth asking

- Is it a broad network (people follow people) or a community (people join around a topic, place or membership)? Feeds, discovery and moderation differ a lot.
- Public, private, or both, and can a post's audience change after posting? Visibility decides how far one post can travel.
- What do members create: short posts, long threads, questions and answers, media? It decides the main screens.
- How is the feed ordered: newest first, ranked, or chosen by the member? Ranking is a product decision with social consequences.
- Who moderates: staff, volunteer moderators, the community through reports and votes, automated filters? Usually a mix.
- How are newcomers kept from facing an empty or hostile space? Cold start and first replies decide whether they stay.
- Will children or teenagers use it? Age rules and safety duties change the whole design (see kids and family).

## Usual shape

### Roles
- member who reads and posts · often · most read far more than they post
- new member · often · needs a reason to stay before they have friends or reputation
- moderator, staff or volunteer · often · removes content, warns, bans, answers appeals
- group or space owner · sometimes · runs a sub-community with its own rules
- trusted or high-reputation member · sometimes · more rights earned through contribution

### Journeys
- join, set up a profile, pick interests or groups · often
- read a feed and react · often · the daily loop
- create a post or reply · often · drafting, media, mentions
- follow, join, mute, block · often · members shape their own space
- report content or a person, see the outcome · often
- get notified about replies and mentions · often · the main reason people return
- appeal a moderation decision · sometimes · required for many services in the EU under the DSA

### Screens
- feed or community home · often
- post detail with its thread of replies, and a view to create or edit a post · often
- profile with posts and activity · often
- group or space page with its rules · sometimes
- notifications · often
- moderation queue and member records · often · see admin and back office

### Rules
- community guidelines that say what is and is not allowed · often · the basis for every moderation action
- a way to report, block and filter · often · Apple's App Store requires these for apps with user-generated content (guideline 1.2)
- an explanation when content is removed and a route to appeal · often · expected under the EU Digital Services Act and the Santa Clara Principles
- rate limits and new-account limits · often · spam and abuse arrive in waves
- illegal content and child safety duties · often · the UK Online Safety Act sets risk assessment and safety duties for user-to-user services

## Choices and trade-offs

- **Chronological or ranked feed.** Chronological is predictable and easy to explain; ranked surfaces more relevant posts and invites questions about why. Some products offer both.
- **Real names or pseudonyms.** Real names can reduce some abuse and expose vulnerable people; pseudonyms protect members and need stronger moderation.
- **Central or distributed moderation.** Staff moderation is consistent and costly; volunteer moderators scale with the community and need tools, support and clear limits.
- **Open sign-up or invitation.** Open grows fast and lets problems in; invitation or approval keeps quality and slows growth.
- **Public metrics or hidden.** Visible likes and followers motivate posting and create pressure; hiding them changes behaviour in both directions.

## Watch out

- Launching to an empty space · the first visitors see nothing and leave; many launches seed content and early members first
- Moderation added after growth · the norms are already set and hard to change
- Reports that vanish without an answer · members stop reporting and decide the space is unsafe
- Block that does not fully block (mentions, replies, search still reach the person) · abuse continues and trust ends
- Engagement tuned only for time spent · outrage and conflict rise, then members leave
- Deleting an account that leaves orphaned replies or keeps data · privacy complaints and confused threads

## Go deeper

- [EU Digital Services Act (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act) · EU duties for platforms: notice and action, statements of reasons, appeals
- [UK Online Safety Act explainer (GOV.UK)](https://www.gov.uk/government/publications/online-safety-act-explainer/online-safety-act-explainer) · which services are in scope and the main UK safety duties
- [The Santa Clara Principles](https://santaclaraprinciples.org/) · a widely cited baseline for moderation transparency: numbers, notice and appeal
- [Trust and Safety Professional Association: fundamentals](https://www.tspa.org/curriculum/ts-fundamentals/) · the field of trust and safety: policy, enforcement, tooling, safety by design
- [Apple App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · guideline 1.2 on user-generated content: filtering, reporting, blocking, contact details

## Related

- `domains/messaging.md` · private conversations between members
- `domains/content-media.md` · when creators publish to an audience rather than talk with peers
- `areas/patterns/lists-feeds.md` · the feed itself
- `areas/parts/accounts-profiles.md` · profiles and identity
- `areas/parts/admin-back-office.md` · moderation queues and tools
- `areas/practices/trust-dark-patterns.md` · engagement without manipulation
- `domains/kids-family.md` · when young people use it
