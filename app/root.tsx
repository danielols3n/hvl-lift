import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Analytics } from "@vercel/analytics/react"

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Geist+Mono:wght@400;500&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lift HVL is the first student drone organisation in Bergen. 21 volunteer students at Western Norway University of Applied Sciences (HVL) design and build the Queen Bee hexacopter: airframe, electronics and flight software, all in-house." />
        <meta name="keywords" content="Lift HVL, student drone team, drone organisation Bergen, UAV, hexacopter, Queen Bee, Western Norway University of Applied Sciences, HVL, engineering students, drone swarm" />
        <meta name="author" content="Lift HVL" />
        <link rel="icon" href="/logo.png" />
        <meta property="og:title" content="Lift HVL — Student Drone Team in Bergen" />
        <meta property="og:description" content="21 volunteer students building the Queen Bee hexacopter from scratch: airframe, electronics and flight software, all designed in-house at HVL." />
        <meta property="og:image" content="/logo.png" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <ClientOnlyAnalytics />
      <Outlet />
    </>
  );
}

function ClientOnlyAnalytics() {
  if (typeof window === "undefined") return null;
  return <Analytics />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
