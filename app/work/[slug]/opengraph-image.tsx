import { ImageResponse } from "next/og";
import { getCase, cases } from "@/lib/cases";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  const title = c?.title ?? "Case Study";
  const eyebrow = c?.eyebrow ?? "Case Study";
  const metric = c?.visual?.kind === "cost" ? `−${c.visual.reduction}` : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#d8d8d8",
            fontSize: 24,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 40, height: 2, background: "#d8d8d8" }} />
          David Chystyi · {eyebrow}
        </div>

        <div
          style={{
            display: "flex",
            color: "#fafafa",
            fontSize: 52,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", color: "#7d7d7d", fontSize: 26 }}>
            AI Cost Optimization &amp; Reliability
          </div>
          {metric && (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                color: "#fafafa",
                fontSize: 68,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {metric}
              <span style={{ fontSize: 22, color: "#7d7d7d" }}>cost</span>
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
