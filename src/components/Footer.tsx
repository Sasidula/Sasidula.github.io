export function Footer() {
    return (
        <footer className="relative border-t border-neon/20 py-8">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
                <p className="font-mono text-xs text-muted-foreground">
                    © {new Date().getFullYear()} SASI.dev — built under the moon with neon & caffeine.
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                    <span className="text-neon">●</span> System online
                </p>
            </div>
        </footer>
    );
}
