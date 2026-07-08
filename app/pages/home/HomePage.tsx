import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { DroneHero } from "../../components/DroneHero";
import { DroneShowcase } from "../../components/DroneShowcase";
import { PageBackground } from "../../components/PageBackground";
import { useScrollY } from "../../hooks/useScrollY";
import heroImage from "../../assets/fellesbilde.jpg";

// --- Drone hero background ---
// Live 3D model (highest priority): rotates as you scroll.
const DRONE_MODEL = "/drone/drone.glb";
// Fallbacks (used only if DRONE_MODEL is empty):
const DRONE_VIDEO = ""; // e.g. "/drone/drone.mp4"
const DRONE_FRAME_COUNT = 0; // image sequence frame_0001.webp …
import bandImage1 from "../../assets/blog-posts/240326-5.jpg";
import bandImage2 from "../../assets/blog-posts/240326-3.jpg";
import frifondLogo from "../../assets/sponsors/frifond.png";
import elfLogo from "../../assets/sponsors/ELF.png";
import elefunLogo from "../../assets/sponsors/Elefun_Logo.png";

const stats = [
  { label: "Active members", value: "21" },
  { label: "Departments", value: "3" },
  { label: "Based in", value: "Bergen" },
];

const tracks = [
  {
    index: "01",
    title: "Airframe & CAD",
    body: "Composite frames, rapid prototyping, and aerodynamic tuning tailored for long-range and race builds.",
  },
  {
    index: "02",
    title: "Electronics & Avionics",
    body: "Flight controllers, radio links, and telemetry stacks with live dashboards and black-box logging.",
  },
  {
    index: "03",
    title: "Autonomy & AI",
    body: "Path-planning, computer vision, and on-board models that help our drones see, map, and react.",
  },
];

