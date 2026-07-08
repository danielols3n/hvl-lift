import { useScrollY } from "../hooks/useScrollY";

/**
 * Backdrop for the Team page: a calm dot matrix and two soft glows.
 * Deliberately quieter than the homepage swarm or the Projects blueprint —
 * this page is about people, not machines.
 */
export function TeamBackground() {
  const scrollY = useScrollY();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px]"
        style={{ transform: `translateY(${scrollY * -0.03}px)` }}
      />
      <div
        className="absolute -left-48 top-[12%] h-[34rem] w-[34rem] rounded-full bg-sky-500/14 blur-[150px]"
        style={{ transform: `translateY(${scrollY * 0.09}px)` }}
      />
      <div
        className="absolute -right-48 top-[60%] h-[32rem] w-[32rem] rounded-full bg-blue-600/14 blur-[150px]"
        style={{ transform: `translateY(${scrollY * -0.06}px)` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.75))]" />
    </div>
  );
}
