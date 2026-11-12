# Area: sign-in
sources: general practice; to be replaced by surveyed sources

## user types
- returning user · usually · comes back often, wants speed
- new user · usually · must find "create account" without being pushed into it
## journeys
- sign in with email and password · usually · the baseline everyone expects
- sign in with a provider (Google, Apple) · sometimes · depends on audience and platform rules
- magic link · sometimes · removes passwords; needs email to be reliable
- forgot password · usually · without it support tickets follow
## screens
- sign-in · usually
- create account · usually
- reset password (request + set new) · usually
- verify email · sometimes · only if email must be trusted
## rules
- never say whether an email exists · usually · account enumeration
- lock or slow after repeated failures · usually · brute force
- keep the user signed in by default on personal devices · sometimes · product decision
## edge cases
- wrong password · usually
- account exists but used a provider · usually · the most common confusion
- expired reset link · usually
- offline on submit · sometimes
## integrations
- email sending · usually
- identity providers · sometimes
## ask early
- Is an account required at all, or can the product be used before signing in?
- Which identities must be unique: email, phone, username?
## common mistakes
- building sign-up before knowing why users would create an account · it decides the whole flow
- a provider sign-in without a fallback · locks users out when the provider changes rules
## practice
- states before polish: error, loading, disabled · they are where users get stuck
