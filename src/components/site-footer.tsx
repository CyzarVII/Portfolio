import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">
            {profile.name}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {profile.role} · {profile.secondaryRole} · {profile.location}
          </p>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium uppercase tracking-widest text-muted-foreground">Pages</p>
          <div className="flex flex-col gap-2">
            <Link to="/projects" className="text-muted-foreground transition-colors hover:text-primary">
              Projects
            </Link>
            <Link to="/experience" className="text-muted-foreground transition-colors hover:text-primary">
              Experience
            </Link>
            <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </div>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium uppercase tracking-widest text-muted-foreground">Elsewhere</p>
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              github.com/CyzarVII
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Built and maintained by hand.
      </div>
    </footer>
  );
}
