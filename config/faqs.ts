/**
 * Purchase-intent FAQs. Answers stay general where exact specs, brands or
 * warranties are unknown — never invent technical guarantees.
 * Owner can add/edit entries here; they render on the homepage and feed
 * FAQPage JSON-LD.
 */
export interface FAQ {
  question: string;
  answer: string;
}

export const generalFaqs: FAQ[] = [
  {
    question: "Do you provide free site measurement before a quotation?",
    answer:
      "Yes. Share your location and requirement on WhatsApp or by phone and we arrange a site visit to take exact measurements before preparing a quotation. Accurate measurement avoids fitting problems later.",
  },
  {
    question: "Which areas of Lahore do you cover?",
    answer:
      "We are based in Tauheed Block, Bahria Town and work across Lahore, including Bahria Town, Bahria Orchard, DHA, Valencia Town, Lake City and nearby areas for both residential and commercial projects.",
  },
  {
    question: "What is the difference between aluminium and UPVC windows?",
    answer:
      "Aluminium frames are slim, strong and suited to larger openings and commercial work. UPVC frames offer better thermal and sound insulation for homes. We help you choose based on your opening size, budget and whether insulation or a slim look matters more.",
  },
  {
    question: "What glass thickness do you use for shop fronts and doors?",
    answer:
      "Shop fronts and frameless glass doors commonly use 10mm or 12mm toughened (tempered) glass for strength and safety. The right thickness depends on the panel size and use, which we confirm during measurement.",
  },
  {
    question: "Can you repair or replace broken glass in an existing frame?",
    answer:
      "Yes. We handle glass repair and replacement for windows, doors, shop fronts and partitions. Send a photo of the damage on WhatsApp so we can advise on the glass type and give an estimate.",
  },
  {
    question: "How does the quotation process work?",
    answer:
      "Contact us with your requirement, we take measurements on site, then provide a written quotation covering materials and fitting. Once approved, we fabricate and install, followed by a final check of the finished work.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. We work on homes, offices, shops and commercial buildings — from a single window or shower cabin to shop fronts, office partitions and larger glazing work.",
  },
];
