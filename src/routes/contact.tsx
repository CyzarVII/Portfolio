import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { PageHeader } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Jamal Caesar" },
      {
        name: "description",
        content:
          "Get in touch with Jamal Caesar by email or GitHub for software development roles, contract work, and collaborations.",
      },
      { property: "og:title", content: "Contact | Jamal Caesar" },
      {
        property: "og:description",
        content: "Email, GitHub, and résumé for Jamal Caesar, software developer in St. Kitts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    note: "Best for roles, contracts, and project enquiries.",
  },
  {
    label: "GitHub",
    value: "github.com/CyzarVII",
    href: profile.github,
    note: "Public repositories and ongoing experiments.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jamalcaesar",
    href: profile.linkedin,
    note: "Professional experience and connections.",
  },
  {
    label: "Résumé",
    value: "Download PDF",
    href: profile.resume,
    note: "Full work history, education, and skills.",
  },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        label="Say hello"
        title="Get in touch"
        intro="I'm open to software development and technical support roles, contract work, and collaborations. I usually reply within a day."
      />

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="card-elevated group rounded-2xl p-7"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary">{c.label}</p>
              <p className="mt-3 break-words font-display text-lg font-semibold group-hover:text-primary">
                {c.value}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>
            </a>
          ))}
        </div>

        <div className="halo relative mt-12 overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 text-center">
          <h2 className="relative text-2xl font-bold sm:text-3xl">
            Currently based in {profile.location}
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-muted-foreground">
            Available for remote and on-site work. Reach out and let's talk about what you're
            building.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="relative mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Email me
          </a>
        </div>
      </div>
    </>
  );
}
