import { Card } from "@/components/ui/card";

const Tools = () => {
  const tools = [
    { name: "VS Code", icon: "🔧", description: "Primary Code Editor" },
    { name: "GitHub", icon: "🐙", description: "Version Control" },
    { name: "Postman", icon: "📮", description: "API Testing" },
    { name: "macOS", icon: "🍎", description: "Operating System" },
    { name: "PowerPoint", icon: "📊", description: "Presentations" },
    { name: "Slack", icon: "💬", description: "Team Communication" },
    { name: "Chrome DevTools", icon: "🔍", description: "Web Debugging" },
    { name: "Terminal", icon: "⌨️", description: "Command Line" }
  ];

  return (
    <section id="tools" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Tools</span> I Use
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are the tools and technologies I use daily to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card 
              key={tool.name} 
              className={`p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover text-center group scale-in delay-${index * 100}`}
            >
              <div className="space-y-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Tool Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover fade-in-up delay-100">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Development</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔧</span>
                <span className="text-muted-foreground">VS Code, Terminal</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🐙</span>
                <span className="text-muted-foreground">Git, GitHub</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔍</span>
                <span className="text-muted-foreground">Chrome DevTools</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover fade-in-up delay-200">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Testing & API</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📮</span>
                <span className="text-muted-foreground">Postman</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🧪</span>
                <span className="text-muted-foreground">API Testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔍</span>
                <span className="text-muted-foreground">Debugging Tools</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 card-hover fade-in-up delay-300">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Productivity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🍎</span>
                <span className="text-muted-foreground">macOS</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💬</span>
                <span className="text-muted-foreground">Slack</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📊</span>
                <span className="text-muted-foreground">PowerPoint</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tools;