import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      data-reveal
      className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary"
    >
      <span className="text-accent">//</span>
      {children}
      <span className="h-px w-12 bg-gradient-to-r from-primary/70 to-transparent" />
    </p>
  );
}

export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
      <SectionLabel>{label}</SectionLabel>
      <h1 data-reveal className="text-4xl font-bold [--reveal-delay:100ms] sm:text-5xl">
        {title}
        <span className="text-gradient">.</span>
      </h1>
      {intro ? (
        <p data-reveal className="mt-4 max-w-2xl text-muted-foreground [--reveal-delay:200ms]">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
      {children}
    </span>
  );
}
