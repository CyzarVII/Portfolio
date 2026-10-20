import { useEffect, useRef, useState } from "react";
import { onSiteReady } from "@/lib/site-ready";

// Counts the leading number of a value like "500+" or "90%" up from zero once visible.
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let io: IntersectionObserver | undefined;

    setCurrent(0);
    const stopReady = onSiteReady(() => {
      io = new IntersectionObserver(([entry]) => {
        if (!entry?.isIntersecting) return;
        io?.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setCurrent(Math.round((1 - Math.pow(1 - t, 4)) * target));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      });
      io.observe(el);
    });

    return () => {
      stopReady();
      io?.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  if (!match) return <>{value}</>;
  return (
    <span ref={ref} className="tabular-nums">
      {current ?? target}
      {suffix}
    </span>
  );
}
