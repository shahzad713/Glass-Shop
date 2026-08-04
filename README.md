# Labbyak Glass & Aluminium — Website

Marketing and lead-generation site for **Labbyak Glass & Aluminium**, a glass and
aluminium business in Tauheed Block, Bahria Town, Lahore.

- **Live:** https://www.labbyakglass.com
- **Stack:** Vite 6 · React 19 · TypeScript · Tailwind (PostCSS) · React Router v6
- **Prerender:** static SSG via `vite-react-ssg` (every route → static HTML with
  per-page title/meta/JSON-LD)
- **Hosting:** Vercel, with one Node serverless function for the contact form

## Run locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Generate sitemap, then static prerender build |
| `npm run preview` | Serve the built site |
| `npm run typecheck` | `tsc --noEmit` |

## Configuration

All editable business facts live in `config/` (single source of truth) — never
hardcode them in components:

- `config/business.ts` — name, phone, address, rating, maps, social
- `config/site.ts` — canonical URL, SEO defaults, link helpers
- `config/servicePages.ts`, `config/faqs.ts`, `config/areas.ts`, etc.
- `data.ts` — services, projects, team, products

See `CLAUDE.md` for the full project guide and content/SEO/security rules.

## Environment variables

Copy `.env.example` and set values locally in `.env.local`; on Vercel set them
under **Project Settings → Environment Variables**.

- `RESEND_API_KEY` — **server-side only**, no `VITE_` prefix (contact email).
- `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` — contact-form addresses.
- `VITE_SITE_URL` — public canonical origin (safe to expose).

**Never commit real secrets.** Server secrets must not use the `VITE_` prefix
(that bundles them into the browser). See `OWNER_ACTIONS.md`.

## Documentation

- `FINAL_SEO_AUDIT.md` — full audit report
- `SEO_FIX_LOG.md` — fixes applied
- `OWNER_ACTIONS.md` — steps only the owner can do (email, GBP, Search Console)
- `SEARCH_CONSOLE_SUBMISSION.md`, `LOCAL_SEO_AUDIT.md`, and the GBP / citation /
  content plans
