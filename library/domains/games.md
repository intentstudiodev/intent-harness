---
kind: library
shelf: domain
group: model
name: Games
fits when: the product is a game, and the work is on the systems around play (player accounts, progression and saves, stores and virtual currency, friends, leaderboards, events, moderation), not the game design itself
related: areas/parts/accounts-profiles.md, areas/parts/payments-checkout.md, areas/practices/trust-dark-patterns.md, domains/social-community.md, domains/kids-family.md
checked: 2026-11
---
# Games

A game is more than its play: around it sit accounts, saved progress, a store, currencies, friends, leaderboards, seasonal events, reports of abuse and a live team changing things every week. This file covers those **surrounding systems**, not how to make play fun. The tension is that the systems that earn money and keep players coming back (offers, streaks, random rewards) are also the ones regulators and players most distrust, and many players are children.

## Questions worth asking

- How does the game earn money: up-front price, in-app purchases, subscription or pass, ads, or a mix? It decides the store, the currencies and the rules that apply.
- Is it a live game with regular updates and events, or a finished product? Live games need content tools, remote configuration and a calendar.
- Who plays: which ages, and could children play even if they are not the target? Children's privacy and purchase rules change defaults.
- Where does it run: phone, console, PC, browser, several at once? Store rules differ, and progress across platforms is a recurring request.
- Are there random paid rewards (loot boxes, gacha)? Odds disclosure is a store rule and some countries restrict them further.
- Do players talk to each other: chat, voice, trading, user-made content? Then moderation, reporting and blocking are part of the product.
- What is the source of truth for progress and inventory: the device or a server? It decides cheating, recovery and cross-play.

## Usual shape

### Roles
- player · often · from guest to long-term paying player
- parent or guardian · sometimes · consent, spending limits, chat settings
- live-operations staff who run events, offers and balance · often
- support and moderation staff · often · refunds, bans, reports
- creator or streamer · sometimes · shares codes, makes content

### Journeys
- start as a guest, link an account later · often · keeps the first minutes short
- save and restore progress, including on a new device · often · losing progress is the top complaint
- earn and spend currency, buy items or passes · often
- daily return and seasonal events: rewards, quests, streaks, a pass with a fixed end · often
- add friends, join a party, play together · sometimes
- report a player, block, appeal a ban · sometimes
- request a refund or restore purchases · often

### Screens
- title screen with account linking, and a player profile with stats and achievements · often
- store with bundles, prices and currency balances · often
- inventory and loadout · sometimes
- friends, party, chat, leaderboards and rankings · sometimes
- event and season pass progress · sometimes
- settings: controls, audio, accessibility, privacy, parental controls · often

### Rules
- odds shown before purchase for randomised paid items · often · required by the App Store and Google Play
- purchased currency does not expire · sometimes · a rule of Apple's App Store; check each store
- account deletion available in the app if accounts can be created · often · an App Store requirement
- age rating per region (ESRB, PEGI, USK and others), often through IARC on digital stores · often
- server checks on purchases, rewards and progress · often · client-side values get edited
- regional prices and taxes set per store · often

## Choices and trade-offs

- **Premium or free-to-play.** A price up front makes the deal simple and limits reach; free-to-play reaches more players and puts pressure on every design decision to earn money.
- **One currency, two, or none.** Spending real money directly is transparent; a premium currency eases pricing across regions and obscures what things cost, which regulators notice.
- **Random rewards or direct purchase.** Random rewards can earn more per player and bring odds rules, age concerns and bans in some places; direct purchase is clear and easier to defend.
- **Device saves or cloud accounts.** Local saves need no backend and are lost with the phone; cloud accounts allow recovery and cross-play and bring sign-in, support and data duties.
- **Open chat, limited chat or none.** Open chat builds community and needs moderation at scale; preset phrases or friends-only chat suit younger audiences.

## Watch out

- Purchase buttons where accidental taps happen · unwanted charges, refunds and regulator attention; the FTC's case against a large game maker cites this
- Voice and text chat on by default for young players · exposure to strangers and harm; the same case cites it
- Progress tied only to one device · a lost phone becomes a lost customer and a support ticket
- Offers and timers designed to rush spending · trust drops, and consumer authorities treat some of these as unfair practices
- Accessibility left to the end · subtitles, remapping and colour options are hard to add late and shut out many players
- Banning accounts that dispute charges · it was another point in the same FTC case

## Go deeper

- [Apple App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · in-app purchase, loot-box odds, currency, mini games and account deletion rules for iOS
- [Google Play: Payments policy](https://support.google.com/googleplay/android-developer/answer/9858738?hl=en) · Google Play's billing rules and odds disclosure for randomised items
- [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/) · practical accessibility practices in basic, intermediate and advanced tiers
- [US FTC: Epic Games settlement press release (2022)](https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations) · US: children's privacy, chat defaults and purchase dark patterns in one case
- [International Age Rating Coalition (IARC)](https://www.globalratings.com/) · how digital games and apps get regional age ratings through one questionnaire

## Related

- `areas/parts/accounts-profiles.md` · guest accounts, linking and profiles
- `areas/parts/payments-checkout.md` · store purchases and refunds
- `areas/practices/trust-dark-patterns.md` · offers and timers that cross the line
- `domains/social-community.md` · friends, chat and moderation
- `domains/kids-family.md` · children's privacy, parental consent and controls
- `areas/practices/accessibility.md` · beyond game-specific guidelines
