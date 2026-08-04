import { Link } from "react-router-dom";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { WhatsAppButton, CallButton } from "../components/ui/Buttons";
import { GoogleRatingBadge } from "../components/ui/GoogleRatingBadge";
import { business, primaryCity } from "@/config";

/** Premium architectural hero. LCP image loads eagerly. */
export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/home-page.jpg"
          alt="Glass and aluminium architectural work by Labbyak in Lahore"
          priority
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/85 via-graphite-950/60 to-graphite-950/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          <GoogleRatingBadge variant="light" className="mb-6" />
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Glass &amp; Aluminium Work in {primaryCity}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Labbyak Glass &amp; Aluminium supplies and installs aluminium
            windows and doors, glass shop fronts, UPVC windows, office
            partitions, glass railings and glass repair across {primaryCity} —
            measured on site and fitted by our own team.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton size="lg" />
            <CallButton
              size="lg"
              className="bg-white text-graphite-900 hover:bg-graphite-100"
            >
              Call {business.phone.display}
            </CallButton>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
