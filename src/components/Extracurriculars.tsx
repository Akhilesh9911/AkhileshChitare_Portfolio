import { Card } from "@/components/ui/card";
import { Puzzle, Target, Plane } from "lucide-react";

const Extracurriculars = () => {
  const activities = [
    {
      title: "Rubik's Cube Solver",
      description: "Active in cubing communities",
      icon: Puzzle,
      emoji: "🧩",
      details: "Regular participant in cubing communities and speed-solving competitions. Best time: 45 seconds.",
      skills: ["Problem Solving", "Pattern Recognition", "Spatial Awareness"]
    },
    {
      title: "Analytical Thinker",
      description: "Strong spatial awareness & patience",
      icon: Target,
      emoji: "🎯",
      details: "Developed strong analytical and logical thinking skills through consistent practice and problem-solving.",
      skills: ["Critical Thinking", "Logic", "Patience", "Focus"]
    },
    {
      title: "Curious Mind",
      description: "Fast learner, always exploring",
      icon: Plane,
      emoji: "✈️",
      details: "Always eager to learn new technologies and explore different aspects of computer science and development.",
      skills: ["Learning Agility", "Adaptability", "Research", "Innovation"]
    }
  ];

  return (
    <section id="extracurriculars" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Extra-<span className="text-gradient">Curriculars</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Beyond coding - activities that shape my perspective and skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card 
              key={activity.title} 
              className={`p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover group scale-in delay-${index * 200}`}
            >
              <div className="space-y-6">
                {/* Activity Icon */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {activity.emoji}
                  </div>
                  <activity.icon className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                </div>

                {/* Activity Title */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {activity.description}
                  </p>
                </div>

                {/* Activity Details */}
                <p className="text-muted-foreground leading-relaxed text-center">
                  {activity.details}
                </p>

                {/* Skills Developed */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3 text-center">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {activity.skills.map((skill) => (
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

        {/* Personal Philosophy Section */}
        <div className="mt-16 fade-in-up delay-600">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
            <div className="space-y-6">
              <div className="text-4xl">🌟</div>
              <h3 className="text-2xl font-bold">
                Personal <span className="text-gradient">Philosophy</span>
              </h3>
              <blockquote className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
                "Just like solving a Rubik's cube, every complex problem can be broken down into 
                smaller, manageable pieces. The key is patience, practice, and persistence."
              </blockquote>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-2xl">🧩</div>
                  <h4 className="font-semibold text-primary">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">Break complex challenges into smaller parts</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🎯</div>
                  <h4 className="font-semibold text-primary">Focus & Patience</h4>
                  <p className="text-sm text-muted-foreground">Maintain concentration on goals</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🚀</div>
                  <h4 className="font-semibold text-primary">Continuous Growth</h4>
                  <p className="text-sm text-muted-foreground">Always learning and improving</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;