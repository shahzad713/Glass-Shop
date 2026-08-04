import {
  Ruler,
  PencilRuler,
  FileText,
  Factory,
  Wrench,
  CheckCircle,
  Gem,
  Building2,
  ShieldCheck,
  Headphones,
  type LucideIcon,
} from "lucide-react";

/** Editable homepage content blocks. */

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Service process — edit if the real workflow differs. */
export const processSteps: Step[] = [
  {
    icon: FileText,
    title: "Inquiry",
    description: "Tell us your requirement by phone or WhatsApp.",
  },
  {
    icon: Ruler,
    title: "Site Visit & Measurement",
    description: "We visit and take exact measurements on site.",
  },
  {
    icon: PencilRuler,
    title: "Quotation",
    description: "You receive a clear written quotation for materials and fitting.",
  },
  {
    icon: Factory,
    title: "Fabrication",
    description: "Your order is fabricated to the measured sizes.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Our team installs the work cleanly and securely.",
  },
  {
    icon: CheckCircle,
    title: "Final Inspection",
    description: "We check the finished work with you before completion.",
  },
];

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** "Why choose Labbyak" — practical, verifiable benefits only. */
export const benefits: Benefit[] = [
  {
    icon: Gem,
    title: "Quality Materials",
    description:
      "Toughened glass, powder-coated aluminium and quality UPVC matched to the job.",
  },
  {
    icon: Ruler,
    title: "Custom Measurements",
    description:
      "Every job is measured on site so it fits your opening exactly.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Fitting",
    description:
      "Clean, secure installation that seals against dust and water.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description:
      "From a single window to shop fronts, partitions and larger glazing.",
  },
];

/** Trust strip items — Google rating handled separately from live config. */
export interface TrustItem {
  icon: LucideIcon;
  label: string;
  value: string;
}
