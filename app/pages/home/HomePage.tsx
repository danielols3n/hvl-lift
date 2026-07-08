import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { SectionDivider, SectionTitle } from "../../components/Section";
import { DroneHero } from "../../components/DroneHero";
import { PageBackground } from "../../components/PageBackground";
import { useScrollY } from "../../hooks/useScrollY";
import heroImage from "../../assets/fellesbilde.jpg";
import bandImage1 from "../../assets/blog-posts/240326-5.jpg";
import frifondLogo from "../../assets/sponsors/frifond.png";
import elfLogo from "../../assets/sponsors/ELF.png";
import elefunLogo from "../../assets/sponsors/Elefun_Logo.png";

// --- Drone hero background ---
// The interactive 3D model now lives on the Projects page.
const DRONE_VIDEO = ""; // e.g. "/drone/drone.mp4"
const DRONE_FRAME_COUNT = 0; // image sequence frame_0001.webp …

const stats = [
  { label: "Volunteer students", value: "21" },
  { label: "Departments", value: "3" },
  { label: "Drone org in Bergen", value: "1st" },
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

      {/* ---------------- HERO (team photo) ---------------- */}
      <DroneHero
        videoSrc={DRONE_VIDEO || undefined}
        frameCount={DRONE_FRAME_COUNT}
        fallbackImage={heroImage}
      >
        <div className="mx-auto w-full max-w-7xl px-5 pt-28 sm:px-8">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
              <span className="h-px w-10 bg-cyan-400" />
              Lift HVL · Bergen
            </p>
            <h1 className="mt-8 text-5xl font-bold leading-[1.0] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Building drones that fly smarter and go further.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              We are 21 volunteer students at HVL building the first student
              drone in Bergen. The airframe, the electronics and the flight
              software are all designed by us.
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
            The first drone organisation in Bergen, run entirely by volunteer
            students.
          </SectionTitle>
          <Reveal delay={160}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-400">
              Lift HVL was founded in November 2025. We received 32 applications
              and selected 17 students; today we are 21, split across three
              departments that meet every week. Nobody is paid. Everything we
              have built so far is a prototype.
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
        eyebrow="Workshop, March 2026"
        title="All three departments work in the same room."
        scrollY={scrollY}
      />

      {/* ---------------- WHAT WE BUILD ---------------- */}
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionDivider index="02" label="What we build" />
          <SectionTitle>
            Every part of the aircraft is built in-house.
          </SectionTitle>
          <Reveal delay={140}>
            <a
              href="/team"
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300 transition hover:text-cyan-200"
            >
              Meet the departments
              <span aria-hidden>{"->"}</span>
            </a>
          </Reveal>

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

      {/* ---------------- SPONSORS ---------------- */}
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionDivider index="03" label="Partners" />
          <SectionTitle>The organisations backing us.</SectionTitle>
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
              We recruit new members every semester. If you want to design parts,
              solder boards or write flight software, get in touch.
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

      <Footer />
    </div>
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
