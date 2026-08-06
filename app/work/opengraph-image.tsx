import { ImageResponse } from "next/og";

// The case-study index had no og:image of its own — see the note in
// app/audit/opengraph-image.tsx.
export const alt =
  "Case studies — production AI and video automation, each with the numbers";
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
          Case studies
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#f0ece8",
            fontSize: 76,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <span>Production AI systems</span>
          <div style={{ display: "flex", marginTop: 10 }}>
            <span>that </span>
            <span style={{ color: "#c9c2b6", marginLeft: 20 }}>shipped.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", color: "#938b82", fontSize: 26 }}>
            99%+ cost cuts · 1 hour of editing in ~3 minutes
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f0ece8",
              color: "#121011",
              fontSize: 28,
              fontWeight: 600,
              padding: "18px 34px",
              borderRadius: 999,
            }}
          >
            chystyi.dev/work →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
