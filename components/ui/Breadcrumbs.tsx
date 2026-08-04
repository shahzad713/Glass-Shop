import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  path: string;
}

/** Accessible breadcrumb trail. Last item is the current page (not a link). */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-graphite-400">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="text-graphite-600 font-medium">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link
                    to={c.path}
                    className="hover:text-glass-600 transition-colors"
                  >
                    {c.name}
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
