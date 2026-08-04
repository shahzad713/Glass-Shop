# Google Search Console — Submission Guide
**Labbyak Glass & Aluminium** · property: `https://www.labbyakglass.com`

Do this **after** the production deploy is live on the canonical domain. Steps
are copy-paste ready. Nothing here changes DNS or GBP automatically — you do it
in the Google UI.

---

## 1. Add & verify the property
1. Open [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **URL prefix** → enter exactly:
   ```
   https://www.labbyakglass.com
   ```
   (Use the www version — it is canonical. Non-www 301-redirects to it.)
3. Verify. Easiest options:
   - **HTML tag** — Google gives a `<meta name="google-site-verification" ...>`.
     Send us the token; we'll add it to the site `<head>` and redeploy, or
   - **DNS TXT record** via Namecheap (does not need a redeploy), or
   - **Domain property** if you prefer coverage of every subdomain/protocol.

## 2. Submit the sitemap
1. In GSC left menu → **Sitemaps**.
2. Enter:
   ```
   sitemap.xml
   ```
   (full URL `https://www.labbyakglass.com/sitemap.xml`) → **Submit**.
3. Expect **Success** with **36 discovered URLs**. `robots.txt` already points
   to this sitemap.

## 3. Inspect & request indexing for priority pages
Use **URL Inspection** (top search bar) → *Request Indexing* for each. Order:

| Priority | URL |
|---|---|
| 1 | `https://www.labbyakglass.com/` |
| 2 | `https://www.labbyakglass.com/services` |
| 3 | `https://www.labbyakglass.com/contact` |
| 4 | `https://www.labbyakglass.com/projects` |
| 5 | `https://www.labbyakglass.com/about` |
| 6 | `https://www.labbyakglass.com/products` |

Then the high-intent service-area pages (all under the site root, e.g.):
```
https://www.labbyakglass.com/aluminium-windows-lahore
https://www.labbyakglass.com/glass-railings-lahore
https://www.labbyakglass.com/shower-cabins-lahore
...
```
The complete indexable list (36) is in `sitemap.xml` and `ROUTE_AUDIT.csv`.

## 4. Confirm indexability signals (should already pass)
For each inspected URL, verify GSC reports:
- **Coverage:** "URL is on Google" (after crawl) — allow a few days.
- **Indexing allowed?** Yes.
- **User-declared canonical / Google-selected canonical:** the `www` URL.
- **Robots:** not blocked.
Exception: `https://www.labbyakglass.com/privacy-policy` is **intentionally
noindex** and is not in the sitemap — do not request indexing for it.

## 5. Post-verification checks (do once, then monitor)
- **Removals:** none needed.
- **Page indexing report:** watch for unexpected "Excluded" reasons after a week.
- **Core Web Vitals** + **Mobile Usability:** review once data populates.
- **Links report:** baseline your backlinks (feeds LOCAL_CITATION_PLAN.md).

## 6. Also recommended
- Add the property to **Google Business Profile** insights (same account).
- Set up **Bing Webmaster Tools** and submit the same `sitemap.xml` (you can
  import directly from GSC).

---

### Quick reference — exact URLs to paste
- Sitemap: `https://www.labbyakglass.com/sitemap.xml`
- Robots: `https://www.labbyakglass.com/robots.txt`
- Homepage: `https://www.labbyakglass.com/`
