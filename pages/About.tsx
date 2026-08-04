import { Link } from "react-router-dom";
import { Check, MapPin, Phone, Star } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { GoogleRatingBadge } from "../components/ui/GoogleRatingBadge";
import { CTASection } from "../components/ui/CTASection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/Reveal";
import { benefits, processSteps, serviceAreas, business } from "@/config";
import { breadcrumbSchema, localBusinessSchema } from "../components/schema";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export function Component() {
  return (
    <>
      <Seo
        title="About Labbyak Glass & Aluminium"
        description="Labbyak Glass & Aluminium is a Lahore-based glass and aluminium business in Tauheed Block, Bahria Town — supplying and fitting windows, doors, shop fronts, partitions and glass work for homes and businesses."
        path="/about"
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs)]}
      />

      <header className="bg-graphite-900 pt-28 pb-16 text-white md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
            About Labbyak Glass &amp; Aluminium
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            A Lahore glass and aluminium business built on accurate measurement,
            quality materials and clean, professional fitting.
          </p>
          <GoogleRatingBadge variant="light" className="mt-8" />
        </div>
      </header>

      {/* Intro + image */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-glass-600">
                Who we are
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-graphite-900">
                Practical glass &amp; aluminium work in Lahore
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-graphite-600">
                <p>
                  Labbyak Glass &amp; Aluminium is based in Tauheed Block, Bahria
                  Town and works across Lahore. We supply and fit aluminium and
                  UPVC windows and doors, glass shop fronts, office partitions,
                  shower cabins, glass railings, fiberglass sheds and handle glass
                  repair.
                </p>
                <p>
                  Our approach is simple: measure every job on site, use the right
                  materials for the opening, and fit the work cleanly so it seals
                  properly and lasts. We work on both homes and commercial
                  buildings, from a single window to full glazing projects.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="rounded-full bg-graphite-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-graphite-800"
                >
                  Our services
                </Link>
                <Link
                  to="/projects"
                  className="rounded-full border border-graphite-300 px-6 py-3 text-sm font-semibold text-graphite-900 transition-colors hover:bg-graphite-100"
                >
                  View projects
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl bg-graphite-100 shadow-elevated">
              <OptimizedImage
                src="/home-page.jpg"
                alt="Glass and aluminium work by Labbyak in Lahore"
                width={800}
                height={640}
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Why Labbyak" title="What you can expect" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 70}>
                <div className="h-full rounded-2xl border border-graphite-100 bg-white p-6 shadow-card">
                  <span className="inline-flex rounded-xl bg-glass-50 p-3 text-glass-600">
                    <b.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-graphite-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-500">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="How it works" title="Our Process" />
          <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <li key={step.title} className="h-full">
                <Reveal delay={(i % 3) * 60} className="h-full">
                  <div className="flex h-full gap-4 rounded-2xl border border-graphite-100 bg-surface p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-graphite-900 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-graphite-900">{step.title}</h3>
                      <p className="mt-1 text-sm text-graphite-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Areas + contact quick facts */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-graphite-900">
              Areas we serve
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {serviceAreas.map((a) => (
                <span
                  key={a.name}
                  className="rounded-full border border-graphite-200 bg-white px-4 py-2 text-sm text-graphite-600"
                >
                  {a.name}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-graphite-100 bg-white p-6 shadow-card">
            <h2 className="text-2xl font-bold tracking-tight text-graphite-900">
              Visit or contact us
            </h2>
            <ul className="mt-5 space-y-4 text-graphite-600">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-glass-600" aria-hidden="true" />
                <span>{business.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-glass-600" aria-hidden="true" />
                <a href={`tel:${business.phone.tel}`} className="hover:text-glass-600">
                  {business.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Star className="mt-0.5 h-5 w-5 shrink-0 text-bronze-400" aria-hidden="true" />
                <span>
                  {business.rating.value} / 5 on Google ({business.rating.count} reviews)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
