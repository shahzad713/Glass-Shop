import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/config";

/** Accessible FAQ accordion (native <button> disclosure, keyboard friendly). */
export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-graphite-200 rounded-2xl border border-graphite-200 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div key={i}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-graphite-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-glass-600 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 -mt-1 text-graphite-500 leading-relaxed"
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
