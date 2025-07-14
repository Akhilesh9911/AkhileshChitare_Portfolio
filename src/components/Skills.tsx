import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "Java", icon: "☕", level: 90 },
    { name: "Data Structures & Algorithms", icon: "🧮", level: 85 },
    { name: "HTML5", icon: "🌐", level: 95 },
    { name: "CSS3", icon: "🎨", level: 90 },
    { name: "JavaScript", icon: "⚡", level: 85 },
    { name: "React.js", icon: "⚛️", level: 80 },
    { name: "SQL", icon: "🗄️", level: 75 },
    { name: "MongoDB", icon: "🍃", level: 70 }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Skillset</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className={`p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover text-center group scale-in delay-${index * 100}`}
            >
              <div className="space-y-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full transition-all duration-1000 delay-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover fade-in-up delay-100">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Frontend</h3>
            <div className="space-y-2 text-center">
              <div className="text-muted-foreground">HTML5, CSS3, JavaScript</div>
              <div className="text-muted-foreground">React.js, Responsive Design</div>
              <div className="text-muted-foreground">UI/UX Implementation</div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover fade-in-up delay-200">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Backend</h3>
            <div className="space-y-2 text-center">
              <div className="text-muted-foreground">Java, OOP Concepts</div>
              <div className="text-muted-foreground">Data Structures & Algorithms</div>
              <div className="text-muted-foreground">Database Management</div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover fade-in-up delay-300">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Database</h3>
            <div className="space-y-2 text-center">
              <div className="text-muted-foreground">SQL, MySQL</div>
              <div className="text-muted-foreground">MongoDB, NoSQL</div>
              <div className="text-muted-foreground">Database Design</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;