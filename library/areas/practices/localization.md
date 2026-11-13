---
kind: library
shelf: practice
name: Localization
fits when: the product is, or may soon be, used in more than one language, country, currency or time zone
related: areas/practices/microcopy-content.md, areas/practices/responsive-layout.md, areas/practices/accessibility.md, areas/patterns/forms-validation.md, areas/parts/payments-checkout.md
checked: 2026-11
---
# Localization

Two linked jobs. **Internationalization (i18n)** prepares the product so it can work anywhere (text kept out of code, layouts that stretch, dates, numbers and plurals handled by locale rules); **localization (l10n)** adapts it for one market (translation, formats, currency, imagery, legal text, sometimes features). The tension: i18n is cheap early and painful to retrofit, while full l10n for a market nobody has confirmed is wasted effort.

## Questions worth asking

- Which languages and countries first, and which are likely later? Right-to-left scripts or East Asian languages change more than a second European language does.
- Is a locale one setting, or separate ones for language, region, currency and time zone? A German speaker living in Spain and paying in euros is common.
- Who translates: staff, a vendor, a translation platform, machine translation with review? It decides the workflow and the file format.
- Do prices, taxes, payment methods or legal texts differ per country? That is product work, not translation.
- What content is user-generated or comes from other systems? It arrives in any language and direction.
- How is a missing translation shown: fall back to a default language, or block the release?

## Usual shape

### Anatomy
- strings in resource files keyed by ID, rather than assembled from fragments · often · translators need whole sentences
- a message format with placeholders, plurals and gender or select rules · often · ICU MessageFormat or a platform equivalent
- plural rules from Unicode CLDR · often · English has two forms; Arabic has six, Polish four, Japanese one
- dates, times, numbers and lists formatted by locale APIs · often · `Intl` on the web, Foundation and ICU on Apple and Android
- currency with its own code, decimals and symbol placement · often · amounts stored as integers in minor units plus a currency code
- time stored in UTC plus the relevant zone, shown in the viewer's or the place's zone · often
- a language picker that names each language in itself ("Deutsch", not "German") · often
- right-to-left layout support · sometimes · Arabic, Hebrew, Persian, Urdu markets
- pseudo-localization in development (accented, lengthened text) · sometimes · finds hard-coded strings and clipped layouts before translators do
- translation management system and translator context (screenshots, character limits, notes) · sometimes · beyond a few languages

### Conventions
- room for text expansion: short labels can grow two to three times in translation, paragraphs around a third · often · per the W3C's text-size article
- names, addresses and phone numbers in free or locale-aware formats · often · first name and last name fields do not fit every culture
- logical CSS properties (start and end, not left and right) · often · layouts flip for RTL without separate stylesheets
- in RTL, layout and directional icons mirror; numbers, media controls, clocks and logos usually do not · often
- `lang` and `dir` set on the document and on mixed-language content · often · screen readers and fonts depend on it

## Choices and trade-offs

- **One locale setting or several.** A single setting is simple; separate language, region and currency settings fit travellers, expats and businesses that sell abroad.
- **Locale from the browser, the account or the URL.** Browser settings are a good first guess; the account remembers a choice; locale in the URL (`/de/`) suits public content and search engines. Many products combine them with a visible switch.
- **Human, machine or mixed translation.** Humans are better for marketing, legal and tone; machine translation is fast and cheap for help content and user content; a common middle is machine translation with human review of key flows.
- **Translate everything or core flows first.** A partly translated product can feel broken; translating sign-up, checkout and errors first often covers most of the value.
- **Local prices or converted prices.** Converted prices are easy and change with exchange rates; set local prices look trustworthy and need upkeep per market.

## Watch out

- Concatenating strings ("You have " + n + " items") · word order and plurals break in most languages
- Fixed-width buttons and labels · German, Finnish and Russian text overflows or gets cut
- Flags for languages · a flag is a country, and many languages span countries
- Dates like 03/04/2026 · read as March or April depending on where you live
- Text inside images · cannot be translated, searched or read aloud
- Sorting and searching with byte order · accented letters and non-Latin scripts land in the wrong place; locale-aware collation exists for this
- Treating localization as a last step before launch · strings in code and fixed layouts cost a rewrite

## Go deeper

- [W3C Internationalization](https://www.w3.org/International/) · articles and checklists on characters, language tags, direction and more
- [W3C: Text size in translation](https://www.w3.org/International/articles/article-text-size) · how much text grows, by string length
- [W3C: Structural markup and right-to-left text in HTML](https://www.w3.org/International/questions/qa-html-dir) · `dir`, `dir="auto"` and logical properties
- [Unicode CLDR plural rules](https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html) · the plural categories each language needs
- [ICU User Guide: formatting messages](https://unicode-org.github.io/icu/userguide/format_parse/messages/) · whole-sentence messages with plural and select
- [MDN: Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) · the browser's built-in date, number, plural, list and collation formatting

## Related

- `areas/practices/microcopy-content.md` · writing source text that translates well
- `areas/practices/responsive-layout.md` · layouts that absorb longer text
- `areas/practices/accessibility.md` · language and direction attributes for assistive tech
- `areas/patterns/forms-validation.md` · names, addresses and phone numbers across countries
- `areas/parts/payments-checkout.md` · currencies, local payment methods and taxes
