import { lazy, Suspense, useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const DroneCanvas = lazy(() =>
  import("./DroneCanvas").then((m) => ({ default: m.DroneCanvas }))
);

const specs = [
  { label: "Type", value: "Quadcopter UAV" },
  { label: "Frame", value: "Carbon fiber + aluminium" },
  { label: "Status", value: "In development" },
  { label: "Team", value: "Mech · HW · SW" },
];

export function DroneShowcase({ modelSrc }: { modelSrc: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* divider */}
        <Reveal variant="fade">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-cyan-400">03</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-slate-500">
              The aircraft
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 via-white/10 to-transparent" />
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Text / spec panel */}
          <div>
            <Reveal variant="up">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300">
                // Prototype
              </p>
              <h2 className="mt-5 text-5xl font-bold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                Queen&nbsp;bee
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                Our in-house UAV — designed, machined and coded end-to-end by the
                team. Drag your cursor over it to take a closer look.
              </p>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <dl className="mt-10 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {specs.map((s) => (
                  <div key={s.label} className="bg-black/80 p-5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-100">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* 3D model */}
          <div className="relative h-[420px] sm:h-[520px]">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_50%_75%,rgba(37,99,235,0.16),transparent_60%)]" />
            {mounted ? (
              <Suspense fallback={null}>
                <DroneCanvas src={modelSrc} dynamic className="h-full w-full" />
              </Suspense>
            ) : (
              <div className="flex h-full items-center justify-center font-mono text-xs text-slate-600">
                loading model…
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
