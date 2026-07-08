import { useState } from "react";
import logo from "../assets/logo.png";
import { useScrollY } from "../hooks/useScrollY";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Our team", href: "/team" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollY();
  const scrolled = scrollY > 24;

  return (
    <nav className="fixed inset-x-0 top-0 z-40">
      <div
        className={`border-b transition-all duration-500 ${
          scrolled || isOpen
            ? "border-white/10 bg-black/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 sm:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="Lift HVL home">
            <img
              src={logo}
              alt="Lift HVL logo"
              className={`object-contain transition-all duration-500 ${
                scrolled ? "h-11 w-11" : "h-14 w-14"
              }`}
            />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.35em] text-white sm:block">
              Lift
            </span>
          </a>

          <div className="flex-1" />

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@lifthvl.no"
              className="ml-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/70 hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              Contact
              <span aria-hidden>{"->"}</span>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-cyan-300/70 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span
              className="h-[1px] w-6 bg-current shadow-[0_6px_0_0_currentColor,0_-6px_0_0_currentColor]"
              aria-hidden
            />
            Menu
          </button>
        </div>

        <div
          className={`md:hidden transition-[max-height,opacity] duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="space-y-2 px-5 pb-5 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                <span aria-hidden>{"->"}</span>
              </a>
            ))}
            <a
              href="mailto:hello@lifthvl.no"
              className="flex items-center justify-between rounded-xl border border-cyan-300/50 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
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
