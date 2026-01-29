import { useState } from "react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Our team", href: "/team" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-3">
        <div className="relative mx-auto flex max-w-6xl items-center gap-4 overflow-hidden rounded-full border border-slate-800/70 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/90 px-4 py-2 backdrop-blur sm:px-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.18),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(52,211,153,0.16),transparent_45%)] opacity-70" />
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 cursor-pointer" onClick={() => window.location.href='/'}>
            <span className="h-px w-8 bg-cyan-500" />
            <img
              src={logo}
              alt="Lift HVL logo"
              className="h-25 w-25 object-contain"
            />
          </div>
          <div className="flex-1" />
          <div className="hidden flex-wrap items-center gap-3 text-sm font-medium text-slate-200 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-700/70 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/80 hover:bg-white/12 hover:text-cyan-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@lifthvl.no"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-500/15 px-5 py-2.5 font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:text-cyan-50 md:ml-6"
            >
              Contact
              <span aria-hidden>{"->"}</span>
            </a>
          </div>
          <button
            type="button"
            className="relative inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/70 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/80 hover:bg-white/12 hover:text-cyan-100 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="h-[1px] w-6 bg-current shadow-[0_6px_0_0_currentColor,0_-6px_0_0_currentColor]" aria-hidden />
            Menu
          </button>
        </div>
        <div
          className={`md:hidden transition-[max-height,opacity] duration-300 ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="mt-3 space-y-2 rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/90 to-slate-900/85 p-4 backdrop-blur">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/80 hover:bg-white/10 hover:text-cyan-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                <span aria-hidden>{"->"}</span>
              </a>
            ))}
            <a
              href="mailto:hello@lifthvl.no"
              className="flex items-center justify-between rounded-xl border border-cyan-300/60 bg-cyan-500/15 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:text-cyan-50"
              onClick={() => setIsOpen(false)}
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
