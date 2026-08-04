import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, MessageCircle } from "lucide-react";
import {
  business,
  footerServiceNav,
  footerCompanyNav,
  telLink,
  whatsappLink,
} from "@/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-graphite-800 bg-graphite-950 text-graphite-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand + contact */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5" aria-label={`${business.name} — home`}>
              <img
                src="/brand/labbyak-logo-mark.svg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0"
              />
              <span className="text-lg font-bold leading-tight text-white">
                {business.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-graphite-300">
              Aluminium windows and doors, glass shop fronts, UPVC windows,
              partitions, railings and glass repair across Lahore.
            </p>
            <address className="space-y-2 not-italic text-sm">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-glass-400" aria-hidden="true" />
                {business.address.full}
              </span>
              <a href={telLink} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-glass-400" aria-hidden="true" />
                {business.phone.international}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-glass-400" aria-hidden="true" />
                WhatsApp {business.phone.display}
              </a>
            </address>
          </div>

          {/* Services */}
          <nav aria-label="Footer services">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="space-y-2 text-sm">
              {footerServiceNav.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Footer company">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="space-y-2 text-sm">
              {footerCompanyNav.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h2>
            {business.social.facebook && (
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex rounded-full bg-graphite-800 p-2.5 text-white transition-colors hover:bg-glass-600"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-graphite-800 pt-6 text-xs text-graphite-300 md:flex-row">
          <p>© {year} {business.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <a href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
