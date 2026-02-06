import type { Route } from "./+types/blog";
import { BlogPage } from "../pages/blog/BlogPage";

export function meta(_: Route.MetaArgs) {
  return [{ title: "HVL Lift - Blog" }];
}

export default function Blog() {
  return <BlogPage />;
}
