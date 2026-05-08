import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12 mt-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="display-font text-2xl tracking-tight">
              Kushal Pathapati<span className="text-primary">.</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
              Data Analyst · Toronto
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/kushalpathapati"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Kushalraju098"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:kushalraju098@gmail.com"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            © {year} — Built with care
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
