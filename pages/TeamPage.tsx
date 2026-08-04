import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { CTASection } from "../components/ui/CTASection";
import { Reveal } from "../components/Reveal";
import { team } from "@/config";
import { breadcrumbSchema, localBusinessSchema } from "../components/schema";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
];

export function Component() {
  return (
    <>
      <Seo
        title="Our Team"
        description="Meet the team behind Labbyak Glass & Aluminium — experienced fabricators, installers and supervisors serving homes and businesses across Lahore."
        path="/team"
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs)]}
      />

      <header className="bg-graphite-900 pt-28 pb-16 text-white md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Our Team
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            The people who measure, fabricate and install your glass and
            aluminium work.
          </p>
        </div>
      </header>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.id} delay={(i % 3) * 70}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-graphite-100 bg-white shadow-card">
                  <div className="aspect-[4/3] overflow-hidden bg-graphite-100">
                    <OptimizedImage
                      src={m.imageUrl}
                      alt={`${m.name} — ${m.role}, Labbyak Glass & Aluminium`}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-graphite-900">{m.name}</h2>
                    <p className="text-sm font-semibold text-glass-600">{m.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-graphite-500">
                      {m.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
