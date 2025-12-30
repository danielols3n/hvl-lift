const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "IG" },
  { label: "GitHub", href: "https://github.com", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "IN" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-800/60 bg-[#0d1f33] text-slate-200">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cyan-400/18 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <span className="h-px w-8 bg-cyan-500" />
            HVL Lift
          </div>
          <div className="text-sm text-slate-300">
            <div>Høgskulen på Vestlandet</div>
            <div>Inndalsveien 28, 5063 Bergen</div>
            <div>Norge</div>
          </div>
          <div className="text-sm text-slate-300">
            <div>Email: <a className="text-cyan-200 hover:text-cyan-100" href="mailto:hello@hvl-lift.no">hello@hvl-lift.no</a></div>
            <div>Telefon: <a className="text-cyan-200 hover:text-cyan-100" href="tel:+4798663863">+47 986 63 863</a></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-300">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-cyan-200">
            <span className="h-px w-8 bg-cyan-500" />
            Følg oss
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-100"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-xs font-bold text-cyan-100">
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800/60 bg-[#0d1f33] py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} HVL Lift. All rights reserved.</span>
          <span className="text-slate-500">Crafted by the student team.</span>
        </div>
      </div>
    </footer>
  );
}
