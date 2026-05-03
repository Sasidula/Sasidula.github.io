import { NeonFlower } from "../NeonFlower";

const stack = [
    "TypeScript", "React", "Next.js", "Node.js", "Bun",
    "PostgreSQL", "Redis", "Docker", "AWS", "tRPC",
    "Tailwind", "Three.js", "Rust", "Go", "GraphQL",
];

export function About() {
    return (
        <section id="about" className="relative overflow-hidden py-32">
            <NeonFlower
                size={500}
                className="absolute -right-40 top-20 text-neon/10 animate-rotate-slow"
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon">
                            // 01 — about
                        </div>
                        <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                            Engineer by day,
                            <br />
                            <span className="gradient-text">artist by night.</span>
                        </h2>
                        <div className="mt-6 space-y-4 text-muted-foreground">
                            <p>
                                I'm a full-stack developer obsessed with the seam where logic meets
                                aesthetic. I write clean, type-safe APIs in the morning, ship
                                React UIs at noon, and render shaders until my GPU begs for mercy.
                            </p>
                            <p>
                                Off-screen, I build custom water-cooled rigs, lose weekends to
                                competitive shooters and souls-likes, and create digital art that
                                lives somewhere between cyberpunk and botanical.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {stack.map((s) => (
                                <span
                                    key={s}
                                    className="rounded border border-neon/30 bg-neon/5 px-3 py-1 font-mono text-xs text-neon transition hover:bg-neon/15 hover:shadow-neon-sm"
                                >
                  {s}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Terminal card */}
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-xl gradient-neon opacity-20 blur-2xl" />
                        <div className="relative rounded-xl border border-neon/30 bg-card/80 backdrop-blur-xl shadow-neon-sm">
                            <div className="flex items-center justify-between border-b border-neon/20 px-4 py-3">
                                <div className="flex gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  ~/portfolio — zsh
                </span>
                                <span />
                            </div>
                            <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-neon">$</span>{" "}
                    <span className="text-foreground">whoami</span>
                    {"\n"}
                    <span className="text-muted-foreground">→ arc — full-stack dev / digital artist</span>
                    {"\n\n"}
                    <span className="text-neon">$</span>{" "}
                    <span className="text-foreground">cat ./focus.json</span>
                    {"\n"}
                    <span className="text-magenta">{"{"}</span>
                    {"\n  "}
                    <span className="text-neon">"backend"</span>: <span className="text-foreground">"distributed systems"</span>,
                    {"\n  "}
                    <span className="text-neon">"frontend"</span>: <span className="text-foreground">"motion + 3D"</span>,
                    {"\n  "}
                    <span className="text-neon">"hobbies"</span>: [<span className="text-foreground">"pc-builds"</span>,
                    {"\n              "}
                    <span className="text-foreground">"gaming"</span>,
                    {"\n              "}
                    <span className="text-foreground">"digital-art"</span>]
                    {"\n"}
                    <span className="text-magenta">{"}"}</span>
                    {"\n\n"}
                    <span className="text-neon">$</span>{" "}
                    <span className="animate-flicker">▊</span>
                </code>
              </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
