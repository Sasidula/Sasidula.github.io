import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "sasi-theme";

export function useTheme() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const stored = (localStorage.getItem(STORAGE_KEY) as "dark" | "light" | null) ?? "dark";
        setTheme(stored);
        document.documentElement.classList.toggle("light", stored === "light");
        document.documentElement.classList.toggle("dark", stored === "dark");
    }, []);

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
        document.documentElement.classList.toggle("light", next === "light");
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    return { theme, toggle };
}

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
