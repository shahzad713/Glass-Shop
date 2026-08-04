import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { ProjectCard } from "../components/ui/ProjectCard";
import { CTASection } from "../components/ui/CTASection";
import { Reveal } from "../components/Reveal";
import { projects } from "@/config";
import { breadcrumbSchema, localBusinessSchema } from "../components/schema";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

export function Component() {
  return (
    <>
      <Seo
        title="Our Projects in Lahore"
        description="Completed glass and aluminium projects across Lahore — villas, offices, shop fronts, apartments and commercial buildings in Bahria Town, DHA and beyond."
        path="/projects"
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs)]}
      />

      <header className="bg-graphite-900 pt-28 pb-16 text-white md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Our Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            A selection of glass and aluminium work completed for homes and
            businesses across Lahore.
          </p>
        </div>
      </header>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
