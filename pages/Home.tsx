import { Link } from "react-router-dom";
import { Hero } from "./Hero";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceCard } from "../components/ui/ServiceCard";
import { ProjectCard } from "../components/ui/ProjectCard";
import { GoogleRatingBadge } from "../components/ui/GoogleRatingBadge";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { CTASection } from "../components/ui/CTASection";
import { WhatsAppButton } from "../components/ui/Buttons";
import {
  services,
  projects,
  processSteps,
  benefits,
  generalFaqs,
  serviceAreas,
  servicePages,
  business,
  site,
  absoluteUrl,
} from "@/config";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  faqSchema,
} from "../components/schema";
import { MapPin, Building2, MessageSquare, Star } from "lucide-react";

export function Component() {
  // Homepage services: one representative card per category
  const seen = new Set<string>();
  const featuredServices = services.filter((s) => {
    if (seen.has(s.category)) return false;
    seen.add(s.category);
    return true;
  });
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      <Seo
        title={site.defaultTitle}
        rawTitle
        description={site.defaultDescription}
        path="/"
        jsonLd={[
          localBusinessSchema(),
          organizationSchema(),
          websiteSchema(),
          faqSchema(generalFaqs),
        ]}
      />

      <Hero />

      {/* Trust strip */}
      <section className="border-b border-graphite-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          <TrustItem icon={<Star className="h-5 w-5" />} label="Google Rating" value={`${business.rating.value} / 5 (${business.rating.count})`} />
          <TrustItem icon={<MapPin className="h-5 w-5" />} label="Based in" value="Bahria Town, Lahore" />
          <TrustItem icon={<Building2 className="h-5 w-5" />} label="We serve" value="Homes & Businesses" />
          <TrustItem icon={<MessageSquare className="h-5 w-5" />} label="Quotation" value="Call or WhatsApp" />
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What we do"
            title="Our Services"
            intro="Glass and aluminium solutions for residential and commercial projects across Lahore."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {featuredServices.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <ServiceCard service={s} href="/services" />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex rounded-full border border-graphite-300 px-8 py-3 text-sm font-semibold text-graphite-900 transition-colors hover:bg-graphite-900 hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our work"
            title="Featured Projects"
            intro="A selection of glass and aluminium work completed for homes and businesses in Lahore."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex rounded-full border border-graphite-300 px-8 py-3 text-sm font-semibold text-graphite-900 transition-colors hover:bg-graphite-900 hover:text-white"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-graphite-900 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-glass-400">
              Why Labbyak
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Practical work, done properly
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-graphite-800 bg-graphite-950/40 p-6">
                  <span className="inline-flex rounded-xl bg-glass-500/15 p-3 text-glass-400">
                    <b.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-300">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="How it works"
            title="Our Process"
            intro="From first call to final inspection — a clear, simple process."
          />
          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 70}>
                <li className="flex h-full gap-4 rounded-2xl border border-graphite-100 bg-white p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-graphite-900 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-graphite-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-graphite-500">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Areas served */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Coverage"
            title="Areas We Serve"
            intro="Based in Tauheed Block, Bahria Town and working across Lahore."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((a) => (
              <span
                key={a.name}
                className={`rounded-full border px-4 py-2 text-sm ${
                  a.primary
                    ? "border-glass-200 bg-glass-50 font-medium text-glass-700"
                    : "border-graphite-200 bg-white text-graphite-600"
                }`}
              >
                {a.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews — link to genuine Google profile, no invented quotes here */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading
            eyebrow="Reviews"
            title="Rated 4.8 on Google"
            intro="Our rating reflects genuine reviews from customers across Lahore."
          />
          <div className="flex flex-col items-center gap-6">
            <GoogleRatingBadge variant="dark" />
            <a
              href={business.maps.placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-graphite-300 px-6 py-3 text-sm font-semibold text-graphite-900 transition-colors hover:bg-graphite-900 hover:text-white"
            >
              Read our Google reviews
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
          <FAQAccordion faqs={generalFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}

function TrustItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex shrink-0 rounded-lg bg-glass-50 p-2 text-glass-600">
        {icon}
      </span>
      <div>
        <p className="text-xs text-graphite-400">{label}</p>
        <p className="text-sm font-semibold text-graphite-900">{value}</p>
      </div>
    </div>
  );
}
