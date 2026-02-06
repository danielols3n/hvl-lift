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
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lift HVL is a student organization at the Western Norway University of Applied Sciences (HVL) dedicated to fostering innovation and entrepreneurship among students. We provide resources, mentorship, and a collaborative community to help students turn their ideas into successful ventures." />
        <meta name="keywords" content="Lift HVL, student organization, innovation, entrepreneurship, Western Norway University of Applied Sciences, HVL, student club, startup, mentorship, resources" />
        <meta name="author" content="Lift HVL" />
        <link rel="icon" href="/app/assets/logo.png" />
        <meta property="og:title" content="Lift HVL - Fostering Innovation and Entrepreneurship at HVL" />
        <meta property="og:description" content="Lift HVL is a student organization at the Western Norway University of Applied Sciences (HVL) dedicated to fostering innovation and entrepreneurship among students. We provide resources, mentorship, and a collaborative community to help students turn their ideas into successful ventures." />
        <meta property="og:image" content="/app/assets/logo.png" />
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
