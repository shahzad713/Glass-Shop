import { Phone, MessageCircle } from "lucide-react";
import { whatsappLink, telLink } from "@/config";

/** Prefilled WhatsApp CTA. `service`/`area` build the prefilled message. */
export function WhatsAppButton({
  service,
  area,
  className = "",
  children,
  size = "md",
}: {
  service?: string;
  area?: string;
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const pad =
    size === "lg" ? "px-7 py-4 text-base" : size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-sm";
  return (
    <a
      href={whatsappLink(service, area)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95 ${pad} ${className}`}
    >
      <MessageCircle className="w-5 h-5" aria-hidden="true" />
      {children ?? "WhatsApp Quote"}
    </a>
  );
}

/** Click-to-call CTA. */
export function CallButton({
  className = "",
  children,
  size = "md",
}: {
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const pad =
    size === "lg" ? "px-7 py-4 text-base" : size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-sm";
  return (
    <a
      href={telLink}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform hover:scale-[1.03] active:scale-95 ${pad} ${className}`}
    >
      <Phone className="w-5 h-5" aria-hidden="true" />
      {children ?? "Call Now"}
    </a>
  );
}
