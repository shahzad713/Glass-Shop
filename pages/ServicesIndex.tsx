import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceCard } from "../components/ui/ServiceCard";
import { CTASection } from "../components/ui/CTASection";
import { Reveal } from "../components/Reveal";
import { services, servicePages } from "@/config";
import {
  breadcrumbSchema,
  localBusinessSchema,
} from "../components/schema";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export function Component() {
  // Group the full catalogue by category for browsing.
  const byCategory = services.reduce<Record<string, typeof services>>(
    (acc, s) => {
      (acc[s.category] ||= []).push(s);
      return acc;
    },
    {},
  );

  return (
    <>
      <Seo
        title="Glass & Aluminium Services in Lahore"
        description="Full range of glass and aluminium services in Lahore — aluminium and UPVC windows, glass shop fronts, partitions, railings, shower cabins, fiberglass sheds and glass repair."
        path="/services"
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs)]}
      />

      <header className="bg-graphite-900 pt-28 pb-16 text-white md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Glass and aluminium work for homes and businesses across Lahore —
            measured on site and fitted by our own team.
          </p>
        </div>
      </header>

      {/* High-intent service pages */}
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Popular"
            title="Featured Services"
            intro="Detailed pages for our most requested work in Lahore."
            align="left"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <Link
                  to={`/${p.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-graphite-100 bg-white p-6 shadow-card transition-shadow hover:shadow-elevated"
                >
                  <div>
                    <h3 className="text-lg font-bold text-graphite-900 group-hover:text-glass-600">
                      {p.h1}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-graphite-500">
                      {p.intro}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-glass-600">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full catalogue by category */}
      {Object.entries(byCategory).map(([category, items]) => (
        <section key={category} className="bg-white py-14 even:bg-surface">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-graphite-900">
              {category}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
              {items.map((s, i) => (
                <Reveal key={s.id} delay={(i % 4) * 60}>
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
