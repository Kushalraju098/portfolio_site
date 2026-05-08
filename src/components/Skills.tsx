import Marquee from "react-fast-marquee";
import { useReveal } from "@/hooks/useReveal";

const skillGroups = [
  { title: "Languages", items: ["SQL / MySQL", "Python", "R", "DAX"] },
  { title: "Visualization", items: ["Power BI", "Excel", "Matplotlib", "Seaborn"] },
  { title: "Analysis", items: ["Statistical Analysis", "Predictive Modeling", "ETL", "Data Cleaning"] },
  { title: "Workflow", items: ["Git / GitHub", "Jira", "Agile", "Cross-functional"] },
  { title: "Quality", items: ["SDLC", "STLC", "Automation", "Data Validation"] },
];

const marqueeItems = [
  "SQL", "Python", "R", "Power BI", "Excel", "Azure", "Git", "Jira",
  "Statistics", "ETL", "Data Modeling", "Dashboards", "Predictive Modeling",
  "Data Cleaning", "Agile", "Data Storytelling",
];

const Skills = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="section-padding relative">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-16" data-reveal>
          <span className="text-primary text-sm display-font">02 —</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Toolkit</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2
          className="display-font text-4xl md:text-6xl tracking-tight mb-16 max-w-3xl"
          data-reveal
        >
          Tools I reach for when{" "}
          <span className="serif-italic text-primary">the deadline is real.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden mb-20">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="bg-background p-8 hover:bg-card transition-colors group"
              data-reveal
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
              </div>
              <h3 className="display-font text-2xl mb-6">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((s) => (
                  <li key={s} className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-between" data-reveal>
            <span className="text-xs uppercase tracking-widest opacity-70">+ more</span>
            <h3 className="display-font text-2xl mt-6">
              Always learning. Currently exploring{" "}
              <span className="serif-italic">advanced ML & cloud analytics.</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="marquee-fade py-6 border-y border-border bg-card/30">
        <Marquee speed={45} gradient={false} pauseOnHover>
          {marqueeItems.concat(marqueeItems).map((item, i) => (
            <div key={i} className="flex items-center gap-12 px-8">
              <span className="display-font text-3xl md:text-5xl text-foreground/40 hover:text-primary transition-colors">
                {item}
              </span>
              <span className="text-primary text-2xl">✦</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
