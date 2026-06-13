import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="container-mono py-24 md:py-32">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="A small selection of things I've built recently."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="reveal group flex flex-col rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40"
          >
            <div className="aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-1 p-5">
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 hover:text-muted-foreground transition-colors"
                >
                  Live <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
