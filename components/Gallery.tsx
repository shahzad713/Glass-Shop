import React from 'react';
import { Reveal } from './Reveal';
import { projects } from '../data';
import { MapPin } from 'lucide-react';

interface GalleryProps {
  onNavigate?: (page: string) => void;
  onProjectClick?: (id: string) => void;
  limit?: number;
}

export const Gallery: React.FC<GalleryProps> = ({ onNavigate, onProjectClick, limit }) => {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  const handleProjectClick = (id: string) => {
    if (onProjectClick) {
      onProjectClick(id);
    } else if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <section id="gallery" className={`py-12 md:py-24 ${limit ? 'bg-white' : 'bg-apple-gray pt-24 md:pt-32'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
            <div className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-apple-dark mb-2 tracking-tight">
                {limit ? 'Featured Projects' : 'Our Portfolio'}
              </h2>
              <p className="text-gray-500 text-sm md:text-base">Delivering high-quality solutions for major landmarks in Lahore.</p>
            </div>
            {limit && onNavigate && (
              <button 
                onClick={() => onNavigate('projects')}
                className="hidden md:block px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                View All Projects
              </button>
            )}
          </div>
        </Reveal>

        {/* Mobile: 2 cols, Desktop: 3 cols */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {displayProjects.map((project, index) => (
            <Reveal key={project.id} delay={index % 3 * 50}>
              <div 
                onClick={() => handleProjectClick(project.id)}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl aspect-[4/5] md:aspect-[4/3] cursor-pointer shadow-sm bg-gray-100"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center text-white/80 mb-1 md:mb-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider">{project.location}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm md:text-xl mb-1 leading-tight">{project.title}</h3>
                  <p className="text-gray-300 text-xs hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {limit && onNavigate && (
          <div className="mt-10 text-center md:hidden">
            <button 
              onClick={() => onNavigate('projects')}
              className="px-8 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};