import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Created using HTML, CSS, JavaScript, and React.js to showcase my skills, resume, and work. Features modern animations, responsive design, and clean UI.",
      tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Akhilesh9911/AkhileshChitare_Portfolio",
      image: "🌐"
    },
    {
      title: "Bite Runner – Food Delivery Website",
      description: "A responsive food delivery web app with menu browsing, order placement, and real-time tracking. Developed using React.js with modern UI components.",
      tech: ["React.js", "HTML5", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Akhilesh9911/BiteRunner",
      image: "🍔"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Recent <span className="text-gradient">Works</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A few projects I've built recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover fade-in-up delay-${index * 200}`}
            >
              <div className="space-y-6">
                {/* Project Icon */}
                <div className="text-6xl text-center mb-4">
                  {project.image}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center pt-4">
                  <Button 
                    variant="outline" 
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up delay-400">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button asChild className="btn-glow">
              <a href="https://github.com/Akhilesh9911" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Visit My GitHub
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;