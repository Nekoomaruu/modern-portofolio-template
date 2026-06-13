import { skills } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="container-mono py-24 md:py-32">
      <SectionHeading eyebrow="Toolbox" title="Skills & tools" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {skills.map(({ name, Icon }) => (
          <div
            key={name}
            className="reveal group flex items-center gap-3 px-4 py-3 rounded-md border border-border bg-card transition-colors hover:bg-accent"
          >
            <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
