import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Code, Wrench, FolderOpen, Award, GitBranch, Star } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "home", icon: Home },
    { name: "About", href: "about", icon: User },
    { name: "Skills", href: "skills", icon: Code },
    { name: "Tools", href: "tools", icon: Wrench },
    { name: "Projects", href: "projects", icon: FolderOpen },
    { name: "Certifications", href: "certifications", icon: Award },
    { name: "GitHub", href: "github-stats", icon: GitBranch },
    { name: "Activities", href: "extracurriculars", icon: Star }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="text-gradient">AC.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 animated-underline ${
                    activeSection === item.href 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => scrollToSection(item.href)}
              className={`text-2xl px-8 py-3 rounded-lg transition-all duration-300 scale-in delay-${index * 100} ${
                activeSection === item.href 
                  ? 'text-primary bg-primary/10' 
                  : 'text-foreground hover:text-primary hover:bg-primary/5'
              }`}
            >
              <item.icon className="w-6 h-6 mr-3" />
              {item.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-secondary/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300"
          style={{ 
            width: `${(window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100}%` 
          }}
        />
      </div>
    </>
  );
};

export default Navigation;