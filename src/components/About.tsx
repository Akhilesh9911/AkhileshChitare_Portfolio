import { Card } from "@/components/ui/card";
import profilePhoto from "/lovable-uploads/82276a2d-cbea-4b88-8c79-da8b91f66553.png";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Know Who <span className="text-gradient">I'M</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 fade-in-left">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Hi Everyone, I'm <span className="text-primary font-semibold">Akhilesh Chitare</span> from{' '}
                  <span className="text-primary font-semibold">Nagpur, Maharashtra</span>. I'm currently pursuing my{' '}
                  <span className="text-primary font-semibold">B.E. in Computer Science and Engineering</span> from{' '}
                  <span className="text-primary font-semibold">G.H. Raisoni Institute</span>.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  My core strengths include <span className="text-primary font-semibold">Java</span>,{' '}
                  <span className="text-primary font-semibold">DSA</span>,{' '}
                  <span className="text-primary font-semibold">React.js</span>, and building clean, user-focused front-end apps.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Besides programming, I enjoy solving{' '}
                  <span className="text-primary font-semibold">Rubik's Cubes</span> which helps improve my analytical skills and focus.
                </p>

                <div className="pt-6">
                  <blockquote className="text-xl font-bold text-center p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                    <span className="text-gradient">"Code. Learn. Repeat."</span>
                  </blockquote>
                </div>
              </div>
            </Card>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover text-center">
                <div className="text-2xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Years Learning</div>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover text-center">
                <div className="text-2xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Projects Built</div>
              </Card>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center fade-in-right delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Akhilesh Chitare - About"
                className="relative w-80 h-96 md:w-96 md:h-[450px] object-cover rounded-2xl border-2 border-primary/30 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl border border-primary/40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;