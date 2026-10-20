import { useEffect } from "react";
import { onSiteReady } from "@/lib/site-ready";

// Fades in every [data-reveal] element as it scrolls into view, including ones added
// later (route changes, GitHub cards). Stagger with a `[--reveal-delay:120ms]` class.
export function useRevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const observe = (root: ParentNode) =>
      root.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-reveal]:not(.is-visible)")) io.observe(node);
          observe(node);
        });
      }
    });

    const stop = onSiteReady(() => {
      observe(document);
      mo.observe(document.body, { childList: true, subtree: true });
    });

    return () => {
      stop();
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

// Cards track the pointer so their spotlight glow follows it.
export function useCardSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".card-elevated");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}
