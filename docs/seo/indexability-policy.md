# JoyaFleet route and indexability policy

Date: 2026-09-05

## Canonical-host decision

`https://joyafleet.ir` is the primary SEO host, based on the approved implementation plan. `https://joyafleet.com` remains an operating secondary domain but must issue a single-hop permanent redirect to the equivalent `.ir` URL at the deployment edge. It must not serve competing indexable copies.

The primary host is the only host emitted by canonical tags, Open Graph URLs, robots sitemap declarations, and sitemap entries.

## Route policy

| Route class | Public | Index / follow | Canonical | Sitemap | Crawl policy |
| --- | --- | --- | --- | --- | --- |
| `/` | yes | index, follow | self on `.ir` | include | allow |
| `/about`, `/contact`, `/solutions`, `/security`, `/our-apps` | yes | index, follow | self on `.ir` | include | allow |
| `/platform` and known `/platform/*` modules | yes | index, follow | self on `.ir` | include | allow |
| `/product` and known `/product/*` modules | transitional public endpoint | redirect permanently to matching `/platform` URL | destination only | exclude | allow until redirect is observed |
| Unknown `/platform/*` and `/product/*` values | no | noindex through a real 404 | none | exclude | allow so the 404 can be crawled |
| `/blog` while no published CMS post exists | yes | noindex, follow | self on `.ir` | exclude | allow |
| `/blog/[slug]` until CMS is connected | no | noindex through a real 404 | none | exclude | allow |
| Published CMS blog routes (future) | yes | index, follow when published | self on `.ir` | include | allow |
| `/updates` and published `/updates/[slug]` | yes | index, follow | self on `.ir` | include published URLs only | allow |
| Unknown `/updates/[slug]` | no | noindex through a real 404 | none | exclude | allow |
| Admin, CMS, Visual Editor, preview, drafts, revisions (future) | implementation-specific | noindex, nofollow | none or internal self | exclude | do not use `robots.txt` as the sole noindex control |
| API/auth endpoints (future) | not landing pages | not indexed | n/a | exclude | endpoint-specific |
| Unmatched routes | no | noindex through a real 404 | none | exclude | allow |

## Implementation rules

* Tracking query parameters never create canonicals; the route's primary path is canonical.
* A `noindex` page must remain crawlable unless access itself must be restricted. Google cannot see a robots directive on a URL blocked by `robots.txt`.
* Sitemap entries must be absolute primary-host URLs, return 200, be canonical and indexable, and use meaningful `lastModified` values only.
* A permanent redirect is the chosen method for the deprecated `/product/*` family and the secondary `.com` host. Do not make duplicate routes indexable.
* No hreflang will be emitted until genuinely equivalent localized pages exist.
