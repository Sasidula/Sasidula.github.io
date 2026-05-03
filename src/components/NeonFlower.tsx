type Props = { className?: string; size?: number };

export function NeonFlower({ className = "", size = 200 }: Props) {
    return (
        <svg
            viewBox="0 0 200 200"
            width={size}
            height={size}
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <defs>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g filter="url(#neonGlow)">
                {Array.from({ length: 8 }).map((_, i) => (
                    <g key={i} transform={`rotate(${i * 45} 100 100)`}>
                        <path d="M100 100 C 110 70, 130 55, 100 30 C 70 55, 90 70, 100 100 Z" />
                        <path d="M100 50 C 95 60, 105 60, 100 50" opacity="0.6" />
                    </g>
                ))}
                <circle cx="100" cy="100" r="10" />
                <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.8" />
                {Array.from({ length: 8 }).map((_, i) => (
                    <g key={`s${i}`} transform={`rotate(${i * 45 + 22.5} 100 100)`} opacity="0.4">
                        <path d="M100 100 L 100 75" />
                        <circle cx="100" cy="72" r="2" />
                    </g>
                ))}
            </g>
        </svg>
    );
}
