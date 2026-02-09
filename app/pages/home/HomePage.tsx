import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

const stats = [
  { label: "Active members", value: "21" },
  // { label: "Airframes built", value: "0" },
];

const tracks = [
  {
    title: "Airframe & CAD",
    body: "Composite frames, rapid prototyping, and aerodynamic tuning tailored for long-range and race builds.",
  },
  {
    title: "Electronics & Avionics",
    body: "Flight controllers, radio links, and telemetry stacks with live dashboards and black-box logging.",
  },
  {
    title: "Autonomy & AI",
    body: "Path-planning, computer vision, and on-board models that help our drones see, map, and react.",
  },
];

const departments = [
  {
    name: "Mechanical",
    tagline: "Designing the flying skeleton and muscles of our drones.",
    description: "Build, test, and iterate airframes that balance speed, endurance, and payload needs. From CAD to carbon fiber layups, you will own the physical design and fabrication of our drones. Get hands-on experience with composite materials, structural analysis, and flight testing to bring our designs to life.",
    focusAreas: ["CAD + structural design", "3D printing", "Assembly + flight testing", "Protection against water, dust and crashes", "Maintenance and repairs", "Mechanical integration of sensors"],
    lookingFor: "Students who like design, materials, and hands-on fabrication.",
    contact: "mechanical@lifthvl.no",
  },
  {
    name: "Hardware",
    tagline: "Creating the brain in the drone and the nervous system to connect it all.",
    description: "Design and build the electronic systems that power our drones. From flight controllers to custom sensor boards, you will develop the hardware that enables our drones to fly smarter. Get experience with circuit design, soldering, and avionics integration as you build and test the brains of our UAVs.",
    focusAreas: ["Power systems", "Sensor integration", "RF + telemetry", "Custom PCB design", "Hardware testing and debugging", "Battery Management Systems", "Waterproofing and durability", "Sensor calibration and integration"],
    lookingFor: "Students who enjoy electronics, soldering, and troubleshooting.",
    contact: "hardware@lifthvl.no",
  },
  {
    name: "Software",
    tagline: "Telling the brain in the drone what to do.",
    description: "Write the flight software that controls our drones in the air. From low-level control loops to high-level autonomy, you will develop the code that makes our drones fly smarter. Gain experience with embedded programming, computer vision, and simulation as you build the software that powers our UAVs. Work on real-time control systems, sensor fusion algorithms, and mission planning software to enable our drones to navigate complex environments.",
    focusAreas: ["Computer vision", "Simulation", "Firmware configuration", "Ground control software", "Data analysis and visualization", "Autonomous navigation algorithms", "AI models for perception and decision-making", "Sensor data processing", "Communication protocols and telemetry", "Flight software architecture and optimization"],
    lookingFor: "Students who like programming and robotics.",
    contact: "software@lifthvl.no",
  },
];

const sponsors: Array<{
  name: string;
  image?: string;
  imageAlt?: string;
  link: string;
}> = [
  {
    name: "Frifond",
    image: "app/assets/sponsors/frifond.png",
    imageAlt: "Frifond logo",
    link: "https://frifond.no",
  },
  {
    name: "Elektroingeniørenes linjeforening",
    image: "app/assets/sponsors/ELF.png",
    imageAlt: "Elektroingeniørenes linjeforening logo",
    link: "https://www.instagram.com/elektrohvl/",
  },
];

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

      <NavBar />

      <main className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="flex flex-col gap-12 pt-16 lg:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-500" />
            Lift HVL | Student Drone Team
            <span className="h-px w-10 bg-cyan-500" />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-8">
              <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
                We are LIFT - lifting innovation, creativity and real-word experience through hands-on drone engineering.
              </h1>
              <h2 className="text-xl font-semibold leading-tight text-slate-100 sm:text-xl lg:text-2xl">
                Building drones that{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  fly smarter
                </span>{" "}
                and go further.
              </h2>
              <p className="text-lg text-slate-300 sm:text-xl">
                Lift HVL is the student team crafting high-performance UAVs - designing airframes, writing flight software,
                and pushing new pilots into the sky. Join the crew and start lifting your skills to the sky.
              </p>
              <aside className="rounded-2xl border border-amber-300/40 bg-amber-200/10 px-5 py-4 text-sm text-amber-100">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Disclaimer</p>
                <p className="mt-2 leading-relaxed">
                  LIFT HVL is a student organization and does not conduct drone flights on behalf of Høgskulen på Vestlandet
                  (HVL). All activity and public communication are carried out by the student team and should not be
                  understood as operational flying or official activity under HVL.
                </p>
              </aside>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hello@lifthvl.no"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Join the flight crew
                  <span aria-hidden>{"->"}</span>
                </a>
                <a
                  href="projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-100"
                >
                  See what we build
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-emerald-300/70 hover:text-emerald-100"
                >
                  Read project updates
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 backdrop-blur"
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
                Small teams own end-to-end missions: CAD to carbon, avionics calibration to ground control UX.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] justify-items-center gap-6">
            {tracks.map((track) => (
              <article
                key={track.title}
                className="w-full max-w-sm rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-950/60 to-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
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
        <section className="mt-20 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Departments</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Pick a department and start building
            </h2>
            <p className="mt-2 max-w-3xl text-slate-300">
              Each department has its own focus, mentors, and weekly sessions. 
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {departments.map((department) => (
              <article
                key={department.name}
                className="flex w-full max-w-3xl flex-col rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/5 via-slate-950/70 to-slate-900/80 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">{department.name}</h3>
                    <p className="mt-1 text-sm text-emerald-200">{department.tagline}</p>
                  </div>
                  <span className="rounded-full border border-emerald-300/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
                    Team
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{department.description}</p>
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">Focus areas</div>
                <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {department.focusAreas.map((focus) => (
                    <li
                      key={focus}
                      className="rounded-full border border-slate-800/80 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {focus}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate-300">{department.lookingFor}</p>
                <a
                  className="mt-auto pt-4 text-xs uppercase tracking-[0.2em] text-emerald-200"
                  href={`mailto:${department.contact}`}
                >
                  Contact: {department.contact}
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-20 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Sponsors</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Backed by partners who build with us</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {sponsors.map((sponsor) => (
              <article
                key={sponsor.name}
                className="rounded-2xl border border-amber-300/30 bg-gradient-to-b from-amber-500/5 via-slate-950/70 to-slate-900/80 p-6 cursor-pointer"
                onClick={() => window.document.location = sponsor.link}
              >
                {sponsor.image ? (
                  <img
                    src={sponsor.image}
                    alt={sponsor.imageAlt ?? `${sponsor.name} logo`}
                    className="mb-4 h-75 w-full rounded-xl border border-slate-700/70 bg-slate-900/60 object-contain p-2"
                    loading="lazy"
                  />
                ) : (
                  <div className="mb-4 flex h-16 w-full items-center justify-center rounded-xl border border-dashed border-slate-700/80 bg-slate-900/40 text-xs uppercase tracking-[0.2em] text-slate-400">
                    Add sponsor image
                  </div>
                )}
                <h3 className="text-xl font-semibold text-slate-50">{sponsor.name}</h3>
              </article>
            ))}
          </div>
        </section>
        <section id="projects" className="mt-30 space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Projects</p>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">See all builds and missions</h2>
          <p className="mx-auto max-w-3xl text-slate-300">
            Browse the full archive of airframes, firmware, and field tests we have shipped together.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View all projects
              <span aria-hidden>{"->"}</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
