export const GITHUB_USER = "Sasidula";

const BASE = `https://api.github.com/users/${GITHUB_USER}`;

export interface GithubProfile {
  public_repos: number;
  followers: number;
  following: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  languages_url: string;
}

export interface GithubLanguage {
  name: string;
  pct: number;
  color: string;
}

export interface GithubStats {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  forks: number;
}

export interface GithubData {
  profile: GithubProfile;
  stats: GithubStats;
  languages: GithubLanguage[];
  topRepos: GithubRepo[];
}

export async function getGithubData(): Promise<GithubData> {
  const profileRes = await fetch(BASE);
  const reposRes = await fetch(`${BASE}/repos?per_page=100`);

  if (!profileRes.ok || !reposRes.ok) {
    throw new Error("GitHub API failed.");
  }

  const profile = (await profileRes.json()) as GithubProfile;
  const repos = (await reposRes.json()) as GithubRepo[];

  const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const forks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

  const languageMap = new Map<string, number>();

  await Promise.all(
    repos.map(async (repo) => {
      const res = await fetch(repo.languages_url);

      if (!res.ok) return;

      const langs = (await res.json()) as Record<string, number>;

      Object.entries(langs).forEach(([name, bytes]) => {
        languageMap.set(name, (languageMap.get(name) ?? 0) + Number(bytes));
      });
    }),
  );

  const totalBytes = [...languageMap.values()].reduce((a, b) => a + b, 0);

  const colors: Record<string, string> = {
    TypeScript: "#3178C6",
    JavaScript: "#f1e05a",
    Java: "#b07219",
    C: "#555555",
    "C++": "#f34b7d",
    CSharp: "#178600",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Kotlin: "#A97BFF",
    PHP: "#4F5D95",
    Shell: "#89e051",
  };

  const languages = [...languageMap.entries()]
    .map(([name, bytes]) => ({
      name,
      pct: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
      color: colors[name] ?? "#00ffe1",
    }))
    .sort((a, b) => b.pct - a.pct);

  const topRepos = [...repos]
    .sort(
      (a, b) =>
        b.stargazers_count + b.forks_count - (a.stargazers_count + a.forks_count),
    )
    .slice(0, 6);

  return {
    profile,
    stats: {
      repos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
      stars,
      forks,
    },
    languages,
    topRepos,
  };
}
