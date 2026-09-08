# JoyaFleet SEO baseline

Date: 2026-09-05

## Runtime and build

| Item | Observed value |
| --- | --- |
| Framework | Next.js 16.3.3 |
| Router | App Router (`src/app`) |
| React | 19.0.1 |
| Node used for audit | 24.14.0 |
| Package manager | npm 11.17.0 (`package-lock.json`) |
| Build command | `npm run build` |
| Start command | `npm run start` |
| Deployment assumption | Node-hosted Next.js application; production host configuration is not in this repository |

The production build, TypeScript check, and ESLint check passed on the audit date.

## Route inventory

`yes` in the server-rendered column means the production response contained the principal H1 and page HTML. It does not mean that the view is a Server Component: the marketing views are Client Components that Next.js prerenders on the initial response.

| Route or route class | Type | Public | Intended indexability | Current status | Current canonical | Sitemap | H1 / server HTML | Structured data | Baseline issue / severity |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | static | yes | index | 200 | self, `.com` | yes | yes | none | primary host is not the documented `.ir`; High |
| `/about` | static | yes | index | 200 | self, `.com` | yes | yes | none | duplicate brand suffix in title; Medium |
| `/contact` | static | yes | index | 200 | self, `.com` | yes | yes | none | duplicate brand suffix in title; Medium |
| `/platform` | static | yes | index | 200 | self, `.com` | yes | yes | none | duplicate `/product`; High |
| `/platform/{flight-scheduling,operations-dispatch,crew-management-ftl,fleet-maintenance,reporting-analytics,integrations}` | static | yes | index | 200 | self, `.com` | yes | yes | none | duplicate `/product/*`; High |
| `/platform/[module]` unknown value | dynamic | no | noindex / 404 | 200 | `/platform` | no | placeholder H1 / yes | none | soft 404; Critical |
| `/product` | static | yes | redirect to `/platform` | 200 | `/platform` | no | yes | none | duplicate content and internal links target it; High |
| `/product/{known-module}` | static | yes | redirect to matching `/platform/*` | 200 | matching `/platform/*` | no | yes | none | duplicate content and internal links target it; High |
| `/product/[module]` unknown value | dynamic | no | noindex / 404 | 200 | `/platform` | no | placeholder H1 / yes | none | soft 404; Critical |
| `/solutions` | static | yes | index | 200 | self, `.com` | yes | yes | none | duplicate brand suffix in title; Medium |
| `/security` | static | yes | index | 200 | self, `.com` | yes | yes | none | duplicate brand suffix in title; Medium |
| `/our-apps` | static | yes | index | 200 | self, `.com` | yes | yes | none | verify repeated visible H1 variants in on-page audit; Medium |
| `/blog` | static | yes | index once CMS has published posts | 200 | self, `.com` | yes | yes | none | fixture articles currently exist; remove before CMS; High |
| `/blog/[slug]` | dynamic | yes today | noindex / 404 until CMS | 200, including unknown slugs | `/blog` | yes | none | arbitrary slug produces a soft 404 and article metadata is not page-specific; Critical |
| `/updates` | static | yes | index | 200 | self, `.com` | yes | yes | none | artificial sitemap `lastmod`; Medium |
| `/updates/[slug]` | dynamic | yes for real release | index | 200, including unknown slugs | `/updates` | no | yes | none | arbitrary slug soft 404; real releases use listing metadata; Critical |
| `/robots.txt` | metadata route | yes | crawl control | 200 | n/a | n/a | n/a | n/a | sitemap uses `.com`; High |
| `/sitemap.xml` | metadata route | yes | crawler discovery | 200 | n/a | n/a | n/a | n/a | every `lastmod` is the request time; dynamic releases/posts absent; High |
| unmatched root route | Next.js not-found | no | noindex / 404 | 404 | `/` | no | yes | none | correct status and noindex are already emitted; Low |

There are no Admin, CMS, Visual Editor, preview, API, authentication, draft, or revision routes in this repository. CMS-related controls remain out of scope until that application exists.

## Existing SEO implementation

* `src/app/metadata.ts` supplies per-route title, description, canonical, Open Graph, and Twitter metadata.
* `src/app/layout.tsx` supplies `metadataBase` and a title template.
* `src/app/robots.ts` allows all paths and exposes the sitemap.
* `src/app/sitemap.ts` lists selected static URLs.
* `src/app/not-found.tsx` produces a real 404 with noindex.
* `src/hooks/useSEO.ts` is intentionally a no-op compatibility shim; route metadata is server-generated.

## Rendering and performance observations

* All marketing views and the site shell are Client Components. Their initial production HTML currently includes the major headings and copy, so there is no observed app-shell-only SEO failure.
* Navigation uses `next/link` through `RouterLink`, producing crawlable anchors.
* Several page images use remote Unsplash URLs and native `<img>` tags. Image-alt management is deferred to the CMS by product decision.
* Local Helvetica Neue uses `font-display: swap`.
* No third-party analytics or tag manager was found.
* No favicon, app icon, Open Graph image, JSON-LD, hreflang, automated SEO test, crawl verifier, or Lighthouse CI configuration was found.

## Evidence and references

* Google recommends meaningful status codes, unique titles and descriptions, HTML canonicals, and crawlable anchors for JavaScript applications: <https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics>.
* Google requires a page to remain crawlable for its `noindex` directive to be observed: <https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag>.
* The installed Next.js 16 documentation confirms that `metadata`, `generateMetadata`, `robots.ts`, `sitemap.ts`, and `notFound()` are the supported App Router mechanisms.
