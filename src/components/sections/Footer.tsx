import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-section-bg border-t border-border/50">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-primary hover:bg-primary-glow shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Akhilesh Chitare</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about creating beautiful, functional web applications 
              and solving complex problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'GitHub', href: '#github' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:akhilesh@example.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  akhilesh@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 flex items-center justify-center text-primary">📍</span>
                <span className="text-muted-foreground">Nagpur, Maharashtra, India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="hover-card"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover-card"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover-card"
                asChild
              >
                <a href="mailto:akhilesh@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Section */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>Designed & Developed by</span>
            <span className="text-primary font-semibold">Akhilesh Chitare</span>
          </p>
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React.js and modern web technologies</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Akhilesh Chitare. All Rights Reserved.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/20 to-transparent rounded-full" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary-glow/20 to-transparent rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;