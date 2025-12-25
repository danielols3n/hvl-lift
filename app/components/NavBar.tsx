const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Our team", href: "/team" },
];

export function NavBar() {
  return (
    <nav className="sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="relative mx-auto flex max-w-6xl items-center gap-4 overflow-hidden rounded-full border border-slate-800/70 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/90 px-6 py-3 shadow-[0_20px_60px_-35px_rgba(6,182,212,0.65)] backdrop-blur ring-1 ring-cyan-500/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.18),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(52,211,153,0.16),transparent_45%)] opacity-70" />
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <span className="h-px w-8 bg-cyan-500" />
            HVL Lift
          </div>
          <div className="flex-1" />
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-700/70 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.6)] transition hover:-translate-y-0.5 hover:border-cyan-300/80 hover:bg-white/12 hover:text-cyan-100 hover:shadow-[0_12px_30px_-14px_rgba(6,182,212,0.7)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:lift@hvl.no"
              className="ml-10 inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-500/15 px-4 py-2 font-semibold text-cyan-100 shadow-[0_0_25px_-12px_rgba(6,182,212,0.65)] ring-1 ring-cyan-300/30 transition hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:text-cyan-50 hover:shadow-[0_12px_30px_-16px_rgba(6,182,212,0.7)]"
            >
              Contact
              <span aria-hidden>{"->"}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
