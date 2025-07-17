import { Card } from "@/components/ui/card";
import { Calendar, GitCommit, Star, GitBranch } from "lucide-react";

const GitHubStats = () => {
  // Mock contribution data - in a real app this would come from GitHub API
  const generateContributions = () => {
    const contributions = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 365);
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const activity = Math.floor(Math.random() * 5); // 0-4 contribution levels
      contributions.push({
        date: date.toISOString().split('T')[0],
        count: activity,
        level: activity
      });
    }
    return contributions;
  };

  const contributions = generateContributions();
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  const getContributionColor = (level: number) => {
    const colors = [
      'bg-secondary/30', // No contributions
      'bg-primary/30',   // Low
      'bg-primary/50',   // Medium
      'bg-primary/70',   // High
      'bg-primary'       // Very high
    ];
    return colors[level] || colors[0];
  };

  const stats = [
    { label: "Total Contributions", value: totalContributions, icon: GitCommit },
    { label: "Current Streak", value: "15 days", icon: Calendar },
    { label: "Repositories", value: "12", icon: GitBranch },
    { label: "Stars Earned", value: "24", icon: Star }
  ];

  return (
    <section id="github-stats" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Days I <span className="text-gradient">Code</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            My coding activity and contribution patterns
          </p>
        </div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className={`p-4 bg-card/50 backdrop-blur-sm border-primary/20 card-hover text-center scale-in delay-${index * 100}`}
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* GitHub Contribution Grid */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 fade-in-up delay-400">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">GitHub Contribution Graph</h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Less</span>
                <div className="flex space-x-1">
                  {[0, 1, 2, 3, 4].map(level => (
                    <div 
                      key={level} 
                      className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Contribution Grid */}
            <div className="overflow-x-auto">
              <div className="grid grid-cols-53 gap-1 min-w-[800px]">
                {contributions.map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day.level)} hover:ring-2 hover:ring-primary/50 transition-all cursor-pointer`}
                    title={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">{totalContributions}</span> contributions in the last year
            </div>
          </div>
        </Card>

        {/* Coding Languages */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 fade-in-left delay-500">
            <h3 className="text-xl font-bold mb-6 text-center">Most Used Languages</h3>
            <div className="space-y-4">
              {[
                { name: "JavaScript", percentage: 40, color: "bg-yellow-500" },
                { name: "Java", percentage: 30, color: "bg-orange-500" },
                { name: "HTML/CSS", percentage: 20, color: "bg-blue-500" },
                { name: "Other", percentage: 10, color: "bg-gray-500" }
              ].map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`${lang.color} h-2 rounded-full transition-all duration-1000 delay-700`}
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 fade-in-right delay-600">
            <h3 className="text-xl font-bold mb-6 text-center">Coding Activity</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.2hrs</div>
                <div className="text-sm text-muted-foreground">Average daily coding</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-primary">127</div>
                  <div className="text-xs text-muted-foreground">Commits this month</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">8</div>
                  <div className="text-xs text-muted-foreground">Projects active</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;