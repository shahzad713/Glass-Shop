import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { business } from "@/config";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export function Component() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Labbyak Glass & Aluminium handles the information you submit through our website contact form."
        path="/privacy-policy"
        noindex
      />

      <header className="bg-graphite-900 pt-28 pb-14 text-white md:pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            Privacy Policy
          </h1>
        </div>
      </header>

      <section className="bg-white py-14 md:py-20">
        <div className="prose-custom mx-auto max-w-3xl space-y-6 px-6 text-graphite-600 leading-relaxed">
          <p>
            This policy explains what information Labbyak Glass &amp; Aluminium
            collects through this website and how it is used. We keep this simple
            and only collect what we need to respond to your enquiry.
          </p>

          <div>
            <h2 className="text-xl font-bold text-graphite-900">
              Information we collect
            </h2>
            <p className="mt-2">
              When you submit the contact form, we collect the name, phone
              number, email address and message you provide. We use this only to
              respond to your enquiry and prepare a quotation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-graphite-900">
              How we use your information
            </h2>
            <p className="mt-2">
              Your details are sent to our business inbox so we can contact you
              about your requirement. We do not sell or share your information
              with third parties for marketing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-graphite-900">
              WhatsApp and phone contact
            </h2>
            <p className="mt-2">
              If you contact us by WhatsApp or phone, your message and number are
              handled under the terms of those services. We use them only to
              reply to your enquiry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-graphite-900">Data retention</h2>
            <p className="mt-2">
              We keep enquiry details only as long as needed to respond and, where
              relevant, to complete the work you asked about.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-graphite-900">Contact</h2>
            <p className="mt-2">
              For any question about this policy or your information, contact us at{" "}
              <a
                href={`mailto:${business.email}`}
                className="font-medium text-glass-600 hover:underline"
              >
                {business.email}
              </a>{" "}
              or {business.phone.display}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
