// Fixed, decorative layer behind every page: drifting aurora glows over a faint grid.
export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="grid-lines backdrop-grid absolute inset-0" />
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
    </div>
  );
}
