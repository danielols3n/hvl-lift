import { Reveal } from "./Reveal";

/** Technical section divider: number + label + animated gradient line. */
export function SectionDivider({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <Reveal variant="fade">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-cyan-400">{index}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">
          {label}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 via-white/10 to-transparent" />
      </div>
    </Reveal>
  );
}

/** Large, bold section heading in the Anduril/Revolve register. */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal delay={80}>
      <h2 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.03] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
        {children}
      </h2>
    </Reveal>
  );
}
