import React from 'react';
import { Reveal } from './Reveal';
import { services } from '../data';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate?: (page: string) => void;
  limit?: number;
  showCategories?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate, limit, showCategories = false }) => {
  const displayServices = limit ? services.slice(0, limit) : services;
  
  // Group by category if we are on the full page
  const categories = showCategories 
    ? Array.from(new Set(services.map(s => s.category))) 
    : [];

  const renderServiceCard = (service: any, index: number) => (
    <Reveal key={service.id} delay={index % 3 * 100}>
      <div 
        onClick={() => onNavigate && onNavigate('services')}
        className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col border border-gray-100 hover:border-blue-100 relative"
      >
        <div className="h-36 md:h-52 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={service.imageUrl} 
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold text-apple-dark shadow-sm z-20">
            {service.category}
          </div>
        </div>
        <div className="p-4 md:p-6 flex-1 flex flex-col">
          <div className="flex items-start gap-3 mb-2 md:mb-3">
             <div className="p-2 bg-blue-50 rounded-lg text-blue-600 hidden md:flex items-center justify-center shrink-0">
               {service.icon && <service.icon className="w-5 h-5" />}
             </div>
             <div>
                <h3 className="text-sm md:text-lg font-bold text-apple-dark leading-snug group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
             </div>
          </div>
          <p className="text-gray-500 leading-relaxed text-xs md:text-sm flex-1 line-clamp-3 mb-4">
            {service.description}
          </p>
          {/* <div className="flex items-center text-blue-600 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
            Learn more <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
          </div> */}
        </div>
      </div>
    </Reveal>
  );

  return (
    <section id="services" className={`py-12 md:py-24 ${limit ? 'bg-apple-gray' : 'bg-white pt-24 md:pt-32'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-3 md:mb-4 tracking-tight">
              {limit ? 'Premium Services' : 'Our Services'}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Comprehensive glass, aluminum, and fiber solutions tailored to your residential and commercial needs.
            </p>
          </Reveal>
        </div>

        {showCategories ? (
          categories.map((category) => (
            <div key={category} className="mb-16 md:mb-20">
              <Reveal>
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-apple-dark">
                    {category}
                  </h3>
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>
              </Reveal>
              {/* Mobile: 2 cols, Desktop: 3-4 cols */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {services.filter(s => s.category === category).map((service, index) => renderServiceCard(service, index))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {displayServices.map((service, index) => renderServiceCard(service, index))}
          </div>
        )}

        {limit && onNavigate && (
          <div className="mt-10 md:mt-14 text-center">
            <button 
              onClick={() => onNavigate('services')}
              className="px-8 py-3 bg-white border border-gray-200 rounded-full text-sm md:text-base text-apple-dark font-medium hover:bg-apple-dark hover:text-white hover:border-apple-dark transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              View All Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
};