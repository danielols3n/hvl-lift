import type { Route } from "./+types/blog.$slug";
import { ProjectBlogPage } from "../pages/blog/ProjectBlogPage";
import { blogProjects } from "../pages/blog/blogData";

export function meta({ params }: Route.MetaArgs) {
  const project = blogProjects.find((item) => item.slug === params.slug);
  const title = project ? `HVL Lift - ${project.name} Blog` : "HVL Lift - Project Blog";
  return [{ title }];
}

export default function BlogProject({ params }: Route.ComponentProps) {
  return <ProjectBlogPage slug={params.slug} />;
}
