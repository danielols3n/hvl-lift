import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

const statusColorClasses = {
  red: { badge: "bg-rose-500/15 text-rose-200", dot: "bg-rose-400" },
  amber: { badge: "bg-amber-500/15 text-amber-200", dot: "bg-amber-400" },
  green: { badge: "bg-emerald-500/15 text-emerald-200", dot: "bg-emerald-400" },
  blue: { badge: "bg-sky-500/15 text-sky-200", dot: "bg-sky-400" },
} as const;

type StatusColor = keyof typeof statusColorClasses;

const projectOverview: Array<{
  title: string;
  status: string;
  statusColor: StatusColor;
  phase: string;
  timeline: string;
  summary: string;
  focus: string;
  tags: string[];
  details: {
    objective: string;
    currentWork: string;
    nextMilestone: string;
    needs: string[];
  };
}> = [
  {
    title: "Queen Bee",
    status: "Planning",
    statusColor: "red",
    phase: "Planning",
    timeline: "1st semester 2026",
    focus: "Drone with avionics and coupling/decoupling mechanism for controlling smaller drones.",
    summary: "Building the first Lift HVL drone with focus on making the queen bee for our 2nd semester 2026 project",
    tags: ["Coupling and de-coupling", "Modelling", "Telemetry"],
    details: {
      objective: "Create a drone for controlling smaller drones as well as a mechanism for coupling and decoupling the smaller drones in flight.",
      currentWork: "Planning the airframe and avionics architecture.",
      nextMilestone: "Complete initial CAD model and order components for prototyping.",
      needs: ["Planning", "Electronics", "Software"],
    },
  },
];

const highlights = [
  { label: "Active programs", value: "1" },
  { label: "Active contributors", value: "21" },
  // { label: "Flight tests planned", value: "6" },
];

const missionStats = [
  { label: "No stats from the current missions yet...", value: "-", detail: "" },
];

const timeline = [
  {
    date: "January 2026",
    title: "Interviews",
    description: "We're interviewing new candidates to join Lift for the spring semester.",
  },
  {
    date: "February 2026",
    title: "Project kickoff",
    description: "Kickoff of the Queen Bee project for the spring semester. Starting with planning and brainstorming sessions to define the project scope and architecture.",
  },
  {
    date: "March 2026",
    title: "First 3D model is printed!",
    description: "The first 3D printed components of the Queen Bee airframe are ready.",
  },
  {
    date: "Late March 2026",
    title: "Assembly begins",
    description: "The assembly of the first Queen Bee prototype begins, starting with the airframe and basic avionics integration.",
  },
  {
    date: "Early April 2026",
    title: "First flight tests",
    description: "The first flight tests of the Queen Bee prototype are scheduled to begin.",
  },
  {
    date: "Late April 2026",
    title: "Extensive testing and iteration",
    description: "Based on the results from the initial flight tests, we will iterate on the design and conduct extensive testing to refine the Queen Bee.",
  },
];

export function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<(typeof projectOverview)[number] | null>(null);

  useEffect(() => {
    if (activeProject) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
    return undefined;
  }, [activeProject]);

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
                  href="mailto:hello@lifthvl.no"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Propose a project
                  <span aria-hidden>{"->"}</span>
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-300/70 hover:text-emerald-100"
                >
                  Read project updates
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-100"
                >
                  View the roadmap
                </button>
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

        {/* <section className="mt-14 grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
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
        </section> */}

        <section className="mt-20 space-y-8">
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Projects overview</p>
              <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">The full project slate</h2>
              <p className="mt-2 max-w-3xl text-slate-300">
                Each program has a clear focus, timeline, and phase so new members can land where they fit best.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projectOverview.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveProject(project)}
                className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/70 p-6 text-left transition hover:-translate-y-1 hover:border-cyan-400/50"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(6,182,212,0.08),transparent_45%)] transition group-hover:opacity-100" />
                <div className="relative space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${statusColorClasses[project.statusColor].badge}`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${statusColorClasses[project.statusColor].dot}`}
                        aria-hidden
                      />
                      {project.status}
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{project.timeline}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-50">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
                  </div>
                  <div className="grid gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4 text-sm text-slate-300 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</p>
                      <p className="mt-1 text-slate-100">{project.focus}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Phase</p>
                      <p className="mt-1 text-slate-100">{project.phase}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                    Open project details
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Timeline</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">What happens next</h2>
            <p className="mt-2 max-w-3xl text-slate-300">
              Scroll through the upcoming milestones and see where every project ships value.
            </p>
          </div>
          <div className="relative space-y-6 rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/60 to-slate-900/70 p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(52,211,153,0.09),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(6,182,212,0.08),transparent_45%)]" />
            <div className="relative border-l border-slate-800/80 pl-6">
              {timeline.map((item) => (
                <div key={item.title} className="relative pb-8 last:pb-0">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 -ml-8 h-4 w-4 shrink-0 aspect-square rounded-full border border-cyan-400/70 bg-slate-950" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.date}</p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur"
            aria-label="Close project details"
            onClick={() => setActiveProject(null)}
          />
          <div className="relative w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-800/80 bg-slate-950/95 p-6 text-slate-100 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/70 text-slate-200 transition hover:border-cyan-400/70 hover:text-cyan-200"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="pr-12">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${statusColorClasses[activeProject.statusColor].badge}`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${statusColorClasses[activeProject.statusColor].dot}`}
                  aria-hidden
                />
                {activeProject.status}
              </div>
              <h3 className="mt-4 text-3xl font-semibold">{activeProject.title}</h3>
              <p className="mt-2 text-slate-300">{activeProject.summary}</p>
            </div>
            <div className="mt-6 grid gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 text-sm text-slate-200 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</p>
                <p className="mt-1 text-slate-100">{activeProject.focus}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Phase</p>
                <p className="mt-1 text-slate-100">{activeProject.phase}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Timeline</p>
                <p className="mt-1 text-slate-100">{activeProject.timeline}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Next milestone</p>
                <p className="mt-1 text-slate-100">{activeProject.details.nextMilestone}</p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm text-slate-200">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Objective</p>
                <p className="mt-2 text-slate-100">{activeProject.details.objective}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current work</p>
                <p className="mt-2 text-slate-100">{activeProject.details.currentWork}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Main focus</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.details.needs.map((need) => (
                    <span
                      key={need}
                      className="rounded-full border border-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {need}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
