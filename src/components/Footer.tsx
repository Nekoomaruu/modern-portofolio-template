import { socials, site } from "@/data/config";

export default function Footer() {
  return (
    <footer className="hairline">
      <div className="container-mono py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              target="_blank"
              rel="noreferrer noopener"
              className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
