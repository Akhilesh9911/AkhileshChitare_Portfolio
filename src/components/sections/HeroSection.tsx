import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Final-Year CSE Student | Java & DSA Enthusiast | Front-End Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-gradient-start/10 via-background to-hero-gradient-end/5" />
      
      {/* Content */}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-primary font-medium">
              <span className="text-2xl animate-bounce">👋</span>
              <span>Hi There! I'M</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              AKHILESH CHITARE
            </h1>
          </div>

          {/* Typing Effect */}
          <div className="h-16 flex items-center">
            <p className="text-lg md:text-xl text-muted-foreground">
              <span className="border-r-2 border-primary pr-1">{typedText}</span>
            </p>
          </div>

          {/* Bio */}
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            "I'm passionate about building clean, responsive, and real-world web applications. 
            I love exploring Java, data structures, and developing intuitive front-end interfaces."
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="hover-card glow-effect"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover-card glow-effect"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover-card glow-effect"
              asChild
            >
              <a href="mailto:akhilesh@example.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="hero-button" size="lg">
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button variant="outline" size="lg" className="hover-card">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center float-animation pulse-glow">
              <div className="w-72 h-72 rounded-full bg-muted/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Profile Image</p>
                  <p className="text-xs text-muted-foreground">Upload your photo here</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-primary-glow/20 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;