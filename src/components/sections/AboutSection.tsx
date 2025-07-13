import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Know Who I'M
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center hover-card">
                <div className="w-72 h-72 rounded-xl bg-muted/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-32 h-32 mx-auto rounded-xl bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl">📸</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Profile Image</p>
                    <p className="text-xs text-muted-foreground">Upload your photo here</p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-primary/20 animate-pulse flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-primary-glow/30 animate-pulse flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <Card className="hover-card bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Hi Everyone, I'm <span className="text-primary font-semibold">Akhilesh Chitare</span> from 
                    <span className="text-primary font-semibold"> Nagpur, Maharashtra</span>. I'm currently pursuing my 
                    <span className="text-primary font-semibold"> B.E. in Computer Science and Engineering</span> from 
                    G.H. Raisoni Institute.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    My core strengths include <span className="text-primary font-semibold">Java, DSA, React.js</span>, and 
                    building clean, user-focused front-end apps.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Besides programming, I enjoy solving <span className="text-primary font-semibold">Rubik's Cubes</span> which 
                    helps improve my analytical skills and focus.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quote Card */}
            <Card className="hover-card bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="text-4xl text-primary">💭</div>
                  <blockquote className="text-2xl font-bold gradient-text">
                    "Code. Learn. Repeat."
                  </blockquote>
                  <div className="flex justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">DSA Problems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;