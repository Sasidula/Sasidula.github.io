import { GitCommit, GitFork, Star, BookMarked } from "lucide-react";
import { NeonFlower } from "../NeonFlower";
import { useGithub } from "../../hooks/useGithub";
import { GITHUB_USER } from "../../services/github";

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function GitHubSection() {

    const { data, isLoading, error } = useGithub();

    if (isLoading) {
        return (
          <section className="py-32 text-center">
              Loading GitHub...
          </section>
        );
    }

    if (error || !data) {
        return (
          <section className="py-32 text-center">
              Unable to load GitHub data.
          </section>
        );
    }


    const stats = [
        {
            icon: BookMarked,
            label: "Repositories",
            value: data.stats.repos,
        },
        {
            icon: Star,
            label: "Stars",
            value: data.stats.stars,
        },
        {
            icon: GitFork,
            label: "Forks",
            value: data.stats.forks,
        },
        {
            icon: GitCommit,
            label: "Following",
            value: data.stats.following,
        },
    ];

       return (
        <section id="github" className="relative overflow-hidden py-32">
            <NeonFlower
                size={460}
                className="absolute -left-32 bottom-0 text-neon/8 animate-rotate-slow"
            />
            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon">
                            // 03 — github metrics
                        </div>
                        <h2 className="font-display text-4xl font-bold sm:text-5xl">
                            Code under the <span className="gradient-text">moonlight</span>.
                        </h2>
                    </div>
                    <a
                        href={`https://github.com/${GITHUB_USER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-neon/50 bg-neon/5 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-neon shadow-neon-sm transition hover:bg-neon/15"
                    >
                        <GitHubIcon size={14} /> @{GITHUB_USER}
                    </a>
                </div>

                {/* Stat tiles */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="group relative overflow-hidden rounded-xl border border-neon/20 bg-card/60 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-neon/60 hover:shadow-neon-sm"
                        >
                            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                            <s.icon size={20} className="text-neon" />
                            <div className="mt-4 font-display text-3xl font-bold text-glow-soft">
                                {s.value}
                            </div>
                            <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages + activity */}
                <div className="mt-8 grid gap-6 lg:grid-cols-5">
                    <div className="rounded-xl border border-neon/20 bg-card/60 p-8 backdrop-blur-sm lg:col-span-2">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-neon">
                            // languages used
                        </h3>

                        <div className="mt-6 flex h-3 w-full overflow-hidden rounded-full border border-neon/20 bg-background/60">
                            {data.languages.map((lang) => (
                              <div
                                key={lang.name}
                                style={{
                                    width: `${lang.pct}%`,
                                    background: lang.color,
                                }}
                              />
                            ))}
                        </div>

                        <ul className="mt-6 space-y-3">
                            {data.languages.map((l) => (
                              <li key={l.name} className="flex items-center justify-between font-mono text-xs">
                                      <span className="flex items-center gap-2 text-foreground">
                                        <span
                                          className="inline-block h-2.5 w-2.5 rounded-full"
                                          style={{background: l.color, boxShadow: `0 0 8px ${l.color}`}}
                                        />
                                          {l.name}
                                      </span>
                                  <span className="text-muted-foreground">{l.pct}%</span>
                              </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-xl border border-neon/20 bg-card/60 p-8 backdrop-blur-sm lg:col-span-3">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-neon">
                            // contribution graph
                        </h3>
                        <img
                          src="https://github-readme-activity-graph.vercel.app/graph?username=Sasidula&theme=react-dark&hide_border=true&area=true"
                          alt="Contribution Graph"
                          className="w-full rounded-lg"
                        />
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-neon/20 bg-card/60 p-8">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-neon">
                        // featured repositories
                    </h3>

                    <div className="mt-6 grid gap-4">
                        {data.topRepos.map((repo) => (
                          <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-neon/20 p-4 transition hover:border-neon hover:bg-neon/5"
                          >
                              <div className="flex items-center justify-between">
                                  <h4 className="font-semibold">
                                      {repo.name}
                                  </h4>

                                  <div className="flex gap-4 text-sm">
                                      ⭐ {repo.stargazers_count}
                                      🍴 {repo.forks_count}
                                  </div>
                              </div>

                              <p className="mt-2 text-sm text-muted-foreground">
                                  {repo.description ?? "No description"}
                              </p>
                          </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
