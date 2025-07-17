import { Card } from "@/components/ui/card";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Java OOP",
      provider: "Udemy",
      description: "Learned core OOP principles and hands-on exercises",
      icon: "☕",
      date: "2023",
      skills: ["Object-Oriented Programming", "Java", "Design Patterns"]
    },
    {
      title: "TCS iON Career Edge",
      provider: "TCS",
      description: "Communication, resume writing, IT basics",
      icon: "🎯",
      date: "2023",
      skills: ["Communication", "Resume Writing", "IT Fundamentals"]
    },
    {
      title: "Accenture Forage Virtual Experience",
      provider: "Accenture",
      description: "Covered SDLC, debugging, agile methods, career simulation",
      icon: "⚡",
      date: "2024",
      skills: ["SDLC", "Debugging", "Agile Methodology", "Career Development"]
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Professional certifications and learning achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className={`p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover group scale-in delay-${index * 200}`}
            >
              <div className="space-y-6">
                {/* Certificate Icon */}
                <div className="flex items-center justify-between">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <Award className="w-6 h-6 text-primary/60" />
                </div>

                {/* Certificate Title & Provider */}
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="font-semibold text-primary">{cert.provider}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Learned */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Skills Learned:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Learning Section */}
        <div className="mt-16 fade-in-up delay-600">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
            <div className="space-y-6">
              <div className="text-4xl">📚</div>
              <h3 className="text-2xl font-bold">
                Continuous <span className="text-gradient">Learning</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently exploring advanced React patterns, system design, and cloud technologies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-2xl">⚛️</div>
                  <h4 className="font-semibold text-primary">Advanced React</h4>
                  <p className="text-sm text-muted-foreground">Hooks, Context, Performance</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🏗️</div>
                  <h4 className="font-semibold text-primary">System Design</h4>
                  <p className="text-sm text-muted-foreground">Scalable Architecture</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">☁️</div>
                  <h4 className="font-semibold text-primary">Cloud Technologies</h4>
                  <p className="text-sm text-muted-foreground">AWS, Docker, DevOps</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;