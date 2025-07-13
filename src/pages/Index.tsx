import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ToolsSection from '@/components/sections/ToolsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import GitHubSection from '@/components/sections/GitHubSection';
import ExtracurricularsSection from '@/components/sections/ExtracurricularsSection';
import Footer from '@/components/sections/Footer';
import NavigationHeader from '@/components/navigation/NavigationHeader';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <NavigationHeader />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ToolsSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <CertificationsSection />
        <div className="section-divider" />
        <GitHubSection />
        <div className="section-divider" />
        <ExtracurricularsSection />
      </main>

      <Footer />

      {/* Floating particles background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
