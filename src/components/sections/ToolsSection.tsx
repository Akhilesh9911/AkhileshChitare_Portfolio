import { Card, CardContent } from '@/components/ui/card';

const ToolsSection = () => {
  const tools = [
    { name: 'VS Code', icon: '⚡', description: 'Primary Code Editor' },
    { name: 'GitHub', icon: '🐙', description: 'Version Control' },
    { name: 'Postman', icon: '📮', description: 'API Testing' },
    { name: 'macOS', icon: '🍎', description: 'Development Environment' },
    { name: 'PowerPoint', icon: '📊', description: 'Presentations' },
    { name: 'Slack', icon: '💬', description: 'Team Communication' },
    { name: 'Chrome DevTools', icon: '🔧', description: 'Web Debugging' },
    { name: 'npm', icon: '📦', description: 'Package Manager' },
  ];

  return (
    <section id="tools" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Tools I Use
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Development tools and software that power my workflow
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card
              key={tool.name}
              className="hover-card bg-card/50 backdrop-blur-sm border-primary/20 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                
                {/* Tool Name */}
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-primary-glow to-primary opacity-20 animate-pulse" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tools Section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            Development Environment
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Editor Setup */}
            <Card className="hover-card bg-card/30 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl">💻</div>
                <h4 className="font-semibold text-lg">Editor Setup</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• VS Code with extensions</li>
                  <li>• Custom themes & snippets</li>
                  <li>• Integrated terminal</li>
                  <li>• Live Server for testing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Design Tools */}
            <Card className="hover-card bg-card/30 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl">🎨</div>
                <h4 className="font-semibold text-lg">Design & Prototype</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Figma for UI/UX</li>
                  <li>• Adobe Creative Suite</li>
                  <li>• Canva for graphics</li>
                  <li>• Wireframing tools</li>
                </ul>
              </CardContent>
            </Card>

            {/* Productivity */}
            <Card className="hover-card bg-card/30 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl">⚡</div>
                <h4 className="font-semibold text-lg">Productivity</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Notion for documentation</li>
                  <li>• Trello for project management</li>
                  <li>• Discord for collaboration</li>
                  <li>• Time tracking tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;