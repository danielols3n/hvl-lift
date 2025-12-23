const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Our team", href: "/team" },
];

const projectCards = [
  {
    title: "Valkyrie FPV",
    status: "Flight testing",
    summary: "240 km/h FPV racer with digital video, active cooling, and current draw overlays on the OSD.",
    tags: ["FPV", "Racing", "Telemetry"],
  },
  {
    title: "Aurora Surveyor",
    status: "In assembly",
    summary: "Autonomous mapping platform with RTK GPS, gimbal payload, and LiDAR mockups for simulation.",
    tags: ["Mapping", "RTK", "Autonomy"],
  },
  {
    title: "Lift Core",
    status: "Open source",
    summary: "TypeScript mission planner and React ground station with modular widgets for your own builds.",
    tags: ["Software", "UI", "Open Source"],
  },
  {
    title: "Northwind VTOL",
    status: "Design review",
    summary: "Hybrid tilt-rotor with carbon spar wings, targeting 55 min endurance on 6S Li-ion packs.",
    tags: ["VTOL", "CAD", "Endurance"],
  },
  {
    title: "Firefly Micro",
    status: "Testing",
    summary: "Sub-250g trainer with durable TPU canopy, ELRS link, and beginner-friendly tuning presets.",
    tags: ["Trainer", "Lightweight", "ELRS"],
  },
  {
    title: "Nightshade Cine",
    status: "Prototype",
    summary: "Cinematic quad with stabilized payload, ND filter kit, and noise-dampened prop selection.",
    tags: ["Cinematic", "Payload", "Noise"],
  },
];

const phases = [
  {
    title: "Explore",
    body: "Define the mission, constraints, and risks. Sketch airframes, avionics, and payload needs with the crew.",
  },
  {
    title: "Build & Sim",
    body: "CAD, print, solder, and flash. Validate in simulators and bench tests before heading to the field.",
  },
  {
    title: "Fly & Iterate",
    body: "Field test, log data, and refine tunes. Ship docs so the next pilot can pick up where you left off.",
  },
];

const highlights = [
  { label: "Active builds", value: "6" },
  { label: "Open source repos", value: "14" },
  { label: "Contributors", value: "45" },
];

export function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

      <nav className="sticky top-0 z-30 border-b border-slate-800/60 bg-gray-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <span className="h-px w-8 bg-cyan-500" />
            HVL Lift
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 transition hover:-translate-y-0.5 hover:text-cyan-100 hover:underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:lift@hvl.no"
              className="ml-1 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 font-semibold text-gray-950 shadow-[0_0_25px_-8px_rgba(6,182,212,0.6)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Contact
              <span aria-hidden>{"->"}</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-6xl px-6 pb-24">
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
                  href="mailto:lift@hvl.no"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 shadow-[0_0_35px_-8px_rgba(6,182,212,0.6)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Propose a project
                  <span aria-hidden>{"->"}</span>
                </a>
                <a
                  href="#projects-list"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-100"
                >
                  View active builds
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 shadow-lg shadow-cyan-500/5 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-cyan-300">{item.value}</div>
                  <div className="mt-1 text-sm uppercase tracking-wide text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects-list" className="mt-20 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Active builds</p>
              <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">What we are shipping next</h2>
              <p className="mt-2 max-w-3xl text-slate-300">
                Hardware in the lab and software in the repo. Jump in, review, or test in the field.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projectCards.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/60"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                    {project.status}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-emerald-400/10 p-8 shadow-[0_25px_80px_-45px_rgba(34,211,238,0.6)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">How we build</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-50">Ship-ready process</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              Each project moves through clear checkpoints so pilots, builders, and reviewers stay aligned.
            </p>
            <div className="mt-5 space-y-4">
              {phases.map((phase, idx) => (
                <div
                  key={phase.title}
                  className="rounded-2xl border border-slate-800/70 bg-black/20 p-4 shadow-lg shadow-cyan-500/5"
                >
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm text-cyan-100">
                      {idx + 1}
                    </span>
                    {phase.title}
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{phase.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-8 shadow-lg shadow-cyan-500/5">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Want to help?</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-50">Grab a role and jump in</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="rounded-xl border border-slate-800/70 bg-black/20 px-4 py-3">
                Firmware & control: tune PIDs, integrate sensors, and harden failsafes.
              </li>
              <li className="rounded-xl border border-slate-800/70 bg-black/20 px-4 py-3">
                Airframes: CAD reviews, composite layups, and crash-friendly tweaks.
              </li>
              <li className="rounded-xl border border-slate-800/70 bg-black/20 px-4 py-3">
                Ground station: React UI, mission planning UX, and telemetry dashboards.
              </li>
              <li className="rounded-xl border border-slate-800/70 bg-black/20 px-4 py-3">
                Flight ops: checklists, safety officers, and field test coordination.
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:lift@hvl.no"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-gray-950 shadow-[0_0_25px_-8px_rgba(6,182,212,0.6)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Join a project
                <span aria-hidden>{"->"}</span>
              </a>
              <a
                href="/team"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-5 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-100"
              >
                Meet the team
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
