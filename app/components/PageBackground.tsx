import { SwarmBackground } from "./SwarmBackground";

/**
 * Fixed, textured backdrop behind the whole page:
 * a technical grid + dot pattern, soft glow orbs that drift with scroll,
 * and an animated "drone swarm" node network.
 */
export function PageBackground({ scrollY }: { scrollY: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Technical line grid */}
      <div
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:70px_70px]"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      />
      {/* Fine dot matrix */}
      <div
        className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      />

      {/* Parallax glow orbs — cyan → sky → blue */}
      <div
        className="absolute -left-40 top-[8%] h-[38rem] w-[38rem] rounded-full bg-cyan-500/18 blur-[130px]"
        style={{ transform: `translateY(${scrollY * 0.14}px)` }}
      />
      <div
        className="absolute -right-40 top-[42%] h-[34rem] w-[34rem] rounded-full bg-sky-500/18 blur-[130px]"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />
      <div
        className="absolute left-[18%] top-[78%] h-[30rem] w-[30rem] rounded-full bg-blue-600/18 blur-[130px]"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />

      {/* Drone swarm node network */}
      <SwarmBackground className="absolute inset-0 opacity-70" />

      {/* Vignette to keep edges calm */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.75))]" />
    </div>
  );
}
