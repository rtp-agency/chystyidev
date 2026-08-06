import { ImageResponse } from "next/og";

// opengraph-image is per route segment — the one in app/ covers the homepage
// only and does not cascade, so without this file /audit shipped no og:image
// at all. It is the page the LinkedIn Featured card points at, so it needs one.
export const alt =
  "Free AI Systems Audit — where your AI overspends and where it breaks";
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
          Free · Fixed scope · No pitch
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
          <span>Free AI Systems Audit</span>
          <div style={{ display: "flex", marginTop: 10 }}>
            <span style={{ color: "#c9c2b6" }}>
              Where it leaks money, where it breaks.
            </span>
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
            Cost · Reliability · Output quality · Architecture
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
            chystyi.dev/audit →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
