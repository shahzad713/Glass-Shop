import { useParams, Link } from "react-router-dom";
import { MapPin, Calendar, User, Check } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { ProjectCard } from "../components/ui/ProjectCard";
import { CTASection } from "../components/ui/CTASection";
import { Reveal } from "../components/Reveal";
import { projects } from "@/config";
import { breadcrumbSchema, localBusinessSchema } from "../components/schema";
import { absoluteUrl } from "@/config";
import { NotFoundView } from "./NotFound";

export function Component() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <NotFoundView />;

  const path = `/projects/${project.id}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path },
  ];
  const related = projects.filter((p) => p.id !== project.id).slice(0, 3);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.fullDescription ?? project.description,
    image: project.imageUrl.startsWith("http")
      ? project.imageUrl
      : absoluteUrl(project.imageUrl),
    locationCreated: { "@type": "Place", name: project.location },
    ...(project.date ? { dateCreated: project.date } : {}),
  };

  return (
    <>
      <Seo
        title={`${project.title} — ${project.location}`}
        description={project.fullDescription ?? project.description}
        path={path}
        image={project.imageUrl}
        type="article"
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs), projectSchema]}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pt-28 pb-10 md:pt-32">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-graphite-900 md:text-5xl">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-graphite-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-glass-600" aria-hidden="true" />
              {project.location}
            </span>
            {project.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-glass-600" aria-hidden="true" />
                {project.date}
              </span>
            )}
            {project.client && (
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-glass-600" aria-hidden="true" />
                {project.client}
              </span>
            )}
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-3xl bg-graphite-100 shadow-elevated">
            <OptimizedImage
              src={project.imageUrl}
              alt={`${project.title} — ${project.location}`}
              priority
              width={1600}
              height={1000}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <p className="text-lg leading-relaxed text-graphite-700">
            {project.fullDescription ?? project.description}
          </p>

          {project.servicesUsed && project.servicesUsed.length > 0 && (
            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-glass-600">
                Services used
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {project.servicesUsed.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-1.5 rounded-full border border-graphite-200 bg-surface px-4 py-2 text-sm text-graphite-700"
                  >
                    <Check className="h-4 w-4 text-glass-600" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-graphite-900">
              More projects
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 80}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/projects"
                className="inline-flex rounded-full border border-graphite-300 px-8 py-3 text-sm font-semibold text-graphite-900 transition-colors hover:bg-graphite-900 hover:text-white"
              >
                View all projects
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
