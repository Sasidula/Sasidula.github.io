import { useEffect, useRef, useState } from "react";

type Line = {
  prompt: string;
  output: string;
  color?: string;
};

const commands: Line[] = [
  {
    prompt: "$ whoami",
    output: "sasidula_jayara",
  },
  {
    prompt: "$ education",
    output: "BSc Software Engineering @ NIBM",
  },
  {
    prompt: "$ university",
    output: "Degree Awarded by Coventry University",
  },
  {
    prompt: "$ current-role",
    output: "Software Engineering Intern",
  },
  {
    prompt: "$ stack",
    output:
      "React\nTypeScript\nSpring Boot\nExpress.js\nRedux\nMySQL\nMongoDB",
    color: "text-neon",
  },
  {
    prompt: "$ learning",
    output: "Redis\nRabbitMQ\nKafka\nExpo",
    color: "text-yellow-400",
  },
  {
    prompt: "$ hobbies",
    output:
      "PC Building\nGaming\nUnity\nBlender\nDigital Art\nAnime",
    color: "text-magenta",
  },
  {
    prompt: "$ latest-project",
    output: "AquaSafe - IoT River Safety Platform",
    color: "text-cyan-400",
  },
  {
    prompt: "$ github",
    output: "github.com/sasidulajayara",
    color: "text-blue-400",
  },
  {
    prompt: "$ npm run build",
    output: "✔ Build completed successfully in 1.27s",
    color: "text-green-400",
  },
  {
    prompt: "$ git push",
    output:
      "Enumerating objects...\nWriting objects...\nEverything up-to-date.",
    color: "text-green-400",
  },
];

type DisplayLine = {
  prompt: string;
  output: string;
  color?: string;
};

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function LiveTerminal() {
  const [history, setHistory] = useState<DisplayLine[]>([]);
  const [typingPrompt, setTypingPrompt] = useState("");
  const [typingOutput, setTypingOutput] = useState("");
  const [typingColor, setTypingColor] = useState("text-muted-foreground");

  const containerRef = useRef<HTMLDivElement>(null);
  const userScrolling = useRef(false);
  const autoFollow = useRef(true);

  const scrollBottom = () => {
    if (!autoFollow.current || userScrolling.current) return;

    requestAnimationFrame(() => {
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const distance = el.scrollHeight - el.scrollTop - el.clientHeight;
    autoFollow.current = distance < 40;
  };

  const scrollTop = () => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let cancelled = false;

    async function typeText(
      text: string,
      setter: React.Dispatch<React.SetStateAction<string>>,
      speed: number
    ) {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;

        setter(text.slice(0, i));

        scrollBottom();

        await sleep(speed);
      }
    }

    async function runTerminal() {
      while (!cancelled) {
        let terminalHistory: DisplayLine[] = [];

        setHistory([]);
        setTypingPrompt("");
        setTypingOutput("");

        await sleep(500);

        // Initial terminal run
        for (const command of commands) {
          if (cancelled) return;

          setTypingColor(command.color ?? "text-muted-foreground");
          setTypingPrompt("");
          setTypingOutput("");

          await typeText(command.prompt, setTypingPrompt, 35);

          await sleep(180);

          await typeText(command.output, setTypingOutput, 16);

          await sleep(700);

          terminalHistory.push(command);

          setHistory([...terminalHistory]);

          setTypingPrompt("");
          setTypingOutput("");

          scrollBottom();

          await sleep(250);
        }

        // Connection lost
        terminalHistory.push({
          prompt: "[SYSTEM]",
          output: "Connection lost...",
          color: "text-red-400",
        });

        setHistory([...terminalHistory]);

        scrollBottom();

        await sleep(2000);

        // Clearing
        terminalHistory.push({
          prompt: "[SYSTEM]",
          output: "Clearing terminal...",
          color: "text-red-400",
        });

        setHistory([...terminalHistory]);

        scrollBottom();

        await sleep(1000);

        // Clear and go top
        setHistory([]);
        setTypingPrompt("");
        setTypingOutput("");

        scrollTop();

        autoFollow.current = true;

        await sleep(500);

        // Retry message
        terminalHistory = [
          {
            prompt: "[SYSTEM]",
            output: "Retrying connection...",
            color: "text-red-400",
          },
        ];

        setHistory([...terminalHistory]);

        scrollBottom();

        await sleep(1000);

        // Remove retry message while typing whoami
        setHistory([]);

        setTypingColor("text-muted-foreground");
        setTypingPrompt("");
        setTypingOutput("");

        await typeText("$ whoami", setTypingPrompt, 35);

        await sleep(180);

        await typeText("sasidula_jayara", setTypingOutput, 16);

        await sleep(700);

        // Keep only whoami
        terminalHistory = [
          {
            prompt: "$ whoami",
            output: "sasidula_jayara",
          },
        ];

        setHistory([...terminalHistory]);

        setTypingPrompt("");
        setTypingOutput("");

        scrollBottom();

        await sleep(1000);

        // Continue from education (skip whoami)
        for (const command of commands.slice(1)) {
          if (cancelled) return;

          setTypingColor(command.color ?? "text-muted-foreground");
          setTypingPrompt("");
          setTypingOutput("");

          await typeText(command.prompt, setTypingPrompt, 35);

          await sleep(180);

          await typeText(command.output, setTypingOutput, 16);

          await sleep(700);

          terminalHistory.push(command);

          setHistory([...terminalHistory]);

          setTypingPrompt("");
          setTypingOutput("");

          scrollBottom();

          await sleep(250);
        }
      }
    }

    runTerminal();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      onMouseEnter={() => {
        userScrolling.current = true;
      }}
      onMouseLeave={() => {
        userScrolling.current = false;

        if (autoFollow.current) {
          scrollBottom();
        }
      }}
      className="
        h-[560px]
        overflow-y-auto
        overflow-x-hidden
        scroll-smooth
        p-6
      "
    >
      <div className="font-mono text-[11px] leading-7 sm:text-sm">
        {history.map((line, index) => (
          <div key={index} className="mb-4">
            <div className="text-neon">{line.prompt}</div>

            <div
              className={`whitespace-pre-wrap ${
                line.color ?? "text-muted-foreground"
              }`}
            >
              {line.output}
            </div>
          </div>
        ))}

        {(typingPrompt || typingOutput) && (
          <div>
            <div className="flex items-center">
              <span className="text-neon">{typingPrompt}</span>

              <span className="ml-1 animate-pulse text-neon">▊</span>
            </div>

            <div
              className={`whitespace-pre-wrap ${typingColor}`}
            >
              {typingOutput}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}