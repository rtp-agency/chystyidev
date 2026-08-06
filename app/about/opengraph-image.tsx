import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "David Chystyi — AI engineer and consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // ImageResponse renders on the server with no network, so the portrait is
  // read off disk and inlined rather than fetched by URL.
  const photo = await readFile(
    join(process.cwd(), "public", "img", "david-chystyi-sm.jpg")
  );
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          background: "#121011",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          width={380}
          height={380}
          alt=""
          style={{ borderRadius: 28, objectFit: "cover" }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#c9c2b6",
              fontSize: 24,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 36, height: 2, background: "#c9c2b6" }} />
            David Chystyi
          </div>

          <div
            style={{
              display: "flex",
              color: "#f0ece8",
              fontSize: 56,
              lineHeight: 1.08,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginTop: 26,
            }}
          >
            AI systems businesses can actually rely on.
          </div>

          <div
            style={{
              display: "flex",
              color: "#938b82",
              fontSize: 24,
              marginTop: 26,
            }}
          >
            Reliability · Guardrails · Evals · Cost
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
