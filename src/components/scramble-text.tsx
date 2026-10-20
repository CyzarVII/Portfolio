import { useEffect, useRef } from "react";
import { useScramble } from "@/hooks/use-scramble";

// Text that decodes from code glyphs on mount, or whenever its parent (link, button) is
// hovered or focused. The real text stays in the layout (invisible) so width never jitters.
export function ScrambleText({
  text,
  playOnMount = false,
  className,
}: {
  text: string;
  playOnMount?: boolean;
  className?: string;
}) {
  const [display, play] = useScramble(text, { onMount: playOnMount });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (playOnMount || !parent) return;
    parent.addEventListener("pointerenter", play);
    parent.addEventListener("focusin", play);
    return () => {
      parent.removeEventListener("pointerenter", play);
      parent.removeEventListener("focusin", play);
    };
  }, [playOnMount, play]);

  return (
    <span ref={ref} className={`relative inline-block whitespace-nowrap ${className ?? ""}`}>
      <span className="invisible">{text}</span>
      <span className="absolute inset-0" aria-hidden>
        {display}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
