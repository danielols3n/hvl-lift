import type { Route } from "./+types/home";
import { HomePage } from "../pages/home/HomePage";

export function meta(_: Route.MetaArgs) {
  return [{ title: "HVL Lift - Home" }];
}

export default function Home() {
  return <HomePage />;
}
