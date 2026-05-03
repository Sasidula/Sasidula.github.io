import { useEffect, useRef } from "react";

export function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let raf = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        const resize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + "px";
            canvas.style.height = window.innerHeight + "px";
            ctx.scale(dpr, dpr);
        };
        resize();
        window.addEventListener("resize", resize);

        const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 18000));
        const particles = Array.from({ length: count }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.6 + 0.4,
            a: Math.random() * 0.6 + 0.2,
        }));

        const mouse = { x: -9999, y: -9999 };
        const onMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", onMove);

        const tick = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
                if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const d = Math.hypot(dx, dy);
                if (d < 120) {
                    p.x += (dx / d) * 0.6;
                    p.y += (dy / d) * 0.6;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(80, 180, 255, ${p.a})`;
                ctx.shadowColor = "rgba(80, 180, 255, 0.8)";
                ctx.shadowBlur = 8;
                ctx.fill();
            }

            ctx.shadowBlur = 0;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const d = Math.hypot(a.x - b.x, a.y - b.y);
                    if (d < 130) {
                        ctx.strokeStyle = `rgba(80, 180, 255, ${0.18 * (1 - d / 130)})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            raf = requestAnimationFrame(tick);
        };
        tick();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0 opacity-70"
            aria-hidden
        />
    );
}
