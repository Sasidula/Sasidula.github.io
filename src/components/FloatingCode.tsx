const snippets = [
    `const dev = {\n  stack: 'full',\n  art: true\n};`,
    `function render() {\n  return <Art/>;\n}`,
    `git commit -m\n"ship it 🚀"`,
    `npm run\n  dream`,
    `if (gpu.ready) {\n  frag.glow();\n}`,
    `await build(\n  'pixel.shader'\n);`,
    `<Particle\n  glow="neon"\n/>`,
    `for (let i=0;\n i<frames; i++)`,
];

const positions = [
    { row: 0, col: 6 },
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 5 },
    { row: 6, col: 0 },
    { row: 4, col: 5 },
    { row: 5, col: 4 },
    { row: 4, col: 1 },
    { row: 5, col: 3 },
    { row: 6, col: 6 },
];

export function FloatingCode() {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
          {snippets.map((s, i) => {
              const pos = positions[i];

              return (
                <pre
                  key={i}
                  className="absolute font-mono text-[11px] leading-tight text-neon/30 animate-float-slow"
                  style={{
                      top: `${(pos.row * 100) / 7}%`,
                      left: `${(pos.col * 100) / 7}%`,
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: `${8 + (i % 4)}s`,
                      textShadow:
                        "0 0 8px oklch(0.78 0.23 235 / 0.5)",
                  }}
                >
            {s}
          </pre>
              );
          })}
      </div>
    );
}