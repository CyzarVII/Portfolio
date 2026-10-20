import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import { Cpu, Headset, LayoutTemplate, Server } from "lucide-react";
import { profile, stats, skillGroups, swiftCheck } from "@/data/portfolio";
import { SectionLabel, Tag } from "@/components/section";
import { GithubActivity } from "@/components/github-activity";
import { Typewriter } from "@/components/typewriter";
import { CountUp } from "@/components/count-up";
import { revealDelay } from "@/lib/site-ready";
import swiftCheckCover from "@/assets/swift-check-cover-new.jpg";
import workforceCover from "@/assets/workforce-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jamal Caesar | Software Developer & IT Technician" },
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

const roles = ["Software Developer", "Web Developer", "Full-Stack Developer", "IT Technician"];
const skillIcons = [Server, LayoutTemplate, Cpu, Headset];

// Syntax-highlight helpers for the hero code window.
const kw = (t: string) => <span className="text-primary">{t}</span>;
const str = (t: string) => <span className="text-accent">"{t}"</span>;
const num = (t: string) => <span className="text-[oklch(0.83_0.14_75)]">{t}</span>;
const prop = (t: string) => <span className="text-foreground">{t}</span>;
const list = (items: string[]) => (
  <>
    [
    {items.map((item, i) => (
      <span key={item}>
        {str(item)}
        {i < items.length - 1 ? ", " : ""}
      </span>
    ))}
    ]
  </>
);

