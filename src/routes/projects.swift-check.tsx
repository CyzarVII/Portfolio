import { createFileRoute, Link } from "@tanstack/react-router";
import { swiftCheck } from "@/data/portfolio";
import { SectionLabel, Tag } from "@/components/section";
import swiftCheckCover from "@/assets/swift-check-cover-new.jpg";

export const Route = createFileRoute("/projects/swift-check")({
  head: () => ({
    meta: [
      { title: "Swift Check Case Study | Jamal Caesar" },
      {
        name: "description",
        content:
          "Swift Check is a private school admissions platform for eligibility processing, operational summaries, cases, reporting, and auditing.",
      },
      { property: "og:title", content: "Swift Check Case Study | Jamal Caesar" },
      {
        property: "og:description",
        content:
          "A private browser-based admissions platform with eligibility processing, case management, operational summaries, exports, and audit logs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SwiftCheckPage,
});

function SwiftCheckPage() {
  return (
    <>
      <section className="halo relative overflow-hidden border-b border-border">
        <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14">
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to projects
          </Link>
          <SectionLabel>Flagship case study</SectionLabel>
          <h1 className="text-4xl font-bold sm:text-6xl">{swiftCheck.name}</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{swiftCheck.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {swiftCheck.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <img
              src={swiftCheckCover}
              alt="Illustration of the Swift Check operations dashboard with analytics, cases, and activity"
              width={1600}
              height={1008}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <p className="text-muted-foreground">{swiftCheck.description}</p>

            <h2 className="mt-12 text-2xl font-bold">What it does</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {swiftCheck.highlights.map((h) => (
                <div key={h.title} className="card-elevated rounded-2xl p-6">
                  <h3 className="font-display text-base font-semibold text-primary">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">My role</h2>
            <p className="mt-3 text-muted-foreground">{swiftCheck.role}</p>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Architecture
              </h3>
              <dl className="mt-5 space-y-4">
                {swiftCheck.architecture.map((a) => (
                  <div key={a.layer}>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      {a.layer}
                    </dt>
                    <dd className="mt-1 text-sm">{a.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Status
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Actively developed, {swiftCheck.year}. Runs as a private browser application, one
                school per deployment; the repository is private, so source access is available on
                request.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Request a walkthrough
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
