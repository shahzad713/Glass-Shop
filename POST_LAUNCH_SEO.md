# Post-Launch SEO Checklist — Labbyak Glass & Aluminium

Ethical local SEO only. No keyword stuffing, no hidden text, no meta-keywords
tag, no fabricated reviews/awards, no ranking-position promises. Everything
below uses genuine, owner-confirmed data.

Canonical domain: **https://www.labbyakglass.com** (www canonical; non-www
301s to www via `vercel.json`).

## 1. Verify the build shipped correctly

- [ ] Each route returns a unique `<title>`, meta description, and canonical
      pointing at the **www** URL (view source, not just devtools).
- [ ] `https://www.labbyakglass.com/sitemap.xml` loads and lists only canonical
      www URLs; privacy-policy (noindex) is excluded.
- [ ] `https://www.labbyakglass.com/robots.txt` loads and references the sitemap.
- [ ] `http://labbyakglass.com` and `https://labbyakglass.com` both 301 to
      `https://www.labbyakglass.com`.
- [ ] Security headers present (CSP, HSTS, X-Content-Type-Options,
      X-Frame-Options, Referrer-Policy, Permissions-Policy) — check with
      `curl -I` or securityheaders.com.

## 2. Google Search Console

- [ ] Add and verify the **www** property (Domain property preferred so both
      protocols/hosts are covered).
- [ ] Submit `sitemap.xml`.
- [ ] Request indexing for the homepage and top service pages.
- [ ] Confirm canonical/duplicate handling: GSC should report www as canonical.
- [ ] Watch Coverage for any "Excluded — noindex" beyond privacy-policy.

## 3. Bing Webmaster Tools

- [ ] Add the www site, import from GSC, submit the sitemap.

## 4. Google Business Profile (owner-managed)

- [ ] Ensure NAP (Name, Address, Phone) matches the site **exactly**:
      - Name: Labbyak Glass & Aluminium
      - Phone: 0302 0999713
      - Address: Tauheed Block, Bahria Town, Lahore, Punjab, Pakistan
- [ ] Confirm the correct primary category (glass / aluminium fabrication).
      **Never** the irrelevant "Aboriginal art gallery" category.
- [ ] Keep the profile linked from the site (`business.maps.placeUrl`).
- [ ] Ratings on-site (4.8 / 27) must continue to match the live GBP total.
      If the real count changes, update `config/business.ts` `rating` — it feeds
      both the visible badge and the LocalBusiness `aggregateRating` schema.

## 5. Structured data validation

- [ ] Run key URLs through Google Rich Results Test + Schema.org validator:
      - Home: LocalBusiness (GlassAndMirrorShop) + Organization + WebSite + FAQPage
      - Service pages: Service + BreadcrumbList + FAQPage
      - Project detail: CreativeWork + BreadcrumbList
- [ ] Confirm no schema warns about missing required fields. Do **not** add
      `openingHours`, `geo`, or `priceRange` specifics until the owner confirms
      real values.

## 6. Performance / Core Web Vitals

- [ ] PageSpeed Insights (mobile) on Home + a service page. Target good LCP/CLS/INP.
- [ ] LCP hero image loads eager; below-the-fold images lazy.
- [ ] No blocking third-party scripts. Fonts self-hosted (`@fontsource/inter`).
- [ ] Consider converting large `.jpg`/`.png` project photos to WebP/AVIF with
      explicit width/height to cut bytes and layout shift (several projects
      already use `.avif`/`.webp`).

## 7. Content data to keep honest

Only publish facts the owner confirms. Currently unknown / intentionally omitted:
- Opening hours (`business.openingHours` empty — hours block stays hidden).
- Geo coordinates (`business.geo` null — not in schema).
- Postal code (`business.address.postalCode` null).
- Instagram / LinkedIn (`business.social` null — links hidden).

When the owner supplies any of these, add them in `config/business.ts` only.

## 8. Images still to upgrade (optional, not blocking)

Four services reuse a nearest-match category image (see `IMAGE_SOURCES.md`,
"Illustrative"): Aluminium Sliding Windows, Heavy Duty Aluminium Doors, UPVC
Sliding Windows, Car Parking Sheds, Decorative Wall Paneling, Emergency Glass
Repair. Replace with genuine photos when available and flip those rows to Real.

## 9. Ongoing

- [ ] Add genuine new project photos to the portfolio over time (fresh, relevant
      content helps local ranking honestly).
- [ ] Monitor GSC Performance for the queries actually bringing traffic; refine
      page copy to match real intent — without keyword stuffing.
- [ ] Re-submit the sitemap after adding new service pages or projects (it is
      regenerated automatically on every `npm run build`).
