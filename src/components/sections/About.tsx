import { NeonFlower } from "../NeonFlower";

const stack = [
  "TypeScript",
  "React",
  "Redux",
  "Spring Boot",
  "Express.js",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Kafka",
  "Expo",
  "Unity",
  "Blender",
  "Docker",
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
                          Building scalable systems,
                          <span className="gradient-text">exploring creative tech.</span>
                        </h2>
                      <div className="mt-6 space-y-4 text-muted-foreground">
                        <p>
                          I’m a 3rd-year Software Engineering undergraduate at NIBM, currently
                          working as an intern while expanding my skills in modern full-stack
                          development and distributed systems.
                        </p>

                        <p>
                          My primary stack includes React, TypeScript, Spring Boot, Express.js,
                          Redux, and modern backend technologies like Redis, RabbitMQ, and Kafka.
                          I enjoy building scalable applications, experimenting with system
                          architecture, and creating smooth interactive user experiences.
                        </p>

                        <p>
                          Outside software engineering, I explore Unity game development,
                          Blender, digital art, PC building, gaming culture, anime,
                          and creative technology projects.
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
                  <div className="relative lg:translate-y-28">
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
                                <span className="text-muted-foreground">
                                  → sasidula_jayara — software engineer / creative developer
                                </span>
                                  {"\n\n"}
                                  <span className="text-neon">$</span>{" "}
                                  <span className="text-foreground">cat ./focus.json</span>
                                  {"\n"}
                                  <span className="text-magenta">{"{"}</span>
                                  {"\n  "}
                                  <span className="text-neon">"currently_learning"</span>: [
                                  {"\n    "}
                                  <span className="text-foreground">"redux"</span>,
                                  {"\n    "}
                                  <span className="text-foreground">"redis"</span>,
                                  {"\n    "}
                                  <span className="text-foreground">"rabbitmq"</span>,
                                  {"\n    "}
                                  <span className="text-foreground">"kafka"</span>
                                  {"\n  "}],
                                  {"\n  "}
                                  <span className="text-neon">"interests"</span>: [
                                  {"\n    "}
                                  <span className="text-foreground">"full-stack"</span>,
                                  {"\n    "}
                                  <span className="text-foreground">"mobile-dev"</span>,
                                  {"\n    "}
                                  <span className="text-foreground">"game-dev"</span>,
                                  {"\n    "}
                                  <span className="text-foreground">"creative-tech"</span>
                                  {"\n  "}],
                                  {"\n  "}
                                  <span className="text-neon">"hobbies"</span>: [
                                  {"\n    "}
                                  <span className="text-foreground">"pc-building"</span>,
                                  {"\n    "}
                                  <span className="text-foreground">"gaming"</span>,
                                  {"\n    "}
                                  <span className="text-foreground">"digital-art"</span>,
                                  {"\n    "}
                                  <span className="text-foreground">"anime"</span>
                                  {"\n  "}]
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
