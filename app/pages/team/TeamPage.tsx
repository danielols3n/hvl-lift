import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import fellesbilde from "../../assets/fellesbilde.jpg";

type Member = {
  name: string;
  role: string;
  avatar: string;
};

const board: Member[] = [
  { name: "Daniel Olsen", role: "Leader", avatar: "DO" },
  { name: "Bawan Mohammed Bawla", role: "Deputy Leader", avatar: "BB" },
  { name: "Erlend Snipen", role: "Board Member", avatar: "ES" },
  { name: "Viktor Rindsem", role: "Board Member", avatar: "VR" },
];

const memberGroups: { title: string; description: string; members: Member[] }[] = [
  {
    title: "Mechanical",
    description: "Designs airframes, structures, and test rigs to keep the fleet flying efficiently.",
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
    description: "Builds the electronics stack, power systems, and sensor integrations.",
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
    description: "Develops autonomy, tooling, and mission logic for safer, smarter flights.",
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

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 via-slate-900/70 to-emerald-400/15 text-lg font-semibold text-cyan-100">
      {initials}
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-800/70 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/70 p-4">
      <Avatar initials={member.avatar} />
      <div>
        <div className="text-sm uppercase tracking-[0.16em] text-cyan-200">{member.role}</div>
        <div className="text-lg font-semibold text-slate-50">{member.name}</div>
      </div>
    </div>
  );
}

export function TeamPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

      <NavBar />

      <main className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="flex flex-col gap-10 pt-16 lg:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-500" />
            Meet the crew
            <span className="h-px w-10 bg-cyan-500" />
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                The team behind every flight.
              </h1>
              <p className="text-lg text-slate-300 sm:text-xl">
                We are a tight-knit group of students passionate about pushing the boundaries of drone technology. With diverse backgrounds in engineering, design and computer science, we come together to innovate and create cutting-edge UAVs. Each member brings unique skills and perspectives, making our team stronger and more creative. Join us on this exciting journey as we take flight!
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@lifthvl.no"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Join the team
                  <span aria-hidden>{"->"}</span>
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-100"
                >
                  See our projects
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 backdrop-blur">
                <div className="text-2xl font-semibold text-cyan-300">21</div>
                <div className="mt-1 text-sm uppercase tracking-wide text-slate-400">Active members</div>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 backdrop-blur">
                <div className="text-2xl font-semibold text-cyan-300">3</div>
                <div className="mt-1 text-sm uppercase tracking-wide text-slate-400">Focus groups</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-500" />
            Board
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-500" />
            Members
          </div>
          <div className="space-y-10">
            {memberGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-cyan-200">
                  <span className="h-px w-8 bg-cyan-500" />
                  {group.title}
                </div>
                <p className="text-sm text-slate-300">{group.description}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-cyan-500/40 bg-slate-900/40 px-4 py-6 text-sm text-slate-300">
                      Come join the {group.title} team!
                    </div>
                  ) : (
                    group.members.map((member) => <MemberCard key={member.name} member={member} />)
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-500" />
            2026 TEAM
          </div>
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-800/80 bg-white/5">
            <img
              src={fellesbilde}
              alt="2026 team"
              className="h-auto w-full object-cover"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
