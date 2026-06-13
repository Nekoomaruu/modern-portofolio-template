import { about, site } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-mono py-24 md:py-32">
      <SectionHeading eyebrow="Bio" title="About" />
      <div className="grid md:grid-cols-3 gap-10">
        <div className="reveal md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <dl className="reveal space-y-4 text-sm">
          <div>
            <dt className="text-muted-foreground">Location</dt>
            <dd className="font-medium">{site.location}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Email</dt>
            <dd className="font-medium">
              <a href={`mailto:${site.email}`} className="hover:underline underline-offset-4">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Status</dt>
            <dd className="font-medium">Open to opportunities</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
