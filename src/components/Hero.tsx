import { ArrowRight, Download, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Shapes */}
      <div className="floating-shape w-96 h-96 bg-primary/20 -top-20 -right-20" />
      <div className="floating-shape w-72 h-72 bg-accent/20 bottom-20 -left-20" style={{ animationDelay: "2s" }} />
      <div className="floating-shape w-48 h-48 bg-cyan/20 top-1/2 right-1/4" style={{ animationDelay: "4s" }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                👋 Welcome to my Portfolio
              </span>
            </div>

            <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hello, I'm{" "}
              <span className="gradient-text">Kushal Pathapati</span>
              <br />
              <span className="text-foreground">Data Analyst</span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg text-muted-foreground mb-8 max-w-xl">
              Aspiring Data Analyst with experience in SQL, Python, R, Power BI, and Excel. 
              Skilled in transforming raw data into actionable insights, validating data workflows, 
              and supporting analytical decision-making with a strong foundation in software testing 
              and cross-functional collaboration.
            </p>

            <div className="animate-fade-in-up animate-delay-300 flex flex-wrap gap-4 mb-10">
              <Button className="btn-gradient gap-2" size="lg">
                <ArrowRight className="w-5 h-5" />
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-2 hover:bg-secondary">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button variant="ghost" size="lg" className="gap-2 hover:bg-primary/10 hover:text-primary">
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up animate-delay-400 flex gap-8 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative animate-fade-in-up">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 scale-110" />
              <div className="absolute inset-0 rounded-full border-4 border-accent/20 scale-125 rotate-45" />
              
              {/* Profile placeholder */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col items-center justify-center border-4 border-card shadow-2xl">
                <User className="w-24 h-24 text-muted-foreground/50 mb-4" />
                <span className="text-muted-foreground font-medium">Add Image</span>
                <span className="text-sm text-muted-foreground/70">(Later)</span>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl px-6 py-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Data Analytics</div>
                    <div className="text-sm text-muted-foreground">Specialist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
