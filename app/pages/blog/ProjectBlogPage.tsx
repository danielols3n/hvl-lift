import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { blogProjects } from "./blogData";

type ProjectBlogPageProps = {
  slug: string;
};

export function ProjectBlogPage({ slug }: ProjectBlogPageProps) {
  const project = blogProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

        <NavBar />

        <main className="relative mx-auto max-w-4xl px-4 pb-24 pt-24 sm:px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-50">Project not found</h1>
          <p className="mt-4 text-slate-300">
            That project blog does not exist yet. Pick one of the active project blogs instead.
          </p>
          <div className="mt-6">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Back to blog
              <span aria-hidden>{"->"}</span>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

      <NavBar />

      <main className="relative mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <section className="flex flex-col gap-6 pt-16 lg:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-500" />
            Project Blog
            <span className="h-px w-10 bg-cyan-500" />
          </div>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-slate-50 sm:text-5xl">
                {project.name}
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/60 px-5 py-4 text-xs uppercase tracking-[0.2em] text-slate-300">
              <span>Phase</span>
              <span className="text-base font-semibold text-slate-100">{project.phase}</span>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/90 hover:bg-cyan-500/20"
              >
                All project blogs
                <span aria-hidden>{"->"}</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Updates</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Latest milestones and learnings
            </h2>
            <p className="mt-2 max-w-3xl text-slate-300">
              Each entry captures what was shipped, tested, or learned by the team.
            </p>
          </div>
          <div className="grid gap-4">
            {project.updates.map((update) => (
              <article
                key={update.title}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span>{update.date}</span>
                  <span>{update.author}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-50">{update.title}</h3>
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
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
