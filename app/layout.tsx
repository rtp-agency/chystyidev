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

// Entity graph for search + generative engines. A single Person entity is the
// citable authority behind the site; the WebSite and ProfessionalService link
// back to it by @id so engines resolve one consistent identity for David.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://chystyi.dev/#david",
      name: "David Chystyi",
      jobTitle: "AI Implementation Consultant",
      hasOccupation: {
        "@type": "Occupation",
        name: "AI Consultant",
        occupationalCategory: "15-1299 Computer Occupations",
      },
      url: "https://chystyi.dev",
      image: "https://chystyi.dev/opengraph-image",
      description:
        "David Chystyi is a solo AI engineer and consultant. He replaces expensive proprietary AI services with custom open-source pipelines (typically 80–99% lower running cost) and builds production video-automation pipelines for creative and content agencies.",
      knowsAbout: [
        "AI cost optimization",
        "AI reliability engineering",
        "Open-source AI pipelines",
        "Video production automation",
        "Automated video editing",
        "AI video localization",
        "Multi-agent LLM orchestration",
        "ComfyUI",
        "FFmpeg",
        "Whisper",
      ],
      sameAs: [
        "https://www.linkedin.com/in/david-chistiy-01a3a2376/",
        "https://github.com/rtp-agency",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://chystyi.dev/#website",
      url: "https://chystyi.dev",
      name: "David Chystyi",
      inLanguage: "en",
      publisher: { "@id": "https://chystyi.dev/#david" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://chystyi.dev/#service",
      name: "David Chystyi — AI Consulting & Cost Optimization",
      url: "https://chystyi.dev",
      description:
        "AI consulting focused on AI cost optimization and reliable AI implementation for companies running AI at scale, plus video-production automation pipelines for agencies.",
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
        "Video production automation",
      ],
      serviceType: [
        "AI Consulting",
        "AI Cost Optimization",
        "AI Implementation",
        "AI Reliability Engineering",
        "Video Production Automation",
      ],
      founder: { "@id": "https://chystyi.dev/#david" },
      provider: { "@id": "https://chystyi.dev/#david" },
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
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Video Production Automation",
              description:
                "Custom AI video pipelines for agencies — automated editing, cleanup, reframing, lipsync and localization at scale, built on open-source models.",
            },
          },
        ],
      },
    },
  ],
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
        <div className="grain" aria-hidden="true" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
