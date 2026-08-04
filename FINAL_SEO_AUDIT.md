# Final Production SEO, Quality, Security & Performance Audit
**Labbyak Glass & Aluminium** — https://www.labbyakglass.com

- **Audit date:** 2026-08-04
- **Framework:** Vite 6.4 + React 19 + TypeScript 5.8, React Router v6, static
  prerender via `vite-react-ssg` 0.9. Deployed on Vercel with one Node
  serverless function (`api/contact.ts`).
- **Package manager:** npm (`package-lock.json`).
- **Scope:** Audit + fix of an already-built site. No redesign, no framework
  migration, no mass page generation.

> Method note: statements below are backed by commands actually run in this
> session (typecheck, production build, HTML/JSON-LD extraction from `dist/`,
> filesystem image-reference check, repository term scans). Items that require a
> live production host or real email credentials are explicitly marked **owner
> action** and are *not* claimed as passing.

---

## 1. Production domain status
- Canonical origin is **https://www.labbyakglass.com** throughout code and
  generated output. Every emitted `<link rel="canonical">` uses the www HTTPS
  origin (verified across all 37 prerendered pages).
- Non-www → www permanent redirect is configured in `vercel.json`
  (`host = labbyakglass.com` → `https://www.labbyakglass.com/:path*`, 308).
- HTTP→HTTPS and live SSL validity are **owner-verifiable only after deploy**
  (curl against the live host) — see OWNER_ACTIONS.md. Not claimed here.
- No `vercel.app`, `localhost` or preview URL appears as a canonical anywhere in
  source or `dist/` (scanned — zero matches).

## 2. Build status
- `npm run typecheck` → **clean** (exit 0).
- `npm run build` → **success** (exit 0), 37 static HTML pages prerendered plus
  `sitemap.xml` (prebuild).
- Two build blockers found and fixed this session (see SEO_FIX_LOG.md):
  missing React type packages, and an SSR `manualChunks` crash.

## 3. Route & indexability summary
- **37 prerendered routes.** Full table in `ROUTE_AUDIT.csv`.
- **36 indexable**, all pointing at their own canonical.
- **1 intentionally non-indexable:** `/privacy-policy` (`noindex, nofollow`),
  correctly excluded from the sitemap.
- API route (`/api/contact`) is not a page and is not in the sitemap.
- Every service page is reachable through crawlable `<a>` links (header dropdown
  + services index + footer), not JS-only events.

## 4. Redirect findings
- Single non-www→www rule; no chains or loops in config.
- `cleanUrls: true`, `trailingSlash: false` — consistent extensionless URLs.

## 5. Canonical findings
- One canonical per page, self-referential, www HTTPS. No conflicts, no
  preview/localhost leakage.

## 6. Robots findings
- `public/robots.txt`: `User-agent: * / Allow: /`, references
  `https://www.labbyakglass.com/sitemap.xml`. Does not block CSS/JS/images.
  Non-indexing handled per-page via meta robots, not via robots.txt Disallow —
  correct.

## 7. Sitemap findings
- Generated at build from real route sources (`scripts/generate-sitemap.mjs`).
  36 canonical absolute HTTPS www URLs; privacy-policy excluded; no API/preview
  URLs. Self-updates when service pages or projects change.
- `lastmod` uses build date (acceptable; no fabricated per-page dates).

## 8. Metadata findings
- Unique `<title>`, meta description, canonical, Open Graph + Twitter on every
  page (react-helmet `data-rh` tags — verified distinct per page).
- One visible `<h1>` per page (verified on home/about/services/contact/service/
  projects).
- Home title `Glass & Aluminium Work in Lahore | Labbyak Glass`; home H1
  `Glass & Aluminium Work in Lahore` — matches brief.
- No `<meta keywords>` tag; no hidden keyword blocks; no keyword-stuffed titles.
- **Note (not a defect):** the SSG injects a static fallback `<title>` (the home
  title) into every page's no-JS shell; the authoritative helmet title overrides
  it. A naïve grep can misread this as "duplicate titles" — the rendered/served
  title is per-page and unique.

## 9. Structured-data findings
- Single consistent business entity via stable `@id`s:
  `#localbusiness`, `#organization`, `#website`. `Service.provider` and
  `WebSite.publisher` reference those ids — no conflicting entities.
- Home: `GlassAndMirrorShop` (LocalBusiness) + `Organization` + `WebSite` +
  `FAQPage`. Service pages: `GlassAndMirrorShop` + `Service` + `BreadcrumbList`
  + `FAQPage`. Content/projects pages: `GlassAndMirrorShop` + `BreadcrumbList`.
- `aggregateRating` uses **only** the owner-confirmed 4.8/27 Google rating. No
  `Review` schema, no invented ratings.
