import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex md:hidden pb-4 pt-2">
      <a 
        href="tel:+923020999713" 
        className="flex-1 flex flex-col items-center justify-center py-2 border-r border-gray-200 active:bg-gray-100 transition-colors text-apple-dark group"
      >
        <div className="p-1 rounded-full group-active:scale-95 transition-transform">
          <Phone className="w-5 h-5 mb-1 text-blue-600" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wide">Call Now</span>
      </a>
      <a 
        href="https://wa.me/923020999713?text=Hi,%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20services." 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2 text-green-600 active:bg-green-50 transition-colors group"
      >
        <div className="p-1 rounded-full group-active:scale-95 transition-transform">
          <MessageCircle className="w-5 h-5 mb-1" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
};