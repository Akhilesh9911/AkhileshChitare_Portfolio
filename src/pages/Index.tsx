import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";

import Extracurriculars from "@/components/Extracurriculars";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections with fade-in classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Certifications />
        
        <Extracurriculars />
      </main>
      
      <Footer />
      
      {/* Floating particles background effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-3 h-3 bg-purple-500/20 rounded-full animate-float" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float" style={{ top: '40%', left: '70%', animationDelay: '4s' }}></div>
        <div className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-float" style={{ top: '80%', left: '20%', animationDelay: '6s' }}></div>
        <div className="absolute w-1 h-1 bg-primary/25 rounded-full animate-float" style={{ top: '30%', left: '90%', animationDelay: '8s' }}></div>
        <div className="absolute w-2 h-2 bg-purple-300/20 rounded-full animate-float" style={{ top: '70%', left: '50%', animationDelay: '10s' }}></div>
      </div>
    </div>
  );
};

export default Index;
