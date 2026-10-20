import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpenText,
  Briefcase,
  Code2,
  Cpu,
  FileText,
  GraduationCap,
  Headset,
  History,
  LayoutTemplate,
  Mail,
  MapPin,
  Search,
  Server,
  Users,
} from "lucide-react";
import { revealDelay } from "@/lib/site-ready";
import { CountUp } from "@/components/count-up";
import { ScrambleText } from "@/components/scramble-text";
import { education, experience, profile, skillGroups, stats } from "@/data/portfolio";
import { SectionLabel, Tag } from "@/components/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Jamal Caesar" },
      {
        name: "description",
        content:
          "Jamal Caesar is a developer and IT technician at Clarence Fitzroy Bryant College with web programming and service-desk experience.",
      },
      { property: "og:title", content: "About | Jamal Caesar" },
      {
        property: "og:description",
        content:
          "Developer and college IT technician in St. Kitts with web, support, and documentation experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

// Headings for the three paragraphs in profile.about, in order.
const chapters = [
  { label: "Now", icon: Briefcase },
  { label: "Education", icon: GraduationCap },
  { label: "Previously", icon: History },
];

const principles = [
  {
    icon: BookOpenText,
    title: "Document everything",
    body: "Ticket notes, user guides, QR-based help resources, and operator documentation, so the next person can pick up exactly where I left off.",
  },
  {
    icon: Search,
    title: "Triage with care",
    body: "Years on service desks taught me to prioritize, reproduce, and resolve, including a 90% first-call resolution rate along the way.",
  },
  {
    icon: Users,
    title: "Build for operators",
    body: "From role-secured admissions software to equipment lending, I build systems that staff can run day to day without needing me in the room.",
  },
];

const skillIcons = [Server, LayoutTemplate, Cpu, Headset];

const contactLinks = [
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
  { href: profile.github, label: "GitHub", icon: Code2 },
  { href: profile.linkedin, label: "LinkedIn", icon: Briefcase },
  { href: profile.resume, label: "Résumé", icon: FileText },
];

function AboutPage() {
  return (
    <>
      {/* Intro + profile badge */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 pb-20 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <SectionLabel>Who I am</SectionLabel>
          <h1
            data-reveal
            className="text-shine text-5xl font-bold leading-[1.02] sm:text-7xl"
            style={revealDelay(100)}
          >
            About me.
          </h1>
          <p
            data-reveal
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={revealDelay(200)}
          >
            {profile.summary}
          </p>

          <div
            data-reveal
            className="mt-8 max-w-xl rounded-xl border border-border bg-card/70 p-4 font-mono text-xs leading-6 backdrop-blur sm:text-[13px]"
            style={revealDelay(300)}
          >
            <p>
              <span className="text-accent">$</span> whoami
            </p>
            <p className="text-muted-foreground">
              {profile.role.toLowerCase()} · {profile.secondaryRole.toLowerCase()} · problem-solver
            </p>
            <p className="mt-1">
              <span className="text-accent">$</span> cat focus.txt
            </p>
            <p className="caret text-muted-foreground">
              secure web systems, clear docs, and support people can rely on
            </p>
          </div>

          <div data-reveal className="mt-9 flex flex-wrap gap-3" style={revealDelay(400)}>
            <Link
              to="/projects"
              className="btn-shine btn-glow rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5"
            >
              See my projects
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-glow rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              Download résumé
            </a>
          </div>
        </div>

        <div data-reveal="right" style={revealDelay(300)}>
          <div className="hud-corners mx-auto max-w-md">
            <div className="glow-border relative overflow-hidden rounded-3xl p-8 shadow-[var(--shadow-elegant)]">
              <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
              <div className="relative flex flex-col items-center text-center">
                <div className="relative grid h-36 w-36 place-items-center">
                  <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden>
                    <circle className="orbit-ring orbit-ring-a" cx="100" cy="100" r="94" />
                    <circle className="orbit-ring orbit-ring-b" cx="100" cy="100" r="80" />
                    <circle className="orbit-ring orbit-ring-c" cx="100" cy="100" r="66" />
                  </svg>
                  <span className="grid h-24 w-24 place-items-center rounded-full bg-[image:var(--gradient-primary)] font-display text-3xl font-bold text-primary-foreground shadow-[0_0_40px_-6px] shadow-primary">
                    {profile.initials}
                  </span>
                </div>

                <p className="mt-6 font-display text-2xl font-bold">{profile.name}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {profile.role} · {profile.secondaryRole}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden />
                  {profile.location}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Open to opportunities
                </p>
              </div>

              <dl className="relative mt-8 space-y-2 border-t border-border pt-6 font-mono text-xs">
                {[
                  ["employer", "CFBC, St. Kitts"],
                  ["focus", "Web apps · IT support"],
                  ["stack", "Python · Flask · React"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="relative mt-6 grid grid-cols-4 gap-2">
                {contactLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    className="btn-glow group flex flex-col items-center gap-1.5 rounded-xl border border-border bg-background/40 py-3 text-muted-foreground hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    <span className="font-mono text-[10px]">
                      <ScrambleText text={label} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              className="card-elevated rounded-2xl px-6 py-7"
              style={revealDelay(i * 100)}
            >
              <dt className="font-display text-4xl font-bold text-primary [text-shadow:0_0_24px_color-mix(in_oklab,var(--primary)_45%,transparent)]">
                <CountUp value={s.value} />
              </dt>
              <dd className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <SectionLabel>01 · My story</SectionLabel>
        <h2 data-reveal className="text-3xl font-bold sm:text-4xl" style={revealDelay(80)}>
          From the service desk to shipping software
        </h2>
        <ol className="relative mt-12 space-y-6 border-l border-primary/30 pl-8 sm:pl-10">
          {profile.about.map((paragraph, i) => {
            const chapter = chapters[i] ?? { label: `Part ${i + 1}`, icon: History };
            const Icon = chapter.icon;
            return (
              <li key={chapter.label} data-reveal className="relative" style={revealDelay(i * 120)}>
                <span className="absolute -left-[49px] top-6 grid h-8 w-8 place-items-center rounded-full border border-primary/50 bg-background text-primary shadow-[0_0_18px_-2px] shadow-primary/60 sm:-left-[57px]">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div className="card-elevated rounded-2xl p-6 sm:p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    0{i + 1} / {chapter.label}
                  </p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{paragraph}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <SectionLabel>02 · How I work</SectionLabel>
        <h2 data-reveal className="text-3xl font-bold sm:text-4xl" style={revealDelay(80)}>
          Principles I bring to every build
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              data-reveal
              className="card-elevated group rounded-2xl p-7"
              style={revealDelay(i * 120)}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_20px_-6px] shadow-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career path */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <SectionLabel>03 · Career path</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 data-reveal className="text-3xl font-bold sm:text-4xl" style={revealDelay(80)}>
            Where I&apos;ve been
          </h2>
          <Link
            data-reveal
            to="/experience"
            className="link-fx text-sm font-semibold text-primary"
            style={revealDelay(160)}
          >
            Full experience <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="relative -mx-6 mt-12 overflow-x-auto overflow-y-hidden px-6 pt-2 pb-4 lg:overflow-visible">
          <ol className="relative grid min-w-[880px] lg:min-w-0 grid-cols-6 gap-4">
            <span
              className="absolute left-0 right-0 top-[7px] h-px bg-gradient-to-r from-primary via-accent to-primary/10"
              aria-hidden
            />
            {experience.map((job, i) => (
              <li
                key={`${job.company}-${job.period}`}
                data-reveal
                className="group relative pt-8"
                style={revealDelay(i * 90)}
              >
                <span
                  className={`absolute left-0 top-0 h-[15px] w-[15px] rounded-full border-2 border-primary transition-shadow group-hover:shadow-[0_0_16px_2px] group-hover:shadow-primary ${
                    i === 0 ? "bg-primary shadow-[0_0_16px_2px] shadow-primary" : "bg-background"
                  }`}
                />
                <p className="font-mono text-[11px] text-primary">{job.period}</p>
                <p className="mt-2 font-display text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
                  {job.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{job.company}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Toolkit + education */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <SectionLabel>04 · Toolkit</SectionLabel>
        <h2 data-reveal className="text-3xl font-bold sm:text-4xl" style={revealDelay(80)}>
          Skills &amp; tools
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => {
            const Icon = skillIcons[i % skillIcons.length] ?? Server;
            return (
              <div
                key={g.title}
                data-reveal
                className="card-elevated rounded-2xl p-6"
                style={revealDelay((i % 2) * 120)}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-semibold">{g.title}</h3>
                  <span className="ml-auto font-mono text-[11px] text-muted-foreground">
                    {g.items.length} items
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <div
              key={e.credential}
              data-reveal
              className="card-elevated flex gap-4 rounded-2xl p-6"
              style={revealDelay(i * 120)}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold">{e.credential}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.school} · {e.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div
          data-reveal="zoom"
          className="glow-border halo relative overflow-hidden rounded-3xl px-8 py-14 text-center"
        >
          <p className="relative font-mono text-xs text-accent">
            $ git commit -m &quot;let&apos;s work together&quot;
          </p>
          <h2 className="relative mt-3 text-3xl font-bold sm:text-4xl">
            Got a project or a role in mind?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-muted-foreground">
            I&apos;m open to software development and technical support roles, contract work, and
            collaborations.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="btn-shine btn-glow rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
            <Link
              to="/experience"
              className="btn-glow rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              View experience
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
