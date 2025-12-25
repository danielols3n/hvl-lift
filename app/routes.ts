import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx"),
    route("/projects", "routes/projects.tsx"),
    route("/team", "routes/team.tsx"),
] satisfies RouteConfig;
