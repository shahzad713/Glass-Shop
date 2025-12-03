import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Products', id: 'products' },
  { label: 'Team', id: 'team' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const getTextColor = () => {
    if (isMobileMenuOpen) return 'text-apple-dark';
    if (isScrolled || currentPage !== 'home') return 'text-apple-dark';
    return 'text-white';
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || currentPage !== 'home'
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3 md:py-4' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className={`text-lg md:text-2xl font-bold tracking-tight z-50 transition-colors ${getTextColor()} truncate max-w-[200px] md:max-w-none text-left`}
          >
            Labbyak Glass
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  currentPage === item.id 
                    ? 'text-blue-600' 
                    : isScrolled || currentPage !== 'home' ? 'text-gray-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95 ${
                isScrolled || currentPage !== 'home'
                  ? 'bg-apple-dark text-white' 
                  : 'bg-white text-apple-dark'
              }`}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3 z-50">
             <a 
               href="tel:+923020999713"
               className={`p-2 rounded-full transition-colors ${
                 isScrolled || currentPage !== 'home' || isMobileMenuOpen
                   ? 'bg-gray-100 text-apple-dark'
                   : 'bg-white/20 text-white backdrop-blur-sm'
               }`}
             >
               <Phone className="w-5 h-5" />
             </a>
            <button
              className="p-1 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-apple-dark" />
              ) : (
                <Menu className={`w-7 h-7 ${getTextColor()}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4 px-6 pb-12 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-2xl font-medium transition-colors py-2 ${
                currentPage === item.id ? 'text-blue-600' : 'text-apple-dark hover:text-blue-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full max-w-xs py-3 bg-apple-dark text-white rounded-xl text-lg font-medium shadow-lg mt-4"
          >
            Get Quote
          </button>

          {/* Quick Contact Buttons inside Menu */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-6 pt-6 border-t border-gray-100">
            <a 
              href="tel:+923020999713"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors"
            >
              <div className="p-2 bg-blue-100 rounded-full mb-2">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Call Now</span>
            </a>
            <a 
              href="https://wa.me/923020999713?text=Hi,%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors"
            >
              <div className="p-2 bg-green-100 rounded-full mb-2">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-gray-700">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};