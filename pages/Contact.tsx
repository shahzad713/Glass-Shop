import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { WhatsAppButton, CallButton } from "../components/ui/Buttons";
import { business, whatsappLink } from "@/config";
import { breadcrumbSchema, localBusinessSchema } from "../components/schema";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Component() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Labbyak Glass & Aluminium in Lahore for a quotation. Call or WhatsApp 0302 0999713, or send us your requirement through the form. Based in Tauheed Block, Bahria Town."
        path="/contact"
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs)]}
      />

      <header className="bg-graphite-900 pt-28 pb-16 text-white md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Tell us your requirement and location. We measure on site and send you
            a clear quotation.
          </p>
        </div>
      </header>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-graphite-100 bg-white p-6 shadow-card">
              <h2 className="text-lg font-bold text-graphite-900">Get in touch</h2>
              <ul className="mt-5 space-y-4 text-graphite-600">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-glass-600" aria-hidden="true" />
                  <span>{business.address.full}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-glass-600" aria-hidden="true" />
                  <a href={`tel:${business.phone.tel}`} className="hover:text-glass-600">
                    {business.phone.display}{" "}
                    <span className="text-graphite-400">({business.phone.international})</span>
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-glass-600" aria-hidden="true" />
                  <a href={`mailto:${business.email}`} className="break-all hover:text-glass-600">
                    {business.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-glass-600" aria-hidden="true" />
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-glass-600"
                  >
                    Message us on WhatsApp
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton />
                <CallButton className="border border-graphite-300 text-graphite-900 hover:bg-graphite-900 hover:text-white">
                  Call now
                </CallButton>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-graphite-100 bg-white shadow-card">
              <iframe
                src={business.maps.embedSrc}
                title={`Map showing ${business.name} in ${business.address.locality}`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-graphite-100 bg-white p-6 shadow-card md:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-green-600" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold text-graphite-900">
                  Thank you — message sent
                </h2>
                <p className="mt-2 max-w-sm text-graphite-500">
                  We’ve received your enquiry and will get back to you shortly. For
                  anything urgent, please call or WhatsApp us.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full border border-graphite-300 px-6 py-2.5 text-sm font-semibold text-graphite-900 transition-colors hover:bg-graphite-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h2 className="text-lg font-bold text-graphite-900">
                  Request a quotation
                </h2>

                {/* Honeypot — hidden from users, catches bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company (leave blank)</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" required autoComplete="name" />
                  <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" />
                </div>
                <Field label="Email (optional)" name="email" type="email" autoComplete="email" />
                <Field label="Area / location in Lahore" name="area" placeholder="e.g. Bahria Town, DHA" />

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-graphite-700">
                    Your requirement <span className="text-glass-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you need — e.g. aluminium windows for 3 rooms, a glass shop front, shower cabin…"
                    className="w-full rounded-xl border border-graphite-200 bg-surface px-4 py-3 text-graphite-900 outline-none transition-colors placeholder:text-graphite-400 focus:border-glass-400 focus:ring-2 focus:ring-glass-100"
                  />
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-graphite-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-graphite-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    "Sending…"
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send message
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-graphite-400">
                  Prefer to talk now? Call or WhatsApp {business.phone.display}.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-graphite-700">
        {label} {required && <span className="text-glass-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-graphite-200 bg-surface px-4 py-3 text-graphite-900 outline-none transition-colors placeholder:text-graphite-400 focus:border-glass-400 focus:ring-2 focus:ring-glass-100"
      />
    </div>
  );
}
