import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import frifondLogo from "../../assets/sponsors/frifond.png";
import elfLogo from "../../assets/sponsors/ELF.png";
import elefunLogo from "../../assets/sponsors/Elefun_Logo.png";
import altiumLogo from "../../assets/sponsors/altium.png";
import contecLogo from "../../assets/sponsors/contec.png";
import elprintLogo from "../../assets/sponsors/elprint.svg";
import romvesenLogo from "../../assets/sponsors/romvesen.svg";

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
  imageBg?: "light" | "dark";
  link: string;
}> = [
  {
    name: "Elefun",
    image: elefunLogo,
    imageAlt: "Elefun logo",
    link: "https://elefun.no",
  },
  {
    name: "Frifond",
    image: frifondLogo,
    imageAlt: "Frifond logo",
    link: "https://frifond.no",
  },
  {
    name: "Elektroingeniørenes linjeforening",
    image: elfLogo,
    imageAlt: "Elektroingeniørenes linjeforening logo",
    link: "https://www.instagram.com/elektrohvl/",
  },
  {
    name: "Altium",
    image: altiumLogo,
    imageAlt: "Altium logo",
    link: "https://www.altium.com",
  },
  {
    name: "Contec Electronics AS",
    image: contecLogo,
    imageAlt: "Contec Electronics AS logo",
    link: "https://contecel.com",
  },
  {
    name: "Elprint",
    image: elprintLogo,
    imageAlt: "Elprint logo",
    link: "https://elprint.no",
  },
  {
    name: "Romvesen",
    image: romvesenLogo,
    imageAlt: "Romvesen logo",
    imageBg: "dark",
    link: "https://romvesen.as",
  },
];

export function HomePage() {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const department = departments[activeDepartment];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

      <NavBar />

      <main className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="flex flex-col gap-12 pt-16 lg:pt-24">
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
            </div>
          </div>
        </section>
        <section className="mt-20 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
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
          <div className="border-b border-slate-800">
            <div className="flex flex-wrap gap-8">
              {departments.map((dept, index) => (
                <button
                  key={dept.name}
                  type="button"
                  onClick={() => setActiveDepartment(index)}
                  className={`border-b-2 pb-3 text-lg font-semibold transition ${
                    index === activeDepartment
                      ? "border-emerald-400 text-slate-50"
                      : "border-transparent text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-10 pt-4 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold leading-snug text-emerald-300 sm:text-2xl">
                {department.tagline}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{department.description}</p>
              <p className="text-sm text-slate-300 sm:text-base">{department.lookingFor}</p>
              <a
                className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 transition hover:text-emerald-200"
                href={`mailto:${department.contact}`}
              >
                Contact: {department.contact}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Focus areas</p>
              <ul className="mt-3 divide-y divide-slate-800">
                {department.focusAreas.map((focus) => (
                  <li key={focus} className="flex items-center gap-3 py-3 text-sm text-slate-200">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" aria-hidden />
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-20 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Sponsors</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Backed by partners who build with us</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-amber-300/30 bg-gradient-to-b from-amber-500/5 via-slate-950/70 to-slate-900/80 p-6 transition hover:-translate-y-1 hover:border-amber-300/60"
              >
                {sponsor.image ? (
                  <img
                    src={sponsor.image}
                    alt={sponsor.imageAlt ?? `${sponsor.name} logo`}
                    className={`mb-4 h-75 w-full rounded-xl border border-slate-700/70 object-contain p-2 ${
                      sponsor.imageBg === "dark" ? "bg-slate-900" : "bg-white"
                    }`}
                    loading="lazy"
                  />
                ) : null
                }
                <h3 className="text-xl font-semibold text-slate-50">{sponsor.name}</h3>
              </a>
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
