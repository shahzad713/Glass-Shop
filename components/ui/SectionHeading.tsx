import { Reveal } from "../Reveal";

/** Consistent section heading with optional eyebrow + intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const Tag = as;
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal>
      <div className={`max-w-2xl ${alignCls} mb-10 md:mb-14`}>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-glass-600 mb-3">
            {eyebrow}
          </p>
        )}
        <Tag className="text-3xl md:text-4xl font-bold tracking-tight text-graphite-900">
          {title}
        </Tag>
        {intro && (
          <p className="mt-4 text-graphite-500 leading-relaxed">{intro}</p>
        )}
      </div>
    </Reveal>
  );
}
