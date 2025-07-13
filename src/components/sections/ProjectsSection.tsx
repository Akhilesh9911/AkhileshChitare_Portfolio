import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'Created using HTML, CSS, JavaScript, and React.js to showcase my skills, resume, and work. Features responsive design, smooth animations, and modern UI components.',
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      image: '🌐'
    },
    {
      title: 'Bite Runner – Food Delivery Website',
      description: 'A responsive food delivery web app with menu browsing, order placement, and real-time tracking. Developed using React.js with modern UI/UX principles.',
      technologies: ['React.js', 'JavaScript', 'CSS', 'HTML', 'Local Storage'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      image: '🍔'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            My Recent Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A few projects I've built recently
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`hover-card bg-card/50 backdrop-blur-sm border-primary/20 group ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="space-y-4">
                {/* Project Image Placeholder */}
                <div className="relative">
                  <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-glow/20 transition-all duration-300">
                    <div className="text-center space-y-2">
                      <div className="text-6xl">{project.image}</div>
                      <p className="text-sm text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      ⭐ Featured
                    </div>
                  )}
                </div>

                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    className="hero-button flex-1" 
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">Live Demo</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="hover-card"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="hover-card">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Projects Completed', value: '10+', icon: '🚀' },
            { label: 'Technologies Learned', value: '15+', icon: '⚡' },
            { label: 'Hours of Coding', value: '500+', icon: '⏱️' },
            { label: 'GitHub Repositories', value: '25+', icon: '📁' }
          ].map((stat, index) => (
            <Card key={stat.label} className="hover-card bg-card/30 backdrop-blur-sm border-primary/20 text-center">
              <CardContent className="p-6 space-y-3">
                <div className="text-3xl">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;