const departments = [
  {
    name: "Mechanical",
    tagline: "Designing the flying skeleton and muscles of our drones.",
    description:
      "Build, test, and iterate airframes that balance speed, endurance, and payload needs. From CAD to carbon fiber layups, you will own the physical design and fabrication of our drones. Get hands-on experience with composite materials, structural analysis, and flight testing to bring our designs to life.",
    focusAreas: [
      "CAD + structural design",
      "3D printing",
      "Assembly + flight testing",
      "Protection against water, dust and crashes",
      "Maintenance and repairs",
      "Mechanical integration of sensors",
    ],
    lookingFor: "Students who like design, materials, and hands-on fabrication.",
    contact: "mechanical@lifthvl.no",
  },
  {
    name: "Hardware",
    tagline: "Creating the brain in the drone and the nervous system to connect it all.",
    description:
      "Design and build the electronic systems that power our drones. From flight controllers to custom sensor boards, you will develop the hardware that enables our drones to fly smarter. Get experience with circuit design, soldering, and avionics integration as you build and test the brains of our UAVs.",
    focusAreas: [
      "Power systems",
      "Sensor integration",
      "RF + telemetry",
      "Custom PCB design",
      "Hardware testing and debugging",
      "Battery Management Systems",
      "Waterproofing and durability",
      "Sensor calibration and integration",
    ],
    lookingFor: "Students who enjoy electronics, soldering, and troubleshooting.",
    contact: "hardware@lifthvl.no",
  },
  {
    name: "Software",
    tagline: "Telling the brain in the drone what to do.",
    description:
      "Write the flight software that controls our drones in the air. From low-level control loops to high-level autonomy, you will develop the code that makes our drones fly smarter. Gain experience with embedded programming, computer vision, and simulation as you build the software that powers our UAVs. Work on real-time control systems, sensor fusion algorithms, and mission planning software to enable our drones to navigate complex environments.",
    focusAreas: [
      "Computer vision",
      "Simulation",
      "Firmware configuration",
      "Ground control software",
      "Data analysis and visualization",
      "Autonomous navigation algorithms",
      "AI models for perception and decision-making",
      "Sensor data processing",
      "Communication protocols and telemetry",
      "Flight software architecture and optimization",
    ],
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
];

export function HomePage() {
  const scrollY = useScrollY();

  return (
    <div className="relative isolate bg-black text-slate-100">
      <PageBackground scrollY={scrollY} />
      <NavBar />

      {/* ---------------- HERO (team photo — drone lives further down) ---------------- */}
      <DroneHero
        videoSrc={DRONE_VIDEO || undefined}
        frameCount={DRONE_FRAME_COUNT}
        fallbackImage={heroImage}
      >
        <div className="mx-auto w-full max-w-7xl px-5 pt-28 sm:px-8">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.4em] text-cyan-300">
              <span className="h-px w-10 bg-cyan-400" />
              Lift HVL · Student Drone Team
            </p>
            <h1 className="mt-8 text-5xl font-bold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Building drones that{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                fly smarter
              </span>{" "}
              and go further.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              We are LIFT — lifting innovation, creativity and real-world
              experience through hands-on drone engineering. Designing airframes,
              writing flight software, and pushing new pilots into the sky.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@lifthvl.no"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Join the flight crew
                <span aria-hidden>{"->"}</span>
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-100"
              >
                See what we build
              </a>
            </div>
          </div>
        </div>
      </DroneHero>

      {/* ---------------- MANIFESTO ---------------- */}
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionDivider index="01" label="Who we are" />
          <SectionTitle>
            Lift HVL is the student team crafting high-performance UAVs — from
            the first CAD sketch to the moment it leaves the ground.
          </SectionTitle>
          <Reveal delay={160}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
              Small teams own end-to-end missions: CAD to carbon, avionics
              calibration to ground-control UX. Join the crew and start lifting
              your skills to the sky.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} className="bg-black">
                <div className="p-8">
                  <div className="text-5xl font-bold tracking-tight text-cyan-300 sm:text-6xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- IMAGE BAND 1 ---------------- */}
      <ImageBand
        image={bandImage1}
        eyebrow="In the lab"
        title="Every discipline, in one room."
        scrollY={scrollY}
      />

      {/* ---------------- WHAT WE BUILD ---------------- */}
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionDivider index="02" label="What we build" />
          <SectionTitle>Three disciplines. One aircraft.</SectionTitle>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {tracks.map((track, i) => (
              <Reveal key={track.title} variant="up" delay={i * 120}>
                <article className="group h-full rounded-2xl border border-white/10 bg-gradient-to-b from-sky-500/[0.10] via-white/[0.03] to-transparent p-8 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/50">
                  <div className="font-mono text-sm tracking-[0.3em] text-cyan-400/70">
                    {track.index}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
                    {track.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-400">
                    {track.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- DRONE SHOWCASE (Queen bee) ---------------- */}
      <DroneShowcase modelSrc={DRONE_MODEL} />

      {/* ---------------- MID-PAGE STATEMENT ---------------- */}
      <section className="relative flex min-h-[80vh] items-center">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Reveal variant="fade">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-300">
              // The mission
            </p>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <p className="mt-10 text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
              We lift innovation, creativity and real-world experience — one
              flight at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- DEPARTMENTS ---------------- */}
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionDivider index="04" label="Departments" />
          <SectionTitle>Pick a department and start building.</SectionTitle>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              Each department has its own focus, mentors, and weekly sessions.
            </p>
          </Reveal>

          <div className="mt-16 space-y-6">
            {departments.map((department, i) => (
              <Reveal key={department.name} variant="up" delay={i * 80}>
                <article className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/[0.10] via-sky-500/[0.03] to-transparent p-8 transition duration-500 hover:border-cyan-300/50 sm:p-10 lg:grid-cols-[0.9fr,1.1fr]">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs tracking-[0.3em] text-cyan-300/80">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                    </div>
                    <h3 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {department.name}
                    </h3>
                    <p className="mt-3 text-lg text-slate-300">
                      {department.tagline}
                    </p>
                    <p className="mt-5 leading-relaxed text-slate-400">
                      {department.description}
                    </p>
                    <p className="mt-5 text-sm text-slate-300">
                      {department.lookingFor}
                    </p>
                    <a
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                      href={`mailto:${department.contact}`}
                    >
                      {department.contact}
                      <span aria-hidden>{"->"}</span>
                    </a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      Focus areas
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {department.focusAreas.map((focus) => (
                        <li
                          key={focus}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                        >
                          {focus}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- IMAGE BAND 2 ---------------- */}
      <ImageBand
        image={bandImage2}
        eyebrow="Fabrication"
        title="The first parts of Queen Bee."
        scrollY={scrollY}
      />

      {/* ---------------- SPONSORS ---------------- */}
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionDivider index="05" label="Partners" />
          <SectionTitle>Backed by partners who build with us.</SectionTitle>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {sponsors.map((sponsor, i) => (
              <Reveal key={sponsor.name} delay={i * 100}>
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-gradient-to-b from-sky-500/[0.08] to-transparent p-10 text-center transition duration-500 hover:-translate-y-1 hover:border-cyan-300/50"
                >
                  {sponsor.image ? (
                    <img
                      src={sponsor.image}
                      alt={sponsor.imageAlt ?? `${sponsor.name} logo`}
                      className="h-24 w-full object-contain opacity-90 transition group-hover:opacity-100"
                      loading="lazy"
                    />
                  ) : null}
                  <h3 className="text-sm font-medium text-slate-300">
                    {sponsor.name}
                  </h3>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="relative overflow-hidden border-t border-white/10 py-32 sm:py-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,0.20),transparent_50%),radial-gradient(circle_at_50%_60%,rgba(37,99,235,0.18),transparent_55%)]" />
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl lg:text-7xl">
              Ready to lift your skills to the sky?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Browse the full archive of airframes, firmware, and field tests we
              have shipped together — or reach out and join the crew.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@lifthvl.no"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Join the flight crew
                <span aria-hidden>{"->"}</span>
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-100"
              >
                View all projects
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- DISCLAIMER ---------------- */}
      <div className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <p className="text-xs leading-relaxed text-slate-500">
            <span className="font-semibold uppercase tracking-[0.2em] text-slate-400">
              Disclaimer:{" "}
            </span>
            LIFT HVL is a student organization and does not conduct drone flights
            on behalf of Høgskulen på Vestlandet (HVL). All activity and public
            communication are carried out by the student team and should not be
            understood as operational flying or official activity under HVL.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/** Technical section divider: number + label + animated gradient line. */
function SectionDivider({ index, label }: { index: string; label: string }) {
  return (
    <Reveal variant="fade">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-cyan-400">{index}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">
          {label}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 via-white/10 to-transparent" />
      </div>
    </Reveal>
  );
}

/** Large, bold section heading in the Anduril/Revolve register. */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal delay={80}>
      <h2 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.03] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
        {children}
      </h2>
    </Reveal>
  );
}

/** Full-bleed parallax image band with an overlaid caption. */
function ImageBand({
  image,
  eyebrow,
  title,
  scrollY,
}: {
  image: string;
  eyebrow: string;
  title: string;
  scrollY: number;
}) {
  return (
    <section className="relative flex h-[70vh] items-end overflow-hidden">
      <div
        className="absolute inset-0 -z-10 scale-110"
        style={{ transform: `translateY(${scrollY * 0.06}px) scale(1.12)` }}
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <Reveal variant="up">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
