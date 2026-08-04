interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** Eager-load the LCP hero image; everything else stays lazy. */
  priority?: boolean;
}

/**
 * Thin wrapper enforcing accessibility + performance defaults: required alt,
 * lazy loading below the fold, async decoding. Explicit width/height should be
 * passed by the caller to reserve layout space and avoid CLS.
 */
export function OptimizedImage({
  src,
  alt,
  priority = false,
  className = "",
  ...rest
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      // @ts-expect-error fetchpriority is valid HTML but not yet in React types everywhere
      fetchpriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
      {...rest}
    />
  );
}
