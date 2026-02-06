import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { blogProjects } from "./blogData";

export function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

      <NavBar />

      <main className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="flex flex-col items-center justify-center gap-4 pt-24 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Blog</p>
          <h1 className="text-4xl font-semibold text-slate-50 sm:text-5xl">
            More info coming soon...
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            We are preparing project updates and build logs. Check back shortly.
          </p>
        </section>

        {/*
        <section className="flex flex-col gap-10 pt-16 lg:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-500" />
            Project Updates
            <span className="h-px w-10 bg-cyan-500" />
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Follow the build logs for every Lift HVL mission.
              </h1>
              <p className="text-lg text-slate-300 sm:text-xl">
                Each project keeps its own update stream, so members can track progress, milestones, and next steps in one place.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Explore projects
                  <span aria-hidden>{"->"}</span>
                </a>
                <a
                  href="mailto:hello@lifthvl.no"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-100"
                >
                  Submit an update
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/70 p-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">How this works</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-50">One blog per project</h2>
              <p className="mt-3 leading-relaxed">
                Updates are grouped by project so the team can follow each mission separately. Add a new post when a milestone
                hits, a prototype ships, or a test teaches something new.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                <span className="rounded-full border border-slate-800/80 px-3 py-1">Milestones</span>
                <span className="rounded-full border border-slate-800/80 px-3 py-1">Tests</span>
                <span className="rounded-full border border-slate-800/80 px-3 py-1">Lessons</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Project Blogs</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Separate feeds for every build</h2>
            <p className="mt-2 max-w-3xl text-slate-300">
              Jump into any project to see the latest notes, prototypes, and learnings.
            </p>
          </div>
          <div className="space-y-10">
            {blogProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/70 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Project</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-50">{project.name}</h3>
                    <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-300">
                    {project.phase}
                  </div>
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
                <div className="mt-5">
                  <a
                    href={`/blog/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/90 hover:bg-cyan-500/20"
                  >
                    Open full log
                    <span aria-hidden>{"->"}</span>
                  </a>
                </div>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {project.updates.map((update) => (
                    <div
                      key={`${project.name}-${update.title}`}
                      className="rounded-2xl border border-slate-800/70 bg-slate-950/60 p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                        <span>{update.date}</span>
                        <span>{update.author}</span>
                      </div>
                      <h4 className="mt-3 text-lg font-semibold text-slate-50">{update.title}</h4>
                      <p className="mt-2 text-sm text-slate-300">{update.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {update.tags.map((tag) => (
                          <span
                            key={`${update.title}-${tag}`}
                            className="rounded-full border border-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        */}
      </main>
      <Footer />
    </div>
  );
}
