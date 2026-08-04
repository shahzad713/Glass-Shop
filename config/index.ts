/**
 * Centralized configuration barrel. Import business/site/content data from
 * "@/config" so every consumer reads a single source of truth.
 *
 * Service catalogue, projects, team and products remain in `data.ts` (already
 * centralized); re-exported here for one consistent import path.
 */
export * from "./business";
export * from "./site";
export * from "./navigation";
export * from "./areas";
export * from "./faqs";
export * from "./servicePages";
export * from "./content";
export { services, projects, team, products } from "../data";
