import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx"),
    route("/projects", "routes/projects.tsx"),
    route("/blog", "routes/blog.tsx"),
    route("/blog/:slug", "routes/blog.$slug.tsx"),
    route("/team", "routes/team.tsx"),
] satisfies RouteConfig;
