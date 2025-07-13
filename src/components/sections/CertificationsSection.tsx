import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Java OOP',
      issuer: 'Udemy',
      date: '2024',
      description: 'Learned core OOP principles and hands-on exercises including inheritance, polymorphism, encapsulation, and abstraction.',
      skills: ['Object-Oriented Programming', 'Java Fundamentals', 'Design Patterns', 'Best Practices'],
      certificateUrl: '#',
      icon: '☕',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'TCS iON Career Edge',
      issuer: 'TCS',
      date: '2024',
      description: 'Communication, resume writing, IT basics covering professional development and industry readiness.',
      skills: ['Professional Communication', 'Resume Writing', 'IT Fundamentals', 'Career Development'],
      certificateUrl: '#',
      icon: '💼',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Accenture Forage Virtual Experience',
      issuer: 'Accenture',
      date: '2024',
      description: 'Covered SDLC, debugging, agile methods, career simulation providing real-world industry experience.',
      skills: ['SDLC', 'Debugging', 'Agile Methodology', 'Industry Simulation'],
      certificateUrl: '#',
      icon: '🎯',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="hover-card bg-card/50 backdrop-blur-sm border-primary/20 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="space-y-4">
                {/* Icon and Badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{cert.issuer}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {cert.description}
                </p>

                {/* Skills Learned */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full hover-card group-hover:border-primary/40"
                  asChild
                >
                  <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Learning */}
        <div className="mt-16">
          <Card className="hover-card bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8 text-center space-y-6">
              <div className="text-4xl">📚</div>
              <h3 className="text-2xl font-bold gradient-text">Continuous Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently expanding my knowledge in advanced React patterns, cloud technologies, 
                and full-stack development.
              </p>
              
              {/* Current Learning */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="space-y-2">
                  <div className="text-xl">🌐</div>
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-muted-foreground">Next.js, TypeScript, Node.js</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xl">☁️</div>
                  <h4 className="font-semibold">Cloud Computing</h4>
                  <p className="text-sm text-muted-foreground">AWS, Docker, DevOps</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xl">🤖</div>
                  <h4 className="font-semibold">Data Structures</h4>
                  <p className="text-sm text-muted-foreground">Advanced Algorithms, System Design</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;