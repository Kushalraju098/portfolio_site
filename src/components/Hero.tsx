import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.12,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="hero-section relative flex min-h-[92svh] flex-col justify-center overflow-hidden pb-20 pt-28 md:min-h-screen">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10 w-full">
        <div className="hero-reveal mb-8 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open to opportunities <span className="text-border">/</span> Toronto, Canada
        </div>

        <p className="hero-reveal mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          <Sparkles className="h-4 w-4" /> Data analytics · Quality mindset
        </p>

        <h1 className="display-font max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-8xl lg:text-[6.8rem]">
          <span className="hero-reveal block">I turn complex</span>
          <span className="hero-reveal block"><span className="gradient-text">data into</span></span>
          <span className="hero-reveal block">clear decisions<span className="serif-italic text-primary">.</span></span>
        </h1>

        <div className="mt-9 grid items-end gap-8 md:grid-cols-12 md:gap-12">
          <p className="hero-reveal max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg md:col-span-7">
            I'm <strong className="font-semibold text-foreground">Kushal Pathapati</strong>, a data analyst bringing 3+ years of QA experience to analytics. I use SQL, Python, Power BI and a detail-first approach to turn messy data into insights people can act on.
          </p>
          <div className="hero-reveal flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <a href="#projects" className="primary-button group">
              Explore my work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#contact" className="secondary-button">Let's connect</a>
          </div>
        </div>

        <div className="hero-reveal mt-16 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border/80 pt-8 sm:grid-cols-4 md:mt-20">
          {[
            { value: "3+", label: "Years in tech" },
            { value: "SQL + Python", label: "Core toolkit" },
            { value: "Power BI", label: "Visual storytelling" },
            { value: "QA → Analytics", label: "My perspective" },
          ].map((item) => (
            <div key={item.label}>
              <div className="display-font text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{item.value}</div>
              <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" aria-label="Scroll to about section" className="hero-reveal absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary sm:flex">
        Scroll to explore <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
