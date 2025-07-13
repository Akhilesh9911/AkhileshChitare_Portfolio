import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'Java', icon: '☕', level: 90, color: 'from-orange-500 to-red-600' },
    { name: 'Data Structures & Algorithms', icon: '🧠', level: 85, color: 'from-blue-500 to-purple-600' },
    { name: 'HTML5', icon: '🌐', level: 95, color: 'from-orange-600 to-red-500' },
    { name: 'CSS3', icon: '🎨', level: 90, color: 'from-blue-600 to-indigo-600' },
    { name: 'JavaScript', icon: '⚡', level: 88, color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', icon: '⚛️', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'SQL', icon: '🗄️', level: 80, color: 'from-indigo-500 to-purple-600' },
    { name: 'MongoDB', icon: '🍃', level: 75, color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Professional Skillset
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="hover-card bg-card/50 backdrop-blur-sm border-primary/20 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {skill.level}%
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-foreground">Other Technologies I've Worked With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git & GitHub', 'Responsive Design', 'RESTful APIs', 'Agile Methodology', 
              'Problem Solving', 'Team Collaboration', 'Linux', 'Figma'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;