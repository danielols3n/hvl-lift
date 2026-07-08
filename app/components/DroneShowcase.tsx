import { lazy, Suspense, useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionDivider } from "./Section";

const DroneCanvas = lazy(() =>
  import("./DroneCanvas").then((m) => ({ default: m.DroneCanvas }))
);

const specs = [
  { label: "Type", value: "Hexacopter UAV" },
  { label: "Span", value: "1 186 mm" },
  { label: "Height", value: "662 mm" },
  { label: "Materials", value: "Carbon fiber · Aluminium · PLA" },
  { label: "Components", value: "149" },
  { label: "Status", value: "Prototype" },
];

export function DroneShowcase({
  modelSrc,
  index = "02",
  label = "The aircraft",
}: {
  modelSrc: string;
  index?: string;
  label?: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionDivider index={index} label={label} />

        <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-5xl font-bold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Queen&nbsp;bee
          </h2>
          <Reveal delay={80}>
            <p className="max-w-xl text-lg leading-relaxed text-slate-400">
              Our first drone is a hexacopter with a 1 186 mm rotor span. We
              designed it in Fusion and build it in carbon fiber, aluminium and
              3D printed PLA. It is still a prototype.
            </p>
          </Reveal>
        </div>

        {/* Full-width interactive model */}
        <Reveal variant="up" delay={120}>
          <div className="relative mt-12 h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-black/40 sm:h-[620px] lg:h-[720px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(37,99,235,0.14),transparent_60%)]" />

            {mounted ? (
              <Suspense fallback={null}>
                <DroneCanvas src={modelSrc} dynamic className="h-full w-full" />
              </Suspense>
            ) : (
              <div className="flex h-full items-center justify-center font-mono text-xs text-slate-600">
                loading model…
              </div>
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Live 3D model · designed in Fusion
              </span>
            </div>
          </div>
        </Reveal>

        {/* Spec strip */}
        <Reveal delay={160}>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
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
    </section>
  );
}
