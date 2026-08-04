import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/Layout";
import { servicePageSlugs } from "./config";
import { projects } from "./data";

/**
 * Route table for react-router v6 + vite-react-ssg static prerender.
 * Every listed path is prerendered to static HTML at build time, so crawlers
 * receive real titles, meta and JSON-LD per route. Dynamic routes declare
 * `getStaticPaths` so each concrete URL is generated.
 */
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "components/Layout.tsx",
    children: [
      { index: true, lazy: () => import("./pages/Home") },
      { path: "about", lazy: () => import("./pages/About") },
      { path: "services", lazy: () => import("./pages/ServicesIndex") },
      { path: "projects", lazy: () => import("./pages/ProjectsIndex") },
      {
        path: "projects/:id",
        lazy: () => import("./pages/ProjectDetailPage"),
        getStaticPaths: () => projects.map((p) => `projects/${p.id}`),
      },
      { path: "products", lazy: () => import("./pages/ProductsPage") },
      { path: "team", lazy: () => import("./pages/TeamPage") },
      { path: "contact", lazy: () => import("./pages/Contact") },
      { path: "privacy-policy", lazy: () => import("./pages/PrivacyPolicy") },
      // High-intent service-area pages — one template, many slugs.
      {
        path: ":serviceSlug",
        lazy: () => import("./pages/ServicePage"),
        getStaticPaths: () => servicePageSlugs,
      },
      { path: "*", lazy: () => import("./pages/NotFound") },
    ],
  },
];
