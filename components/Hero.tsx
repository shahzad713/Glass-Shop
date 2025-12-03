import React, { useEffect, useState } from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Glass and Aluminum Architecture in Lahore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className={`max-w-4xl transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Experts in Glass, Aluminum <br />
            <span className="text-gray-300">& Fiberglass Solutions.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-8 max-w-3xl leading-relaxed">
            The #1 trusted provider for premium residential and commercial installations in <strong>Bahria Town, DHA, and Lahore</strong>. From UPVC windows to industrial fiber sheds, we engineer clarity and durability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-white text-apple-dark rounded-full font-medium text-lg hover:bg-gray-100 transition-all hover:scale-105 text-center shadow-lg"
            >
              Our Services
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 text-center"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => onNavigate('services')}>
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};