const codeLines: ReactNode[] = [
  <span className="text-muted-foreground/70">// welcome to my corner of the web</span>,
  <>
    {kw("const")} {prop("developer")} = {"{"}
  </>,
  <>
    {"  "}
    {prop("name")}: {str(profile.name)},
  </>,
  <>
    {"  "}
    {prop("roles")}: {list(["Software", "Web", "IT"])},
  </>,
  <>
    {"  "}
    {prop("stack")}: {list(["Python", "React", "Flask", "SQL"])},
  </>,
  <>
    {"  "}
    {prop("location")}: {str("St. Kitts")},
  </>,
  <>
    {"  "}
    {prop("shipped")}: {num("4")},
  </>,
  <>
    {"  "}
    {prop("openToWork")}: {kw("true")},
  </>,
  <>{"};"}</>,
  <>&nbsp;</>,
  <span className="caret">
    {prop("developer")}.{kw("build")}({str("something solid")});
  </span>,
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 pb-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p
              data-reveal
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-card/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.location} · Open to opportunities
            </p>
            <p data-reveal className="font-mono text-sm text-accent" style={revealDelay(80)}>
              &gt; hello_world, I&apos;m
            </p>
            <h1
              data-reveal
              className="text-shine mt-2 text-5xl font-bold leading-[1.02] sm:text-7xl"
              style={revealDelay(160)}
            >
              {profile.name}.
            </h1>
            <p
              data-reveal
              className="mt-5 font-mono text-base text-muted-foreground sm:text-xl"
              style={revealDelay(240)}
            >
              <span className="text-primary">const</span> role ={" "}
              <span className="text-accent">&quot;</span>
              <Typewriter words={roles} className="text-foreground" />
              <span className="text-accent">&quot;</span>
            </p>
            <p
              data-reveal
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={revealDelay(320)}
            >
              {profile.tagline}
            </p>

            <div data-reveal className="mt-9 flex flex-wrap gap-3" style={revealDelay(400)}>
              <Link
                to="/projects"
                className="btn-shine btn-glow rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px] shadow-primary hover:-translate-y-0.5"
              >
                View my work
              </Link>
              <Link
                to="/projects/swift-check"
                className="rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary btn-glow hover:bg-primary/10"
              >
                Swift Check case study
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold btn-glow hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div data-reveal="right" style={revealDelay(350)}>
            <div className="hud-corners">
              <div className="glow-border overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.83_0.14_75)]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground">developer.ts</span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-primary">
                    TypeScript
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 text-muted-foreground sm:text-[13px]">
                  <code>
                    {codeLines.map((line, i) => (
                      <span
                        key={i}
                        className="code-line block"
                        style={{ "--i": i } as CSSProperties}
                      >
                        <span className="mr-4 inline-block w-4 select-none text-right text-muted-foreground/40">
                          {i + 1}
                        </span>
                        {line}
                      </span>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-20">
          <dl
            data-reveal
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
            style={revealDelay(500)}
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-card/90 px-5 py-6 backdrop-blur">
                <dt className="font-display text-3xl font-bold text-primary">
                  <CountUp value={s.value} />
                </dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Featured: Swift Check */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>01 · Flagship project</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 data-reveal className="text-4xl font-bold sm:text-5xl" style={revealDelay(80)}>
            {swiftCheck.name}
          </h2>
          <Link
            data-reveal
            to="/projects/swift-check"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary link-fx"
            style={revealDelay(160)}
          >
            Read the full case study <span aria-hidden>→</span>
          </Link>
        </div>
        <p
          data-reveal
          className="mt-4 max-w-3xl text-muted-foreground sm:text-lg"
          style={revealDelay(160)}
        >
          {swiftCheck.description}
        </p>

        <div data-reveal="zoom" className="hud-corners mt-12" style={revealDelay(200)}>
          <div className="glow-border overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.83_0.14_75)]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
              <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
                swift-check / operations-overview
              </span>
              <span className="ml-auto hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent sm:inline-flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Live system
              </span>
            </div>
            <img
              src={swiftCheckCover}
              alt="Illustration of the Swift Check operations dashboard with analytics, cases, and activity"
              width={1600}
              height={1008}
              className="block h-auto w-full"
            />
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {swiftCheck.highlights.slice(0, 4).map((h, i) => (
            <li
              key={h.title}
              data-reveal
              className="card-elevated rounded-2xl p-6"
              style={revealDelay(i * 100)}
            >
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <h3 className="mt-2 font-display text-base font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-8 flex flex-wrap gap-2">
          {swiftCheck.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </section>

      {/* Featured: Workforce */}
      <section className="border-y border-border bg-card/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div data-reveal="left" className="order-2 lg:order-1">
              <SectionLabel>02 · Also shipped</SectionLabel>
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
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary link-fx"
              >
                See all projects <span aria-hidden>→</span>
              </Link>
            </div>
            <div data-reveal="right" className="order-1 lg:order-2" style={revealDelay(150)}>
              <div className="glow-border overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
                <img
                  src={workforceCover}
                  alt="Workforce management dashboard concept"
                  loading="lazy"
                  width={1600}
                  height={1008}
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live GitHub feed */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionLabel>03 · Live from GitHub</SectionLabel>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 data-reveal className="text-3xl font-bold sm:text-4xl" style={revealDelay(80)}>
            Latest commits &amp; repos
          </h2>
          <a
            data-reveal
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-primary link-fx"
            style={revealDelay(160)}
          >
            All repositories →
          </a>
        </div>
        <GithubActivity />
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>04 · Toolkit</SectionLabel>
        <h2 data-reveal className="text-3xl font-bold sm:text-4xl" style={revealDelay(80)}>
          What I work with
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => {
            const Icon = skillIcons[i % skillIcons.length] ?? Server;
            return (
              <div
                key={g.title}
                data-reveal
                className="card-elevated rounded-2xl p-6"
                style={revealDelay(i * 100)}
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-[0_0_20px_-6px] shadow-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{g.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="font-mono text-primary">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div
          data-reveal="zoom"
          className="glow-border halo relative overflow-hidden rounded-3xl px-8 py-14 text-center"
        >
          <p className="relative font-mono text-xs text-accent">$ ./contact --hire jamal</p>
          <h2 className="relative mt-3 text-3xl font-bold sm:text-4xl">
            Let&apos;s build something solid.
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-muted-foreground">
            I&apos;m available for software development and technical support roles, contract work,
            and collaborations.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="btn-shine btn-glow rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5"
            >
              Contact me
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold btn-glow hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              Browse my GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
