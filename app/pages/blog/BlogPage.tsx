import { useMemo, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { PageHeader } from "../../components/PageHeader";
import { SectionDivider } from "../../components/Section";
import { blogPosts } from "./blogData";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const selectClasses =
  "w-full appearance-none rounded-xl border border-white/10 bg-black px-4 py-2.5 text-sm text-slate-200 outline-none transition focus:border-cyan-400/70";

export function BlogPage() {
  const [selectedProject, setSelectedProject] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");

  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (left, right) =>
          new Date(right.publishedAt).getTime() -
          new Date(left.publishedAt).getTime(),
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
        new Set(
          sortedPosts.map((post) =>
            new Date(post.publishedAt).getFullYear().toString(),
          ),
        ),
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
        const projectMatch =
          selectedProject === "all" || post.project === selectedProject;
        const yearMatch =
          selectedYear === "all" ||
          new Date(post.publishedAt).getFullYear().toString() === selectedYear;
        const tagMatch = selectedTag === "all" || post.tags.includes(selectedTag);
        return projectMatch && yearMatch && tagMatch;
      }),
    [selectedProject, selectedTag, selectedYear, sortedPosts],
  );

  return (
    <div className="relative isolate min-h-screen bg-black text-slate-100">
      {/* Editorial page: the quietest backdrop of the four */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.10),transparent_65%)]" />
      </div>

      <NavBar />

      <PageHeader
        eyebrow="Field notes"
        title="The build, written down as it happens."
        subtitle="Short reports from the workshop: what each department did, what worked, and what broke. New posts whenever something moves."
      />

      <main className="relative">
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionDivider index="01" label="All posts" />

            {/* Filters */}
            <Reveal delay={100}>
              <div className="mt-10 grid gap-4 sm:max-w-2xl sm:grid-cols-3">
                <label className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Project
                  </span>
                  <select
                    className={selectClasses}
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
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Year
                  </span>
                  <select
                    className={selectClasses}
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
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Tag
                  </span>
                  <select
                    className={selectClasses}
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
            </Reveal>

            {/* Post log */}
            <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {filteredPosts.map((post, i) => (
                <Reveal key={post.slug} variant="up" delay={Math.min(i * 60, 240)}>
                  <a
                    href={`/blog/${post.slug}`}
                    className="group grid gap-6 py-10 transition lg:grid-cols-[200px,1fr,280px] lg:gap-10"
                  >
                    <div className="font-mono text-xs leading-6 text-slate-500">
                      <div>{dateFormatter.format(new Date(post.publishedAt))}</div>
                      <div className="mt-1 text-cyan-300/80">{post.project}</div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-200 sm:text-3xl">
                        {post.title}
                      </h2>
                      <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
                        {post.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
                        {post.tags.map((tag) => (
                          <span key={`${post.slug}-${tag}`}>{tag}</span>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
                        Read post
                        <span
                          aria-hidden
                          className="transition-transform group-hover:translate-x-1"
                        >
                          {"->"}
                        </span>
                      </span>
                    </div>

                    {post.images[0] ? (
                      <div className="overflow-hidden rounded-xl border border-white/10 lg:h-40">
                        <img
                          src={post.images[0].src}
                          alt={post.images[0].alt}
                          className="h-full max-h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div />
                    )}
                  </a>
                </Reveal>
              ))}

              {filteredPosts.length === 0 ? (
                <p className="py-14 text-slate-400">
                  No posts matched the selected filters.{" "}
                  <button
                    type="button"
                    className="text-cyan-300 underline-offset-4 hover:underline"
                    onClick={() => {
                      setSelectedProject("all");
                      setSelectedYear("all");
                      setSelectedTag("all");
                    }}
                  >
                    Reset filters
                  </button>
                </p>
              ) : null}
            </div>

            <Reveal delay={100}>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                {filteredPosts.length} of {sortedPosts.length} posts
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
