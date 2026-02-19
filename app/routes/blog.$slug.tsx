import type { Route } from "./+types/blog.$slug";
import { ProjectBlogPage } from "../pages/blog/ProjectBlogPage";
import { blogPosts } from "../pages/blog/blogData";

export function meta({ params }: Route.MetaArgs) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  const title = post ? `HVL Lift - ${post.title}` : "HVL Lift - Blog Post";
  return [{ title }];
}

export default function BlogProject({ params }: Route.ComponentProps) {
  return <ProjectBlogPage slug={params.slug} />;
}
