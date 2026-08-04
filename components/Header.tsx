import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { mainNav, servicePages, telLink, business } from "@/config";
import { WhatsAppButton } from "./ui/Buttons";

/** Sticky header with services dropdown + accessible mobile navigation. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  // Solid header everywhere except the top of the home page (transparent hero).
  const solid = scrolled || !isHome || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:left-4 focus:top-4 focus:rounded focus:bg-graphite-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
          solid
            ? "bg-white/95 backdrop-blur-md border-b border-graphite-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <Link
            to="/"
            className={`text-lg md:text-xl font-bold tracking-tight ${
              solid ? "text-graphite-900" : "text-white"
            }`}
          >
            Labbyak Glass<span className="text-glass-500"> &amp; Aluminium</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Primary">
            {mainNav.map((item) =>
              item.href === "/services" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to="/services"
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-glass-500 ${
                      solid ? "text-graphite-600" : "text-white/90"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    Services
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                      <div className="grid w-[30rem] grid-cols-2 gap-1 rounded-xl border border-graphite-200 bg-white p-2 shadow-elevated">
                        {servicePages.map((sp) => (
                          <Link
                            key={sp.slug}
                            to={`/${sp.slug}`}
                            className="rounded-lg px-3 py-2 text-sm text-graphite-600 hover:bg-surface hover:text-glass-600"
                          >
                            {sp.h1.replace(" in Lahore", "")}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-glass-500 ${
                      isActive
                        ? "text-glass-500"
                        : solid
                          ? "text-graphite-600"
                          : "text-white/90"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
            <a
              href={telLink}
              className={`flex items-center gap-1.5 text-sm font-semibold ${
                solid ? "text-graphite-900" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {business.phone.display}
            </a>
            <WhatsAppButton size="sm">Get Quote</WhatsAppButton>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2"
            >
              {mobileOpen ? (
                <X className="w-7 h-7 text-graphite-900" />
              ) : (
                <Menu className={`w-7 h-7 ${solid ? "text-graphite-900" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-24 pt-20">
          <nav className="flex flex-col" aria-label="Mobile">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `border-b border-graphite-100 py-4 text-lg font-semibold ${
                    isActive ? "text-glass-600" : "text-graphite-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-6">
            <WhatsAppButton size="lg" className="w-full">
              Get a Quotation
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </>
  );
}
