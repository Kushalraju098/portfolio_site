import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroScene from "./HeroScene";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
        delay: 0.2,
      });
      gsap.from(".hero-meta", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        delay: 1.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: "var(--gradient-glow)" }}
      />

      {/* 3D scene background */}
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full opacity-90 pointer-events-none">
        <HeroScene />
      </div>

      <div className="section-container relative z-10">
        <div className="hero-meta flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities — Toronto, CA
        </div>

        <h1 className="display-font font-medium text-[14vw] md:text-[9vw] lg:text-[8rem] leading-[0.95] tracking-tighter">
          <div className="overflow-hidden">
            <div className="hero-line">Data —</div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-line">
              <span className="serif-italic font-normal text-primary">driven</span> stories
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-line text-muted-foreground">that decide.</div>
          </div>
        </h1>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-end">
          <p className="hero-meta max-w-md text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Kushal Pathapati</span> — a data analyst
            blending 3+ years of QA precision with SQL, Python, R and Power BI to turn raw
            datasets into decisions teams actually ship.
          </p>

          <div className="hero-meta flex flex-wrap gap-4 md:justify-end">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground display-font hover:bg-primary/90 transition-colors"
            >
              See selected work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border display-font hover:bg-secondary transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero-meta absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
