import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
      {children}
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
      <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
      {intro ? <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}
