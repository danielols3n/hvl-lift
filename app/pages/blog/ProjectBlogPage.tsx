import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
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
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#06b6d420,transparent_35%),radial-gradient(circle_at_80%_0%,#22d3ee19,transparent_32%),radial-gradient(circle_at_50%_90%,#14b8a640,transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0,transparent_49%,rgba(255,255,255,0.04)_50%,transparent_51%,transparent)] bg-[length:11px_11px] opacity-40" />

        <NavBar />

        <main className="relative mx-auto max-w-4xl px-4 pb-24 pt-24 sm:px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-50">Post not found</h1>
          <p className="mt-4 text-slate-300">
            That blog post does not exist yet. Open the full blog and pick one of the published posts.
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

      <main className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <section className="flex flex-col gap-6 pt-16 lg:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-300">
            <span className="h-px w-10 bg-cyan-500" />
            Blog Post
            <span className="h-px w-10 bg-cyan-500" />
          </div>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-4 lg:pr-4">
              <h1 className="text-4xl font-semibold text-slate-50 sm:text-5xl">{post.title}</h1>
              <p className="max-w-2xl text-lg text-slate-300">{post.summary}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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
              <span>Posted</span>
              <span className="text-base font-semibold text-slate-100">
                {dateFormatter.format(new Date(post.publishedAt))}
              </span>
              <span>Author</span>
              <span className="text-base font-semibold text-slate-100">{post.author}</span>
              <span>Project</span>
              <span className="text-base font-semibold text-slate-100">{post.project}</span>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/90 hover:bg-cyan-500/20"
              >
                Back to all posts
                <span aria-hidden>{"->"}</span>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <article className="space-y-5 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6">
            {post.content.map((block, index) => {
              const contentBlock =
                typeof block === "string" ? { text: block } : block;

              return (
                <div key={`${post.slug}-content-${index}`} className="space-y-2">
                  {contentBlock.subtitle ? (
                    <h3 className="text-xl font-semibold text-slate-100">
                      {contentBlock.subtitle}
                    </h3>
                  ) : null}
                  <p className="whitespace-pre-line leading-relaxed text-slate-200">
                    {contentBlock.text}
                  </p>
                </div>
              );
            })}
          </article>
          {post.images.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {post.images.map((image) => (
                <figure
                  key={`${post.slug}-${image.src}`}
                  className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-64 w-full object-contain bg-slate-900"
                    loading="lazy"
                  />
                  {image.caption ? (
                    <figcaption className="px-4 py-3 text-xs text-slate-300">{image.caption}</figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}
