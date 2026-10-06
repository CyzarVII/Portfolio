import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

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
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-bold tracking-tight">
          {profile.initials}
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-4 py-2 text-sm transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            GitHub
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
              inactiveProps={{ className: "text-muted-foreground" }}
              className="block py-2.5 text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
