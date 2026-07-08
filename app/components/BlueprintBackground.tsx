import { useScrollY } from "../hooks/useScrollY";

/** Crosshair tick, like a registration mark on a technical drawing. */
function Crosshair({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative h-6 w-6">
        <span className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-cyan-300/30" />
        <span className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-cyan-300/30" />
      </div>
    </div>
  );
}

/**
 * Fixed backdrop for the Projects page: a two-scale blueprint grid with
 * registration crosshairs and slow parallax glows. Deliberately different
 * from the homepage swarm network.
 */
export function BlueprintBackground() {
  const scrollY = useScrollY();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Minor grid */}
      <div
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#7dd3fc_1px,transparent_1px),linear-gradient(to_bottom,#7dd3fc_1px,transparent_1px)] [background-size:24px_24px]"
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}
      />
      {/* Major grid */}
      <div
        className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] [background-size:120px_120px]"
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}
      />

      {/* Registration marks */}
      <div style={{ transform: `translateY(${scrollY * -0.04}px)` }}>
        <Crosshair className="left-[12%] top-[18%]" />
        <Crosshair className="right-[14%] top-[30%]" />
        <Crosshair className="left-[22%] top-[62%]" />
        <Crosshair className="right-[20%] top-[76%]" />
      </div>

      {/* Deep blue parallax glows */}
      <div
        className="absolute -left-52 top-[14%] h-[36rem] w-[36rem] rounded-full bg-blue-700/15 blur-[140px]"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute -right-52 top-[58%] h-[34rem] w-[34rem] rounded-full bg-sky-600/15 blur-[140px]"
        style={{ transform: `translateY(${scrollY * -0.07}px)` }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.8))]" />
    </div>
  );
}
