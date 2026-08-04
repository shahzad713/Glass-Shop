# Local SEO Audit — Labbyak Glass & Aluminium
**https://www.labbyakglass.com** · 2026-08-04

On-site local-SEO state of the codebase. Off-site actions (GBP, citations,
reviews, competitor gaps, content calendar) live in their own deliverables —
cross-referenced below. Nothing invented here; owner-only facts are flagged.

---

## 1. NAP consistency (on-site) — PASS
All name/address/phone come from one source, `config/business.ts`, and render
identically on home, contact, footer, about, and in JSON-LD:

- **Name:** `Labbyak Glass & Aluminium` (British "Aluminium").
- **Phone:** `0302 0999713` (display) / `+92 302 0999713` (intl) — `tel:` +
  WhatsApp links use e164 `923020999713`.
- **Address:** `Tauheed Block, Bahria Town, Lahore, Punjab, Pakistan`.
- **Email:** `asifmunir062@gmail.com`.

Scanned source + `dist/` for drift — **none found**: no old phone numbers, no
brand misspellings (Labbyk / Labbayk / Labbaik / "Glass and Aluminum" /
"Alminuam"), no old/preview domains as canonical.

> Off-site caveat: the Google Maps embed shows Google's stored label
> "Labbyak Glass **And Aluminum**" (US spelling, Google-side). Fixed only by
> editing the name on GBP/Maps — see OWNER_ACTIONS.md item E. Site code is correct.

## 2. LocalBusiness structured data — PASS
- `@type: GlassAndMirrorShop` with stable `@id #localbusiness`, name, address,
  telephone, email, `image`, `url`, `areaServed: City "Lahore"`.
- `aggregateRating` = **4.8 / 27** only (owner-confirmed Google rating). No
  `Review` objects, no invented ratings.
- Real Facebook `sameAs`.
- Correctly **absent** (not invented): `priceRange` (removed this session),
  `geo`, `openingHoursSpecification`, extra `sameAs`. All await owner data.

## 3. Geographic targeting — PASS (city-level)
- Consistent single-city focus: **Lahore**, area **Bahria Town / Tauheed Block**.
- High-intent service-area pages exist (one reusable `ServicePageTemplate`, no
  thin doorway pages). Each: unique title/description/H1, `Service` +
  `BreadcrumbList` + `FAQPage` schema, internal links.
- No fake multi-city / nationwide coverage claims.

## 4. On-page local signals — PASS
- Titles/H1s include the service + "Lahore" naturally (no stuffing).
- Contact page: full address, tap-to-call, WhatsApp, map embed.
- FAQ content answers local-intent questions; emitted as `FAQPage`.
- Footer shows NAP once (no keyword-block spam).

## 5. Crawl / index for local pages — PASS
- All service-area pages in `sitemap.xml` (36 canonical www URLs) and linked via
  crawlable `<a>` (header dropdown + services index + footer).
- Each self-canonical, `index, follow`. Full list in `ROUTE_AUDIT.csv`.

## 6. Gaps requiring owner input (on-site, not invented)
Add to `config/business.ts` and schema updates automatically:
- **Opening hours** — none shown (no fake hours). Provide per-day for
  `openingHoursSpecification` + GBP.
- **Geo lat/long** — for LocalBusiness `geo`.
- **Instagram / LinkedIn** — only Facebook set.
- Any **true** certifications/warranties (only if real).

## 7. Off-site — see dedicated deliverables
- `GBP_ACTION_PLAN.md` — GBP fix incl. removing "Aboriginal art gallery",
  category, NAP alignment, verification.
- `GBP_CONTENT_PLAN.md` — GBP posts/photos cadence.
- `LOCAL_CITATION_PLAN.md` — directory/citation list, NAP consistency.
- `LOCAL_COMPETITOR_GAPS.md` — Lahore competitor gap method (no rank claims).
- `CONTENT_PLAN_LOCAL_SEO.md` — local content calendar.
- `REVIEW_WORKFLOW.md` — ethical review-generation process.

---

## Summary
On-site local SEO is **solid and honest**: consistent centralized NAP, valid
LocalBusiness schema with the real rating only, clean city targeting, no thin
pages, no invented data, no banned category. Remaining wins are **off-site**
(GBP, citations, reviews) plus a few **owner-supplied facts** (hours, geo, extra
socials). See the referenced plans.
