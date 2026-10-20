import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { ScrambleText } from "@/components/scramble-text";

const pages = [
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const elsewhere = [
  { href: `mailto:${profile.email}`, label: profile.email },
  { href: profile.github, label: "github.com/CyzarVII" },
  { href: profile.linkedin, label: "linkedin.com/in/jamalcaesar" },
];

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
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-accent">//</span> Pages
          </p>
          <div className="flex flex-col gap-2">
            {pages.map((p) => (
              <Link key={p.to} to={p.to} className="footer-link">
                <ScrambleText text={p.label} />
              </Link>
            ))}
          </div>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-accent">//</span> Elsewhere
          </p>
          <div className="flex flex-col gap-2">
            {elsewhere.map((e) => (
              <a
                key={e.href}
                href={e.href}
                target={e.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="footer-link"
              >
                <ScrambleText text={e.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Built and maintained by hand.
      </div>
    </footer>
  );
}
