import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { CTASection } from "../components/ui/CTASection";
import { Reveal } from "../components/Reveal";
import { products } from "@/config";
import { breadcrumbSchema, localBusinessSchema } from "../components/schema";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

/** Normalise legacy "/public/..." asset paths to web-root "/...". */
function assetPath(src: string): string {
  if (src.startsWith("http")) return src;
  return src.replace(/^\/public\//, "/");
}

export function Component() {
  return (
    <>
      <Seo
        title="Products & Materials"
        description="Glass and aluminium products we supply in Lahore — toughened glass, aluminium and UPVC profiles, fiberglass sheets, spider fittings, door closers and sealants."
        path="/products"
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs)]}
      />

      <header className="bg-graphite-900 pt-28 pb-16 text-white md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Products &amp; Materials
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Quality glass, aluminium, UPVC and fiberglass materials we supply and
            fit across Lahore.
          </p>
        </div>
      </header>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 60}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-graphite-100 bg-white shadow-card">
                  <div className="h-44 overflow-hidden bg-graphite-100">
                    <OptimizedImage
                      src={assetPath(p.imageUrl)}
                      alt={p.name}
                      width={600}
                      height={440}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-glass-600">
                      {p.category}
                    </span>
                    <h2 className="mt-1 text-base font-bold text-graphite-900">
                      {p.name}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-graphite-400">
                      {p.specs}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-500">
                      {p.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Need materials or a full installation?" />
    </>
  );
}
