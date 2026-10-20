import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ScrambleText } from "@/components/scramble-text";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-primary/20 bg-background/75 shadow-[0_10px_40px_-20px] shadow-primary/40 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-bold tracking-tight">
          <span className="font-mono text-primary">&lt;</span>
          {profile.initials}
          <span className="font-mono text-accent"> /&gt;</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-secondary/70 text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="nav-link rounded-md px-4 py-2 text-sm"
            >
              <ScrambleText text={l.label} />
            </Link>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-shine btn-glow ml-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
          >
            <ScrambleText text="GitHub" />
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background/95 px-6 py-3 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="footer-link flex py-2.5 text-sm"
            >
              <ScrambleText text={l.label} />
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
