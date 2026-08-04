import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

/** Shared 404 body, reused by the catch-all route and unknown service slugs. */
export function NotFoundView() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-surface px-6 py-24">
      <div className="text-center">
        <p className="text-6xl font-bold text-glass-600">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-graphite-900">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-graphite-500">
          The page you are looking for doesn’t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-graphite-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-graphite-800"
          >
            Back to home
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-graphite-300 px-6 py-3 text-sm font-semibold text-graphite-900 transition-colors hover:bg-graphite-100"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Component() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you are looking for doesn’t exist or may have moved."
        path="/404"
        noindex
      />
      <NotFoundView />
    </>
  );
}
