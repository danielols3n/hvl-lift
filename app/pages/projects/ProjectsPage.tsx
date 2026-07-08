import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { ScrambleText } from "../../components/ScrambleText";
import { PageHeader } from "../../components/PageHeader";
import { SectionDivider, SectionTitle } from "../../components/Section";
import { BlueprintBackground } from "../../components/BlueprintBackground";
import { DroneShowcase } from "../../components/DroneShowcase";
import assemblyDrawing from "../../assets/drawings/queen-bee-assembly.png";
import dimensionsDrawing from "../../assets/drawings/queen-bee-dimensions.png";
import motorMountDrawing from "../../assets/drawings/motor-mount.png";
import testPlatformDrawing from "../../assets/drawings/test-platform.png";

const DRONE_MODEL = "/drone/drone.glb";

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
    focus:
      "Drone with avionics and coupling/decoupling mechanism for controlling smaller drones.",
    summary:
      "Building the first Lift HVL drone with focus on making the queen bee for our 2nd semester 2026 project",
    tags: ["Coupling and de-coupling", "Modelling", "Telemetry"],
    details: {
      objective:
        "Create a drone for controlling smaller drones as well as a mechanism for coupling and decoupling the smaller drones in flight.",
      currentWork: "Planning the airframe and avionics architecture.",
      nextMilestone:
        "Complete initial CAD model and order components for prototyping.",
      needs: ["Planning", "Electronics", "Software"],
    },
  },
];

const highlights = [
  { label: "Active programs", value: "1" },
  { label: "Active contributors", value: "21" },
];

/** Technical drawings — all produced in-house by the Mechanical team. */
const drawings = [
  {
    src: assemblyDrawing,
    alt: "Queen Bee assembly drawing with numbered parts list",
    title: "Assembly & bill of materials",
    caption:
      "Every part is numbered and specified. The material column is redacted.",
    wide: true,
  },
  {
    src: dimensionsDrawing,
    alt: "Queen Bee dimensioned general arrangement drawing",
    title: "General arrangement",
    caption: "A rotor span of 1 186 mm, an overall height of 662 mm, and six arms.",
    wide: false,
  },
  {
    src: motorMountDrawing,
    alt: "Motor mount CAD detail",
    title: "Motor mount",
    caption: "We designed this motor mount ourselves and print it in PLA.",
    wide: false,
  },
];

const timeline = [
  {
    date: "January 2026",
    title: "Interviews",
    description:
      "We're interviewing new candidates to join Lift for the spring semester.",
  },
  {
    date: "February 2026",
    title: "Project kickoff",
    description:
      "Kickoff of the Queen Bee project for the spring semester. Starting with planning and brainstorming sessions to define the project scope and architecture.",
  },
  {
    date: "March 2026",
    title: "First 3D model is printed!",
    description:
      "The first 3D printed components of the Queen Bee airframe are ready.",
  },
  {
    date: "Late March 2026",
    title: "Assembly begins",
    description:
      "The assembly of the first Queen Bee prototype begins, starting with the airframe and basic avionics integration.",
  },
  {
    date: "Early April 2026",
    title: "First flight tests",
    description:
      "The first flight tests of the Queen Bee prototype are scheduled to begin.",
  },
  {
    date: "Late April 2026",
    title: "Extensive testing and iteration",
    description:
      "Based on the results from the initial flight tests, we will iterate on the design and conduct extensive testing to refine the Queen Bee.",
  },
];

