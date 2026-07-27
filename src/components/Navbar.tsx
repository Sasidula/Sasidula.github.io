import { useEffect, useState } from "react";
import { MoonIcon } from "./MoonIcon";
import { ThemeToggle } from "./ThemeToggle";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#github", label: "GitHub" },
    { href: "#interests", label: "Interests" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "border-b border-neon/20 bg-background/80 backdrop-blur-xl"
                    : "bg-transparent"
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="#home" className="group flex items-center gap-2.5 font-display font-bold">
          <span className="relative grid h-10 w-10 place-items-center rounded-full border border-neon/40 bg-neon/5 text-neon shadow-neon-sm transition group-hover:scale-110 group-hover:rotate-12">
            <MoonIcon size={18} className="text-neon" />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition shadow-neon" />
          </span>
                    <span className="text-lg tracking-tight">
            <span className="gradient-text">SASI</span>
            <span className="text-foreground">.dev</span>
          </span>
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition hover:text-neon"
                            >
                                {l.label}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon shadow-neon-sm transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-3 md:flex">
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="rounded-md border border-neon/50 bg-neon/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-neon shadow-neon-sm transition hover:bg-neon hover:text-primary-foreground"
                    >
                        Hire Me
                    </a>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setOpen((o) => !o)}
                        className="grid h-10 w-10 place-items-center rounded-md border border-neon/30 text-neon"
                        aria-label="Menu"
                        aria-expanded={open}
                    >
                        <div className="space-y-1.5">
                            <span className={`block h-px w-5 bg-neon transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                            <span className={`block h-px w-5 bg-neon transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                            <span className={`block h-px w-5 bg-neon transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            <div
                className={`md:hidden overflow-hidden border-t border-neon/20 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out ${
                    open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col px-6 py-4">
                    {links.map((l, i) => (
                        <li
                            key={l.href}
                            className={`border-b border-neon/10 last:border-b-0 transform transition-all duration-500 ${
                                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                            }`}
                            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
                        >
                            <a
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="group flex items-center justify-between py-4 font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-neon"
                            >
                                <span className="flex items-center gap-3">
                                  <MoonIcon size={14} className="text-neon/60 transition group-hover:text-neon group-hover:rotate-45" />
                                    {l.label}
                                </span>
                                <span className="text-neon opacity-0 -translate-x-2 transition group-hover:opacity-100 group-hover:translate-x-0">→</span>
                            </a>
                        </li>
                    ))}
                    <li
                        className={`pt-4 transform transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                        style={{ transitionDelay: open ? `${links.length * 60}ms` : "0ms" }}
                    >
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="block rounded-md gradient-neon py-3 text-center font-mono text-xs uppercase tracking-widest text-primary-foreground shadow-neon"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
