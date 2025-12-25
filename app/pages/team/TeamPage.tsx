import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

type Member = {
  name: string;
  role: string;
  avatar: string;
};

const board: Member[] = [
  { name: "Ingrid Nilsen", role: "President", avatar: "IN" },
  { name: "Jonas Eide", role: "Vice President", avatar: "JE" },
  { name: "Sara Vik", role: "Operations Lead", avatar: "SV" },
  { name: "Mads Holte", role: "Technical Lead", avatar: "MH" },
  { name: "Emma Berg", role: "Finance & Sponsorships", avatar: "EB" },
  { name: "Lars Haugen", role: "Events & Outreach", avatar: "LH" },
];

const memberGroups: { title: string; members: Member[] }[] = [
  {
    title: "Mechanical",
    members: [
      { name: "Andrea Solheim", role: "Airframes & Composites", avatar: "AS" },
      { name: "Henrik Ruud", role: "CAD & Prototyping", avatar: "HR" },
      { name: "Silje Aas", role: "Propulsion & Cooling", avatar: "SA" },
    ],
  },
  {
    title: "Electrical",
    members: [
      { name: "Tobias Lunde", role: "Power & ESCs", avatar: "TL" },
      { name: "Kaja Olsen", role: "Avionics Integration", avatar: "KO" },
      { name: "Martin Dale", role: "Telemetry & RF", avatar: "MD" },
    ],
  },
  {
    title: "Autonomy",
    members: [
      { name: "Nora Sand", role: "Perception & CV", avatar: "NS" },
      { name: "Sindre Haug", role: "Navigation & Planning", avatar: "SH" },
      { name: "Elias Moe", role: "Onboard ML", avatar: "EM" },
    ],
  },
  {
    title: "Flight Ops",
    members: [
      { name: "Ida Wang", role: "Safety & Checklists", avatar: "IW" },
      { name: "Petter Aune", role: "Field Testing", avatar: "PA" },
      { name: "Tuva Arnesen", role: "Pilot Training", avatar: "TA" },
    ],
  },
  {
    title: "Administration",
    members: [
      { name: "Oda Nymo", role: "Communications", avatar: "ON" },
      { name: "Eirik Foss", role: "Sponsors & Partners", avatar: "EF" },
      { name: "Sofia Lien", role: "Logistics", avatar: "SL" },
    ],
  },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 via-slate-900/70 to-emerald-400/15 text-lg font-semibold text-cyan-100 shadow-[0_10px_30px_-15px_rgba(6,182,212,0.7)]">
      {initials}
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-800/70 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/70 p-4 shadow-lg shadow-cyan-500/5">
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

      <main className="relative mx-auto max-w-6xl px-6 pb-24">
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
                Builders, pilots, and planners split into focused crews so every airframe and mission has a champion.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:lift@hvl.no"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 shadow-[0_0_35px_-8px_rgba(6,182,212,0.6)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
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
              <div className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 shadow-lg shadow-cyan-500/5 backdrop-blur">
                <div className="text-2xl font-semibold text-cyan-300">14</div>
                <div className="mt-1 text-sm uppercase tracking-wide text-slate-400">Board & leads</div>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 shadow-lg shadow-cyan-500/5 backdrop-blur">
                <div className="text-2xl font-semibold text-cyan-300">30+</div>
                <div className="mt-1 text-sm uppercase tracking-wide text-slate-400">Active members</div>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 shadow-lg shadow-cyan-500/5 backdrop-blur">
                <div className="text-2xl font-semibold text-cyan-300">5</div>
                <div className="mt-1 text-sm uppercase tracking-wide text-slate-400">Focus groups</div>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-white/5 px-4 py-5 shadow-lg shadow-cyan-500/5 backdrop-blur">
                <div className="text-2xl font-semibold text-cyan-300">24/7</div>
                <div className="mt-1 text-sm uppercase tracking-wide text-slate-400">Hangar access</div>
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
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
