import { useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useReveal } from "@/hooks/useReveal";

import cybercrimeGraph1 from "@/assets/cybercrime-graph1.jpg";
import cybercrimeGraph2 from "@/assets/cybercrime-graph2.jpg";
import cybercrimeGraph3 from "@/assets/cybercrime-graph3.jpg";

const projectImages = [
  { src: cybercrimeGraph1, alt: "Total cybercrime & YoY % change (2015–2024)" },
  { src: cybercrimeGraph2, alt: "Trends across 5 major cybercrime types" },
  { src: cybercrimeGraph3, alt: "Cybercrime incidents & % share by province" },
];

const projects = [
  {
    num: "01",
    title: "Cybercrime Analysis Dashboard",
    year: "2024",
    role: "Data Analysis · Visualization",
    description:
      "Exploratory analytics on Canadian cybercrime trends — preprocessing, visualization, and YoY reporting in Power BI and Python.",
    tools: ["Python", "Power BI", "Pandas", "Data Cleaning"],
    images: projectImages,
    link: "https://github.com/Kushalraju098",
  },
];

const Projects = () => {
  const ref = useReveal<HTMLElement>();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-16" data-reveal>
          <span className="text-primary text-sm display-font">03 —</span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected work</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2
          className="display-font text-4xl md:text-6xl tracking-tight mb-20 max-w-3xl"
          data-reveal
        >
          A few things I've built{" "}
          <span className="serif-italic text-primary">recently.</span>
        </h2>

        <div className="space-y-24">
          {projects.map((project) => (
            <article key={project.title} className="grid lg:grid-cols-12 gap-8 lg:gap-12" data-reveal>
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="display-font text-primary text-2xl">{project.num}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {project.year} · {project.role}
                  </span>
                </div>
                <h3 className="display-font text-3xl md:text-5xl tracking-tight leading-[1.05]">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full border border-border text-xs uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 display-font link-underline"
                  >
                    Visit project
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <button
                          onClick={() => setSelectedImage(image)}
                          className="relative w-full rounded-2xl overflow-hidden border border-border bg-card group block"
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-contain bg-white p-4 transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent flex items-center justify-between">
                            <span className="text-xs uppercase tracking-widest text-foreground">
                              {String(idx + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
                            </span>
                            <span className="text-xs text-muted-foreground">{image.alt}</span>
                          </div>
                        </button>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-background/80 border-border" />
                  <CarouselNext className="right-4 bg-background/80 border-border" />
                </Carousel>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 text-center" data-reveal>
          <a
            href="https://github.com/Kushalraju098"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border display-font hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <Github className="w-4 h-4" />
            More on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-background border-border" aria-describedby={undefined}>
          <VisuallyHidden>
            <DialogTitle>{selectedImage?.alt || "Image preview"}</DialogTitle>
          </VisuallyHidden>
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-primary p-2 text-primary-foreground hover:scale-110 transition-transform">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <div className="p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg bg-white"
              />
              <p className="text-center text-muted-foreground mt-4 text-sm uppercase tracking-widest">
                {selectedImage.alt}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
