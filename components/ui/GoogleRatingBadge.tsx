import { Star } from "lucide-react";
import { business } from "@/config";

/**
 * Google rating trust badge using the owner-verified aggregate rating.
 * `variant="light"` for dark backgrounds (hero), `"dark"` for light surfaces.
 */
export function GoogleRatingBadge({
  variant = "dark",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const { value, count } = business.rating;
  const light = variant === "light";
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 ${
        light
          ? "border-white/25 bg-white/10 backdrop-blur-sm text-white"
          : "border-graphite-200 bg-white text-graphite-800 shadow-card"
      } ${className}`}
    >
      <span className="font-semibold tabular-nums">{value.toFixed(1)}</span>
      <span className="flex" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.round(value)
                ? "text-bronze-400 fill-bronze-400"
                : light
                  ? "text-white/40"
                  : "text-graphite-300"
            }`}
          />
        ))}
      </span>
      <span className={`text-sm ${light ? "text-white/80" : "text-graphite-500"}`}>
        {count} Google reviews
      </span>
    </div>
  );
}
