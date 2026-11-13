---
kind: library
shelf: domain
group: sector
name: Kids and family
fits when: children use the product or are likely to (games, learning, video, social, toys and devices), or it serves families (parental controls, family organisers, childcare, school-home communication)
related: domains/learning.md, domains/games.md, domains/social-community.md, domains/content-media.md, areas/practices/privacy-consent.md, areas/practices/trust-dark-patterns.md, areas/parts/accounts-profiles.md, areas/platforms/ios.md, areas/platforms/android.md
checked: 2026-11
---
# Kids and family

Products used by children, or by the adults who look after them: games, learning apps, video, kid-safe social spaces, connected toys, parental controls, family calendars, childcare and school-home tools. The tension at its heart: **the user is a child, but consent, payment and responsibility sit with an adult**, and the law expects the product to put the child's interests first, even where engagement or revenue would point elsewhere.

## Questions worth asking

- Is the product aimed at children, a mixed audience, or for adults but likely to be used by children? The answer decides which rules apply; "likely to be accessed" is enough under the UK Age Appropriate Design Code.
- Which ages? Under 13, 13 to 15 and 16 to 17 are treated differently: COPPA (US) covers under-13s; GDPR Article 8 (EU) lets each country set the age of digital consent between 13 and 16.
- How will the product know a user's age, and how sure does it need to be? Self-declaration, parental confirmation and age estimation differ in friction and privacy.
- What data is collected from the child, and is any of it needed? Data minimisation is the default expectation in children's codes.
- Can children talk to strangers, share content or be found? Contact and discovery are where most harm happens.
- Who pays, and how are purchases approved? Store purchase rules and consumer law on marketing to children both apply.
- Will it ship in the App Store Kids category or Google Play's Families programme? Each store adds its own rules on ads, analytics and links.

## Usual shape

### Roles
- child · often · the everyday user; abilities change fast with age
- parent or guardian · often · consents, pays, sets limits, sees activity
- family group · sometimes · several children and adults sharing one subscription or calendar
- teacher, carer or club leader · sometimes · acts for a group of children under a school or organisation
- moderator or trust and safety team · sometimes · needed as soon as children can create or share content

### Journeys
- adult sets up the account, gives consent and creates a child profile with age-based defaults · often · verifiable parental consent under COPPA for under-13s
- play, watch or learn in short sessions · often
- ask a parent: purchase, new contact, more time · often · requests the adult approves elsewhere
- parent reviews activity and adjusts limits · often
- graduating to an older age band or a full account · sometimes · when settings change and why
- deleting the child's data · often · a right under COPPA and GDPR

### Screens
- parent dashboard: profiles, limits, approvals, data · often
- child home with large targets, little text, few choices · often
- parental gate before links, purchases and settings · often · App Store guideline 1.3 for the Kids category
- privacy information written for the child's age · often · expected by the UK and EU codes
- reporting and blocking, simple enough for a child · sometimes · social and multiplayer products

### Rules
- verifiable parental consent before collecting data from under-13s · often · COPPA (US); amended rule with compliance due from April 2026
- high-privacy defaults, no nudges to weaken them, location off by default · often · UK Age Appropriate Design Code (15 standards)
- no profiling-based advertising to minors on online platforms · often · EU Digital Services Act Article 28, with Commission guidelines from 2025
- age assurance and safety measures for content harmful to children · sometimes · UK Online Safety Act codes, enforced by Ofcom since 2025; several US states have age-verification and app-store laws
- no third-party analytics or advertising in kids' apps, with narrow exceptions · often · App Store Review Guidelines 1.3 and 5.1.4; Google Play Families policies
- data retained only as long as needed, with a written policy · often · COPPA and GDPR

## Choices and trade-offs

- **Child-directed or general audience with protections.** Building for children from the start makes the rules part of the design; a general product with an age gate and a younger mode reaches more people and has to prove the mode works.
- **Self-declared age or age assurance.** Asking for a birth date is light and easy to lie about; estimation and verification are stronger and collect more data. Many products match the method to the risk of the feature.
- **Parent-controlled or child-autonomous.** Tight parental control suits young children; teenagers expect privacy, and codes in the UK and EU expect it to grow with age. Telling children when a parent can see their activity is part of the UK code.
- **Subscription or in-app purchases.** A parent-paid subscription keeps money away from the child; in-app purchases earn more and draw complaints and regulator attention when children spend without understanding.

## Watch out

- Streaks, loot boxes, endless feeds and countdowns aimed at children · children's codes and consumer regulators in the UK and EU name such designs as harmful to children
- An SDK that collects device identifiers by default · one advertising or analytics library can break COPPA and store rules
- An age gate that suggests the "right" answer or lets children retry · not a real age check
- Chat with strangers or public profiles on by default · the main route for grooming and bullying
- Parent consent asked once and not revisited · COPPA expects fresh consent when data use changes materially
- Copy and controls designed for adults only · children click what they cannot read

## Go deeper

- [FTC: Children's Online Privacy Protection Rule (COPPA)](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa) · the US rule text, its 2025 amendments and FTC guidance for under-13s
- [ICO: Children's code guidance and resources](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/) · the 15 standards of the UK Age Appropriate Design Code, with design examples
- [European Commission: Guidelines on the protection of minors under the DSA](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-protection-minors) · what EU online platforms are expected to do for minors, from age assurance to defaults
- [Apple: App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · section 1.3 (Kids category) and 5.1.4 (kids' data and parental gates)
- [Google Play: Families policies](https://support.google.com/googleplay/android-developer/answer/9893335) · the rules for apps aimed at children on Android, including ads and SDKs

## Related

- `domains/learning.md` · education products and school use
- `domains/games.md` · play, progression and in-game purchases
- `domains/social-community.md` · contact, sharing and moderation
- `domains/content-media.md` · video and content for children
- `areas/practices/privacy-consent.md` · consent flows and data minimisation
- `areas/practices/trust-dark-patterns.md` · persuasive design that codes for children rule out
- `areas/parts/accounts-profiles.md` · family groups, child profiles, linked accounts
- `areas/platforms/ios.md` · App Store Kids category and Screen Time
- `areas/platforms/android.md` · Google Play Families programme
