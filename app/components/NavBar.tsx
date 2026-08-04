import { useState } from "react";
import { useLocation } from "react-router";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Our team", href: "/team" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Lift HVL" className="h-32 w-auto object-contain" />
        </a>
        <div className="flex-1" />
        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 transition ${
                  active
                    ? "border-cyan-400 font-semibold text-white"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="mailto:hello@lifthvl.no"
            className="inline-flex items-center gap-1.5 font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            Contact
            <span aria-hidden>{"->"}</span>
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition hover:border-cyan-400/70 hover:text-cyan-200 md:hidden"
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
        } overflow-hidden border-t border-slate-800 bg-slate-950`}
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                  active ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {active && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden />}
              </a>
            );
          })}
          <a
            href="mailto:hello@lifthvl.no"
            className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide text-cyan-300 transition hover:text-cyan-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
            <span aria-hidden>{"->"}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
