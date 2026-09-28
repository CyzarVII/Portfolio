import { createFileRoute } from "@tanstack/react-router";
import { experience, education } from "@/data/portfolio";
import { PageHeader } from "@/components/section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience | Jamal Caesar" },
      {
        name: "description",
        content:
          "Jamal Caesar's current IT technician role at Clarence Fitzroy Bryant College, earlier support and web experience, and education.",
      },
      { property: "og:title", content: "Experience | Jamal Caesar" },
      {
        property: "og:description",
        content: "Current college IT support, earlier service-desk and web roles, and formal education.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="Career"
        title="Experience"
        intro="Years of frontline technical work that shaped how I build software: clear documentation, careful triage, and systems people can actually operate."
      />

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <ol className="relative border-l border-border pl-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-primary/50 bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                {job.period} · {job.location}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold">{job.title}</h2>
              <p className="text-sm text-muted-foreground">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 text-2xl font-bold">Education</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {education.map((e) => (
            <div key={e.credential} className="card-elevated rounded-2xl p-6">
              <h3 className="font-display text-base font-semibold">{e.credential}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.school}</p>
              <p className="text-sm text-muted-foreground">{e.location}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
