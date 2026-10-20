import { formatDistanceToNowStrict } from "date-fns";
import { revealDelay } from "@/lib/site-ready";
import { useGithubRepos } from "@/hooks/use-github-repos";
import { profile, projects } from "@/data/portfolio";

// GitHub descriptions are often empty, so fall back to the curated tagline for known repos.
const taglineByUrl = new Map(
  projects.filter((p) => p.link).map((p) => [p.link!.toLowerCase(), p.tagline]),
);

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572a5",
  CSS: "#663399",
  HTML: "#e34c26",
  PHP: "#4f5d95",
  "C++": "#f34b7d",
};

export function GithubActivity({ limit = 6 }: { limit?: number }) {
  const { data, isPending, isError } = useGithubRepos();

  if (isError) {
    return (
      <p className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
        GitHub isn't responding right now.{" "}
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-primary link-fx">
          Browse my repositories directly →
        </a>
      </p>
    );
  }

  if (isPending) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
        {Array.from({ length: limit }, (_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl border border-border bg-card" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.slice(0, limit).map((repo, i) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          data-reveal
          style={revealDelay((i % 3) * 100)}
          className="card-elevated group flex flex-col rounded-2xl p-6"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs text-muted-foreground">~/repos</span>
            <span className="font-mono text-xs text-muted-foreground">
              {formatDistanceToNowStrict(new Date(repo.pushed_at), { addSuffix: true })}
            </span>
          </div>
          <h3 className="mt-3 break-words font-display text-lg font-semibold transition-colors group-hover:text-primary">
            {repo.name}
          </h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">
            {repo.description ??
              taglineByUrl.get(repo.html_url.toLowerCase()) ??
              "Open the repository to browse the code."}
          </p>
          <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
            {repo.language ? (
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: languageColors[repo.language] ?? "var(--accent)" }}
                />
                {repo.language}
              </span>
            ) : null}
            {repo.stargazers_count > 0 ? <span>★ {repo.stargazers_count}</span> : null}
            <span className="ml-auto text-primary opacity-0 transition-opacity group-hover:opacity-100">
              View →
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
