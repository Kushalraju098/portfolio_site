import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Azure Data Fundamentals",
    code: "DP-900",
    issuer: "Microsoft",
    description: "Foundational knowledge of core data concepts and Azure data services including relational, non-relational, and analytics workloads.",
    color: "from-primary to-accent",
    badge: "☁️",
  },
  {
    title: "Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    description: "Core concepts related to artificial intelligence and machine learning workloads on Microsoft Azure.",
    color: "from-accent to-cyan",
    badge: "🤖",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating my technical expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.code}
              className="group relative p-8 rounded-2xl bg-card border border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl shadow-lg`}>
                    {cert.badge}
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Award className="w-5 h-5" />
                    <span className="font-bold text-sm">Certified</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      {cert.code}
                    </span>
                    <span className="text-muted-foreground text-sm">{cert.issuer}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full gap-2 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
