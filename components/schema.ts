import { business, SITE_URL } from "@/config";

/** Build JSON-LD structured data objects from centralized business data. */

const ORG_ID = `${SITE_URL}/#organization`;
const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function postalAddress() {
  const a = business.address;
  return {
    "@type": "PostalAddress",
    streetAddress: a.street,
    addressLocality: a.locality,
    addressRegion: a.region,
    ...(a.postalCode ? { postalCode: a.postalCode } : {}),
    addressCountry: a.countryCode,
  };
}

/** LocalBusiness — the primary entity. Includes the verified aggregate rating. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GlassAndMirrorShop",
    "@id": LOCALBUSINESS_ID,
    name: business.name,
    image: `${SITE_URL}/home-page.jpg`,
    url: SITE_URL,
    telephone: business.phone.tel,
    email: business.email,
    address: postalAddress(),
    areaServed: { "@type": "City", name: "Lahore" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    ...(business.social.facebook
      ? { sameAs: [business.social.facebook] }
      : {}),
  };
}

/** Organization — brand identity. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: business.name,
    legalName: business.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    email: business.email,
    telephone: business.phone.tel,
    address: postalAddress(),
    ...(business.social.facebook
      ? { sameAs: [business.social.facebook] }
      : {}),
  };
}

/** WebSite. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: business.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** BreadcrumbList from an ordered list of {name, path}. */
export function breadcrumbSchema(
  crumbs: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

/** Service on a genuine service page. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    provider: { "@id": LOCALBUSINESS_ID },
    areaServed: { "@type": "City", name: "Lahore" },
    url: `${SITE_URL}${opts.path}`,
  };
}

/** FAQPage from FAQ entries. */
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
