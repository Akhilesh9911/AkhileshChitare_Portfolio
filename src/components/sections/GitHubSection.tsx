import { Github, GitBranch, Star, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GitHubSection = () => {
  // Mock contribution data - replace with real GitHub API data if needed
  const contributionData = Array.from({ length: 365 }, (_, i) => ({
    date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000),
    count: Math.floor(Math.random() * 5)
  }));

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-muted/30';
    if (count === 1) return 'bg-primary/20';
    if (count === 2) return 'bg-primary/40';
    if (count === 3) return 'bg-primary/60';
    return 'bg-primary/80';
  };

  const stats = [
    { label: 'Total Contributions', value: '200+', icon: GitBranch },
    { label: 'Public Repositories', value: '25+', icon: Github },
    { label: 'Stars Earned', value: '50+', icon: Star },
    { label: 'Followers', value: '100+', icon: Users }
  ];

  return (
    <section id="github" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Days I Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My GitHub contribution graph and coding activity
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6" />
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="hover-card bg-card/50 backdrop-blur-sm border-primary/20 text-center">
              <CardContent className="p-6 space-y-3">
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contribution Graph */}
        <Card className="hover-card bg-card/50 backdrop-blur-sm border-primary/20 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Github className="w-6 h-6 text-primary" />
              <span>Contribution Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Graph */}
            <div className="overflow-x-auto">
              <div className="grid grid-cols-53 gap-1 min-w-[800px] mx-auto">
                {contributionData.map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)} hover:ring-2 hover:ring-primary/50 transition-all duration-200 cursor-pointer`}
                    title={`${day.count} contributions on ${day.date.toLocaleDateString()}`}
                  />
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Less</span>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-sm bg-muted/30" />
                <div className="w-3 h-3 rounded-sm bg-primary/20" />
                <div className="w-3 h-3 rounded-sm bg-primary/40" />
                <div className="w-3 h-3 rounded-sm bg-primary/60" />
                <div className="w-3 h-3 rounded-sm bg-primary/80" />
              </div>
              <span>More</span>
            </div>

            {/* Summary */}
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold">
                <span className="text-primary">200+</span> contributions in the last year
              </p>
              <p className="text-muted-foreground">
                Longest streak: <span className="text-primary font-medium">15 days</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Popular Repositories */}
          <Card className="hover-card bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-primary" />
                <span>Popular Repositories</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'portfolio-website', stars: 15, language: 'React', description: 'Personal portfolio built with React' },
                { name: 'bite-runner', stars: 8, language: 'JavaScript', description: 'Food delivery web application' },
                { name: 'java-dsa-practice', stars: 12, language: 'Java', description: 'Data structures and algorithms practice' }
              ].map((repo) => (
                <div key={repo.name} className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-primary">{repo.name}</h4>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{repo.stars}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{repo.description}</p>
                  <span className="inline-block px-2 py-1 rounded-full bg-primary/20 text-primary text-xs">
                    {repo.language}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Coding Languages */}
          <Card className="hover-card bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Github className="w-5 h-5 text-primary" />
                <span>Most Used Languages</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'JavaScript', percentage: 40, color: 'bg-yellow-500' },
                { name: 'Java', percentage: 25, color: 'bg-orange-600' },
                { name: 'CSS', percentage: 20, color: 'bg-blue-500' },
                { name: 'HTML', percentage: 15, color: 'bg-orange-500' }
              ].map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${lang.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button className="hero-button" size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              <span className="relative z-10">Visit My GitHub Profile</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;