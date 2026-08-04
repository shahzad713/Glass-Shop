/** Primary navigation — real route paths (no state switching). */
export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Footer service links point at the high-intent service pages. */
export const footerServiceNav: NavLink[] = [
  { label: "Aluminium Windows", href: "/aluminium-windows-lahore" },
  { label: "Glass Shop Fronts", href: "/glass-shop-front-lahore" },
  { label: "UPVC Windows", href: "/upvc-windows-lahore" },
  { label: "Office Glass Partitions", href: "/office-glass-partitions-lahore" },
  { label: "Shower Glass Cabins", href: "/shower-glass-cabins-lahore" },
  { label: "Glass Repair", href: "/glass-repair-lahore" },
];

export const footerCompanyNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
