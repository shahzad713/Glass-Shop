import { business } from "./business";

/**
 * Canonical site-level configuration. The production site is the www domain;
 * the non-www domain and any Vercel preview URLs must never be treated as
 * canonical.
 */

/** Canonical production origin — no trailing slash. */
export const SITE_URL = "https://www.labbyakglass.com";

/** Default social sharing image (served from /public — real project photo). */
export const DEFAULT_OG_IMAGE = "/home-page.jpg";

export const site = {
  url: SITE_URL,
  name: business.name,
  shortName: business.shortName,
  locale: "en_PK",
  lang: "en",
  themeColor: "#1f2933", // graphite
  defaultTitle: `${business.tagline} | ${business.shortName}`,
  titleTemplate: `%s | ${business.name}`,
  defaultDescription: business.description,
} as const;

/** Build an absolute canonical URL from a route path. */
export function absoluteUrl(path = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`;
  // collapse a bare "/" to the origin, otherwise strip trailing slash
  const clean = path === "/" ? "" : path.replace(/\/+$/, "");
  return `${SITE_URL}${clean}`;
}

/**
 * Build a prefilled, correctly URL-encoded WhatsApp link.
 * Example service/area produce a natural Urdu-English greeting.
 */
export function whatsappLink(service?: string, area?: string): string {
  const svc = service ?? "your services";
  const loc = area ? ` in ${area}` : "";
  const text = `Assalam-o-Alaikum, I visited the ${business.name} website. I need a quotation for ${svc}${loc}.`;
  return `https://wa.me/${business.whatsapp.e164}?text=${encodeURIComponent(text)}`;
}

/** Click-to-call href. */
export const telLink = `tel:${business.phone.tel}`;
