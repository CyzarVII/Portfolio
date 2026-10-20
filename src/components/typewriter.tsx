import { useEffect, useState } from "react";
import { onSiteReady } from "@/lib/site-ready";

// Types, holds, and deletes each word in turn. Renders the first word in full on the
// server so the line never starts empty.
export function Typewriter({ words, className }: { words: readonly string[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(words[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    return onSiteReady(() => setRunning(true));
  }, []);

  useEffect(() => {
    if (!running) return;
    const word = words[index] ?? "";
    let delay = deleting ? 40 : 85;
    if (!deleting && length === word.length) delay = 2200;
    if (deleting && length === 0) delay = 350;

    const t = window.setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setLength((n) => n + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(t);
  }, [running, words, index, length, deleting]);

  return (
    <span className={`caret ${className ?? ""}`} aria-label={words.join(", ")}>
      <span aria-hidden>{(words[index] ?? "").slice(0, length)}</span>
    </span>
  );
}
