// Vertical, bottom-to-top carousel of the "also built" items. Pure CSS loop
// (duplicated once for a seamless -50% scroll); pauses on hover, and stops
// entirely under prefers-reduced-motion (handled in globals.css).
export function AdditionalMarquee({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  const rows = [...items, ...items];
  return (
    <div className="vmarq">
      <div className="vmarq-track">
        {rows.map((a, i) => (
          <article className="vmarq-card" key={i} aria-hidden={i >= items.length}>
            <span className="vmarq-glow" aria-hidden="true" />
            <h4>{a.title}</h4>
            <p>{a.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
