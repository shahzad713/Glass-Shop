import manifest from "@/config/imageManifest.json";

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Eager-load the LCP hero image; everything else stays lazy. */
  priority?: boolean;
  /** Responsive `sizes` hint. Defaults suit full-bleed hero vs. grid cards. */
  sizes?: string;
}

type ManifestEntry = { base: string; widths: number[] };
const IMAGES = manifest as Record<string, ManifestEntry>;

function srcSet(base: string, ext: string, widths: number[]): string {
  return widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(", ");
}

/**
 * Accessibility + performance image. When a build-time optimized manifest entry
 * exists for `src`, emits a <picture> with AVIF + WebP responsive sources so
 * mobile never downloads a full desktop asset; otherwise falls back to a plain
 * <img> on the original file. Explicit width/height reserve layout space (no
 * CLS). The LCP hero passes `priority` for eager + high fetchpriority.
 */
export function OptimizedImage({
  src,
  alt,
  priority = false,
  sizes,
  className = "",
  width,
  height,
  ...rest
}: OptimizedImageProps) {
  const entry = IMAGES[src];
  const resolvedSizes =
    sizes ?? (priority ? "100vw" : "(min-width: 768px) 33vw, 50vw");

  const imgEl = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      // @ts-expect-error fetchpriority is valid HTML, not yet in all React types
      fetchpriority={priority ? "high" : undefined}
      decoding="async"
      sizes={entry ? resolvedSizes : undefined}
      className={className}
      {...rest}
    />
  );

  if (!entry) return imgEl;

  return (
    <picture className="contents">
      <source
        type="image/avif"
        srcSet={srcSet(entry.base, "avif", entry.widths)}
        sizes={resolvedSizes}
      />
      <source
        type="image/webp"
        srcSet={srcSet(entry.base, "webp", entry.widths)}
        sizes={resolvedSizes}
      />
      {imgEl}
    </picture>
  );
}
