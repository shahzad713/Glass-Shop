import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/types";
import { OptimizedImage } from "./OptimizedImage";

/**
 * Reusable service card. If `href` is given the whole card links there;
 * otherwise it is a plain presentational card.
 */
export function ServiceCard({
  service,
  href,
}: {
  service: ServiceItem;
  href?: string;
}) {
  const inner = (
    <>
      <div className="relative h-40 overflow-hidden md:h-48">
        <OptimizedImage
          src={service.imageUrl}
          alt={service.title}
          width={800}
          height={480}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-graphite-800 shadow-sm md:text-xs">
          {service.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="mb-2 flex items-start gap-3">
          {service.icon && (
            <span className="hidden shrink-0 rounded-lg bg-glass-50 p-2 text-glass-600 md:inline-flex">
              <service.icon className="h-5 h-5 w-5" aria-hidden="true" />
            </span>
          )}
          <h3 className="text-sm font-bold leading-snug text-graphite-900 group-hover:text-glass-600 md:text-base">
            {service.title}
          </h3>
        </div>
        <p className="line-clamp-3 flex-1 text-xs leading-relaxed text-graphite-500 md:text-sm">
          {service.description}
        </p>
        {href && (
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-glass-600 md:text-sm">
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  );

  const cls =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-graphite-100 bg-white shadow-card transition-shadow hover:shadow-elevated";

  return href ? (
    <Link to={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
