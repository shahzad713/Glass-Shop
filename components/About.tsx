import React from 'react';
import { Reveal } from './Reveal';
import { ShieldCheck, Ruler, Gem, Target, Flag, Users } from 'lucide-react';

interface AboutProps {
  isPage?: boolean;
}

export const About: React.FC<AboutProps> = ({ isPage = false }) => {
  return (
    <section className={`bg-white ${isPage ? 'pt-32 pb-24' : 'py-24'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <Reveal>
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">About Labbyak Glass</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-apple-dark mb-6 tracking-tight">
              Engineering Durability & Style since 2005.
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Labbyak Glass & Aluminum is a trusted name in Lahore for premium building solutions. We specialize in the design, fabrication, supply, and professional installation of customized glass, aluminum, steel, UPVC, and fiberglass products. Our work combines functionality with modern aesthetics, ensuring every project stands the test of time.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-gray-50 rounded-lg mr-4">
                  <ShieldCheck className="w-6 h-6 text-apple-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-apple-dark">Professional Installation</h4>
                  <p className="text-sm text-gray-500 mt-1">Soundproof, weatherproof, and precision-engineered fitting.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-gray-50 rounded-lg mr-4">
                  <Ruler className="w-6 h-6 text-apple-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-apple-dark">Custom Fabrication</h4>
                  <p className="text-sm text-gray-500 mt-1">Tailored solutions for homes, offices, and commercial high-rises.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-gray-50 rounded-lg mr-4">
                  <Gem className="w-6 h-6 text-apple-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-apple-dark">Premium Materials</h4>
                  <p className="text-sm text-gray-500 mt-1">From tempered glass to energy-efficient UPVC frames.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/home-page.jpg" 
                alt="Construction Craftsmanship" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
                <p className="text-white font-medium text-lg">"Quality you can trust, durability you can rely on."</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Detailed Section only for the Page view */}
        {isPage && (
          <div className="mt-24">
             <Reveal>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                 <div className="p-8 bg-apple-gray rounded-2xl">
                   <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                     <Target className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                   <p className="text-gray-500">To provide innovative, high-quality, and sustainable glass and aluminum solutions that enhance the architectural beauty and functionality of every space we touch.</p>
                 </div>
                 <div className="p-8 bg-apple-gray rounded-2xl">
                   <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                     <Flag className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                   <p className="text-gray-500">To be Pakistan's leading provider of architectural glazing and metal fabrication, recognized for our commitment to excellence, integrity, and customer satisfaction.</p>
                 </div>
                 <div className="p-8 bg-apple-gray rounded-2xl">
                   <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                     <Users className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Our Core Values</h3>
                   <p className="text-gray-500">We believe in precision, transparency, safety, and continuous innovation. Every project is an opportunity to build a lasting relationship.</p>
                 </div>
               </div>
             </Reveal>
          </div>
        )}
      </div>
    </section>
  );
};