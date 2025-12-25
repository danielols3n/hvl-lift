import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

const stats = [
  { label: "Active members", value: "120+" },
  { label: "Airframes built", value: "18" },
];

const tracks = [
  {
    title: "Airframe & CAD",
    body: "Composite frames, rapid prototyping, and aerodynamic tuning tailored for long-range and race builds.",
  },
  {
    title: "Avionics & Control",
    body: "Flight controllers, radio links, and telemetry stacks with live dashboards and black-box logging.",
  },
  {
    title: "Autonomy & AI",
    body: "Path-planning, computer vision, and on-board models that help our drones see, map, and react.",
  },
];

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

      <NavBar />

      <main className="relative mx-auto max-w-6xl px-6 pb-24">
        <section className="flex flex-col gap-12 pt-16 lg:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-500" />
            HVL Lift | Student Drone Lab
            <span className="h-px w-10 bg-cyan-500" />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-8">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Building drones that{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  fly smarter
                </span>{" "}
                and go further.
              </h1>
              <p className="text-lg text-slate-300 sm:text-xl">
                HVL Lift is the student team crafting high-performance UAVs - designing airframes, writing flight software,
                and pushing new pilots into the sky. Join the crew and ship your next build.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 shadow-[0_0_35px_-8px_rgba(6,182,212,0.6)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Join the flight crew
                  <span aria-hidden>{"->"}</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-100"
                >
                  See what we build
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 shadow-lg shadow-cyan-500/5 backdrop-blur"
                  >
                    <div className="text-2xl font-semibold text-cyan-300">{stat.value}</div>
                    <div className="mt-1 text-sm uppercase tracking-wide text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">What we build</p>
              <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Hardware and firmware in the lab</h2>
              <p className="mt-2 max-w-3xl text-slate-300">
                Small teams own end-to-end missions: CAD to carbon, ESC calibration to ground control UX.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tracks.map((track) => (
              <article
                key={track.title}
                className="rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-950/60 to-slate-900/80 p-6 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/60"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-200">
                  <span aria-hidden>*</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-50">{track.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{track.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Projects</p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">See all builds and missions</h2>
          <p className="mx-auto max-w-3xl text-slate-300">
            Browse the full archive of airframes, firmware, and field tests we have shipped together.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 shadow-[0_0_35px_-8px_rgba(6,182,212,0.6)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View all projects
              <span aria-hidden>{"->"}</span>
            </a>
          </div>
        </section>

        <section className="mt-20 flex flex-col gap-4 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-slate-950/60 to-emerald-400/10 p-8 text-center shadow-[0_25px_80px_-45px_rgba(34,211,238,0.6)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Ready to build</p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Your next launch starts here</h2>
          <p className="mx-auto max-w-3xl text-slate-200">
            Bring an idea, a 3D print, or a half-soldered frame. We'll supply flight sims, mentors, and a hangar full of
            tools. Let's get you flying.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:lift@hvl.no"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 shadow-[0_0_35px_-8px_rgba(6,182,212,0.6)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Contact the team
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/30 px-6 py-3 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-100"
            >
              Download our kit list
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
