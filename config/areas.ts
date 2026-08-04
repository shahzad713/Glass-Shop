/**
 * Service areas genuinely served. Do NOT invent office locations.
 * `primary` areas get real internal link surfacing; others are listed
 * plainly as coverage.
 */
export interface ServiceArea {
  name: string;
  primary?: boolean;
}

export const serviceAreas: ServiceArea[] = [
  { name: "Bahria Town Lahore", primary: true },
  { name: "Bahria Orchard", primary: true },
  { name: "DHA Lahore" },
  { name: "Valencia Town" },
  { name: "Lake City" },
  { name: "Johar Town" },
  { name: "Fazaia Housing" },
  { name: "Zaitoon Colony" },
  { name: "Askari 11" },
];

/** City the business is based in and primarily serves. */
export const primaryCity = "Lahore";
