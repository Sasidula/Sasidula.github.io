import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`
                flex
                h-9
                items-center
                justify-center
                rounded-md
                border
                border-neon/40
                bg-neon/10
                px-4
                text-neon
                shadow-neon-sm
                transition
                hover:scale-105
                hover:bg-neon
                hover:text-primary-foreground
                ${className}
            `}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}