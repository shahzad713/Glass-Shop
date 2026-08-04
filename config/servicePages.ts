import type { FAQ } from "./faqs";

/**
 * High-intent, indexable service-area pages. Each renders through ONE reusable
 * template (components/ServicePageTemplate). Only services genuinely offered by
 * Labbyak are listed here. Add a new page by adding an entry — no new component.
 *
 * `image` values reuse existing local/service imagery via matching service ids
 * where possible. `relatedServiceIds` link to entries in data.ts services.
 */
export interface ServicePage {
  slug: string; // route path without leading slash
  /** <h1> — search-intent aligned. */
  h1: string;
  /** <title> (brand appended by SEO helper). */
  title: string;
  metaDescription: string;
  /** Lead paragraph shown under the H1. */
  intro: string;
  /** Body sections: heading + paragraph(s). */
  sections: { heading: string; body: string }[];
  /** Bulleted highlights (materials / options / use cases). */
  highlights: string[];
  /** Hero/section image path (local public asset). */
  image: string;
  imageAlt: string;
  /** WhatsApp prefill service label + CTA copy. */
  whatsappService: string;
  ctaHeading: string;
  faqs: FAQ[];
  /** Related service page slugs for internal linking. */
  related: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "aluminium-windows-lahore",
    h1: "Aluminium Windows in Lahore",
    title: "Aluminium Windows in Lahore",
    metaDescription:
      "Custom aluminium windows in Lahore — sliding, casement and fixed frames, measured and fitted for homes and commercial buildings. Call or WhatsApp for a quotation.",
    intro:
      "We fabricate and install aluminium windows across Lahore for both homes and commercial buildings. Aluminium frames are slim, strong and low-maintenance, making them a practical choice for larger openings and modern facades.",
    sections: [
      {
        heading: "Aluminium window options",
        body: "We supply sliding, casement and fixed aluminium windows in powder-coated finishes. Frames can be paired with clear, tinted, frosted or double-glazed glass depending on your privacy, heat and sound requirements.",
      },
      {
        heading: "Measured and fitted correctly",
        body: "Every window is measured on site before fabrication so it fits the opening cleanly, seals against dust and rain, and operates smoothly. Professional fitting avoids the draughts and alignment problems that come with off-the-shelf sizes.",
      },
    ],
    highlights: [
      "Sliding, casement and fixed aluminium windows",
      "Powder-coated frames in multiple finishes",
      "Single, tinted or double-glazed glass options",
      "On-site measurement before fabrication",
      "Residential and commercial work",
    ],
    image: "/images/aluminum-steel/aluminum-office-partitions.png",
    imageAlt: "Modern aluminium window framing installed in a Lahore building",
    whatsappService: "aluminium windows",
    ctaHeading: "Need aluminium windows in Lahore?",
    faqs: [
      {
        question: "Are aluminium windows good for Lahore weather?",
        answer:
          "Yes. Powder-coated aluminium resists rust and sun damage well. For better heat and sound insulation you can add double-glazed units, which we can advise on during measurement.",
      },
      {
        question: "Can you match a specific frame colour?",
        answer:
          "We offer several powder-coated finishes. Share the shade or look you want and we confirm the closest available option before fabrication.",
      },
    ],
    related: ["upvc-windows-lahore", "aluminium-doors-lahore", "glass-repair-lahore"],
  },
  {
    slug: "aluminium-doors-lahore",
    h1: "Aluminium Doors in Lahore",
    title: "Aluminium Doors in Lahore",
    metaDescription:
      "Aluminium doors in Lahore for homes, offices and shops — sliding, hinged and heavy-duty frames, measured and professionally fitted. Call or WhatsApp for a quotation.",
    intro:
      "We make and fit aluminium doors for homes, offices and commercial entrances across Lahore. Aluminium is strong, light and holds its finish, which suits doors that are opened and closed all day.",
    sections: [
      {
        heading: "Door types we fabricate",
        body: "Sliding, hinged and heavy-duty aluminium doors for high-traffic entrances, along with glass-fitted aluminium doors for shops and offices. Hardware such as handles, locks and closers is fitted to suit the door's use.",
      },
      {
        heading: "Built for daily use",
        body: "Commercial doors take constant use, so we focus on solid frames, smooth movement and reliable closers. For entrances we can pair aluminium framing with toughened glass for a clean, secure finish.",
      },
    ],
    highlights: [
      "Sliding, hinged and heavy-duty aluminium doors",
      "Glass-fitted doors for shops and offices",
      "Handles, locks and door closers fitted",
      "Powder-coated, low-maintenance frames",
      "Measured on site before fabrication",
    ],
    image: "/images/advanced-solutions/automatic-sliding-doors.png",
    imageAlt: "Aluminium framed glass door fitted at a commercial entrance in Lahore",
    whatsappService: "aluminium doors",
    ctaHeading: "Looking for aluminium doors in Lahore?",
    faqs: [
      {
        question: "Do you fit door closers and floor springs?",
        answer:
          "Yes. We fit and adjust door closers and floor springs for glass and aluminium doors, and can also repair existing ones.",
      },
    ],
    related: ["aluminium-windows-lahore", "glass-shop-front-lahore", "glass-repair-lahore"],
  },
  {
    slug: "upvc-windows-lahore",
    h1: "UPVC Windows in Lahore",
    title: "UPVC Windows in Lahore",
    metaDescription:
      "UPVC windows in Lahore — energy-efficient sliding and casement frames with better heat and sound insulation for homes. Call or WhatsApp for a quotation.",
    intro:
      "We supply and install UPVC windows across Lahore. UPVC frames insulate better against heat and noise than standard frames, which makes them a strong choice for bedrooms and homes on busy roads.",
    sections: [
      {
        heading: "Why choose UPVC",
        body: "UPVC frames are sealed and can be double-glazed, reducing outside noise and helping keep rooms cooler. They do not rust or need repainting, so upkeep is minimal.",
      },
      {
        heading: "Styles available",
        body: "Sliding and casement UPVC windows, French doors and wood-finish laminated frames for a timber look without the maintenance. We measure each opening before fabrication.",
      },
    ],
    highlights: [
      "Sliding and casement UPVC windows",
      "Double-glazed units for heat and sound insulation",
      "Wood-finish laminate options",
      "Low maintenance — no rust or repainting",
      "Measured and fitted on site",
    ],
    image: "/images/upvc-solutions/upvc-casement-windows.png",
    imageAlt: "White UPVC casement window installed in a Lahore home",
    whatsappService: "UPVC windows",
    ctaHeading: "Want quieter, better-insulated UPVC windows?",
    faqs: [
      {
        question: "Do UPVC windows really reduce noise?",
        answer:
          "Sealed UPVC frames with double glazing noticeably cut outside noise compared with single-glazed frames. The exact reduction depends on the glass unit chosen.",
      },
    ],
    related: ["aluminium-windows-lahore", "double-glazed-windows-lahore", "glass-repair-lahore"],
  },
  {
    slug: "glass-shop-front-lahore",
    h1: "Glass Shop Fronts in Lahore",
    title: "Glass Shop Fronts in Lahore",
    metaDescription:
      "Glass shop fronts in Lahore — toughened glass storefronts, frameless doors and display glazing for retail and commercial units. Call or WhatsApp for a quotation.",
    intro:
      "We design and install glass shop fronts across Lahore using toughened glass for a clear, secure and professional storefront. A good shop front improves visibility and gives customers confidence in your business.",
    sections: [
      {
        heading: "Toughened glass storefronts",
        body: "Floor-to-ceiling toughened glass gives an open, modern shop front. We fit frameless or patch-fitting glass doors with the right closers and locks for daily commercial use.",
      },
      {
        heading: "Commercial-grade installation",
        body: "Shop fronts must be safe and hard-wearing. We use tempered glass and secure fittings, and handle measurement, fabrication and installation so the storefront is fitted cleanly and safely.",
      },
    ],
    highlights: [
      "10mm and 12mm toughened glass storefronts",
      "Frameless and patch-fitting glass doors",
      "Door closers, locks and handles fitted",
      "Clear, tinted or reflective glass options",
      "Retail and commercial units",
    ],
    image: "/images/glass-mirrors/retail-shop-fronts.png",
    imageAlt: "Toughened glass shop front with frameless doors on a Lahore retail unit",
    whatsappService: "a glass shop front",
    ctaHeading: "Planning a new glass shop front?",
    faqs: [
      {
        question: "How long does a shop front installation take?",
        answer:
          "It depends on the size and glass type. After measurement we confirm a timeline for fabrication and fitting in your quotation.",
      },
    ],
    related: ["office-glass-partitions-lahore", "aluminium-doors-lahore", "glass-repair-lahore"],
  },
  {
    slug: "office-glass-partitions-lahore",
    h1: "Office Glass Partitions in Lahore",
    title: "Office Glass Partitions in Lahore",
    metaDescription:
      "Office glass partitions in Lahore — frameless and framed 12mm toughened glass partitions with optional frosted film for privacy. Call or WhatsApp for a quotation.",
    intro:
      "We install office glass partitions across Lahore to create bright, modern workspaces without heavy walls. Glass partitions let light through while still dividing meeting rooms, cabins and open areas.",
    sections: [
      {
        heading: "Framed and frameless partitions",
        body: "Choose slim aluminium-framed partitions or fully frameless 12mm toughened glass. Frosted film or manifestation can be added for privacy on meeting rooms and cabins.",
      },
      {
        heading: "Sound and privacy options",
        body: "For quieter cabins we can advise on thicker glass and better sealing. Frosted or patterned film gives privacy where needed without blocking light.",
      },
    ],
    highlights: [
      "Frameless and aluminium-framed partitions",
      "12mm toughened glass",
      "Frosted film and manifestation for privacy",
      "Glass doors with closers",
      "Offices, clinics and commercial spaces",
    ],
    image: "/images/glass-mirrors/office-glass-partitions.png",
    imageAlt: "Frameless glass office partitions dividing a modern Lahore workspace",
    whatsappService: "office glass partitions",
    ctaHeading: "Modernise your office with glass partitions",
    faqs: [
      {
        question: "Can partitions be made private for meeting rooms?",
        answer:
          "Yes. We add frosted film, patterned film or manifestation strips so meeting rooms stay private while still letting light through.",
      },
    ],
    related: ["glass-shop-front-lahore", "shower-glass-cabins-lahore", "glass-railings-lahore"],
  },
  {
    slug: "shower-glass-cabins-lahore",
    h1: "Shower Glass Cabins in Lahore",
    title: "Shower Glass Cabins in Lahore",
    metaDescription:
      "Shower glass cabins in Lahore — custom frameless tempered glass shower enclosures measured and fitted for your bathroom. Call or WhatsApp for a quotation.",
    intro:
      "We make custom shower glass cabins across Lahore using clear tempered glass. A frameless enclosure keeps bathrooms feeling open and is easy to clean.",
    sections: [
      {
        heading: "Frameless tempered enclosures",
        body: "Shower cabins use toughened safety glass with stainless-steel fittings. We build to your bathroom's exact size, including corner and walk-in layouts.",
      },
      {
        heading: "Made to measure",
        body: "Because bathrooms vary, every cabin is measured on site so the glass fits neatly against walls and the tray or floor, sealing properly against leaks.",
      },
    ],
    highlights: [
      "Frameless and semi-frameless designs",
      "Clear tempered safety glass",
      "Stainless-steel fittings and hinges",
      "Corner and walk-in layouts",
      "Measured to your bathroom size",
    ],
    image: "/images/glass-mirrors/shower-glass-enclosures.png",
    imageAlt: "Frameless tempered glass shower enclosure fitted in a Lahore bathroom",
    whatsappService: "a shower glass cabin",
    ctaHeading: "Get a made-to-measure shower cabin",
    faqs: [
      {
        question: "Is shower glass safe if it breaks?",
        answer:
          "We use toughened (tempered) safety glass, which is designed to break into small blunt pieces rather than sharp shards, making it far safer than ordinary glass.",
      },
    ],
    related: ["glass-railings-lahore", "office-glass-partitions-lahore", "glass-repair-lahore"],
  },
  {
    slug: "glass-railings-lahore",
    h1: "Glass Railings in Lahore",
    title: "Glass Railings in Lahore",
    metaDescription:
      "Glass railings in Lahore — frameless and stainless-steel fitted glass balustrades for stairs, balconies and terraces. Call or WhatsApp for a quotation.",
    intro:
      "We install glass railings across Lahore for stairs, balconies and terraces. Toughened glass balustrades give an open, modern look while keeping edges safe.",
    sections: [
      {
        heading: "Frameless and fitted railings",
        body: "Choose frameless glass balustrades or glass panels with stainless-steel fittings and handrails. Toughened or laminated glass is used for strength and safety.",
      },
      {
        heading: "Stairs, balconies and terraces",
        body: "Glass railings suit staircases, balconies and rooftop terraces where you want the view kept open. We measure and fit each panel securely.",
      },
    ],
    highlights: [
      "Frameless glass balustrades",
      "Stainless-steel fittings and handrails",
      "Toughened and laminated glass",
      "Stairs, balconies and terraces",
      "Measured and fitted securely",
    ],
    image: "/images/glass-mirrors/glass-balcony-railings.png",
    imageAlt: "Frameless glass balcony railing with stainless-steel fittings in Lahore",
    whatsappService: "glass railings",
    ctaHeading: "Add modern glass railings",
    faqs: [
      {
        question: "What glass is used for railings?",
        answer:
          "We use toughened or laminated glass for railings. Laminated glass holds together if damaged, which adds an extra layer of safety for balconies and stairs.",
      },
    ],
    related: ["shower-glass-cabins-lahore", "stainless-steel-glass-work-lahore", "office-glass-partitions-lahore"],
  },
  {
    slug: "glass-repair-lahore",
    h1: "Glass Repair in Lahore",
    title: "Glass Repair in Lahore",
    metaDescription:
      "Glass repair in Lahore — replacement of broken windows, doors, shop fronts and partitions, plus door closer fixing and leak sealing. Call or WhatsApp for a quotation.",
    intro:
      "We handle glass repair and replacement across Lahore for windows, doors, shop fronts and partitions. Send a photo of the damage on WhatsApp and we advise on the glass type and an estimate.",
    sections: [
      {
        heading: "Repairs we handle",
        body: "Broken window and door glass, cracked shop fronts, damaged partition glass, door closer and floor spring fixing, and sealing windows against dust and water leaks.",
      },
      {
        heading: "Fast, correct replacement",
        body: "We match the correct glass thickness and type for the frame so the replacement is safe and fits properly. For safety glass we use toughened or laminated glass as required.",
      },
    ],
    highlights: [
      "Broken window and door glass replacement",
      "Shop front and partition glass repair",
      "Door closer and floor spring fixing",
      "Window leak sealing",
      "Correct glass type matched to the frame",
    ],
    image: "/images/repair-maintenance/glass-polishing.png",
    imageAlt: "Technician replacing broken glass in a window frame in Lahore",
    whatsappService: "glass repair",
    ctaHeading: "Need glass repaired quickly?",
    faqs: [
      {
        question: "Can you replace glass in my existing frame?",
        answer:
          "In most cases yes. Send a photo and the approximate size on WhatsApp so we can confirm the glass type and give an estimate before visiting.",
      },
    ],
    related: ["aluminium-windows-lahore", "glass-shop-front-lahore", "double-glazed-windows-lahore"],
  },
  {
    slug: "double-glazed-windows-lahore",
    h1: "Double-Glazed Windows in Lahore",
    title: "Double-Glazed Windows in Lahore",
    metaDescription:
      "Double-glazed windows in Lahore — insulated glass units in aluminium or UPVC frames for better heat and sound control. Call or WhatsApp for a quotation.",
    intro:
      "We supply double-glazed windows across Lahore in both aluminium and UPVC frames. Double glazing uses two glass panes with a sealed gap to reduce heat transfer and outside noise.",
    sections: [
      {
        heading: "How double glazing helps",
        body: "The sealed air gap between the two panes slows heat coming in during summer and reduces noise from busy roads, helping rooms stay more comfortable.",
      },
      {
        heading: "Frame choices",
        body: "Double-glazed units fit into aluminium frames for a slim modern look or UPVC frames for the best insulation. We advise on the right combination for your opening and budget.",
      },
    ],
    highlights: [
      "Insulated double-glazed glass units",
      "Aluminium or UPVC frames",
      "Better heat and noise control",
      "Suited to bedrooms and roadside rooms",
      "Measured and fitted on site",
    ],
    image: "/images/upvc-solutions/soundproof-glazing.png",
    imageAlt: "Double-glazed window unit fitted in a Lahore home",
    whatsappService: "double-glazed windows",
    ctaHeading: "Interested in double-glazed windows?",
    faqs: [
      {
        question: "Does double glazing keep rooms cooler?",
        answer:
          "Double glazing slows heat transfer through the window, which helps rooms stay cooler than single glazing. Curtains, orientation and wall insulation also play a part.",
      },
    ],
    related: ["upvc-windows-lahore", "aluminium-windows-lahore", "glass-repair-lahore"],
  },
  {
    slug: "aluminium-welding-lahore",
    h1: "Aluminium Fabrication & Welding in Lahore",
    title: "Aluminium Fabrication & Welding in Lahore",
    metaDescription:
      "Aluminium fabrication and welding in Lahore — custom frames, grilles, gates and structures fabricated and fitted. Call or WhatsApp for a quotation.",
    intro:
      "We provide aluminium fabrication and welding across Lahore for windows, doors, grilles, gates and custom structures. In-house fabrication means work is made to your exact measurements.",
    sections: [
      {
        heading: "Custom fabrication",
        body: "From window and door frames to safety grilles, railings and gates, we fabricate aluminium and steel work to size. Custom fabrication suits openings and layouts that standard sizes do not fit.",
      },
      {
        heading: "Workshop and on-site",
        body: "Fabrication is done safely in the workshop, then delivered and installed on site. We handle the measurement, fabrication and fitting as one job.",
      },
    ],
    highlights: [
      "Custom aluminium and steel fabrication",
      "Frames, grilles, railings and gates",
      "Made to exact measurements",
      "Workshop fabrication with on-site fitting",
      "Residential and commercial",
    ],
    image: "/images/aluminum-steel/structural-steel-framing.png",
    imageAlt: "Aluminium fabrication and welding work in a Lahore workshop",
    whatsappService: "aluminium fabrication and welding",
    ctaHeading: "Need custom aluminium fabrication?",
    faqs: [
      {
        question: "Can you make custom-size frames and grilles?",
        answer:
          "Yes. Custom fabrication is our main strength — share your sizes or let us measure on site and we fabricate to fit.",
      },
    ],
    related: ["stainless-steel-glass-work-lahore", "aluminium-windows-lahore", "aluminium-doors-lahore"],
  },
  {
    slug: "stainless-steel-glass-work-lahore",
    h1: "Stainless-Steel & Glass Work in Lahore",
    title: "Stainless-Steel & Glass Work in Lahore",
    metaDescription:
      "Stainless-steel and glass work in Lahore — spider fittings, railings, canopies and structural glazing combining SS fittings with toughened glass. Call or WhatsApp for a quotation.",
    intro:
      "We combine stainless-steel fittings with toughened glass across Lahore for railings, canopies, spider glazing and display work. Stainless steel resists rust and gives a clean, durable finish.",
    sections: [
      {
        heading: "SS and glass combinations",
        body: "Stainless-steel spider fittings, standoffs and handrails paired with toughened glass for railings, canopies and structural glazing. SS fittings hold up well outdoors and indoors.",
      },
      {
        heading: "Durable, clean finish",
        body: "Grade stainless-steel fittings keep their finish over time, which suits entrances, staircases and facades where appearance and durability both matter.",
      },
    ],
    highlights: [
      "Stainless-steel spider fittings and standoffs",
      "SS handrails with glass panels",
      "Canopies and structural glazing",
      "Rust-resistant, clean finish",
      "Indoor and outdoor applications",
    ],
    image: "/images/glass-mirrors/frameless-glass-doors.png",
    imageAlt: "Stainless-steel spider fittings holding toughened glass in Lahore",
    whatsappService: "stainless-steel and glass work",
    ctaHeading: "Planning stainless-steel and glass work?",
    faqs: [
      {
        question: "Why use stainless steel with glass?",
        answer:
          "Stainless steel resists rust and keeps a clean finish, making it a good match for glass railings, canopies and spider glazing that are exposed to weather or heavy use.",
      },
    ],
    related: ["glass-railings-lahore", "aluminium-welding-lahore", "glass-shop-front-lahore"],
  },
  {
    slug: "fiber-sheds-lahore",
    h1: "Fiberglass Sheds & Canopies in Lahore",
    title: "Fiberglass Sheds & Canopies in Lahore",
    metaDescription:
      "Fiberglass sheds and canopies in Lahore — car parking shades, rooftop shelters and industrial roofing fabricated and installed. Call or WhatsApp for a quotation.",
    intro:
      "We fabricate and install fiberglass sheds and canopies across Lahore, including car parking shades, rooftop shelters and industrial roofing. Fiberglass is light, weatherproof and long-lasting.",
    sections: [
      {
        heading: "Sheds and canopies",
        body: "Car parking shades for homes and offices, rooftop shelters for storage or sitting areas, and translucent fiberglass roofing for factories and warehouses.",
      },
      {
        heading: "Weatherproof and durable",
        body: "Fiberglass stands up to sun and rain and needs little maintenance. Structures are fabricated to your span and fitted on site.",
      },
    ],
    highlights: [
      "Car parking shades",
      "Rooftop fiber shelters",
      "Industrial fiber roofing",
      "Weatherproof and low maintenance",
      "Fabricated to your span and fitted on site",
    ],
    image: "/images/fiberglass-solutions/industrial-fiber-roofing.png",
    imageAlt: "Fiberglass car parking canopy installed at a Lahore property",
    whatsappService: "fiberglass sheds and canopies",
    ctaHeading: "Need a fiberglass shed or canopy?",
    faqs: [
      {
        question: "Do fiberglass sheds handle Lahore summers?",
        answer:
          "Yes. Fiberglass roofing is made for sun and rain exposure. Translucent sheets also let in daylight while blocking direct sun, which suits parking and industrial use.",
      },
    ],
    related: ["stainless-steel-glass-work-lahore", "aluminium-welding-lahore"],
  },
];

export const servicePageSlugs = servicePages.map((p) => p.slug);

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug);
}
