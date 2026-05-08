import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useReveal } from "@/hooks/useReveal";
import emailjs from "@emailjs/browser";

const socials = [
  { label: "Email", value: "kushalraju098@gmail.com", href: "mailto:kushalraju098@gmail.com" },
  { label: "Phone", value: "(647) 960-1929", href: "tel:+16479601929" },
  { label: "LinkedIn", value: "in/kushalpathapati", href: "https://linkedin.com/in/kushalpathapati" },
  { label: "GitHub", value: "Kushalraju098", href: "https://github.com/Kushalraju098" },
];

const EMAILJS_SERVICE_ID = "service_q53h2bd";
const EMAILJS_TEMPLATE_ID = "template_r67ae8a";
const EMAILJS_PUBLIC_KEY = "y_xSGZb4oiDgAI720";

const Contact = () => {
  const ref = useReveal<HTMLElement>();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Kushal Pathapati",
        },
        EMAILJS_PUBLIC_KEY
      );
      toast({ title: "Message sent", description: "Thanks — I'll be in touch shortly." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Couldn't send", description: "Please email me directly.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="section-container relative z-10">
        <div className="flex items-center gap-4 mb-16" data-reveal>
          <span className="text-primary text-sm display-font">04 —</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2
          className="display-font text-5xl md:text-8xl tracking-tighter leading-[0.95] mb-16 max-w-4xl"
          data-reveal
        >
          Let's build something{" "}
          <span className="serif-italic text-primary">worth measuring.</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-10" data-reveal>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-md">
              Hiring, collaborating, or just curious about a dataset?
              I read every message.
            </p>

            <div className="space-y-px bg-border border border-border rounded-2xl overflow-hidden">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between bg-background hover:bg-card p-5 transition-colors"
                >
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                    <div className="display-font mt-1">{s.value}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6" data-reveal>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isLoading}
                  placeholder="Your name"
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg h-12"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isLoading}
                  placeholder="you@domain.com"
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg h-12"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Subject
              </label>
              <Input
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                disabled={isLoading}
                placeholder="What's it about?"
                className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg h-12"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Message
              </label>
              <Textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={isLoading}
                placeholder="Tell me a little..."
                className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground display-font hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending
                </>
              ) : (
                <>
                  Send message
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
