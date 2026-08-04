# SEO / Quality Fix Log
**Labbyak Glass & Aluminium** — 2026-08-04

Each entry: problem → affected file → exact fix → verification → status.
Only genuine issues found during this final audit are listed. The bulk of the
site was already correct; this log is intentionally short.

---

## 1. Production build failed — missing React type packages
- **Problem:** `npm run typecheck` produced 17 TS errors (`Cannot find namespace
  'React'`, `Property 'width'/'className' does not exist on OptimizedImageProps`).
  Root cause: `@types/react` and `@types/react-dom` were not installed, so
  `React.ImgHTMLAttributes` resolved to nothing and prop inheritance collapsed.
- **Affected:** `components/ui/OptimizedImage.tsx`, `Buttons.tsx`, and every
  caller passing `width`/`height`/`className`.
- **Fix:** `npm install -D @types/react@^19 @types/react-dom@^19`.
- **Verified:** `npm run typecheck` → exit 0 (0 errors).
- **Status:** ✅ Fixed.

## 2. SSR production build crash — `manualChunks` included an external
- **Problem:** `npm run build` client bundle succeeded but the SSR pass crashed:
  `"react" cannot be included in manualChunks because it is resolved as an
  external module` (`EXTERNAL_MODULES_CANNOT_BE_INCLUDED_IN_MANUAL_CHUNKS`).
- **Affected:** `vite.config.ts` (object-form `manualChunks` listing `react`,
  `react-dom`, `react-router-dom`).
- **Fix:** switched to the **function form** of `manualChunks`, which only
  receives bundled module ids — during SSR, react/react-dom are external and are
  never passed in, so they can't be force-chunked. Same client-side vendor
  splitting preserved (`react-vendor`, `icons`).
- **Verified:** `npm run build` → exit 0; 37 pages prerendered; `react-vendor`
  and `icons` chunks still emitted for the client.
- **Status:** ✅ Fixed.

## 3. Invented `priceRange` in LocalBusiness JSON-LD
- **Problem:** `localBusinessSchema()` emitted `priceRange: "$$"`. The business
  has not supplied a price range; fabricating one violates the project's
  no-invented-data rule and can mislead Rich Results.
- **Affected:** `components/schema.ts`.
- **Fix:** removed the `priceRange` line. All other LocalBusiness fields are
  owner-verified (name, address, phone, email, areaServed Lahore, the genuine
  4.8/27 aggregateRating, real Facebook sameAs).
- **Verified:** rebuilt; `grep priceRange dist/index.html` → 0 matches.
- **Status:** ✅ Fixed.

## 4. Dead legacy single-page app still in repo
- **Problem:** an earlier report claimed the legacy pre-SSG app was removed, but
  `App.tsx` plus 11 section components remained. `App.tsx` was unreachable
  (entry is `index.tsx` → `routes`), and the legacy `Testimonials.tsx` carried
  fabricated review quotes — a direct content-integrity violation.
- **Affected (deleted):** `App.tsx`, `components/{Navbar,Hero,About,Services,
  Gallery,Contact,Products,Team,ProjectDetail,Testimonials,FloatingActions}.tsx`.
- **Fix:** confirmed via grep that only `App.tsx` imported them and nothing
  imports `App.tsx`; removed all 12 files (`git rm`).
- **Verified:** `npm run typecheck` and `npm run build` still clean after
  deletion; no dangling imports.
- **Status:** ✅ Fixed.

## 5. Extra call-to-action controls removed (owner request, this session)
- **Problem:** owner asked to remove redundant CTAs: the mobile phone icon next
  to the hamburger, and the sticky bottom Call/WhatsApp bar.
- **Affected:** `components/Header.tsx` (mobile phone `<a>` removed),
  `components/Layout.tsx` (MobileContactBar import/render + `pb-14` spacer
  removed), `components/MobileContactBar.tsx` (deleted).
- **Verified:** typecheck + build clean; hero CTAs, desktop "Get Quote", and the
  desktop phone link intentionally retained.
- **Status:** ✅ Done.

---

## Verified-correct (no change needed)
These were checked and found already compliant — listed so the audit is honest
about what was tested vs assumed:

- Per-page unique title/description/canonical/OG (all 37 pages).
- One `<h1>` per page.
- Single structured-data entity with stable `@id`s and correct cross-refs.
- Sitemap = 36 canonical www URLs, privacy-policy excluded; robots references it.
- `/privacy-policy` = `noindex, nofollow`, absent from sitemap.
- All 63 image references resolve; no broken images.
- Contact API: POST-only, honeypot, rate limit, body cap, validation, escaping,
  success-only-after-`res.ok`, server-only secrets.
- Security headers (CSP/HSTS/nosniff/frame/Referrer/Permissions) in `vercel.json`.
- No "Aboriginal art gallery"; no invented reviews/prices/hours/coverage.

## Documented, deliberately NOT auto-fixed
- Vite **dev-server-only** vulnerabilities (`npm audit`) — non-breaking fix
  available; left to owner per no-destructive-dependency-fix rule.
- On-disk image filenames using "Aluminum" / a space — resolve fine, not visible
  text; renaming risks broken refs for no user benefit.
