
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const testimonials = [
  {
    id: 1,
    name: "Mr. Kamran Ahmed",
    location: "Bahria Town, Lahore",
    text: "Labbyak Glass transformed our villa's look with their seamless corner windows. The team was professional, punctual, and the finish is flawless. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Bilal",
    location: "DHA Phase 6",
    text: "I hired them for shower glass enclosures and mirrors for my new house. The quality of 12mm tempered glass is excellent, and the fitting is sturdy.",
    rating: 5
  },
  {
    id: 3,
    name: "TechSoft Pvt Ltd",
    location: "Johar Town",
    text: "Excellent service for office glass partitions. They understood our requirement for soundproofing and delivered a sleek, modern workspace.",
    rating: 5
  },
  {
    id: 4,
    name: "Hassan Raza",
    location: "Valencia Town",
    text: "The fiberglass parking shed they installed is durable and looks great. Very reasonable prices compared to other vendors in Lahore.",
    rating: 4
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
         <div className="text-center mb-16">
           <Reveal>
             <h2 className="text-4xl font-bold text-apple-dark mb-4">What Our Clients Say</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Trusted by homeowners and businesses across Lahore for quality and reliability.</p>
           </Reveal>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {testimonials.map((t, i) => (
             <Reveal key={t.id} delay={i * 100}>
               <div className="bg-apple-gray p-8 rounded-2xl h-full flex flex-col relative group hover:shadow-lg transition-shadow duration-300">
                 <Quote className="w-8 h-8 text-blue-100 absolute top-6 right-6 transform group-hover:scale-110 transition-transform" />
                 <div className="flex mb-4">
                   {[...Array(5)].map((_, idx) => (
                     <Star key={idx} className={`w-4 h-4 ${idx < t.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                   ))}
                 </div>
                 <p className="text-gray-600 mb-6 italic flex-grow text-sm leading-relaxed">"{t.text}"</p>
                 <div className="border-t border-gray-200 pt-4">
                   <h4 className="font-bold text-apple-dark">{t.name}</h4>
                   <p className="text-xs text-blue-600 uppercase tracking-wide font-semibold mt-1">{t.location}</p>
                 </div>
               </div>
             </Reveal>
           ))}
         </div>
      </div>
    </section>
  );
};
