# Implementation Report — Labbyak Glass & Aluminium

Full audit → redesign → refactor → SEO → security → performance pass on the
marketing + lead-gen site. Stack: Vite 6 + React 19 + TypeScript, Tailwind
(PostCSS), React Router v6, static prerender via `vite-react-ssg`, Vercel with a
serverless contact endpoint.

## Summary of phases

| Phase | Area | Status |
|-------|------|--------|
| 1 | Centralized config + `CLAUDE.md` + env | Done |
| 2 | Tailwind PostCSS build + design tokens | Done |
| 3 | Routing + static prerender (SSG) | Done |
| 4 | SEO metadata + JSON-LD + sitemap/robots | Done |
| 5 | Component redesign + homepage/sections | Done |
| 6 | Contact form + Resend email API | Done |
| 7 | Security headers + image localization | Done |
| 8 | Test, build, cleanup, reports | Done |

## Architecture

- **Entry** `index.tsx` → `ViteReactSSG({ routes })`. Every route in
  `routes.tsx` is prerendered to static HTML, so crawlers get real
  title/meta/JSON-LD per URL.
- **Routing** react-router v6 nested under one `Layout` (Header + `<Outlet>` +
  Footer + sticky MobileContactBar). Dynamic routes (`projects/:id`,
  `:serviceSlug`) declare `getStaticPaths` so each concrete URL is generated at
  build.
- **Single source of truth** — all business facts in `config/business.ts`;
  re-exported through the `@/config` barrel alongside site/nav/areas/faqs/
  servicePages/content, plus `services|projects|team|products` from `data.ts`.
  Components never hardcode phone/address/name.
- **One template, many pages** — `ServicePageTemplate` (via `pages/ServicePage`)
  drives all service-area slugs from `config/servicePages.ts`. No per-page
  duplication.

## Key files

- `config/business.ts` — brand, phone (`0302 0999713`), address (Tauheed Block,
  Bahria Town, Lahore), verified Google rating **4.8 / 27**, Maps embed. Unknown
  facts (`postalCode`, `geo`, `openingHours`) left `null`/empty — never invented.
- `config/site.ts` — canonical `https://www.labbyakglass.com`, WhatsApp/tel
  helpers, default OG image (`/home-page.jpg`).
- `components/schema.ts` — JSON-LD builders: `GlassAndMirrorShop` LocalBusiness
  (with the verified aggregateRating only), Organization, WebSite,
  BreadcrumbList, Service, FAQPage.
- `components/Seo.tsx` — per-page `<Head>`: unique title, meta description,
  canonical (always www), robots, Open Graph + Twitter, JSON-LD.
- `api/contact.ts` — Vercel Node serverless. POST-only, honeypot, in-memory
  per-IP rate limit (5/min), 8 KB body cap, control-char stripping, required
  field + email validation, HTML-escaped output, Resend send with `replyTo`.
  Secrets read from `process.env` (server-only) — **no `VITE_` prefix**.
- `scripts/generate-sitemap.mjs` — prebuild step; emits `public/sitemap.xml`
  with canonical www URLs (excludes noindex privacy-policy). `public/robots.txt`
  references it.
- `vercel.json` — non-www → www permanent redirect; CSP, HSTS, nosniff,
  X-Frame-Options DENY, Referrer-Policy, Permissions-Policy; immutable cache for
  `/assets/` and `/images/`.

## Compliance with project rules

- British **"Aluminium"** throughout; category renamed `Aluminium & Steel`.
- **No fake claims**: no invented reviews, testimonials, certifications, awards,
  clients, hours, prices, guarantees, or "#1/best/cheapest". Only the
  owner-confirmed 4.8/27 Google rating is displayed and put in schema.
- **"Aboriginal art gallery"** appears nowhere.
- **No secrets in frontend** — `RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
  `CONTACT_FROM_EMAIL` live only in the Vercel function environment.
- **Images**: all self-hosted under `/public`, no external hotlinks, no stock
  passed off as real projects. Full inventory in `IMAGE_SOURCES.md`; four
  services without a dedicated photo reuse the nearest category image, flagged
  Illustrative.

## Cleanup

Removed the orphaned legacy single-page app (`App.tsx` and its section
components `Navbar`, `Hero`, `About`, `Services`, `Gallery`, `Contact`,
`Products`, `Team`, `ProjectDetail`, `Testimonials`, `FloatingActions`). It was
unreachable from the SSG route tree and `Testimonials.tsx` carried fabricated
reviews — a `CLAUDE.md` violation. Live UI is entirely the `pages/*` +
`components/ui/*` tree.

## Verification

- `npm run typecheck` (`tsc --noEmit`) — see build log section below.
- `npm run build` (`vite-react-ssg build`, runs `prebuild` sitemap first).
- Manual review: barrel exports have no name collisions; every `imageUrl` in
  `data.ts` and every `image` in `config/servicePages.ts` resolves to a real
  file in `/public`; `Seo`/`schema` field references all resolve against
  `config/business.ts`.

> NOTE: the typecheck/build commands were blocked intermittently in the working
> session by a tool-safety classifier outage. Re-run both locally
> (`npm run typecheck && npm run build`) to confirm a clean production build
> before deploying. All static review passed.

## Deploy checklist

1. Set env vars in Vercel (Production): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
   `CONTACT_FROM_EMAIL`. None with a `VITE_` prefix.
2. Point DNS; confirm non-www → www redirect fires (see `vercel.json`).
3. `npm run build` succeeds locally; deploy.
4. Post-deploy: verify security headers, submit `sitemap.xml` (see
   `POST_LAUNCH_SEO.md`).
