import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, stats, skillGroups, swiftCheck } from "@/data/portfolio";
import { SectionLabel, Tag } from "@/components/section";
import swiftCheckCover from "@/assets/swift-check-cover-new.jpg";
import workforceCover from "@/assets/workforce-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jamal Caesar | Software Developer & Technical Support Specialist" },
      {
        name: "description",
        content:
          "Jamal Caesar builds role-secured browser and full-stack web systems from St. Kitts. See Swift Check and other production work.",
      },
      { property: "og:title", content: "Jamal Caesar | Software Developer" },
      {
        property: "og:description",
        content:
          "Role-secured browser applications and full-stack web platforms, built and maintained end to end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="halo relative overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Based in {profile.location} · Open to opportunities
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] sm:text-7xl">
            {profile.name}
            <span className="text-gradient">.</span>
          </h1>
          <h2 className="mt-4 font-display text-xl text-muted-foreground sm:text-2xl">
            {profile.role} <span className="text-primary">/</span> {profile.secondaryRole}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px] shadow-primary transition-transform hover:-translate-y-0.5"
            >
              View my work
            </Link>
            <Link
              to="/projects/swift-check"
              className="rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Swift Check case study
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Get in touch
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-5 py-6">
                <dt className="font-display text-3xl font-bold text-primary">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Featured: Swift Check */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Flagship project</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <img
              src={swiftCheckCover}
              alt="Illustration of the Swift Check operations dashboard with analytics, cases, and activity"
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">{swiftCheck.name}</h2>
            <p className="mt-3 text-muted-foreground">{swiftCheck.description}</p>
            <ul className="mt-6 space-y-3">
              {swiftCheck.highlights.slice(0, 4).map((h) => (
                <li key={h.title} className="flex gap-3 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="block font-medium text-foreground">{h.title}</strong>
                    <span className="mt-1 block text-muted-foreground">{h.body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {swiftCheck.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <Link
              to="/projects/swift-check"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Read the full case study
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured: Workforce */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <SectionLabel>Also shipped</SectionLabel>
              <h2 className="text-3xl font-bold sm:text-4xl">Workforce Management System</h2>
              <p className="mt-3 text-muted-foreground">
                A full-stack workforce platform built with Python (Flask) and server-rendered
                templates: secure authentication, role-based access control, IP restrictions,
                clock-in/clock-out tracking, reporting with exports, and session audit logs.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python (Flask)", "SQLAlchemy", "Jinja", "JavaScript", "SQL", "MFA"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <Link
                to="/projects"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                See all projects <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="order-1 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)] lg:order-2">
              <img
                src={workforceCover}
                alt="Workforce management dashboard concept"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Toolkit</SectionLabel>
        <h2 className="text-3xl font-bold sm:text-4xl">What I work with</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div key={g.title} className="card-elevated rounded-2xl p-6">
              <h3 className="font-display text-base font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">·</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="halo relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 text-center">
          <h2 className="relative text-3xl font-bold sm:text-4xl">Let's build something solid.</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-muted-foreground">
            I'm available for software development and technical support roles, contract work, and
            collaborations.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Contact me
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Browse my GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