- **Fixed this session:** removed `priceRange: "$$"` from LocalBusiness — it was
  an invented value (rules forbid fabricated price ranges). Now absent from
  built output (verified).
- Not present (correctly): geo coordinates, openingHoursSpecification, invented
  sameAs — all left out until owner-confirmed.
- Live Rich Results Test is an **owner action** (needs the deployed URL).

## 10. Image findings
- **All 63 image references resolve** to real files in `/public` (scripted
  check — 0 missing, 0 broken).
- Images self-hosted; no hotlinks, no watermarked/competitor assets found.
- `IMAGE_SOURCES.md` present (176 lines) classifying real vs illustrative/stock.
- Minor cosmetic debt (non-blocking, not fixed to avoid risk): a few on-disk
  filenames use US "Aluminum" spelling and one has a space
  (`Aluminum-Sliding-Profile .jpg`). These are file paths, resolve correctly
  (URL-encoded), and are **not** visible text. Renaming touches multiple refs
  for no user-facing gain — left as documented debt.

## 11. Accessibility findings
- Skip-to-content link, semantic landmarks (`header`/`main#main`/`footer`),
  labelled form fields, accessible mobile menu with `aria-expanded`, icon-only
  controls carry `aria-label`, decorative icons `aria-hidden`.
- Contact form uses real `<button>`/`<a>` semantics; success/error states are
  rendered as text (not colour-only).
- Full keyboard/contrast pass on the live host is an owner/manual step; no
  code-level a11y defects found in review.

## 12. Performance findings
- Route-level code splitting (per-page lazy chunks). Largest client chunks:
  `client` ~57 KB gzip, `react-vendor` ~26 KB gzip, `app` ~24 KB gzip, icons
  ~5 KB gzip. No heavy animation library (CSS + IntersectionObserver only).
- Fonts self-hosted (`@fontsource/inter`). Static assets get 1-year immutable
  cache headers via `vercel.json`.
- LCP hero uses eager/`fetchpriority=high`; below-fold images lazy.
- Real Lighthouse/CWV numbers require the live host — **owner action**.

## 13. Contact form / email status
- Code path correct: POST-only, honeypot, in-memory rate limit (5/min/IP), 8 KB
  body cap, control-char strip, server-side required-field + email validation,
  HTML-escaped email body, `replyTo` set only after email validates, success
  shown **only** after `res.ok`.
- Secrets server-only (`RESEND_API_KEY`, no `VITE_` prefix). `.env.example` has
  placeholders only.
- **NOT claimed working:** no live test submission has been made (no real
  Resend key in this environment). Owner must set env vars + verify sending
  domain, then perform a real test. See OWNER_ACTIONS.md.

## 14. Security findings
- No hardcoded secrets in client code; server secrets isolated to the function.
- Headers via `vercel.json`: CSP (tuned to real assets — `frame-src`
  google maps, `frame-ancestors 'none'`), X-Content-Type-Options, X-Frame-
  Options DENY, Referrer-Policy, Permissions-Policy, HSTS (preload).
- No `dangerouslySetInnerHTML`; external links use `rel="noopener noreferrer"`.
- **Dependency vulnerabilities:** `npm audit` reports issues confined to the
  **Vite dev server** (path traversal, dev-server WS file read, `fs.deny`
  bypass, launch-editor). These affect local development only, not the static
  production output. A non-breaking `npm audit fix` is available; **not applied
  automatically** per the no-destructive-fix rule. Documented for owner.

## 15. Local SEO
- Full local-SEO audit in `LOCAL_SEO_AUDIT.md`. NAP is centralized in
  `config/business.ts` and consistent across home, contact, footer, about and
  schema. No old phone numbers, no brand misspellings, no old domains.

## 16. Content integrity
- **Zero** occurrences of "Aboriginal art gallery" in content, metadata, schema,
  nav, or footer (scanned source + `dist/`).
- No invented reviews, testimonials, prices, hours, certifications, awards,
  client names, or nationwide-coverage claims found.

---

## Unresolved / owner-dependent items
1. Live domain checks (200s, HTTP→HTTPS, SSL, redirect execution, response
   headers, no accidental prod noindex) — require the deployed host.
2. Real contact-form email delivery test — requires Resend key + verified
   sending domain (SPF/DKIM/DMARC).
3. Live Lighthouse / Core Web Vitals + Rich Results Test — require the URL.
4. Google Search Console sitemap submission + URL inspection.
5. Google Business Profile category correction (incl. removing "Aboriginal art
   gallery") and NAP alignment.
6. Dev-only Vite vulnerabilities: decide whether to run `npm audit fix`.

Full remediation detail in `SEO_FIX_LOG.md`; owner tasks in `OWNER_ACTIONS.md`;
submission steps in `SEARCH_CONSOLE_SUBMISSION.md`.