export function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<
    (typeof projectOverview)[number] | null
  >(null);

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
    <div className="relative isolate min-h-screen bg-black text-slate-100">
      <BlueprintBackground />
      <NavBar />

      <PageHeader
        eyebrow="Projects & Missions"
        title="From CAD to maiden flight."
        subtitle="We are volunteer students and the first drone organisation in Bergen. Everything on this page is still a prototype, and these are the drawings behind it."
      >
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@lifthvl.no"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Propose a project
            <span aria-hidden>{"->"}</span>
          </a>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-100"
          >
            Read project updates
          </a>
          <div className="flex gap-8 sm:ml-6">
            {highlights.map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold tracking-tight text-cyan-300">
                  {item.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageHeader>

      <main className="relative">
        {/* ---------------- 01 PROJECT OVERVIEW ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionDivider index="01" label="Project overview" />
            <SectionTitle>The full project slate.</SectionTitle>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-lg text-slate-400">
                Each program has a clear focus, timeline, and phase so new
                members can land where they fit best.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {projectOverview.map((project) => (
                <Reveal key={project.title} variant="up">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="group h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/[0.10] via-sky-500/[0.03] to-transparent p-8 text-left transition duration-500 hover:-translate-y-1 hover:border-cyan-300/50"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs ${statusColorClasses[project.statusColor].badge}`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${statusColorClasses[project.statusColor].dot}`}
                          aria-hidden
                        />
                        {project.status}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {project.timeline}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-slate-400">{project.summary}</p>

                    <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-black/50 p-5 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          Focus
                        </p>
                        <p className="mt-1 text-sm text-slate-200">
                          {project.focus}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          Phase
                        </p>
                        <p className="mt-1 text-sm text-slate-200">
                          {project.phase}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
                      Open project details {"->"}
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 02 THE AIRCRAFT (interactive 3D) ---------------- */}
        <DroneShowcase modelSrc={DRONE_MODEL} index="02" label="The aircraft" />

        {/* ---------------- 03 ENGINEERING / DRAWINGS ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionDivider index="03" label="Engineering" />
            <SectionTitle>Every part is drawn before it is built.</SectionTitle>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-lg text-slate-400">
                Queen Bee is a hexacopter our Mechanical team designed from
                scratch. It is built in carbon fiber, aluminium and 3D printed
                PLA, and it has not flown yet.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {drawings.map((d, i) => (
                <Reveal
                  key={d.title}
                  variant="up"
                  delay={i * 100}
                  className={d.wide ? "lg:col-span-2" : ""}
                >
                  <figure className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-500 hover:border-cyan-300/40">
                    <div className="overflow-hidden bg-black p-4">
                      <img
                        src={d.src}
                        alt={d.alt}
                        loading="lazy"
                        /* invert + hue-rotate turns black-on-white line art into
                           white-on-black while keeping blue dimensions blue */
                        className="w-full invert hue-rotate-180 opacity-90 transition duration-700 group-hover:opacity-100"
                      />
                    </div>
                    <figcaption className="border-t border-white/10 p-6">
                      <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                        {d.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">
                        <ScrambleText text={d.caption} />
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 03 TESTBED (third-party airframe) ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionDivider index="04" label="Software & swarm testbed" />
            <SectionTitle>A platform we did not design.</SectionTitle>

            <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
              <Reveal variant="up">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Third-party airframe
                  </span>
                  <p className="mt-7 text-lg leading-relaxed text-slate-300">
                    This airframe was <strong className="text-white">not designed by us</strong>.
                    We optimise it as a platform for developing and validating our
                    flight software and swarm coordination, long before any of that
                    code runs on Queen Bee.
                  </p>
                  <p className="mt-5 leading-relaxed text-slate-400">
                    It is a smaller quadcopter, roughly 400 mm across. Software can
                    iterate on control loops, sensor fusion and multi-agent behaviour
                    with real hardware while Mechanical keeps building Queen Bee.
                  </p>
                  <dl className="mt-10 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                    {[
                      { label: "Class", value: "~400 mm quadcopter" },
                      { label: "Height", value: "322 mm" },
                      { label: "Origin", value: "Third-party design" },
                      { label: "Used for", value: "Software · Swarm" },
                    ].map((s) => (
                      <div key={s.label} className="bg-black/80 p-5">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          {s.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-slate-100">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>

              <Reveal variant="up" delay={120}>
                <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="bg-black p-4">
                    <img
                      src={testPlatformDrawing}
                      alt="Dimensioned drawing of the third-party quadcopter test platform"
                      loading="lazy"
                      className="w-full invert hue-rotate-180 opacity-90"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 p-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Test platform · not a Lift HVL design
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- 04 TIMELINE ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionDivider index="05" label="Timeline" />
            <SectionTitle>What happens next.</SectionTitle>

            <div className="mt-14 border-l border-white/10 pl-8 sm:pl-10">
              {timeline.map((item, i) => (
                <Reveal key={item.title} variant="up" delay={i * 60}>
                  <div className="relative pb-12 last:pb-0">
                    <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-400/70 bg-black sm:-left-[49px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                      {String(i + 1).padStart(2, "0")} · {item.date}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- PROJECT MODAL ---------------- */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <button
            type="button"
            className="absolute inset-0 bg-black/85 backdrop-blur"
            aria-label="Close project details"
            onClick={() => setActiveProject(null)}
          />
          <div className="relative max-h-full w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-black/95 p-6 text-slate-100 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:border-cyan-400/70 hover:text-cyan-200"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="pr-12">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs ${statusColorClasses[activeProject.statusColor].badge}`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${statusColorClasses[activeProject.statusColor].dot}`}
                  aria-hidden
                />
                {activeProject.status}
              </div>
              <h3 className="mt-5 text-4xl font-bold tracking-tight">
                {activeProject.title}
              </h3>
              <p className="mt-3 text-slate-400">{activeProject.summary}</p>
            </div>

            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {[
                { label: "Focus", value: activeProject.focus },
                { label: "Phase", value: activeProject.phase },
                { label: "Timeline", value: activeProject.timeline },
                {
                  label: "Next milestone",
                  value: activeProject.details.nextMilestone,
                },
              ].map((row) => (
                <div key={row.label} className="bg-black p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    {row.label}
                  </p>
                  <p className="mt-1 text-sm text-slate-100">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-6 text-sm">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Objective
                </p>
                <p className="mt-2 leading-relaxed text-slate-200">
                  {activeProject.details.objective}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Current work
                </p>
                <p className="mt-2 leading-relaxed text-slate-200">
                  {activeProject.details.currentWork}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Main focus
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.details.needs.map((need) => (
                    <span
                      key={need}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
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
