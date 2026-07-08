import { Reveal } from "./Reveal";

/**
 * Shorter page header for sub-pages. Same language as the homepage hero,
 * but half the height — so you can feel you've moved to a different room.
 */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative flex min-h-[58vh] items-end pb-16 pt-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal variant="fade">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.4em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-400" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.0] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle ? (
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={220}>
            <div className="mt-10">{children}</div>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
