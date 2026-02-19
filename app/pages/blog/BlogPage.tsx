import { useMemo, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { blogPosts } from "./blogData";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function BlogPage() {
  const [selectedProject, setSelectedProject] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");

  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (left, right) =>
          new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
      ),
    [],
  );

  const projects = useMemo(
    () => Array.from(new Set(sortedPosts.map((post) => post.project))),
    [sortedPosts],
  );

  const years = useMemo(
    () =>
      Array.from(
        new Set(sortedPosts.map((post) => new Date(post.publishedAt).getFullYear().toString())),
      ).sort((left, right) => Number(right) - Number(left)),
    [sortedPosts],
  );

  const tags = useMemo(
    () => Array.from(new Set(sortedPosts.flatMap((post) => post.tags))).sort(),
    [sortedPosts],
  );

  const filteredPosts = useMemo(
    () =>
      sortedPosts.filter((post) => {
        const projectMatch = selectedProject === "all" || post.project === selectedProject;
        const yearMatch =
          selectedYear === "all" ||
          new Date(post.publishedAt).getFullYear().toString() === selectedYear;
        const tagMatch = selectedTag === "all" || post.tags.includes(selectedTag);
        return projectMatch && yearMatch && tagMatch;
      }),
    [selectedProject, selectedTag, selectedYear, sortedPosts],
  );

  const featuredPost = filteredPosts[0];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

      <NavBar />

      <main className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="flex flex-col gap-10 pt-16 lg:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-500" />
            Blog
            <span className="h-px w-10 bg-cyan-500" />
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                All Lift HVL posts in one timeline.
              </h1>
              <p className="text-lg text-slate-300 sm:text-xl">
                Browse every update sorted by post date, then filter by project, year, or tag.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Explore projects
                  <span aria-hidden>{"->"}</span>
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/70 p-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Latest post</p>
              {featuredPost ? (
                <>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-50">{featuredPost.title}</h2>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {featuredPost.project} | {dateFormatter.format(new Date(featuredPost.publishedAt))}
                  </p>
                  <p className="mt-3 leading-relaxed">{featuredPost.summary}</p>
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/90 hover:bg-cyan-500/20"
                  >
                    Read full post
                    <span aria-hidden>{"->"}</span>
                  </a>
                </>
              ) : (
                <p className="mt-3 leading-relaxed">No posts match your current filters.</p>
              )}
              <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                <span className="rounded-full border border-slate-800/80 px-3 py-1">
                  {filteredPosts.length} posts shown
                </span>
                <span className="rounded-full border border-slate-800/80 px-3 py-1">
                  {projects.length} projects
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <label className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Project</span>
              <select
                className="w-full rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70"
                value={selectedProject}
                onChange={(event) => setSelectedProject(event.target.value)}
              >
                <option value="all">All projects</option>
                {projects.map((project) => (
                  <option key={project} value={project}>
                    {project}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Year</span>
              <select
                className="w-full rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70"
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
              >
                <option value="all">All years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Tag</span>
              <select
                className="w-full rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70"
                value={selectedTag}
                onChange={(event) => setSelectedTag(event.target.value)}
              >
                <option value="all">All tags</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="mt-12 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">All posts</p>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Sorted by latest publish date
            </h2>
            <p className="mt-2 max-w-3xl text-slate-300">
              Open a post for full details, including publish date, project, and tags.
            </p>
          </div>
          <div className="grid gap-4">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/70 p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Posted: {dateFormatter.format(new Date(post.publishedAt))} | Author: {post.author} | Project: {post.project}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-50">{post.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-300">{post.project ? post.project : null}</p>
                <p className="mt-3 text-slate-300">{post.summary}</p>
                {post.images[0] ? (
                  <img
                    src={post.images[0].src}
                    alt={post.images[0].alt}
                    className="mt-4 h-56 w-full rounded-2xl border border-slate-800/70 object-cover"
                    loading="lazy"
                  />
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={`${post.slug}-${tag}`}
                      className="rounded-full border border-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/90 hover:bg-cyan-500/20"
                  >
                    Read post
                    <span aria-hidden>{"->"}</span>
                  </a>
                </div>
              </article>
            ))}
            {filteredPosts.length === 0 ? (
              <article className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 text-slate-300">
                No posts matched the selected filters. Reset filters to view all posts.
              </article>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
