import { ExternalLink, Github, BarChart2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cybercrime Analysis Dashboard",
    description: "An exploratory analytics project analyzing cybercrime trends across Canada. Includes preprocessing, visualization, and reporting of trend patterns and year-over-year insights using Power BI and Python.",
    image: "📊",
    tools: ["Python", "Power BI", "Data Cleaning", "Data Visualization"],
    icon: Shield,
    color: "from-primary to-accent",
    highlights: ["Dynamic Dashboards", "Trend Analysis", "YoY Insights"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world data analytics projects showcasing my technical skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-3xl bg-background border border-border overflow-hidden card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image/Visual */}
              <div className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="relative">
                  <div className="w-32 h-32 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-6xl shadow-2xl">
                    {project.image}
                  </div>
                </div>
                
                {/* Floating icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                    >
                      <BarChart2 className="w-3 h-3" />
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map((tool) => (
                    <span key={tool} className="skill-badge text-sm">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a href="https://github.com/Kushalraju098" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="btn-gradient gap-2 w-full">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Button>
                  </a>
                  <a href="https://github.com/Kushalraju098" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="gap-2 border-2 w-full">
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">More projects coming soon...</p>
          <a href="https://github.com/Kushalraju098" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 border-2">
              <Github className="w-4 h-4" />
              View GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
