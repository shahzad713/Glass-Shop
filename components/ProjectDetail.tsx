import React from 'react';
import { ProjectItem } from '../types';
import { ArrowLeft, Calendar, MapPin, User, CheckCircle } from 'lucide-react';

interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center text-apple-dark hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-6 aspect-[4/3]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Gallery placeholders could go here */}
            <div className="grid grid-cols-3 gap-4">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="rounded-xl overflow-hidden aspect-square bg-gray-100">
                    <img 
                      src={`${project.imageUrl}&auto=format&fit=crop&w=300&q=60`} 
                      alt="Detail" 
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                 </div>
               ))}
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h1 className="text-4xl font-bold text-apple-dark mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                {project.location}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                {project.date || 'Recent'}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-blue-600" />
                {project.client || 'Private Client'}
              </div>
            </div>

            <h3 className="text-xl font-bold text-apple-dark mb-3">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {project.fullDescription || project.description}
            </p>

            {project.servicesUsed && (
              <>
                <h3 className="text-xl font-bold text-apple-dark mb-4">Services Provided</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {project.servicesUsed.map((service, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h4 className="font-bold text-blue-900 mb-2">Interested in a similar project?</h4>
              <p className="text-blue-700 text-sm mb-4">Contact us today to discuss your requirements and get a free quote.</p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};