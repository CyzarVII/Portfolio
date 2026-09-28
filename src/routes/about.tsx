import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, skillGroups, stats } from "@/data/portfolio";
import { PageHeader, Tag } from "@/components/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Jamal Caesar" },
      {
        name: "description",
        content:
          "Jamal Caesar is a software developer in St. Kitts with a technical diploma in web programming and years of enterprise support experience.",
      },
      { property: "og:title", content: "About | Jamal Caesar" },
      {
        property: "og:description",
        content: "Software developer in St. Kitts with a strong support and documentation background.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader label="Who I am" title="About me" intro={profile.summary} />

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {profile.about.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                to="/projects"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See my projects
              </Link>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Download résumé
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-card px-5 py-6">
                  <dt className="font-display text-2xl font-bold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>

            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {g.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
