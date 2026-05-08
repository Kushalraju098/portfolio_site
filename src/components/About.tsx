import { useReveal } from "@/hooks/useReveal";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-16" data-reveal>
          <span className="text-primary text-sm display-font">01 —</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4" data-reveal>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border relative group">
              <img
                src={profilePhoto}
                alt="Kushal Pathapati"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs uppercase tracking-widest">
                <span>Toronto, CA</span>
                <span className="text-primary">● 2026</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <h2 className="display-font text-4xl md:text-6xl leading-[1.05] tracking-tight" data-reveal>
              I help teams see what their{" "}
              <span className="serif-italic text-primary">data is whispering</span> —
              then act on it.
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed max-w-2xl" data-reveal>
              <p>
                After 3+ years writing test suites and chasing edge cases in production
                systems, I learned the same skill that catches bugs catches anomalies in
                datasets. That instinct now drives my analytics work.
              </p>
              <p>
                I'm currently completing a postgraduate diploma in{" "}
                <span className="text-foreground">Business Insights & Analytics at Humber College</span>,
                and I build dashboards, validate pipelines and ship reports that people
                actually open twice.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border" data-reveal>
              <div>
                <div className="display-font text-4xl text-primary">3+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Years in tech
                </div>
              </div>
              <div>
                <div className="display-font text-4xl text-primary">2</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Azure certs
                </div>
              </div>
              <div>
                <div className="display-font text-4xl text-primary">5+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Projects shipped
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4" data-reveal>
              <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Education</h3>
              <div className="space-y-3">
                <div className="flex justify-between gap-4 py-3 border-b border-border">
                  <div>
                    <div className="display-font">Postgraduate Diploma — Business Insights & Analytics</div>
                    <div className="text-sm text-muted-foreground">Humber College</div>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">2024 — Now</div>
                </div>
                <div className="flex justify-between gap-4 py-3 border-b border-border">
                  <div>
                    <div className="display-font">B.Tech, Computer Science</div>
                    <div className="text-sm text-muted-foreground">Reva University</div>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">2016 — 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
