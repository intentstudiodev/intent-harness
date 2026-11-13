---
kind: library
shelf: domain
group: model
name: Content and media
fits when: the product publishes or streams content to an audience (articles, news, video, audio, podcasts, newsletters, creator channels), whether made by a staff team or by creators
related: domains/social-community.md, domains/saas-subscription.md, areas/patterns/pricing-paywalls.md, areas/patterns/lists-feeds.md, areas/patterns/media-upload-galleries.md, areas/practices/accessibility.md, domains/marketplace.md
checked: 2026-11
---
# Content and media

A product where the main thing is something to read, watch or listen to: a news site, a streaming service, a podcast app, a newsletter, a creator platform. The heart of it is **attention earned against everything else on the screen**: content has to be found, started and finished, and someone has to be paid for it, by the audience, by advertisers, or both, without making the content worse.

## Questions worth asking

- Who makes the content: an editorial team, licensed partners, independent creators, or all three? Creators bring their own needs: tools, analytics, payouts.
- How is it paid for: advertising, subscription, single purchases, donations, creator memberships? It shapes the paywall and the data collected.
- What format: text, video, audio, live, or mixed? Each has its own player, offline and accessibility needs.
- How do people find what to watch or read next: editors' picks, follows, search, recommendations? The balance is an editorial decision.
- Who owns the rights, and where? Licences are often limited by territory and time.
- Is any of it time-sensitive (news, live events)? Publishing speed and corrections matter more.
- Do people download for offline use? Rights, storage and expiry follow.

## Usual shape

### Roles
- reader, viewer or listener · often · anonymous, registered or paying
- subscriber or member · often · paid access, sometimes household or family plans
- editor or producer · often · plans, edits, schedules and publishes
- creator · sometimes · creator platforms: uploads, audience, earnings
- advertiser or sponsor · sometimes · ad-funded products
- rights and compliance staff · sometimes · licences, takedowns, age ratings

### Journeys
- discover: home, categories, search, recommendations · often
- open and consume: read, play, resume where left off · often
- hit the paywall or registration wall, subscribe · often · metered or hard
- follow a creator, topic or show; get notified of new content · often
- save, download, share · often
- creator or editor publishes: draft, review, schedule, publish, correct · often
- creator sees performance and earnings · sometimes

### Screens
- home with rows or a feed of content, plus search and browse · often
- article page or player · often · with progress and next item
- library or "continue" list · often
- subscription and account · often
- creator or editorial dashboard: drafts, schedule, analytics · often

### Rules
- publishing workflow with roles and approvals · often · newsrooms and brands
- rights windows by region and date · sometimes · licensed catalogues
- captions, transcripts and audio description · often · WCAG expects captions for prerecorded video and alternatives for audio
- copyright takedown process · often · in the US, the DMCA section 512 notice-and-takedown process with a designated agent; in the EU, Article 17 of the copyright directive for content-sharing platforms
- in-app purchase rules for digital content · often · Apple's guideline 3.1.3(a) on "reader" apps sets what may be sold or linked outside the App Store

## Choices and trade-offs

- **Ads or subscriptions.** Ads keep content open and reward reach, which can pull toward clickbait; subscriptions reward loyalty and depth and limit audience. Many mix both with a meter.
- **Hard paywall, metered or freemium.** A hard wall protects value and limits discovery; a meter lets people sample; freemium keeps some content always free.
- **Editorial or algorithmic discovery.** Editors give a point of view and do not scale per person; recommendations personalise and can narrow what people see. Many products blend the two and show which is which.
- **Own player and hosting or a third-party platform.** Own gives control of data and experience at the cost of streaming infrastructure; hosted video and audio services are quick and set limits.
- **Staff-made or creator-made.** Staff content is consistent and costly; creators scale supply and bring moderation, rights and payout work (see marketplace for the payout side).

## Watch out

- Paywall or cookie walls that cover the content before people know what it is · bounce rates rise and search engines may treat it as poor
- Losing the playback position across devices · the most basic promise of a media app
- Captions and transcripts left for later · excludes deaf and hard-of-hearing people, and many watch on mute
- Recommendations that only repeat what was watched · the catalogue feels smaller than it is
- No corrections workflow · errors spread and stay live
- Cancelling a subscription harder than starting it · see SaaS and subscriptions for the rules on renewals

## Go deeper

- [Reuters Institute Digital News Report 2025](https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025) · yearly research on how people find, use and pay for news across many countries
- [W3C WAI: making audio and video media accessible](https://www.w3.org/WAI/media/av/) · captions, transcripts and audio description in practice
- [US Copyright Office: Section 512](https://www.copyright.gov/512/) · the US safe harbour and notice-and-takedown system
- [European Commission: copyright legislation](https://digital-strategy.ec.europa.eu/en/policies/copyright-legislation) · the EU copyright directive and guidance on Article 17 for content-sharing platforms
- [Apple App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · guidelines 3.1.1 and 3.1.3(a) on selling digital content and reader apps

## Related

- `domains/social-community.md` · when the audience talks back and makes content too
- `domains/saas-subscription.md` · subscription mechanics behind memberships
- `areas/patterns/pricing-paywalls.md` · meters, walls and upgrade prompts
- `areas/patterns/lists-feeds.md` · rows, feeds and "continue" lists
- `areas/patterns/media-upload-galleries.md` · uploads for creators
- `areas/practices/accessibility.md` · captions, transcripts and players
- `domains/marketplace.md` · paying creators as a supply side
