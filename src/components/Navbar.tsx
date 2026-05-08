import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about", num: "01" },
  { name: "Skills", href: "#skills", num: "02" },
  { name: "Work", href: "#projects", num: "03" },
  { name: "Contact", href: "#contact", num: "04" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm display-font">KP</span>
            </div>
            <span className="display-font font-medium text-foreground hidden sm:block tracking-tight">
              Kushal<span className="text-primary">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-primary text-xs">{link.num}</span>
                <span className="link-underline">{link.name}</span>
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download="Kushal_Pathapati_Resume.pdf"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-sm display-font"
          >
            Resume
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-lg display-font"
                >
                  <span className="text-primary text-sm">{link.num}</span>
                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Kushal_Pathapati_Resume.pdf"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full border border-border display-font"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
