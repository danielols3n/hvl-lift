import { lazy, Suspense, useEffect, useRef, useState } from "react";

const DroneCanvas = lazy(() =>
  import("./DroneCanvas").then((m) => ({ default: m.DroneCanvas }))
);

type DroneHeroProps = {
  /** Static image shown before the animation loads (and when nothing else is set). */
  fallbackImage: string;
  /** Path to an optimized .glb model (e.g. "/drone/drone.glb"). Live 3D, rotates with scroll. Highest priority. */
  modelSrc?: string;
  /** Path to a rotation video (e.g. "/drone/drone.mp4"). Scrubbed by scroll. */
  videoSrc?: string;
  /** Number of frames in the sequence. Set to 0 to show the fallback image only. */
  frameCount?: number;
  /** Builds the URL for frame `i` (1-indexed). Defaults to /drone/frame_0001.webp … */
  framePath?: (i: number) => string;
  /** How many extra viewport-heights the pinned animation spans (scroll distance). */
  scrollLength?: number;
  children?: React.ReactNode;
};

const defaultPath = (i: number) =>
  `/drone/frame_${String(i).padStart(4, "0")}.webp`;

export function DroneHero({
  fallbackImage,
  modelSrc,
  videoSrc,
  frameCount = 0,
  framePath = defaultPath,
  scrollLength = 1.6,
  children,
}: DroneHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  // 3D canvas is client-only (no SSR)
  useEffect(() => setMounted(true), []);

  // ---- Preload the frame images ----
  useEffect(() => {
    if (frameCount <= 0) return;
    let cancelled = false;
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      const done = () => {
        if (cancelled) return;
        loaded += 1;
        setLoadedCount(loaded);
      };
      img.onload = done;
      img.onerror = done;
      imgs.push(img);
    }
    imagesRef.current = imgs;
    return () => {
      cancelled = true;
    };
  }, [frameCount, framePath]);

  // ---- Map scroll position to a 0..1 progress through the pinned section ----
  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(total > 0 ? scrolled / total : 0);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        compute();
        raf = 0;
      });
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // ---- Draw the current frame onto the canvas (contain, retina-aware) ----
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (frameCount <= 0 || loadedCount < frameCount) return;

    const idx = Math.min(
      frameCount - 1,
      Math.max(0, Math.round(progress * (frameCount - 1)))
    );
    const img = imagesRef.current[idx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);

    const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight) * 0.9;
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  }, [progress, loadedCount, frameCount]);

  // ---- Scrub the video's currentTime from scroll progress ----
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc || !videoReady) return;
    const duration = video.duration || 0;
    if (duration > 0) {
      video.currentTime = Math.min(duration - 0.001, progress * duration);
    }
  }, [progress, videoReady, videoSrc]);

  const framesReady = frameCount > 0 && loadedCount >= frameCount;
  const textOpacity = Math.max(0, 1 - progress * 1.5);

  // ---- Live 3D model: pinned, rotates with scroll ----
  if (modelSrc) {
    return (
      <section
        ref={sectionRef}
        style={{ height: `${(scrollLength + 1) * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-black">
          {/* Depth glow + soft top light */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.07),transparent_55%)]" />
          {/* Pre-hydration placeholder */}
          {!mounted && (
            <img
              src={fallbackImage}
              alt=""
              aria-hidden
              className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
            />
          )}
          {mounted && (
            <Suspense fallback={null}>
              <DroneCanvas
                src={modelSrc}
                progress={progress}
                className="absolute inset-0 -z-10 h-full w-full"
              />
            </Suspense>
          )}
          <div style={{ opacity: textOpacity }} className="relative w-full">
            {children}
          </div>
          <ScrollCue />
        </div>
      </section>
    );
  }

  // ---- Video source: pinned, scroll-scrubbed video ----
  if (videoSrc) {
    return (
      <section
        ref={sectionRef}
        style={{ height: `${(scrollLength + 1) * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <img
            src={fallbackImage}
            alt=""
            aria-hidden
            className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? "opacity-0" : "opacity-100"
            }`}
          />
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={(e) => {
              e.currentTarget.currentTime = 0.001;
              setVideoReady(true);
            }}
            className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/35 to-black" />
          <div style={{ opacity: textOpacity }} className="relative w-full">
            {children}
          </div>
          <ScrollCue />
        </div>
      </section>
    );
  }

  // ---- No frames yet: render a normal-height static hero ----
  if (frameCount <= 0) {
    return (
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={fallbackImage}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/50 to-black" />
        <div className="relative w-full">{children}</div>
        <ScrollCue />
      </section>
    );
  }

  // ---- Frames available: pinned, scroll-scrubbed sequence ----
  return (
    <section
      ref={sectionRef}
      style={{ height: `${(scrollLength + 1) * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <img
          src={fallbackImage}
          alt=""
          aria-hidden
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-700 ${
            framesReady ? "opacity-0" : "opacity-100"
          }`}
        />
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 -z-10 h-full w-full transition-opacity duration-700 ${
            framesReady ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        <div style={{ opacity: textOpacity }} className="relative w-full">
          {children}
        </div>
        <ScrollCue />
      </div>
    </section>
  );
}

function ScrollCue() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
      <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">
        Scroll
        <span className="animate-scroll-cue text-cyan-300">↓</span>
      </div>
    </div>
  );
}
