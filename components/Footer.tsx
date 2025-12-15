import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  const [mounted, setMounted] = useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          animation: fadeUp 0.7s ease forwards;
        }
        .hover-scale:hover, .hover-scale:focus {
          transform: scale(1.1);
          color: #fff !important;
        }
        .transition-smooth {
          transition: color 0.3s ease, transform 0.3s ease;
        }

        /* Mobile-specific compact styling */
        @media (max-width: 640px) {
          footer {
            padding-top: 8px !important;
            padding-bottom: 12px !important;
          }
          footer > div > div {
            gap: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          h3 {
            font-size: 1rem !important;
            margin-bottom: 0.5rem !important;
          }
          p, ul li a {
            font-size: 0.8rem !important;
            line-height: 1.25rem !important;
          }
          nav ul li {
            margin-bottom: 0.25rem !important;
          }
          .pt-6 {
            padding-top: 1rem !important;
          }
          .flex.space-x-8 > a {
            margin-left: 0.75rem !important;
          }
        }
      `}</style>

      <footer
        className={`bg-apple-dark text-white pt-12 pb-16 border-t border-gray-900 max-w-full ${
          mounted ? "fade-up" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-2 text-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                Labbyak Glass
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-none">
                Premier provider of Glass, Aluminum, Steel, and Fiber solutions.
                Committed to quality, durability, and modern design.
              </p>
              <div className="hidden sm:block w-16 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full" />
            </div>

            <nav aria-label="Company navigation" className="space-y-4">
              <h3 className="font-semibold mb-2 text-gray-300 text-lg">
                Company
              </h3>
              <ul className="flex flex-col space-y-2 text-sm text-gray-400">
                {["home", "about", "services", "projects", "team"].map(
                  (page) => (
                    <li key={page}>
                      <a
                        href="#"
                        onClick={(e) => handleNav(e, page)}
                        className="block px-2 py-1 rounded-md hover-scale focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-smooth"
                        tabIndex={0}
                      >
                        {page.charAt(0).toUpperCase() +
                          page
                            .slice(1)
                            .replace("team", "Our Team")
                            .replace("projects", "Projects")}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <nav aria-label="Services navigation" className="space-y-4">
              <h3 className="font-semibold mb-2 text-gray-300 text-lg">
                Services
              </h3>
              <ul className="flex flex-col space-y-2 text-sm text-gray-400">
                {[
                  "Glass & Mirrors",
                  "Aluminum Works",
                  "UPVC Solutions",
                  "Fiberglass Sheds",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      onClick={(e) => handleNav(e, "services")}
                      className="block px-2 py-1 rounded-md hover-scale focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-smooth"
                      tabIndex={0}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-4">
              <h3 className="font-semibold mb-3 text-gray-300 text-lg">
                Connect
              </h3>
              <div className="flex space-x-5">
                <a
                  href="https://www.facebook.com/labbykGlass/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors shadow-md hover-scale"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition-colors shadow-md hover-scale"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition-colors shadow-md hover-scale"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
              <div className="mt-3 text-gray-400 font-mono text-sm select-text">
                <p>📞 +92 302 0999713</p>

                <p>______________</p>
                <p>📞 +92 332 7265330</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
            <p>© 2025 Labbyak Glass & Aluminum. All rights reserved.</p>
            <div className="flex space-x-8 mt-3 md:mt-0 text-sm">
              <a
                href="#"
                className="hover-scale focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover-scale focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded transition-smooth"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
