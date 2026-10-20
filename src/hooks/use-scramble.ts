import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "01<>/{}[]=+*#$%&;:アカサタナハマヤラワ∑∆λΩ";

// Decodes `text` out of random code glyphs, left to right. Returns the text to show and
// a function that replays the effect (e.g. on hover).
export function useScramble(text: string, { onMount = false, speed = 45 } = {}) {
  const [display, setDisplay] = useState(text);
  const timer = useRef<number | undefined>(undefined);

  const play = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.clearInterval(timer.current);
    let frame = 0;
    timer.current = window.setInterval(() => {
      frame++;
      const out = text
        .split("")
        .map((ch, i) =>
          ch === " " || frame >= 3 + i * 2
            ? ch
            : (GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? ch),
        )
        .join("");
      setDisplay(out);
      if (out === text) window.clearInterval(timer.current);
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    setDisplay(text);
    if (onMount) play();
    return () => window.clearInterval(timer.current);
  }, [text, onMount, play]);

  return [display, play] as const;
}
