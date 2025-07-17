import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "/lovable-uploads/82276a2d-cbea-4b88-8c79-da8b91f66553.png";
import resumeImage from "@/assets/AkhileshchitareResume.pdf";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Final-Year CSE Student | Java & DSA Enthusiast | Front-End Developer";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayText.length < fullText.length) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayText, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open(resumeImage, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 fade-in-left">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl text-primary font-mono">
              👋 Hi There! I'M
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-gradient">AKHILESH</span>
              <br />
              <span className="text-gradient">CHITARE</span>
            </h1>
            <div className="h-16 md:h-20">
              <p className="text-lg md:text-xl text-muted-foreground font-mono">
                <span className="typing-effect inline-block">
                  {displayText}
                </span>
              </p>
            </div>
          </div>

          <div className="max-w-2xl space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm passionate about building clean, responsive, and real-world web applications.
              I love exploring Java, data structures, and developing intuitive front-end interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('about')}
                className="btn-glow text-white font-semibold py-3 px-8 rounded-lg"
                size="lg"
              >
                About Me
              </Button>
              <a
                href="/AkhileshchitareResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 py-3 px-8 rounded-lg"
                  size="lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>

            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              <a
                href="https://github.com/Akhilesh9911"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/akhilesh00/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:akhileshchitare04@gmail.com"
                className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end fade-in-right delay-300">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src={profilePhoto}
              alt="Akhilesh Chitare"
              className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary/20 shadow-2xl float-animation"
            />
            <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;