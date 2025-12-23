const stats = [
  { label: "Active members", value: "120+" },
  { label: "Airframes built", value: "18" },
  { label: "Flight hours logged", value: "430+" },
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

const projects = [
  {
    title: "Valkyrie FPV",
    status: "Flight testing",
    body: "240 km/h FPV racer with digital video, active cooling, and real-time current draw overlays.",
    tags: ["FPV", "Telemetry", "Race"],
  },
  {
    title: "Aurora Surveyor",
    status: "In assembly",
    body: "Autonomous mapping platform with RTK GPS, gimbal-stabilized payload, and LiDAR mockups for sim.",
    tags: ["Autonomy", "Mapping", "CAD"],
  },
  {
    title: "Lift Core",
    status: "Open source",
    body: "TypeScript mission planning UI + React ground station with modular widgets for your own builds.",
    tags: ["Software", "UI", "Open Source"],
  },
];

const events = [
  {
    title: "Build night",
    time: "Wednesdays - 18:00 - Makerspace",
    body: "Hands-on soldering, CAD critiques, and firmware flashing. Bring your frame or start from zero.",
  },
  {
    title: "Flight field day",
    time: "Saturdays - 11:00 - Slettebakken",
    body: "Range tests, failsafe drills, and chase-cam footage review with telemetry breakdowns.",
  },
  {
    title: "Intro workshop",
    time: "Jan 21 - 17:30 - Lab 3",
    body: "Crash course on PID tuning, simulator practice, and radio safety. Perfect first mission.",
  },
];

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

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
                  href="#events"
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

            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-cyan-500/20" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-slate-950/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Live Telemetry</span>
                  <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Armed
                  </span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <MetricCard label="Altitude" value="72 m" barWidth="72%" />
                  <MetricCard label="Battery" value="86%" barWidth="86%" accent="cyan" />
                  <MetricCard label="Ground speed" value="64 km/h" barWidth="64%" accent="emerald" />
                  <MetricCard label="Link quality" value="99%" barWidth="99%" accent="violet" />
                </div>
                <div className="mt-6 rounded-2xl border border-slate-800/80 bg-black/30 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Next mission</span>
                    <span className="text-slate-200">Saturday - 11:00</span>
                  </div>
                  <div className="mt-3 h-28 rounded-xl border border-cyan-500/15 bg-gradient-to-r from-cyan-500/15 via-transparent to-emerald-400/10" />
                  <div className="mt-3 text-xs uppercase tracking-[0.15em] text-cyan-200">Simulated course map</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">What we build</p>
              <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Hardware, firmware, and flight hours</h2>
              <p className="mt-2 max-w-3xl text-slate-300">
                Small teams own end-to-end missions: CAD to carbon, ESC calibration to ground control UX.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {tracks.map((track) => (
              <article
                key={track.title}
                className="rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-6 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/60"
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

        <section id="projects" className="mt-20 space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Active missions</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Projects on the bench</h2>
            <p className="text-slate-300">
              Grab an open task, pair on firmware, or test new props. Everything is documented and open for pull requests.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
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
                  <p className="text-sm leading-relaxed text-slate-300">{project.body}</p>
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

        <section id="events" className="mt-20 space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Flight schedule</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Show up, build, launch</h2>
            <p className="text-slate-300">
              Weekly build time, open field days, and intro nights to get you flying safely and quickly.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/70 via-slate-950 to-black/60 p-5 shadow-lg shadow-cyan-500/5"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  <span>Event</span>
                  <span className="h-px w-10 bg-cyan-500" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-50">{event.title}</h3>
                <p className="text-sm text-cyan-100">{event.time}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{event.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 flex flex-col gap-4 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-slate-900/60 to-emerald-400/10 p-8 text-center shadow-[0_25px_80px_-45px_rgba(34,211,238,0.6)] backdrop-blur">
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
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  barWidth: string;
  accent?: "cyan" | "emerald" | "violet";
};

function MetricCard({ label, value, barWidth, accent = "cyan" }: MetricCardProps) {
  const color =
    accent === "emerald" ? "from-emerald-400/60" : accent === "violet" ? "from-violet-400/60" : "from-cyan-400/60";

  return (
    <div className="space-y-2 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>{label}</span>
        <span className="font-semibold text-slate-50">{value}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div className={`h-full rounded-full bg-gradient-to-r ${color} via-white/40 to-white/10`} style={{ width: barWidth }} />
      </div>
    </div>
  );
}
