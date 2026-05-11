import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const certifications = [
  {
    title: "Azure Data Fundamentals",
    code: "DP-900",
    issuer: "Microsoft",
    description:
      "Core data concepts, relational & non-relational data, and analytics workloads on Azure.",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/kushalpathapati/credentials/6ef7e3420ba11230",
  },
  {
    title: "Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    description:
      "Foundational AI & ML workloads on Microsoft Azure — vision, language, and responsible AI.",
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/kushalpathapati/credentials/b2426d4d0678c506",
  },
];

const Certifications = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="certifications" ref={ref} className="section-padding bg-secondary/40 border-y border-border">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-16" data-reveal>
          <span className="text-primary text-sm display-font font-semibold">—</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Credentials</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <a
              key={cert.code}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group bg-card border border-border rounded-2xl p-10 block"
              data-reveal
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                    {cert.code} · {cert.issuer}
                  </div>
                  <h3 className="display-font text-3xl font-semibold tracking-tight">{cert.title}</h3>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">{cert.description}</p>
              <div className="text-xs uppercase tracking-widest text-muted-foreground link-underline">
                Verify credential
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
