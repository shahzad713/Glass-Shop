import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { CTASection } from "../components/ui/CTASection";
import { WhatsAppButton, CallButton } from "../components/ui/Buttons";
import { GoogleRatingBadge } from "../components/ui/GoogleRatingBadge";
import { Reveal } from "../components/Reveal";
import { getServicePage, business, primaryCity } from "@/config";
import {
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
} from "../components/schema";
import { NotFoundView } from "./NotFound";

/**
 * ONE template rendering every high-intent service page. The concrete slug is
 * read from the route; unknown slugs fall back to the 404 view so the catch-all
 * route never renders an empty page.
 */
export function Component() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const page = serviceSlug ? getServicePage(serviceSlug) : undefined;

  if (!page) return <NotFoundView />;

  const path = `/${page.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: page.h1, path },
  ];

  return (
    <>
      <Seo
        title={page.title}
        description={page.metaDescription}
        path={path}
        image={page.image}
        jsonLd={[
          localBusinessSchema(),
          serviceSchema({
            name: page.h1,
            description: page.metaDescription,
            path,
          }),
          breadcrumbSchema(crumbs),
          faqSchema(page.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite-900 text-white">
        <div className="absolute inset-0">
          <OptimizedImage
            src={page.image}
            alt={page.imageAlt}
            priority
            width={1600}
            height={900}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/80 to-graphite-900/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-14 md:pt-32 md:pb-20">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            {page.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton service={page.whatsappService} area={primaryCity} size="lg" />
            <CallButton size="lg" className="bg-white text-graphite-900 hover:bg-graphite-100">
              Call {business.phone.display}
            </CallButton>
          </div>
          <GoogleRatingBadge variant="light" className="mt-8" />
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_340px]">
          <div className="max-w-2xl">
            {page.sections.map((s) => (
              <Reveal key={s.heading} className="mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-graphite-900">
                  {s.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-graphite-600">{s.body}</p>
              </Reveal>
            ))}
          </div>

          {/* Highlights sidebar */}
          <aside>
            <div className="sticky top-24 rounded-2xl border border-graphite-100 bg-surface p-6 shadow-card">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-glass-600">
                What we offer
              </h2>
              <ul className="mt-4 space-y-3">
                {page.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-graphite-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-glass-600" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <WhatsAppButton service={page.whatsappService} area={primaryCity} className="w-full" />
                <CallButton className="w-full border border-graphite-300 text-graphite-900 hover:bg-graphite-900 hover:text-white">
                  Call {business.phone.display}
                </CallButton>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQs */}
      {page.faqs.length > 0 && (
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-graphite-900">
              {page.h1} — FAQs
            </h2>
            <FAQAccordion faqs={page.faqs} />
          </div>
        </section>
      )}

      {/* Related services */}
      {page.related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-graphite-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              {page.related.map((slug) => {
                const rel = getServicePage(slug);
                if (!rel) return null;
                return (
                  <Link
                    key={slug}
                    to={`/${slug}`}
                    className="rounded-full border border-graphite-200 px-5 py-2.5 text-sm font-medium text-graphite-700 transition-colors hover:border-glass-300 hover:bg-glass-50 hover:text-glass-700"
                  >
                    {rel.h1}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={page.ctaHeading} service={page.whatsappService} area={primaryCity} />
    </>
  );
}
