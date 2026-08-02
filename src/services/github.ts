export const GITHUB_USER = "Sasidula";

export const GITHUB_WORKER_URL =
  "https://portfolio-stat-worker.sasidulajayara12.workers.dev";



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
  const response = await fetch(
    GITHUB_WORKER_URL,
    {
      cache: "no-store",
    },
  );


  if (!response.ok) {
    throw new Error(
      "GitHub worker request failed.",
    );
  }

  return response.json();
}