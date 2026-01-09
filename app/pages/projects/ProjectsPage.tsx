import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

const statusColorClasses = {
  red: { badge: "bg-rose-500/15 text-rose-200", dot: "bg-rose-400" },
  yellow: { badge: "bg-amber-500/15 text-amber-200", dot: "bg-amber-400" },
  green: { badge: "bg-emerald-500/15 text-emerald-200", dot: "bg-emerald-400" },
} as const;

type StatusColor = keyof typeof statusColorClasses;

const projectCards: Array<{
  title: string;
  status: string;
  statusColor: StatusColor;
  summary: string;
  tags: string[];
}> = [
  {
    title: "Pilot",
    status: "Planning",
    statusColor: "red",
    summary: "Our first drone with the goal of building our own drone and RC controller from scratch.",
    tags: ["Telemetry", "Beginner-friendly", "Sensors"],
  },
];

const highlights = [
  { label: "Active builds", value: "1" },
  { label: "Contributors", value: "4" },
];

const missionStats = [
  { label: "No stats from the current missions yet...", value: "-", detail: "" },
];

export function ProjectsPage() {
  const [projectIndex, setProjectIndex] = useState(0);

  const currentProject = projectCards[projectIndex];

  const nextProject = () => setProjectIndex((idx) => (idx + 1) % projectCards.length);
  const prevProject = () => setProjectIndex((idx) => (idx - 1 + projectCards.length) % projectCards.length);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

      <NavBar />

      <main className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="flex flex-col gap-10 pt-16 lg:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-500" />
            Projects & Missions
            <span className="h-px w-10 bg-cyan-500" />
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                From CAD to maiden flight, all our builds in one place.
              </h1>
              <p className="text-lg text-slate-300 sm:text-xl">
                Follow the fleet: fixed-wing racers, mapping rigs, VTOL experiments, and the open source tools that keep
                them flying. Pick a mission and contribute.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@hvl-lift.no"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Propose a project
                  <span aria-hidden>{"->"}</span>
                </a>
                <a
                  href="#active-builds"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-100"
                >
                  View active builds
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-cyan-300">{item.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-wide text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-emerald-400/10 p-7 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Program stats</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-50">Signals from the fleet</h3>
            <ul className="mt-4 space-y-3">
              {missionStats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-start gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/30 px-4 py-3"
                >
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-semibold text-cyan-100">
                    *
                  </span>
                  <div>
                    <div className="text-sm uppercase tracking-[0.12em] text-slate-300">{stat.label}</div>
                    <div className="text-xl font-semibold text-cyan-200">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="active-builds" className="mt-20 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Active builds</p>
              <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">What we are shipping next</h2>
              <p className="mt-2 max-w-3xl text-slate-300">
                Hardware in the lab and software in the repo. Jump in, review, or test in the field.
              </p>
            </div>
            <div className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 md:flex">
              <span className="h-px w-10 bg-cyan-500" />
              Swipe through
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/60 to-slate-900/80 p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.08),transparent_45%),radial-gradient(circle_at_85%_70%,rgba(52,211,153,0.08),transparent_45%)]" />
            <div className="relative space-y-6">
              <article className="space-y-4 rounded-2xl border border-slate-800/70 bg-slate-950/60 p-6">
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${statusColorClasses[currentProject.statusColor].badge}`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${statusColorClasses[currentProject.statusColor].dot}`}
                    aria-hidden
                  />
                  {currentProject.status}
                </div>
                <h3 className="text-2xl font-semibold text-slate-50">{currentProject.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{currentProject.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={prevProject}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/60 text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-slate-900"
                    aria-label="Previous project"
                  >
                    {"<"}
                  </button>
                  <div className="flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/70 px-4 py-2">
                    {projectCards.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          idx === projectIndex ? "bg-cyan-300" : "bg-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextProject}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/70 bg-cyan-500/15 text-cyan-50 transition hover:-translate-y-0.5 hover:bg-cyan-400/25"
                    aria-label="Next project"
                  >
                    {">"}
                  </button>
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {projectIndex + 1}/{projectCards.length} builds
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
