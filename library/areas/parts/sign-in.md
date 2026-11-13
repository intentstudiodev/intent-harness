---
kind: library
shelf: part
name: Sign-in
fits when: people need an account to use the product, or to come back to their data on another device
related: areas/parts/accounts-profiles.md, areas/parts/roles-permissions.md, areas/practices/security-basics.md, areas/patterns/onboarding.md, areas/patterns/forms-validation.md
checked: 2026-11
---
# Sign-in

How people prove who they are: creating an account, signing in, staying signed in and getting back in when something is lost. Passwords, passkeys, emailed links and outside providers can sit side by side. The tension: every extra step keeps attackers out and also keeps some real people out, and the recovery path is usually the weakest door.

## Questions worth asking

- Is an account needed at all, or can people use the product first and sign up later? Apple's App Review Guidelines (5.1.1) ask apps without significant account features to work without a login.
- Who are the users: consumers on their own phones, staff on shared machines, a company with its own identity provider? It decides passkeys, providers and single sign-on.
- What identifies a person: email, phone, username, or an outside provider's ID? Which of these has to be unique?
- What is lost if an account is taken over: a playlist, money, health data, someone else's data? That sets how strong sign-in and recovery need to be.
- How do people get back in when they lose a password, a phone or an email address? Recovery is part of the design, not an afterthought.
- Is the app on the App Store with outside sign-in providers? Guideline 4.8 then applies (see Conventions).

## Usual shape

### Anatomy
- sign in and create account, as one flow or two · often · one email-first screen that branches is common
- email and password · often · the baseline many people still expect
- passkeys (WebAuthn / FIDO2) · often · phishing-resistant, no secret to remember; offered at sign-up, after sign-in or in settings
- passkey suggestions in the browser's autofill (conditional mediation) · sometimes · lets passkeys and passwords share one field
- emailed magic link or one-time code · sometimes · no password to forget; the inbox becomes the key
- sign in with a provider (Apple, Google, Microsoft, a company SSO via OIDC or SAML) · sometimes · depends on audience and platform
- second factor: authenticator app, passkey or security key, SMS code · sometimes · common for admin, money and work products
- recovery: reset link, recovery codes, a second enrolled method, support review · often
- signed-in devices list with sign-out · sometimes · usually lives in account settings
- verify email · sometimes · when email needs to be trusted for recovery or messages

### Conventions
- password rules from NIST SP 800-63B-4 (US, 2025) · often · at least 15 characters when the password is the only factor, 8 when part of multi-factor; allow at least 64; no composition rules; no forced periodic changes; check against breached and common passwords; allow paste and password managers; no hints or security questions
- SMS and email codes used knowing their limits · sometimes · NIST classes SMS and voice codes as "restricted" and does not count email as an authenticator; many consumer products still use both, knowing the trade-off
- the same message whether the account exists or not, on sign-in, sign-up and reset · often · OWASP: stops account enumeration
- limit failed attempts per account, with delays rather than hard lockouts · often · NIST allows at most 100 consecutive failures before disabling
- ask again before risky changes (email, password, second factor) and notify the old address · often
- word it "passkey" and let people name, see and remove them in settings · often · FIDO Alliance design guidelines
- an equivalent privacy-friendly option beside third-party or social login · often · Apple guideline 4.8: the option limits data to name and email, lets people hide their email and does not track for ads without consent; Sign in with Apple is one such option; exceptions include the company's own sign-in only, enterprise and education accounts, and government ID

## Choices and trade-offs

- **Passwords, passkeys, or both.** Passkeys remove phishing and reuse but not every person or device has them yet; most products keep a fallback and offer the passkey once someone is signed in. Synced passkeys survive a lost phone; device-bound ones (security keys) are stronger and easier to lose.
- **Magic link or code.** A link is one tap on the same device and awkward across devices; a short code works across devices and is easier to phish. Both are only as strong as the inbox.
- **Own accounts or providers.** Providers speed up sign-up and add a dependency: a person who forgets which provider they used, or loses that account, is stuck. Sign in with Apple can hand over a relay address, so mail to it needs a registered sending domain.
- **Long sessions or short ones.** Staying signed in suits personal phones; shared or work devices need shorter sessions and a visible sign-out. Ask again for sensitive actions instead of shortening everything.

## Watch out

- Recovery weaker than sign-in · a strong passkey means little if a reset email or SMS gives the account away
- "Account exists, but you used Google" with no way through · the most common confusion; link methods to one account or say which one was used
- Rejecting long passwords, blocking paste or demanding symbols · pushes people to weak, reused passwords; NIST advises against all three
- Security questions · guessable and public; NIST and OWASP both advise against them
- Making a second factor mandatory without recovery codes or a second method · lost phone, lost account, support queue
- Forgetting other doors: API tokens, the mobile app, old endpoints · attackers use the path without the second factor

## Go deeper

- [NIST SP 800-63B-4: Authentication and Authenticator Management](https://csrc.nist.gov/pubs/sp/800/63/b/4/final) · the US baseline (final, July 2025): passwords, passkeys as syncable authenticators, SMS, rate limits, phishing resistance
- [W3C Web Authentication Level 3](https://www.w3.org/TR/webauthn-3/) · the passkey standard, a Recommendation at the time of checking (2026-11): discoverable credentials, user verification, autofill sign-in
- [FIDO Alliance design guidelines (Passkey Central)](https://www.passkeycentral.org/design-guidelines/) · tested patterns and wording for creating and using passkeys
- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · 4.8 login services and 5.1.1 on when an app may ask for an account
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) · generic errors, throttling, reset and re-authentication
- [OWASP Multifactor Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html) · when to ask for a second factor and how to reset it safely

## Related

- `areas/parts/accounts-profiles.md` · what the account holds once someone is in, and deleting it
- `areas/parts/roles-permissions.md` · what a signed-in person may do
- `areas/practices/security-basics.md` · sessions, tokens and secrets behind the screens
- `areas/patterns/onboarding.md` · when to ask for an account in the first minutes
- `areas/patterns/forms-validation.md` · field behaviour and error messages
