import type { Route } from "./+types/team";
import { TeamPage } from "../pages/team/TeamPage";

export function meta(_: Route.MetaArgs) {
  return [{ title: "HVL Lift - Team" }];
}

export default function Team() {
  return <TeamPage />;
}
