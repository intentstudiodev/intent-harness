---
kind: library
shelf: architecture
name: Search and caching
fits when: people search across the product's data, the same data is read far more than it changes, or pages and APIs are slow because of repeated work
related: areas/patterns/search-filters.md, areas/practices/performance.md, areas/architecture/data-modelling.md, areas/architecture/background-jobs-queues.md, areas/parts/workspaces-multi-tenancy.md, areas/architecture/ai-features.md
checked: 2026-11
---
# Search and caching

Two kinds of **derived copy** of the product's data: a search index, shaped for finding things by words, typos and relevance; and a cache, holding a recent answer so it need not be worked out again. Both sit beside the main store and are only as good as the way they are kept up to date. The tension: **speed and relevance gained versus freshness and correctness risked**, since every copy can be stale, wrong or leak data its source would have protected.

## Questions worth asking

- What do people search for: exact things (an order number, an email) or fuzzy things (a product, a topic, "that document about pricing")? Exact lookups rarely need a search engine.
- How many records, and how fast do they change? Thousands of rows and millions of documents are different systems.
- How fresh must results be: instantly, within seconds, within minutes? This decides how the index and caches are updated.
- Who may see which results? Search and caches have to respect the same permissions as the screens.
- What languages, and do people search by meaning as well as words? Stemming, synonyms and semantic search follow.
- What is actually slow, measured? Caching a guess often adds complexity without fixing the real bottleneck.

## Usual shape

### Anatomy
- database queries with indexes · often · the first answer to "find" and to "slow", before any extra system
- full-text search inside the main database · often · PostgreSQL, MySQL and SQLite all offer it; enough for many products
- a dedicated search engine (hosted or self-run) · sometimes · large data, typo tolerance, facets, relevance tuning, many languages
- vector or semantic search · sometimes · search by meaning and AI retrieval; often added alongside keyword search, not instead
- an indexing step that copies changes from the main store · often · on write, from a change feed, or by a background job
- HTTP caching in browsers and a CDN · often · static files and public pages; the cheapest cache there is
- an application cache (in memory or a shared key-value store) · sometimes · expensive queries, sessions, rate limits, results from slow outside APIs

### Conventions
- the main store stays the truth; indexes and caches can be rebuilt from it · often
- each cached item has an expiry, and important ones are cleared when their source changes · often
- cache keys and search filters include the workspace or user where results differ · often · otherwise one customer sees another's data
- search shows what matched and offers a path when nothing did · often · the screen side is in search and filters

## Choices and trade-offs

- **Database search or a search engine.** Search inside the database has no extra system to sync, secure or pay for, and fits modest data and simple ranking; a search engine gives typo tolerance, facets and tuning, at the cost of a second copy kept in step. Many products start in the database and move when relevance or volume demands it.
- **Hosted search service or self-run.** Hosted services are quick to start and priced by records or queries; self-run engines give control and need care: upgrades, memory, backups.
- **Keyword, semantic or hybrid.** Keyword search is predictable and good for names, codes and exact phrases; semantic search finds meaning and is harder to explain when it misses; hybrid combines both and is common where AI features also use retrieval.
- **Update on write or in batches.** Indexing as data changes keeps results fresh and couples writes to the index; batch or queued updates are sturdier and leave a delay people may notice.
- **Cache-aside or cache in front.** Cache-aside (the app checks the cache, then the store) is simple and common; a CDN or reverse proxy in front caches whole responses, which is very cheap for public pages and risky for personal ones.
- **Expire by time or invalidate on change.** Time-based expiry is simple and allows a known window of staleness; invalidation on change is fresher and easy to get subtly wrong.

## Watch out

- Adding a cache before measuring · the slow part is often a missing index or a chatty screen, and the cache hides it
- Personal pages cached publicly, or cache keys without the user or workspace · one person sees another's data
- Search results that ignore permissions · documents leak through snippets even when the page itself is protected
- No way to rebuild the index from scratch · a bad deploy or a schema change leaves search broken for days
- Treating the search index or cache as the place data lives · when it is lost or drifts, the truth goes with it
- Stale prices, stock or permissions served from a cache · small staleness is fine for counts, not for what people pay or may see

## Go deeper

- [MDN: HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching) · how browsers, CDNs and proxies cache responses, and the headers that control it
- [Azure Architecture Center: caching guidance](https://learn.microsoft.com/en-us/azure/architecture/best-practices/caching) · private and shared caches, expiry, invalidation and the cache-aside pattern, mostly vendor-neutral
- [Azure Architecture Center: choose a search data store](https://learn.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/search-options) · the questions to ask when choosing between database search and a search engine
- [PostgreSQL: full text search](https://www.postgresql.org/docs/current/textsearch-intro.html) · what search inside a relational database can do before adding another system
- [RFC 9111: HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111) · the standard behind cache headers, for exact behaviour

## Related

- `areas/patterns/search-filters.md` · the search box, results and filters people see
- `areas/practices/performance.md` · measuring what is slow before caching it
- `areas/architecture/data-modelling.md` · the main store that indexes and caches copy from
- `areas/architecture/background-jobs-queues.md` · keeping indexes up to date off the request path
- `areas/parts/workspaces-multi-tenancy.md` · keeping customers apart in shared caches and indexes
- `areas/architecture/ai-features.md` · retrieval for AI answers uses the same indexes
