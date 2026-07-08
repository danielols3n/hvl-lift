const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Our team", href: "/team" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/lifthvl/" },
  { label: "GitHub", href: "https://github.com/Lift-HVL" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-slate-200">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/15 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr,1fr,1fr,1fr]">
        <div>
          <div className="text-lg font-bold tracking-tight text-white">
            Lift HVL
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            The first student drone organisation in Bergen, run by 21 volunteer
            students at HVL.
          </p>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Site
          </div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Follow
          </div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Contact
          </div>
          <div className="mt-4 space-y-2.5 text-sm text-slate-300">
            <a
              className="block transition-colors hover:text-cyan-300"
              href="mailto:hello@lifthvl.no"
            >
              hello@lifthvl.no
            </a>
            <div className="pt-2 leading-relaxed text-slate-500">
              Høgskulen på Vestlandet
              <br />
              Inndalsveien 28, 5063 Bergen
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 font-mono text-[11px] text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Lift HVL</span>
          <span className="max-w-2xl leading-relaxed">
            Lift HVL is a student organisation and does not conduct drone
            flights on behalf of Høgskulen på Vestlandet (HVL). All activity and
            public communication are carried out by the student team.
          </span>
        </div>
      </div>
    </footer>
  );
}
