import { Database, Code, BarChart3, Users, CheckCircle } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "from-primary to-accent",
    skills: ["SQL (MySQL)", "Python", "R"],
  },
  {
    title: "Data Tools",
    icon: BarChart3,
    color: "from-accent to-cyan",
    skills: ["Power BI", "Excel (VLOOKUP, Pivot Tables)", "Data Visualization"],
  },
  {
    title: "Analysis",
    icon: Database,
    color: "from-cyan to-primary",
    skills: ["Statistical Analysis", "Predictive Modeling", "Data Cleaning", "ETL Processes"],
  },
  {
    title: "Collaboration",
    icon: Users,
    color: "from-primary to-accent",
    skills: ["Jira", "Agile Methodology", "Git/GitHub", "Cross-functional Teams"],
  },
  {
    title: "Quality & Testing",
    icon: CheckCircle,
    color: "from-accent to-cyan",
    skills: ["SDLC", "STLC", "Automation Concepts", "Data Validation"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            MY EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into insights
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-8 rounded-2xl bg-background border border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${category.color}`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-xl">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-background border border-border animate-fade-in-up">
          <h3 className="font-bold text-lg mb-6 text-center">Also Proficient In</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Conditional Formatting", "Business Reporting", "Data Storytelling", "Dashboard Design", "API Integration", "Database Management"].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
