import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>-_\\/[]{}=+*^?#%";

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

/**
 * "Decoding" text: characters flicker through random glyphs and settle onto the
 * real letters, left to right. Runs once, when the text scrolls into view.
 *
 * The real text is rendered on the server and exposed via aria-label, so search
 * engines and screen readers always get the actual content.
 */
export function ScrambleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [output, setOutput] = useState(text);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chars = Array.from(text);
    // Keep the whole run short (~1s) regardless of text length
    const spread = Math.min(0.8, 44 / Math.max(chars.length, 1));

    const plan = chars.map((c, i) => {
      if (/\s/.test(c)) return { to: c, end: 0, fixed: true };
      const start = Math.floor(i * spread + Math.random() * 8);
      return { to: c, end: start + 6 + Math.floor(Math.random() * 12), fixed: false };
    });

    const current = plan.map((p) => (p.fixed ? p.to : randomGlyph()));
    setOutput(current.join(""));

    let raf = 0;
    let frame = 0;
    let started = false;

    const tick = () => {
      let settled = 0;
      for (let i = 0; i < plan.length; i++) {
        const p = plan[i];
        if (p.fixed || frame >= p.end) {
          current[i] = p.to;
          settled++;
        } else if (Math.random() < 0.4) {
          current[i] = randomGlyph();
        }
      }
      setOutput(current.join(""));
      frame++;
      if (settled < plan.length) raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            observer.unobserve(entry.target);
            raf = requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{output}</span>
    </span>
  );
}
