import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle({ className = "" }: { className?: string }) {
    const { theme, toggle } = useTheme();

    return (
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className={`grid h-10 w-10 place-items-center rounded-md border border-neon/40 bg-neon/5 text-neon shadow-neon-sm transition hover:scale-110 hover:bg-neon/15 ${className}`}
      >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    );
}

