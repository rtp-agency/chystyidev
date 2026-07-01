import { ImageResponse } from "next/og";

export const alt =
  "Video Production Automation for Agencies — David Chystyi";
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
          David Chystyi · For agencies
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#f0ece8",
            fontSize: 68,
            lineHeight: 1.06,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          <span>An hour of manual editing</span>
          <div style={{ display: "flex" }}>
            <span>per video, done in</span>
            <span style={{ color: "#c9c2b6", marginLeft: 20 }}>3 minutes.</span>
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
            Custom AI video pipelines for agencies
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
            Get a free workflow audit →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
