export function CircuitLines({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
        >
            <defs>
                <linearGradient id="circ" x1="0" x2="1">
                    <stop offset="0" stopColor="oklch(0.78 0.23 235)" stopOpacity="0" />
                    <stop offset="0.5" stopColor="oklch(0.78 0.23 235)" stopOpacity="0.8" />
                    <stop offset="1" stopColor="oklch(0.78 0.23 235)" stopOpacity="0" />
                </linearGradient>
            </defs>
            <g fill="none" stroke="url(#circ)" strokeWidth="1">
                <path
                    className="animate-circuit"
                    d="M0,120 L200,120 L240,160 L500,160 L540,120 L800,120 L840,80 L1200,80"
                />
                <path
                    className="animate-circuit"
                    style={{ animationDelay: "1s" }}
                    d="M0,400 L150,400 L190,440 L400,440 L440,400 L700,400 L740,360 L1000,360 L1040,400 L1200,400"
                />
                <path
                    className="animate-circuit"
                    style={{ animationDelay: "2s" }}
                    d="M0,680 L300,680 L340,640 L600,640 L640,680 L900,680 L940,720 L1200,720"
                />
                <path
                    className="animate-circuit"
                    style={{ animationDelay: "0.5s" }}
                    d="M600,0 L600,120 L640,160 L640,300"
                />
                <path
                    className="animate-circuit"
                    style={{ animationDelay: "1.5s" }}
                    d="M900,800 L900,640 L940,600 L940,500"
                />
            </g>
            <g fill="oklch(0.78 0.23 235)">
                {[
                    [200, 120],
                    [500, 160],
                    [800, 120],
                    [400, 440],
                    [700, 400],
                    [600, 640],
                    [900, 680],
                    [600, 120],
                    [940, 600],
                ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3" className="animate-flicker" />
                ))}
            </g>
        </svg>
    );
}
