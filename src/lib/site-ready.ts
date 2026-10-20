import type { CSSProperties } from "react";

// The welcome intro covers the page on load; on-screen animations wait for it to finish.
const READY_ATTR = "data-ready";
const READY_EVENT = "site:ready";

export function markSiteReady() {
  if (document.documentElement.hasAttribute(READY_ATTR)) return;
  document.documentElement.setAttribute(READY_ATTR, "");
  window.dispatchEvent(new Event(READY_EVENT));
}

// Inline style for staggering a [data-reveal] element by index.
export function revealDelay(ms: number) {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}

export function onSiteReady(cb: () => void): () => void {
  if (document.documentElement.hasAttribute(READY_ATTR)) {
    cb();
    return () => {};
  }
  window.addEventListener(READY_EVENT, cb, { once: true });
  return () => window.removeEventListener(READY_EVENT, cb);
}
