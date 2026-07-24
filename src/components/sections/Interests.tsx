import { CircuitLines } from "../CircuitLines";

const interests = [
    {
        icon: "▣",
        title: "PC Building",
        desc: "I enjoy building and customizing PCs, exploring performance optimization, cooling setups, and creating clean workstation builds for both development and gaming.",
        tags: ["Hardware", "Performance", "Custom Builds"],
    },
    {
        icon: "◈",
        title: "Gaming",
        desc: "Gaming has always influenced my interest in technology and interactive experiences, especially story-driven games, open-world design, and competitive multiplayer titles.",
        tags: ["Open World", "FPS", "Game Design"],
    },
    {
        icon: "✦",
        title: "Creative Tech",
        desc: "I explore Blender, Unity, digital art, and experimental visuals as creative outlets that combine technology, design, and imagination.",
        tags: ["Blender", "Unity", "Digital Art"],
    },
];

export function Interests() {
    return (
        <section id="interests" className="relative overflow-hidden py-32">
            <CircuitLines className="opacity-30" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mb-16 max-w-2xl">
                    <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon">
                        // 04 — off the clock
                    </div>
                    <h2 className="font-display text-4xl font-bold sm:text-5xl">
                        Beyond the <span className="gradient-text">terminal</span>.
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {interests.map((it) => (
                        <div
                            key={it.title}
                            className="group relative rounded-xl border border-neon/20 bg-card/60 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-neon/60 hover:shadow-neon-sm"
                        >
                            <div className="mb-6 grid h-14 w-14 place-items-center rounded-lg border border-neon/40 bg-neon/5 text-2xl text-neon shadow-neon-sm transition group-hover:scale-110">
                                {it.icon}
                            </div>
                            <h3 className="font-display text-xl font-bold">{it.title}</h3>
                            <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {it.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="font-mono text-[10px] uppercase tracking-widest text-neon/70"
                                    >
                    #{t}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
