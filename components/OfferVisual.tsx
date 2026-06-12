// Small animated bar visual per offer:
// - cost: a descending staircase (cost coming down) with a sweeping sheen
// - reliability: a level equalizer wave (a steady, healthy signal)
const HEIGHTS: Record<"cost" | "reliability", number[]> = {
  cost: [100, 76, 54, 38, 26, 18],
  reliability: [56, 64, 58, 66, 60, 62],
};

export function OfferVisual({ kind }: { kind: "cost" | "reliability" }) {
  const heights = HEIGHTS[kind];
  return (
    <div className={`ov ov-${kind}`} aria-hidden="true">
      {heights.map((h, i) => (
        <span
          className="ov-bar"
          key={i}
          style={{ height: `${h}%`, animationDelay: `${i * 0.14}s` }}
        />
      ))}
    </div>
  );
}
