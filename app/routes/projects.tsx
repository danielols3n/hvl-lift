import type { Route } from "./+types/projects";
import { ProjectsPage } from "../pages/projects/ProjectsPage";

export function meta(_: Route.MetaArgs) {
  return [{ title: "HVL Lift - Projects" }];
}

export default function Projects() {
  return <ProjectsPage />;
}
