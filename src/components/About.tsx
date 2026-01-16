import { GraduationCap, Briefcase, Target, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "3+ Years Experience",
    description: "Software testing & automation background",
  },
  {
    icon: TrendingUp,
    title: "Analytics Focus",
    description: "Data validation, SQL analysis, dashboarding",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Postgrad in Business Insights & Analytics",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Transforming data into decisions",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Transforming Data Into <span className="gradient-text">Actionable Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey from software testing to data analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bio Content */}
          <div className="space-y-6 animate-fade-in-up animate-delay-100">
            <p className="text-lg text-foreground leading-relaxed">
              With over <span className="font-semibold text-primary">3 years of experience</span> in 
              software testing and automation, I've developed a keen eye for detail and a passion 
              for ensuring data quality. This foundation led me to pursue my postgraduate studies 
              in Business Insights & Analytics at Humber College.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My analytical journey focuses on data validation, SQL-based analysis, predictive modeling 
              fundamentals, and creating impactful dashboards. I'm proficient in tools like MySQL, Python, 
              R, Power BI, Excel, and collaborative platforms including Git/GitHub and Jira.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm driven by the opportunity to solve complex problems through data, leveraging insights 
              to support informed decision-making. My background in cross-functional collaboration and 
              Agile methodologies enables me to work effectively with diverse teams.
            </p>

            {/* Education */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Postgraduate Diploma – Business Insights & Analytics</h4>
                    <p className="text-muted-foreground">Humber College • 2024 – Present</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <h4 className="font-semibold">B.Tech in Computer Science</h4>
                    <p className="text-muted-foreground">Reva University • 2016 – 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up animate-delay-200">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
