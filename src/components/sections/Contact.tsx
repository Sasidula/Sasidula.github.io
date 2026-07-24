import { NeonFlower } from "../NeonFlower";

export function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden py-32">
            <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-radial-glow)" }}
            />
            <NeonFlower
                size={600}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-neon/8 animate-rotate-slow"
            />

            <div className="relative mx-auto max-w-3xl px-6 text-center">
                <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon">
                    // 05 — let's connect
                </div>
                <h2 className="font-display text-5xl font-bold leading-tight sm:text-7xl">
                  Let’s <span className="gradient-text text-glow">create</span>?
                    <br /> something meaningful.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                  Currently open to internship opportunities, collaborations,
                  and conversations about full-stack development, creative tech,
                  and modern software engineering.
                </p>

                <a
                    href="mailto:sasidulajayara12@gmail.com"
                    className="mt-10 inline-flex items-center gap-3 rounded-md gradient-neon px-8 py-4 font-mono text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-neon transition hover:scale-105 animate-pulse-glow"
                >
                    hello@arc.dev
                    <span>→</span>
                </a>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
                    {[
                      ["GitHub", "#"],
                      ["LinkedIn", "#"],
                      ["Resume", "#"],
                    ].map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className="text-muted-foreground transition hover:text-neon hover:text-glow-soft"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
