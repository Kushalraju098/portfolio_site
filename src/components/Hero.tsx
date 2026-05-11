import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.15,
      });
      gsap.from(".hero-meta", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
        delay: 0.8,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Soft mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-mesh)" }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="hero-meta inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-border bg-card/70 backdrop-blur text-xs text-muted-foreground shadow-sm">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
          </span>
          Available for opportunities · Toronto, CA
        </div>

        <h1 className="display-font font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1] tracking-tight max-w-5xl">
          <div className="overflow-hidden">
            <div className="hero-line">Turning data into</div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-line">
              <span className="gradient-text">decisions</span>{" "}
              <span className="serif-italic font-normal text-muted-foreground">that ship.</span>
            </div>
          </div>
        </h1>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-end">
          <p className="hero-meta max-w-xl text-muted-foreground leading-relaxed text-lg">
            Hi, I'm <span className="text-foreground font-medium">Kushal Pathapati</span> — a data analyst
            blending 3+ years of QA precision with SQL, Python, R and Power BI to turn raw
            datasets into clear, actionable insights.
          </p>

          <div className="hero-meta flex flex-wrap gap-3 md:justify-end">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-[var(--shadow-lg)] hover:opacity-90 hover:-translate-y-0.5 transition-all"
            >
              See my work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-secondary transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Trust strip */}
        <div className="hero-meta mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { k: "3+", v: "Years in tech" },
            { k: "2", v: "Azure certifications" },
            { k: "5+", v: "Projects shipped" },
            { k: "100%", v: "Curiosity driven" },
          ].map((s) => (
            <div key={s.v}>
              <div className="display-font text-3xl md:text-4xl font-semibold text-foreground">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="hero-meta absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
      >
        Scroll
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
