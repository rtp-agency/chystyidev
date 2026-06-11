import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chystyi.dev"),
  title: "David Chystyi — AI Consulting & Cost Optimization",
  description:
    "AI consulting, cost optimization and implementation. I cut AI running costs by 80–99% and make AI reliable on complex production tasks.",
  keywords: [
    "AI consulting",
    "AI cost optimization",
    "AI cost reduction",
    "AI implementation",
    "AI strategy consulting",
    "AI consultant",
    "LLM cost optimization",
    "reduce AI costs",
    "multi-agent AI systems",
    "production AI",
    "AI reliability",
    "AI infrastructure optimization",
  ],
  authors: [{ name: "David Chystyi", url: "https://chystyi.dev" }],
  creator: "David Chystyi",
  alternates: { canonical: "/" },
  openGraph: {
    title: "David Chystyi — AI Consulting & Cost Optimization",
    description:
      "Cut AI running costs by 80–99% and make AI reliable in production. AI consulting & cost optimization.",
    type: "website",
    url: "https://chystyi.dev",
    siteName: "David Chystyi",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Chystyi — AI Consulting & Cost Optimization",
    description:
      "Cut AI running costs by 80–99% and make AI reliable in production.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://chystyi.dev/#service",
  name: "David Chystyi — AI Consulting & Cost Optimization",
  url: "https://chystyi.dev",
  description:
    "AI consulting focused on AI cost optimization and reliable AI implementation for companies running AI at scale.",
  image: "https://chystyi.dev/opengraph-image",
  priceRange: "$$",
  areaServed: "Worldwide",
  knowsAbout: [
    "AI consulting",
    "AI cost optimization",
    "AI cost reduction",
    "AI implementation",
    "Multi-agent AI systems",
    "LLM orchestration",
    "Production AI reliability",
  ],
  serviceType: [
    "AI Consulting",
    "AI Cost Optimization",
    "AI Implementation",
    "AI Reliability Engineering",
  ],
  founder: {
    "@type": "Person",
    name: "David Chystyi",
    jobTitle: "AI Implementation Consultant",
    url: "https://chystyi.dev",
    sameAs: [
      "https://www.linkedin.com/in/david-chistiy-01a3a2376/",
      "https://github.com/rtp-agency",
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Cost Optimization",
          description:
            "Cut AI running costs by 80–99% by replacing overpriced parts of your AI stack with cheaper equivalents at the same quality.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Reliability Engineering",
          description:
            "Make AI reliable on complex, multi-step production tasks through multi-agent architecture and verification layers.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* SVG displacement filter for real liquid-glass refraction */}
        <svg
          aria-hidden="true"
          width="0"
          height="0"
          style={{ position: "absolute" }}
        >
          <filter
            id="liquid-glass"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.014"
              numOctaves={2}
              seed={7}
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation={3} result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale={28}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
        <div className="grain" aria-hidden="true" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
