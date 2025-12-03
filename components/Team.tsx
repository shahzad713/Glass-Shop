import React from 'react';
import { Reveal } from './Reveal';
import { team } from '../data';
import { Linkedin, Mail } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-apple-dark mb-4 tracking-tight">Meet Our Experts</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              The skilled professionals behind Labbyak Glass & Aluminum's success. Dedicated to precision and quality.
            </p>
          </Reveal>
        </div>

        {/* Mobile: 2 cols, Desktop: 4 cols */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {team.map((member, index) => (
            <Reveal key={member.id} delay={index * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                     <div className="flex gap-4">
                       <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
                         <Linkedin className="w-5 h-5" />
                       </button>
                       <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
                         <Mail className="w-5 h-5" />
                       </button>
                     </div>
                  </div>
                </div>
                <div className="p-4 md:p-6 text-center flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-apple-dark mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-xs md:text-sm mb-3 uppercase tracking-wider">{member.role}</p>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none flex-grow">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};