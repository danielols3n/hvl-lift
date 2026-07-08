import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { PageHeader } from "../../components/PageHeader";
import { SectionDivider, SectionTitle } from "../../components/Section";
import { TeamBackground } from "../../components/TeamBackground";
import fellesbilde from "../../assets/fellesbilde.jpg";

type Member = {
  name: string;
  role: string;
  avatar: string;
};

/** Moved here from the homepage — this is where departments belong. */
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

const board: Member[] = [
  { name: "Daniel Olsen", role: "Leader", avatar: "DO" },
  { name: "Bawan Mohammed Bawla", role: "Deputy Leader", avatar: "BB" },
  { name: "Erlend Snipen", role: "Board Member", avatar: "ES" },
  { name: "Viktor Rindsem", role: "Board Member", avatar: "VR" },
];

const memberGroups: { title: string; members: Member[] }[] = [
  {
    title: "Mechanical",
    members: [
      { name: "Erlend Snipen", role: "Mechanical Lead", avatar: "ES" },
      { name: "Skjalg Freheim", role: "Member", avatar: "SF" },
      { name: "Daniel Kronheim", role: "Member", avatar: "DK" },
      { name: "Christopher C. Strandheim", role: "Member", avatar: "CS" },
      { name: "Trym Fanebust", role: "Member", avatar: "TF" },
    ],
  },
  {
    title: "Hardware",
    members: [
      { name: "Bawan Mohammed Bawla", role: "Hardware Lead", avatar: "BB" },
      { name: "Viktor Rindsem", role: "Member", avatar: "VR" },
      { name: "Oliver E. Elverum", role: "Member", avatar: "OE" },
      { name: "Trym Hamre", role: "Member", avatar: "TH" },
      { name: "Christian Olsen", role: "Member", avatar: "CO" },
      { name: "Vegard P. Kallhovd", role: "Member", avatar: "VK" },
      { name: "Agsrom Daniel Ghebratatyos", role: "Member", avatar: "AG" },
      { name: "Kristoffer Raa", role: "Member", avatar: "KR" },
    ],
  },
  {
    title: "Software",
    members: [
      { name: "Daniel Olsen", role: "Software Lead", avatar: "DO" },
      { name: "Øyvind Lundstad", role: "Member", avatar: "ØL" },
      { name: "Jørgen Moland", role: "Member", avatar: "JM" },
      { name: "Jakob Østensvig-Austrheim", role: "Member", avatar: "JA" },
      { name: "Kasper Austbø", role: "Member", avatar: "KA" },
      { name: "Ebrima H. Jallow", role: "Member", avatar: "EJ" },
      { name: "Sondre Garnæs", role: "Member", avatar: "SG" },
      { name: "Susanne T. Log", role: "Member", avatar: "SL" },
    ],
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-500 hover:border-cyan-300/40">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-600/10 font-mono text-sm font-bold text-cyan-100">
        {member.avatar}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
          {member.role}
        </div>
        <div className="mt-1 truncate text-base font-semibold text-white">
          {member.name}
        </div>
      </div>
    </div>
  );
}

export function TeamPage() {
  return (
    <div className="relative isolate min-h-screen bg-black text-slate-100">
      <TeamBackground />
      <NavBar />

      <PageHeader
        eyebrow="Meet the crew"
        title="The team behind every flight."
        subtitle="We are 21 volunteer students from engineering, design and computer science. Nobody here is paid, and most of us learned this by building it."
      >
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@lifthvl.no"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Join the team
            <span aria-hidden>{"->"}</span>
          </a>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-100"
          >
            See our projects
          </a>
        </div>
      </PageHeader>

      <main className="relative">
        {/* ---------------- 01 DEPARTMENTS ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionDivider index="01" label="Departments" />
            <SectionTitle>Pick a department and start building.</SectionTitle>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-lg text-slate-400">
                Each department has its own focus, mentors and weekly sessions.
                You do not need prior experience.
              </p>
            </Reveal>

            <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {departments.map((department, i) => (
                <Reveal key={department.name} variant="up" delay={i * 60}>
                  <article className="grid gap-8 py-12 lg:grid-cols-[0.75fr,1.25fr]">
                    <div>
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-cyan-400">
                          0{i + 1}
                        </span>
                        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                          {department.name}
                        </h3>
                      </div>
                      <p className="mt-3 text-slate-400">{department.tagline}</p>
                      <a
                        className="mt-6 inline-block font-mono text-xs text-cyan-300 transition hover:text-cyan-200"
                        href={`mailto:${department.contact}`}
                      >
                        {department.contact}
                      </a>
                    </div>

                    <div>
                      <p className="leading-relaxed text-slate-400">
                        {department.description}
                      </p>
                      <p className="mt-6 text-sm text-slate-300">
                        {department.lookingFor}
                      </p>
                      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-4">
                        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                          Focus
                        </span>
                        <p className="text-sm leading-relaxed text-slate-500">
                          {department.focusAreas.join(" · ")}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 02 BOARD ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionDivider index="02" label="Board" />
            <SectionTitle>Who runs the organisation.</SectionTitle>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {board.map((member, i) => (
                <Reveal key={member.name} variant="up" delay={i * 70}>
                  <MemberCard member={member} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 03 MEMBERS ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionDivider index="03" label="Members" />
            <SectionTitle>The people in each department.</SectionTitle>

            <div className="mt-14 space-y-16">
              {memberGroups.map((group) => (
                <div key={group.title}>
                  <Reveal variant="fade">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {group.title}
                      </h3>
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {group.members.length} members
                      </span>
                    </div>
                  </Reveal>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.members.length === 0 ? (
                      <div className="rounded-2xl border border-dashed border-cyan-500/40 bg-white/[0.02] px-4 py-6 text-sm text-slate-300">
                        Come join the {group.title} team!
                      </div>
                    ) : (
                      group.members.map((member, i) => (
                        <Reveal key={member.name} variant="up" delay={i * 50}>
                          <MemberCard member={member} />
                        </Reveal>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 04 TEAM PHOTO ---------------- */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionDivider index="04" label="2026 team" />
            <Reveal variant="up" delay={80}>
              <figure className="mt-10 overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={fellesbilde}
                  alt="The Lift HVL team of 2026"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
