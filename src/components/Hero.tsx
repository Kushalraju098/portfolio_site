import { ArrowRight, Download, Play, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-8 grid grid-cols-5 gap-2 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary" />
        ))}
      </div>
      
      {/* Large Blob Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] lg:w-[700px] lg:h-[700px]">
        <div className="absolute top-10 right-[-100px] w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-amber-400/80 to-orange-400/80 blur-sm" />
        <div className="absolute top-32 right-20 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-primary/80" />
      </div>
      
      {/* Decorative small shapes */}
      <div className="absolute bottom-40 left-20 w-8 h-8 rotate-45 border-4 border-primary/40" />
      <div className="absolute top-1/2 left-1/3 hidden lg:block">
        <svg width="40" height="20" viewBox="0 0 40 20" className="text-primary/40">
          <path d="M0 10 Q10 0 20 10 T40 10" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground text-sm font-medium">Available for opportunities</span>
              </div>
            </div>

            <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hello, I'm{" "}
              <br />
              <span className="gradient-text">Kushal Pathapati</span>
              <br />
              <span className="text-foreground">A Data Analyst</span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Aspiring Data Analyst with experience in SQL, Python, R, Power BI, and Excel. 
              Skilled in transforming raw data into actionable insights and supporting analytical decision-making.
            </p>

            <div className="animate-fade-in-up animate-delay-300 flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2" size="lg">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/resume.pdf" download="Kushal_Pathapati_Resume.pdf" className="flex items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border-2 border-foreground/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <Download className="w-5 h-5 text-foreground group-hover:text-primary" />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">Download CV</span>
              </a>
            </div>

            {/* Social Proof / Customer Badge */}
            <div className="animate-fade-in-up animate-delay-400">
              <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-2xl px-5 py-3 border border-border shadow-lg">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm border-2 border-card">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold text-sm border-2 border-card">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm border-2 border-card">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Let's Connect</div>
                  <div className="text-xs text-muted-foreground">LinkedIn • GitHub • Email</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-up">
              {/* Profile Image with curved shape */}
              <div className="relative">
                <div className="w-72 h-80 sm:w-80 sm:h-[360px] lg:w-[380px] lg:h-[440px] rounded-[60px] overflow-hidden shadow-2xl border-4 border-card">
                  <img 
                    src={profilePhoto} 
                    alt="Kushal Pathapati" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Years Experience Badge */}
                <div className="absolute -right-4 top-1/4 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">3+</div>
                    <div className="text-xs text-muted-foreground font-medium">Years</div>
                    <div className="text-xs text-muted-foreground font-medium">Experience</div>
                  </div>
                </div>
                
                {/* Data Analytics Badge */}
                <div className="absolute -left-4 lg:-left-8 bottom-20 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">Data Analytics</div>
                      <div className="text-xs text-muted-foreground">Specialist</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements around image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent/60" />
                <div className="absolute top-10 -right-6 w-4 h-4 rounded-full bg-primary/60" />
                <div className="absolute bottom-10 -right-8 w-6 h-6 rounded-full border-2 border-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
