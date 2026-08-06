import { ImageResponse } from "next/og";

export const alt =
  "David Chystyi — writing on AI cost optimization and production reliability";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121011",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#c9c2b6",
            fontSize: 26,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 40, height: 2, background: "#c9c2b6" }} />
          David Chystyi — Writing
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#f0ece8",
            fontSize: 80,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <span>Notes from</span>
          <span style={{ color: "#c9c2b6" }}>production.</span>
        </div>

        <div style={{ display: "flex", color: "#938b82", fontSize: 26 }}>
          AI cost optimization · Reliability · Evals
        </div>
      </div>
    ),
    { ...size }
  );
}
