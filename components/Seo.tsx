import { Head } from "vite-react-ssg";
import { absoluteUrl, site, DEFAULT_OG_IMAGE, SITE_URL } from "@/config";

interface SeoProps {
  /** Page title (brand appended unless `rawTitle`). */
  title: string;
  description: string;
  /** Route path for canonical URL, e.g. "/services". */
  path: string;
  /** OG/Twitter image path or absolute URL. */
  image?: string;
  /** og:type — "website" (default) or "article". */
  type?: "website" | "article";
  /** Use title verbatim (no brand suffix). */
  rawTitle?: boolean;
  /** Prevent indexing (utility pages). */
  noindex?: boolean;
  /** JSON-LD objects to embed. */
  jsonLd?: object[];
}

/**
 * Per-page SEO head. Emits a unique title, meta description, canonical (always
 * on the www production origin), Open Graph + Twitter tags and JSON-LD.
 */
export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  rawTitle = false,
  noindex = false,
  jsonLd = [],
}: SeoProps) {
  const fullTitle = rawTitle ? title : `${title} | ${site.name}`;
  const canonical = absoluteUrl(path);
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={site.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Head>
  );
}
