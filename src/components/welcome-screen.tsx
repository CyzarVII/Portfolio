import { useEffect, useState, type CSSProperties } from "react";
import { profile } from "@/data/portfolio";
import { markSiteReady } from "@/lib/site-ready";
import { ScrambleText } from "@/components/scramble-text";

// "Loading..." written out in a different language on each line of the boot terminal.
const loadingSnippets = [
  { lang: "JS", code: 'console.log("Loading...");' },
  { lang: "PY", code: 'print("Loading...")' },
  { lang: "C++", code: 'std::cout << "Loading...";' },
  { lang: "PHP", code: '<?php echo "Loading..."; ?>' },
  { lang: "SQL", code: "SELECT 'Loading...' AS status;" },
  { lang: "SH", code: 'echo "Loading..."' },
  { lang: "RS", code: 'println!("Loading...");' },
];

type Phase = "boot" | "granted" | "exit" | "done";

export function WelcomeScreen() {
  const [phase, setPhase] = useState<Phase>("boot");
  const [lines, setLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const active = phase !== "done";

  // Plays on every full page load (not on in-app navigation): snippets, progress, ready, exit.
  useEffect(() => {
    const speed = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0.35 : 1;
    const total = 2900 * speed;
    const timers = loadingSnippets.map((_, i) =>
      window.setTimeout(() => setLines(i + 1), (250 + i * 360) * speed),
    );
    timers.push(window.setTimeout(() => setPhase((p) => (p === "boot" ? "granted" : p)), total));
    timers.push(
      window.setTimeout(() => setPhase((p) => (p === "granted" ? "exit" : p)), total + 800 * speed),
    );

    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    // Start the page's entrance animations while the screen powers off.
    markSiteReady();
    const t = window.setTimeout(() => setPhase("done"), 720);
    return () => clearTimeout(t);
  }, [phase]);

  // Lock scrolling and allow any key to skip while the intro is up.
  useEffect(() => {
    if (!active) return;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = () => setPhase((p) => (p === "boot" || p === "granted" ? "exit" : p));
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  if (!active) return null;

  const skip = () => setPhase((p) => (p === "boot" || p === "granted" ? "exit" : p));
  const granted = phase !== "boot";
  const shownProgress = granted ? 100 : progress;

  return (
    <div
      className="welcome-screen"
      data-phase={phase}
      onClick={skip}
      role="status"
      aria-live="polite"
      aria-label={`Loading ${profile.name}'s portfolio`}
    >
      <div className="welcome-floor" aria-hidden />
      <div className="welcome-glow" aria-hidden />
      <div className="welcome-beam" aria-hidden />
      <div className="welcome-scanlines" aria-hidden />

      <div className="welcome-content relative z-10 flex w-full max-w-2xl flex-col items-center px-4 sm:px-6">
        <p className="font-mono text-sm font-bold text-muted-foreground">
          <span className="text-primary">&lt;</span>
          {profile.initials}
          <span className="text-accent"> /&gt;</span>
        </p>

        <p
          className={`mt-6 font-mono text-[11px] uppercase tracking-[0.4em] ${
            granted ? "text-primary" : "text-accent"
          }`}
        >
          {granted ? "● System ready" : "◌ Compiling portfolio"}
        </p>
        <p className="welcome-glitch mt-3 font-mono text-4xl font-bold tracking-[0.12em] sm:text-6xl">
          <ScrambleText
            key={granted ? "w" : "l"}
            text={granted ? "WELCOME" : "LOADING"}
            playOnMount
          />
          {granted ? (
            <span className="text-primary">.</span>
          ) : (
            <span className="welcome-dots text-primary" aria-hidden />
          )}
        </p>

        <div className="mt-8 w-full rounded-xl border border-primary/30 bg-card/70 p-4 font-mono text-[11px] shadow-[var(--shadow-elegant)] backdrop-blur sm:text-[13px]">
          <div className="mb-3 flex items-center gap-1.5 text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-destructive/80" />
            <span className="h-2 w-2 rounded-full bg-primary/80" />
            <span className="h-2 w-2 rounded-full bg-accent/80" />
            <span className="ml-2">loading.polyglot</span>
            <span className="ml-auto text-primary">
              {Math.min(lines, loadingSnippets.length)}/7
            </span>
          </div>
          <ul className="min-h-[12.25rem] space-y-1.5">
            {loadingSnippets.slice(0, lines).map((s) => (
              <li key={s.lang} className="flex items-center gap-3 overflow-hidden">
                <span className="w-9 shrink-0 rounded border border-primary/30 bg-primary/10 py-px text-center text-[9px] font-semibold text-primary sm:text-[10px]">
                  {s.lang}
                </span>
                <span
                  className="welcome-type text-muted-foreground"
                  style={{ "--chars": s.code.length } as CSSProperties}
                >
                  {s.code}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-between text-muted-foreground">
            <span>{granted ? "Build complete" : "Building modules"}</span>
            <span className="text-primary">{shownProgress}%</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-[image:var(--gradient-primary)] shadow-[0_0_14px] shadow-primary"
              style={{ width: `${shownProgress}%` }}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={skip}
        className="absolute bottom-5 right-5 z-10 rounded-full border border-border bg-background/60 px-4 py-2 font-mono text-xs text-muted-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
      >
        Skip intro ↵
      </button>
    </div>
  );
}
