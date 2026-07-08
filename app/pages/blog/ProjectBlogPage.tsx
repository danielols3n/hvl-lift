import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { SectionDivider } from "../../components/Section";
import { blogPosts } from "./blogData";

type ProjectBlogPageProps = {
  slug: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function ProjectBlogPage({ slug }: ProjectBlogPageProps) {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="relative isolate min-h-screen bg-black text-slate-100">
        <NavBar />
        <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
            404
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Post not found
          </h1>
          <p className="mt-5 text-lg text-slate-400">
            That blog post does not exist yet. Head back to the field notes and
            pick one of the published posts.
          </p>
          <a
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Back to all posts
            <span aria-hidden>{"->"}</span>
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative isolate min-h-screen bg-black text-slate-100">
      {/* Same quiet editorial backdrop as the blog index */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.10),transparent_65%)]" />
      </div>

      <NavBar />

      <main className="relative">
        {/* ---------------- ARTICLE HEADER ---------------- */}
        <header className="pt-36 pb-14">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal variant="fade">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-500 transition hover:text-cyan-300"
              >
                <span aria-hidden>{"<-"}</span>
                Field notes
              </a>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                {post.summary}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-white/10 py-4 font-mono text-xs text-slate-500">
                <span>{dateFormatter.format(new Date(post.publishedAt))}</span>
                <span className="text-slate-700" aria-hidden>
                  /
                </span>
                <span>{post.author}</span>
                <span className="text-slate-700" aria-hidden>
                  /
                </span>
                <span className="text-cyan-300/80">{post.project}</span>
                <span className="ml-auto hidden gap-4 uppercase tracking-[0.15em] text-slate-600 sm:flex">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </span>
              </div>
            </Reveal>
          </div>
        </header>

        {/* ---------------- BODY ---------------- */}
        <article className="pb-20">
          <div className="mx-auto max-w-3xl space-y-6 px-5 sm:px-8">
            {post.content.map((block, index) => {
              const contentBlock =
                typeof block === "string" ? { text: block } : block;

              return (
                <div key={`${post.slug}-content-${index}`}>
                  {contentBlock.subtitle ? (
                    <h2 className="mt-12 text-2xl font-bold tracking-tight text-white">
                      {contentBlock.subtitle}
                    </h2>
                  ) : null}
                  <p className="mt-4 whitespace-pre-line text-[1.05rem] leading-[1.8] text-slate-300">
                    {contentBlock.text}
                  </p>
                </div>
              );
            })}
          </div>
        </article>

        {/* ---------------- PHOTOS ---------------- */}
        {post.images.length > 0 ? (
          <section className="pb-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <SectionDivider index="01" label="Photos" />
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {post.images.map((image, i) => (
                  <Reveal
                    key={`${post.slug}-${image.src}`}
                    variant="up"
                    delay={Math.min(i * 60, 240)}
                  >
                    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                      />
                      {image.caption ? (
                        <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-400">
                          {image.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ---------------- NEXT ---------------- */}
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-6 px-5 sm:px-8">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-500 transition hover:text-cyan-300"
            >
              <span aria-hidden>{"<-"}</span>
              All posts
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-100"
            >
              See the project
              <span aria-hidden>{"->"}</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
