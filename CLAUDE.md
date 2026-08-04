# Labbyak Glass & Aluminium — Project Guide

Marketing + lead-generation website for a glass and aluminium business in Lahore.
Stack: Vite 6 + React 19 + TypeScript, Tailwind (PostCSS build), React Router v6,
static prerender via `vite-react-ssg`, deployed on Vercel with a serverless
contact endpoint.

## Business identity (authoritative)

All editable business facts live in `config/business.ts` — **change them there
only**, never hardcode in components.

- Name: **Labbyak Glass & Aluminium** (British "Aluminium", not "Aluminum")
- Canonical domain: **https://www.labbyakglass.com** (www is canonical; non-www
  redirects to www; Vercel preview URLs are never canonical)
- Phone / WhatsApp: **0302 0999713** — intl **+92 302 0999713**
- Address: **Tauheed Block, Bahria Town, Lahore, Punjab, Pakistan**
- Google rating: **4.8 / 27 reviews** (owner-confirmed — safe to display + schema)

## Centralized data

Edit content here, not in components:
- `config/business.ts` — name, phone, address, rating, maps, social
- `config/site.ts` — canonical URL, SEO defaults, WhatsApp/tel link helpers
- `config/servicePages.ts` — high-intent service-area pages (one template)
- `config/faqs.ts`, `config/areas.ts`, `config/navigation.ts`, `config/content.ts`
- `data.ts` — services, projects, team, products

## Design rules

- Premium, architectural, trustworthy. Deep graphite/charcoal + white/neutral
  surfaces + subtle glass-blue highlights + restrained bronze/silver accents.
- Generous spacing, clear hierarchy, refined cards/borders, minimal clutter.
- Avoid: neon gradients, heavy glassmorphism, shadow overuse, animated
  backgrounds, autoplay video, continuous carousels, fake counters/urgency.
- Respect `prefers-reduced-motion`. Animations subtle (CSS + IntersectionObserver).

## Component-reuse rule

Reuse/refactor before creating. Never duplicate components, business info,
metadata logic, service data or styles. One reusable `ServicePageTemplate`
drives all service-area pages. No component for trivial one-line markup.

## SEO quality rules

- Ethical local SEO — no keyword stuffing, no hidden text, no meta keywords tag,
  no keyword blocks in footer.
- Per indexable page: one intent-aligned H1, logical H2/H3, unique title + meta
  description, canonical (www), OG + Twitter tags, JSON-LD.
- JSON-LD: LocalBusiness, Organization, WebSite, BreadcrumbList, Service. Only
  real data. No fake AggregateRating/Review beyond the verified Google rating.
- Never invent lat/long, opening hours, price ranges or extra locations.
- Generated `sitemap.xml` (canonical URLs only) + `robots.txt` referencing it.

## Image licensing rules

- Prefer genuine Labbyak project photos in `/public`. Never present stock as a
  completed Labbyak project.
- Decorative/service images: only watermark-free, properly licensed (Pexels /
  Unsplash). No Google Images, competitor photos, watermarked or logo'd images.
- Download into `/public` — do not hotlink. Record every image in
  `IMAGE_SOURCES.md` (filename, source, photographer, license, page, stock vs real).
- Optimize: WebP/AVIF, explicit width/height, responsive, lazy below the fold,
  eager only for the LCP hero. Descriptive filenames + meaningful alt text.

## Security rules

- **Never expose secrets in frontend code.** Server-only secrets (e.g.
  `RESEND_API_KEY`) must NOT use the `VITE_` prefix and live only in the Vercel
  function environment.
- Validate + sanitize all server-side form data; escape email output. Honeypot +
  rate limiting on the contact endpoint; restrict methods; limit body size.
- `rel="noopener noreferrer"` on external `target="_blank"` links. Avoid
  `dangerouslySetInnerHTML`. Prevent open redirects.
- Security headers via `vercel.json` (CSP tuned to real assets, X-Content-Type-
  Options, Referrer-Policy, Permissions-Policy, frame-ancestors). Test after.
- Do not run destructive dependency fixes automatically.

## Performance rules

- Fast mobile, minimal layout shift, no blocking third-party scripts.
- Route-level code splitting, lazy loading, optimized/self-hosted fonts,
  responsive images, no unused large JS libraries.

## Prohibited fake claims

Never invent or imply: reviews, reviewer names, testimonials, certifications,
awards, clients, business history, working hours, prices, guarantees, completion
stats, "#1 / best / cheapest" claims, fake urgency, nationwide coverage without
evidence. Do not promise Google ranking positions or timelines.

## NEVER: "Aboriginal art gallery"

This is an irrelevant Google category. It must **never** appear in content,
metadata, schema, navigation, keywords or footer.

## Commands

- Dev: `npm run dev`
- Build (prerender): `npm run build`
- Preview built site: `npm run preview`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint` (if configured)
