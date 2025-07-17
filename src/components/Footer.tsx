import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Akhilesh9911",
      icon: Github
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/akhilesh00/",
      icon: Linkedin
    },
    {
      name: "Email",
      url: "mailto:akhileshchitare04@gmail.com",
      icon: Mail
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/30 border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left space-y-4">
            <div className="text-3xl font-bold">
              <span className="text-gradient">Akhilesh Chitare</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Final-Year CSE Student passionate about building clean, responsive, 
              and real-world web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Certifications'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline mx-auto md:mx-0"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right space-y-4">
            <h3 className="text-lg font-semibold text-primary">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              Designed & Developed by{' '}
              <button 
                onClick={scrollToTop}
                className="text-primary font-semibold hover:text-primary-light transition-colors animated-underline"
              >
                Akhilesh Chitare
              </button>
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start mt-2">
              Built with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> using React.js and modern web technologies
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © {currentYear} Akhilesh Chitare. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Last updated: December 2024
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-300 hover:scale-105 border border-primary/30"
          >
            <span className="mr-2">Back to Top</span>
            <div className="w-4 h-4 border-2 border-current border-b-transparent rounded-full animate-spin"></div>
          </button>
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500 animate-pulse delay-1000"></div>
      </div>
    </footer>
  );
};

export default Footer;