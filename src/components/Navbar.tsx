import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { nav, site } from "@/data/config";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="container-mono flex h-16 items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-base">
          {site.name.split(" ")[0]}<span className="text-muted-foreground">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:bg-accent transition-colors"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}
