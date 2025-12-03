
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import { Team } from './components/Team';
import { ProjectDetail } from './components/ProjectDetail';
import { Testimonials } from './components/Testimonials';
import { FloatingActions } from './components/FloatingActions';
import { projects } from './data';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProjectId(null); // Reset selection
    window.scrollTo(0, 0);
  };

  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
    setCurrentPage('project-detail');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (currentPage === 'project-detail' && selectedProjectId) {
      const project = projects.find(p => p.id === selectedProjectId);
      if (project) {
        return (
          <ProjectDetail 
            project={project} 
            onBack={() => handleNavigate('projects')} 
          />
        );
      }
    }

    switch (currentPage) {
      case 'services':
        return <Services showCategories={true} />;
      case 'projects':
        return <Gallery onProjectClick={handleProjectClick} />;
      case 'products':
        return <Products />;
      case 'team':
        return <Team />;
      case 'about':
        return <About isPage={true} />;
      case 'contact':
        return <Contact isPage={true} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services onNavigate={handleNavigate} limit={9} />
            <Gallery onNavigate={handleNavigate} onProjectClick={handleProjectClick} limit={6} />
            <About />
            <Contact />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="antialiased min-h-screen flex flex-col pb-16 md:pb-0 relative">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage === 'project-detail' ? 'projects' : currentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingActions />
    </div>
  );
};

export default App;