const projects = [
    {
        n: "01",
        title: "Nebula Commerce",
        tag: "Full-Stack · Next.js · Stripe",
        desc: "Headless commerce platform with edge-rendered storefronts, real-time inventory, and a custom analytics pipeline.",
        tech: ["Next.js", "tRPC", "Postgres", "Redis"],
    },
    {
        n: "02",
        title: "Glowforge UI Kit",
        tag: "Open Source · React · Motion",
        desc: "A neon-themed component library with 60+ animated primitives. 4k+ stars, used in production by indie studios.",
        tech: ["React", "TypeScript", "Framer Motion"],
    },
    {
        n: "03",
        title: "Frame.gg Tournaments",
        tag: "SaaS · Realtime · Gaming",
        desc: "Esports bracket platform handling 10k+ concurrent matches with WebSocket sync and anti-cheat hooks.",
        tech: ["Go", "WebSocket", "Postgres"],
    },
    {
        n: "04",
        title: "Synthwave Render Farm",
        tag: "Personal · Distributed",
        desc: "Self-hosted GPU render farm orchestrator. Schedules Blender + shader jobs across my home rigs over a 10G fabric.",
        tech: ["Rust", "Docker", "GraphQL"],
    },
];

export function Projects() {
    return (
        <section id="projects" className="relative py-32">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon">
                            // 02 — selected work
                        </div>
                        <h2 className="font-display text-4xl font-bold sm:text-5xl">
                            Things I've <span className="gradient-text">built</span>.
                        </h2>
                    </div>
                    <a
                        href="#contact"
                        className="font-mono text-xs uppercase tracking-widest text-neon hover:text-glow-soft"
                    >
                        More on request →
                    </a>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((p, i) => (
                        <article
                            key={p.n}
                            className="group relative overflow-hidden rounded-xl border border-neon/20 bg-card/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/60 hover:bg-card/80 hover:shadow-neon-sm"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div
                                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-neon/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                            />
                            <div className="relative">
                                <div className="mb-4 flex items-baseline justify-between">
                                    <span className="font-mono text-xs text-neon">{p.n}</span>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.tag}
                  </span>
                                </div>
                                <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-neon">
                                    {p.title}
                                </h3>
                                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                                        >
                      {t}
                    </span>
                                    ))}
                                </div>
                                <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neon opacity-0 transition group-hover:opacity-100">
                                    Case study
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
