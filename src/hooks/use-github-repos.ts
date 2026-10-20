import { useQuery } from "@tanstack/react-query";
import { github } from "@/data/portfolio";

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

async function fetchRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${github.username}/repos?per_page=100&sort=pushed`,
    { headers: { Accept: "application/vnd.github+json" } },
  );
  if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
  const repos = (await res.json()) as GithubRepo[];
  return repos
    .filter((r) => !r.fork && !r.archived && !github.exclude.includes(r.name))
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at));
}

// Public repos only; the unauthenticated API allows 60 requests/hour per visitor,
// so results are cached for the session.
export function useGithubRepos() {
  return useQuery({
    queryKey: ["github-repos", github.username],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });
}
