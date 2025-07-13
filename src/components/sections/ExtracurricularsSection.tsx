import { Puzzle, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExtracurricularsSection = () => {
  const activities = [
    {
      icon: '🧩',
      title: 'Rubik\'s Cube Solver',
      description: 'Active in cubing communities',
      details: 'Passionate about speedcubing and solving various cube puzzles. Member of local cubing communities and regularly participate in competitions.',
      skills: ['Problem Solving', 'Pattern Recognition', 'Hand-Eye Coordination', 'Patience'],
      achievements: ['Sub-30 second average', 'Local competition participant', 'Taught 50+ people'],
      color: 'from-red-500 to-yellow-500'
    },
    {
      icon: '🎯',
      title: 'Analytical Thinker',
      description: 'Strong spatial awareness & patience',
      details: 'Strong analytical mindset with excellent spatial reasoning abilities. Apply systematic thinking to break down complex problems.',
      skills: ['Spatial Reasoning', 'Logical Thinking', 'Pattern Analysis', 'Systematic Approach'],
      achievements: ['High aptitude scores', 'Problem-solving competitions', 'Mentor for juniors'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: '✈️',
      title: 'Curious Mind',
      description: 'Fast learner, always exploring',
      details: 'Constantly exploring new technologies, concepts, and ideas. Love learning about different cultures, science, and emerging technologies.',
      skills: ['Quick Learning', 'Research Skills', 'Adaptability', 'Open Mindedness'],
      achievements: ['Self-taught programmer', 'Tech blog reader', 'Continuous learner'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="extracurriculars" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Extra-Curriculars
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond coding - activities that shape my problem-solving mindset
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={activity.title}
              className="hover-card bg-card/50 backdrop-blur-sm border-primary/20 group h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {activity.icon}
                </div>
                
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {activity.title}
                </CardTitle>
                
                <p className="text-primary font-medium text-sm">
                  {activity.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {activity.details}
                </p>

                {/* Skills Developed */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Achievements:</h4>
                  <ul className="space-y-1">
                    {activity.achievements.map((achievement) => (
                      <li key={achievement} className="text-xs text-muted-foreground flex items-center">
                        <span className="w-1 h-1 rounded-full bg-primary mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Philosophy */}
        <div className="mt-16">
          <Card className="hover-card bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8 text-center space-y-6">
              <div className="text-4xl">🌟</div>
              <h3 className="text-2xl font-bold gradient-text">Personal Philosophy</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I believe that the best problem solvers are those who approach challenges from multiple angles. 
                My extracurricular activities have taught me patience, persistence, and the value of systematic thinking - 
                qualities that directly translate to my programming journey.
              </p>
              
              {/* Core Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-3">
                  <Puzzle className="w-8 h-8 mx-auto text-primary" />
                  <h4 className="font-semibold">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">
                    Every challenge is a puzzle waiting to be solved with the right approach
                  </p>
                </div>
                <div className="space-y-3">
                  <Target className="w-8 h-8 mx-auto text-primary" />
                  <h4 className="font-semibold">Focused Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Concentrated effort and deliberate practice lead to mastery
                  </p>
                </div>
                <div className="space-y-3">
                  <Lightbulb className="w-8 h-8 mx-auto text-primary" />
                  <h4 className="font-semibold">Continuous Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Always curious, always learning, always improving
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">Fun Facts About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { fact: "Can solve a Rubik's cube in under 30 seconds", icon: "⚡" },
              { fact: "Learned programming through YouTube tutorials", icon: "📺" },
              { fact: "Enjoys explaining complex concepts simply", icon: "🎓" },
              { fact: "Always carries a mini Rubik's cube", icon: "🎒" }
            ].map((item, index) => (
              <Card key={index} className="hover-card bg-card/20 backdrop-blur-sm border-primary/20 text-center">
                <CardContent className="p-4 space-y-2">
                  <div className="text-2xl">{item.icon}</div>
                  <p className="text-sm text-muted-foreground">{item.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularsSection;