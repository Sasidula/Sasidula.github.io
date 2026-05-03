type Props = { className?: string; size?: number };

// Subtle crescent moon with soft neon glow
export function MoonIcon({ className = "", size = 24 }: Props) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <defs>
                <filter id="moonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="0.6" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g filter="url(#moonGlow)">
                <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
                <circle cx="15" cy="9" r="0.6" fill="currentColor" opacity="0.7" />
                <circle cx="17.5" cy="11.5" r="0.4" fill="currentColor" opacity="0.5" />
            </g>
        </svg>
    );
}
