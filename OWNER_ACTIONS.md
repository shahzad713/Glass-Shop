# Owner Actions — Labbyak Glass & Aluminium
**https://www.labbyakglass.com** · prepared 2026-08-04

Things only the business owner / account holder can do. The code is ready; these
are outside the repo (live host, DNS, Google, email). Ordered by priority.

---

## A. Contact form email — REQUIRED before launch
The form code is correct but **no email has actually been sent** from this
environment. You must:

1. Create a [Resend](https://resend.com) account.
2. Verify a sending domain (add the SPF/DKIM/DMARC DNS records Resend gives you).
3. In **Vercel → Project → Settings → Environment Variables** add (Production):
   - `RESEND_API_KEY` = your key — **no `VITE_` prefix** (server-only secret).
   - `CONTACT_TO_EMAIL` = `asifmunir062@gmail.com` (or preferred inbox).
   - `CONTACT_FROM_EMAIL` = an address on your verified domain
     (e.g. `no-reply@labbyakglass.com`).
4. Redeploy.
5. Submit a **real test message** through `/contact`. Confirm it lands in the
   inbox and that Reply goes to the sender. Only then is email "working".

Until step 5 passes, do not advertise the form as working.

---

## B. Verify the live domain (after deploy)
Run these against the live site (or ask us to). Each should behave as noted:

- `https://www.labbyakglass.com` → **200**.
- `http://labbyakglass.com` → redirects to `https://www.labbyakglass.com`
  (HTTPS + www, one hop).
- `https://labbyakglass.com` → redirects to `https://www.labbyakglass.com`.
- SSL padlock valid, not expired.
- No page returns `x-robots-tag: noindex` in production (Vercel preview
  deployments may — that's expected; the **production** domain must not).

## C. Google Search Console — see SEARCH_CONSOLE_SUBMISSION.md
Verify the property, submit the sitemap, inspect + request indexing for key
pages.

## D. Google Business Profile — see GBP_ACTION_PLAN.md
- **Remove the "Aboriginal art gallery" category** (wrong, unrelated).
- Primary category: **Glass & mirror shop** (add Aluminium/Window supplier as
  secondary if offered).
- Make NAP **exactly** match the site:
  - Name: `Labbyak Glass & Aluminium`
  - Phone: `0302 0999713`
  - Address: `Tauheed Block, Bahria Town, Lahore, Punjab, Pakistan`
- Confirm opening hours (site currently shows none — see item F).

## E. Confirm the Google Maps embed label
The map embed on `/contact` currently renders Google's stored label
"Labbyak Glass And Aluminum" (US spelling, Google-side). Fixing it means editing
the **business name on Google Maps/GBP** to `Labbyak Glass & Aluminium`; the site
code already uses the correct British spelling everywhere.

## F. Owner-only facts we intentionally did NOT invent
Provide these and we'll add them to `config/business.ts` (schema updates itself):
- **Opening hours** (per day). Currently empty — no fake hours emitted.
- **Geo coordinates** (exact lat/long of the shop) for LocalBusiness `geo`.
- **Instagram / LinkedIn URLs** if they exist (only Facebook is set).
- Any **real** certifications/warranties you want stated (must be true).

## G. Dependency vulnerabilities (your call)
`npm audit` flags issues in the **Vite dev server only** — they do not affect the
deployed static site. A non-breaking `npm audit fix` is available. We did **not**
run it automatically (no destructive auto-fixes). Say the word and we'll apply
and re-test the build.

---

### What is already done (no action needed)
Clean typecheck + production build, 37 prerendered pages, correct
canonical/robots/sitemap, single valid structured-data graph (genuine 4.8/27
rating only), all 63 images resolve, security headers, hardened contact endpoint,
zero "Aboriginal art gallery", no invented reviews/prices/hours. Detail in
`FINAL_SEO_AUDIT.md` and `SEO_FIX_LOG.md`.
