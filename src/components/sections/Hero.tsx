import { NeonFlower } from "../NeonFlower";
import { FloatingCode } from "../FloatingCode";
import { CircuitLines } from "../CircuitLines";

export function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
        >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-radial-glow)" }}
            />
            <CircuitLines className="opacity-60" />
            <FloatingCode />

            {/* Decorative neon flowers */}
            <NeonFlower
                size={420}
                className="absolute -left-20 top-20 text-neon/15 animate-rotate-slow"
            />
            <NeonFlower
                size={320}
                className="absolute -right-10 bottom-10 text-neon/20 animate-rotate-slow"
                // reverse rotation
            />
            <NeonFlower
                size={180}
                className="absolute right-1/6 top-1/6 text-magenta/20 animate-rotate-slow"
            />

            {/* Subtle moons */}
            {/*<MoonIcon size={70} className="absolute left-12 bottom-24 text-neon/20 animate-float" />*/}
            {/*<MoonIcon size={48} className="absolute right-16 top-32 text-neon/25 animate-float-slow" />*/}
            {/*<MoonIcon size={28} className="absolute left-1/3 bottom-1/4 text-magenta/30 animate-float" />*/}

            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-neon shadow-neon-sm animate-fade-up">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-neon shadow-neon-sm" />
                    Available for new projects
                </div>

              <h1
                className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="block text-foreground">SOFTWARE</span>
                <span className="block gradient-text text-glow">ENGINEER</span>

                <span className="mt-3 block font-mono text-sm font-normal text-muted-foreground sm:text-lg">
                    // full-stack · distributed systems · mobile · creative tech
                </span>
              </h1>

              <p
                className="mx-auto mt-8 max-w-6xl text-sm leading-relaxed text-muted-foreground sm:text-base animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                3rd-year Software Engineering undergraduate at NIBM, with a degree awarded by Coventry University.
                Currently working as an intern while building modern full-stack applications using React,
                TypeScript, Spring Boot, Express.js, and distributed technologies like Redis, RabbitMQ, and Kafka.
                Passionate about scalable systems, mobile development, Unity, Blender, digital art, and gaming culture.
              </p>

                <div
                    className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
                    style={{ animationDelay: "0.3s" }}
                >
                    <a
                        href="#projects"
                        className="group relative overflow-hidden rounded-md gradient-neon px-7 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-neon transition hover:scale-105"
                    >
                        <span className="relative z-10">View Projects →</span>
                    </a>
                    <a
                        href="#contact"
                        className="rounded-md border border-neon/50 bg-background/40 px-7 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-neon backdrop-blur transition hover:bg-neon/10 hover:shadow-neon-sm"
                    >
                      Download CV
                    </a>
                </div>

                <div
                    className="mt-16 grid grid-cols-3 gap-4 border-t border-neon/15 pt-8 sm:gap-12 animate-fade-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    {[
                      ["Full-Stack", "Web & APIs"],
                      ["Mobile", "Expo & Android"],
                      ["Creative", "Unity & Blender"],
                    ].map(([n, l]) => (
                        <div key={l} className="text-center">
                            <div className="font-display text-3xl font-bold text-neon text-glow-soft sm:text-4xl">
                                {n}
                            </div>
                            <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                                {l}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="flex h-10 w-6 justify-center rounded-full border border-neon/40 p-1">
                    <div className="h-2 w-1 animate-bounce rounded-full bg-neon shadow-neon-sm" />
                </div>
            </div>
        </section>
    );
}
