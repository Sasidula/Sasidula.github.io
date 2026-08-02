import { NeonFlower } from "../NeonFlower";
import { LiveTerminal } from "../LiveTerminal.tsx";

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
    <section
      id="about"
      className="relative overflow-x-hidden py-20 sm:py-24 lg:py-32"
    >
      <NeonFlower
        size={500}
        className="absolute -right-40 top-20 hidden animate-rotate-slow text-neon/10 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="min-w-0">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neon">
              // 01 — about
            </div>

            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Building scalable systems,
              <br />
              <span className="gradient-text">
                exploring creative technology.
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                I'm a 3rd-year Software Engineering undergraduate at NIBM,
                currently completing my internship while expanding my knowledge
                in full-stack development, distributed systems, and cloud
                technologies.
              </p>

              <p>
                I primarily work with React, TypeScript, Spring Boot,
                Express.js, and modern backend technologies including Redis,
                RabbitMQ, and Kafka. I enjoy designing scalable applications,
                building intuitive user experiences, and continuously learning
                new technologies.
              </p>

              <p>
                Beyond software engineering, I enjoy Unity game development,
                Blender, digital art, PC building, gaming, anime, and exploring
                creative technology projects.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-neon/30 bg-neon/5 px-2.5 py-1 text-[11px] font-mono text-neon transition hover:bg-neon/15 hover:shadow-neon-sm sm:px-3 sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative mt-10 min-w-0 lg:mt-0">
            {/* Glow */}
            <div className="absolute -inset-8 rounded-2xl gradient-neon opacity-20 blur-3xl" />

            <div
              className="
                relative

                w-[850px]
                sm:w-[900px]
                lg:w-[850px]
                xl:w-[950px]
                2xl:w-[1000px]

                translate-x-16
                sm:translate-x-20
                lg:translate-x-20
                xl:translate-x-28

                translate-y-8
                lg:translate-y-16
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-neon/50
                  bg-card/80
                  backdrop-blur-xl
                  shadow-neon-sm
                "
              >
                {/* Header */}
                <div className="grid grid-cols-[auto_1fr_auto] items-center border-b border-neon/20 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
                  </div>

                  <span className="ml-4 truncate font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    ~/portfolio — zsh
                  </span>

                  <div />
                </div>

                <LiveTerminal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}