import { createFileRoute, Link } from "@tanstack/react-router";
import { revealDelay } from "@/lib/site-ready";
import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import { PageHeader, SectionLabel, Tag } from "@/components/section";
import { GithubActivity } from "@/components/github-activity";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Jamal Caesar" },
      {
        name: "description",
        content:
          "Selected software by Jamal Caesar: Swift Check, a workforce management platform, an application portal, and smaller web apps.",
      },
      { property: "og:title", content: "Projects | Jamal Caesar" },
      {
        property: "og:description",
        content: "Browser-based, full-stack, and web projects built end to end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Desktop & Backend", "Full-Stack", "Web App", "Interactive"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <PageHeader
        label="Selected work"
        title="Projects"
        intro="Systems I designed, built, and maintain, from role-secured platforms to small focused web apps."
      />

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div data-reveal className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === f
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((p, i) => (
            <article
              key={p.slug}
              data-reveal
              style={revealDelay((i % 2) * 120)}
              className="card-elevated flex flex-col rounded-2xl p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-xl font-semibold">{p.name}</h2>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{p.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm">
                {p.slug === "swift-check" ? (
                  <Link to="/projects/swift-check" className="font-semibold text-primary link-fx">
                    Read case study →
                  </Link>
                ) : p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary link-fx"
                  >
                    {p.linkLabel ?? "View"} →
                  </a>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    Private repository; available on request
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <SectionLabel>Live from GitHub</SectionLabel>
          <h2 data-reveal className="mb-3 text-2xl font-bold sm:text-3xl">
            Recently updated repositories
          </h2>
          <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
            Pulled straight from my public GitHub, newest first. Private client work above is
            available on request.
          </p>
          <GithubActivity limit={9} />
        </div>
      </div>
    </>
  );
}
