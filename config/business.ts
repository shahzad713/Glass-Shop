/**
 * SINGLE SOURCE OF TRUTH for all editable business details.
 *
 * Change business facts HERE ONLY. These values flow into components,
 * structured data (JSON-LD), sitemap and metadata. Never hardcode phone
 * numbers, addresses or the brand name elsewhere.
 *
 * IMPORTANT: Do not invent reviews, certifications, awards, opening hours,
 * prices or coordinates. Values marked `null` are unknown and must stay
 * null until the owner confirms them.
 */

export const business = {
  /** Exact legal / brand name — British spelling "Aluminium" per owner. */
  name: "Labbyak Glass & Aluminium",
  shortName: "Labbyak Glass",
  legalName: "Labbyak Glass & Aluminium",

  tagline: "Glass & Aluminium Work in Lahore",
  description:
    "Labbyak Glass & Aluminium provides aluminium windows and doors, glass shop fronts, UPVC windows, partitions, railings and glass repair across Lahore.",

  /** Primary contact number (local + international format). */
  phone: {
    display: "0302 0999713",
    international: "+92 302 0999713",
    /** tel: / wa.me digits — no spaces, no leading +. */
    e164: "923020999713",
    tel: "+923020999713",
  },

  /** WhatsApp uses the same number as the primary phone. */
  whatsapp: {
    e164: "923020999713",
  },

  /** Owner-confirmed contact inbox (also the current published shop email). */
  email: "asifmunir062@gmail.com",

  address: {
    street: "Tauheed Block, Bahria Town",
    locality: "Lahore",
    region: "Punjab",
    postalCode: null as string | null, // unknown — owner to confirm
    country: "Pakistan",
    countryCode: "PK",
    /** One-line human-readable address. */
    full: "Tauheed Block, Bahria Town, Lahore, Punjab, Pakistan",
  },

  /**
   * Google Business Profile embed already verified by owner.
   * geo coordinates left null — do NOT invent lat/long for schema.
   */
  geo: {
    latitude: null as number | null,
    longitude: null as number | null,
  },

  /**
   * Existing verified Google Maps embed src (from current Contact section).
   * Used for the map iframe only. `placeUrl` links to the profile/reviews.
   */
  maps: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.197730726345!2d74.18429597629948!3d31.353522374290797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391855efdafb81a1%3A0x11a0eb1b9624fbee!2sLabbyak%20Glass%20And%20Aluminum!5e0!3m2!1sen!2sus!4v1765293616212!5m2!1sen!2sus",
    /** Public link to the Google Business Profile (search by place). */
    placeUrl:
      "https://www.google.com/maps/search/?api=1&query=Labbyak%20Glass%20And%20Aluminium%20Bahria%20Town%20Lahore",
  },

  /**
   * Owner-confirmed aggregate rating. Safe to display AND use in schema
   * because it reflects the genuine Google Business Profile.
   */
  rating: {
    value: 4.8,
    count: 27,
  },

  /**
   * Opening hours unknown — owner must confirm before display or schema.
   * Leave empty; UI hides the hours block while this is empty.
   */
  openingHours: [] as Array<{
    days: string[];
    opens: string;
    closes: string;
  }>,

  social: {
    facebook: "https://www.facebook.com/labbykGlass/",
    instagram: null as string | null,
    linkedin: null as string | null,
  },
} as const;

export type Business = typeof business;
