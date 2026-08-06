import { ImageResponse } from "next/og";
import { posts, getPost } from "@/lib/posts";

export const alt = "David Chystyi — blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  const title = p?.title ?? "David Chystyi";

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
          {p?.topic ?? "Writing"}
        </div>

        <div
          style={{
            display: "flex",
            color: "#f0ece8",
            // Long headlines would overflow the card at a fixed size, so step
            // down once past the width this layout comfortably holds.
            fontSize: title.length > 58 ? 58 : 70,
            lineHeight: 1.08,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#938b82",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex" }}>David Chystyi</div>
          <div style={{ display: "flex" }}>
            {p ? `${p.readingMinutes} min read` : "chystyi.dev"}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
