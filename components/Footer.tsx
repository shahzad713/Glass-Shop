import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <footer className="bg-apple-dark text-white py-16 border-t border-gray-800 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
             <h2 className="text-2xl font-semibold tracking-tight mb-4">Labbyak Glass</h2>
             <p className="text-gray-400 text-sm leading-relaxed">
               Premier provider of Glass, Aluminum, Steel, and Fiber solutions. Committed to quality, durability, and modern design.
             </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" onClick={(e) => handleNav(e, 'home')} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'projects')} className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'team')} className="hover:text-white transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
             <h3 className="font-semibold mb-4 text-gray-200">Services</h3>
             <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="hover:text-white transition-colors">Glass & Mirrors</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="hover:text-white transition-colors">Aluminum Works</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="hover:text-white transition-colors">UPVC Solutions</a></li>
              <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="hover:text-white transition-colors">Fiberglass Sheds</a></li>
             </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/labbykGlass/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>+92 302 099 9713</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Labbyak Glass & Aluminum. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};