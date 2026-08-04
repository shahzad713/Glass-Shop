import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { ProjectItem } from "@/types";
import { OptimizedImage } from "./OptimizedImage";

/** Reusable project card linking to the project detail page. */
export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-graphite-100 shadow-card"
    >
      <OptimizedImage
        src={project.imageUrl}
        alt={`${project.title} — ${project.location}`}
        width={800}
        height={600}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-5">
        <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-white/80 md:text-xs">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {project.location}
        </span>
        <h3 className="mt-1 text-sm font-bold leading-tight text-white md:text-lg">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
