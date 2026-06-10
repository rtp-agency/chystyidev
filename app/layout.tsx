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
  title: "David Chystyi — AI Cost Optimization & Reliability Consultant",
  description:
    "I cut what businesses spend running AI models and make those models reliable on structurally complex tasks. Production AI for commercial clients.",
  openGraph: {
    title: "David Chystyi — AI Cost Optimization & Reliability",
    description:
      "Cheaper AI that actually behaves. Cost optimization and production reliability for AI systems.",
    type: "website",
    url: "https://chystyi.dev",
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
        <div className="grain" aria-hidden="true" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
