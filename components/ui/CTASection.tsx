import { WhatsAppButton, CallButton } from "./Buttons";
import { business } from "@/config";

/** Strong final call-to-action band. Reused across pages. */
export function CTASection({
  heading = "Get a Free Quotation",
  subtext = "Call or WhatsApp us with your requirement and location. We measure on site and send you a clear quotation.",
  service,
  area,
}: {
  heading?: string;
  subtext?: string;
  service?: string;
  area?: string;
}) {
  return (
    <section className="bg-graphite-900 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-graphite-300 leading-relaxed">
          {subtext}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton service={service} area={area} size="lg" />
          <CallButton
            size="lg"
            className="bg-white text-graphite-900 hover:bg-graphite-100"
          >
            Call {business.phone.display}
          </CallButton>
        </div>
      </div>
    </section>
  );
}
