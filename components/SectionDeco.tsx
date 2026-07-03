// Faint, slowly-animating vector motifs layered behind page sections.
// Pure SVG + CSS animation (no JS/hooks) so it stays cheap and server-rendered.
// Decorative only — aria-hidden, pointer-events none, disabled for reduced motion.

type Kind = "grid" | "orbit" | "film" | "rings" | "wave";

export function SectionDeco({
  kind,
  className = "",
}: {
  kind: Kind;
  className?: string;
}) {
  const cls = `sd sd-${kind} ${className}`;

  if (kind === "grid") {
    const dots = [];
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 7; x++) {
        dots.push(
          <circle key={`${x}-${y}`} cx={10 + x * 33} cy={10 + y * 33} r={1.7} />
        );
      }
    }
    return (
      <svg className={cls} viewBox="0 0 220 220" aria-hidden="true">
        <g className="sd-grid-g">{dots}</g>
      </svg>
    );
  }

  if (kind === "orbit") {
    return (
      <svg className={cls} viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="54" />
        <circle cx="100" cy="100" r="28" />
        <g className="sd-orbit-g">
          <circle className="sd-dot" cx="100" cy="20" r="4.5" />
        </g>
        <g className="sd-orbit-g2">
          <circle className="sd-dot" cx="100" cy="46" r="3.2" />
        </g>
      </svg>
    );
  }

  if (kind === "film") {
    // two identical stacked strips so a -50% scroll loops seamlessly
    const frames = [];
    for (let i = 0; i < 20; i++) {
      const y = i * 40;
      frames.push(
        <g key={i}>
          <rect x="20" y={y + 4} width="80" height="32" rx="3" />
          <circle className="sd-dot" cx="10" cy={y + 20} r="2.4" />
          <circle className="sd-dot" cx="110" cy={y + 20} r="2.4" />
        </g>
      );
    }
    return (
      <svg
        className={cls}
        viewBox="0 0 120 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g className="sd-film-g">{frames}</g>
      </svg>
    );
  }

  if (kind === "rings") {
    return (
      <svg className={cls} viewBox="0 0 200 200" aria-hidden="true">
        <circle className="sd-ring" cx="100" cy="100" r="30" />
        <circle className="sd-ring" cx="100" cy="100" r="30" />
        <circle className="sd-ring" cx="100" cy="100" r="30" />
        <circle className="sd-core" cx="100" cy="100" r="5" />
      </svg>
    );
  }

  // wave — one long sine translated -50% for a seamless drift
  return (
    <svg
      className={cls}
      viewBox="0 0 240 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g className="sd-wave-g">
        <path d="M0,30 Q30,8 60,30 T120,30 T180,30 T240,30 T300,30 T360,30 T420,30 T480,30" />
        <path d="M0,42 Q30,24 60,42 T120,42 T180,42 T240,42 T300,42 T360,42 T420,42 T480,42" />
      </g>
    </svg>
  );
}
