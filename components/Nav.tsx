import Link from "next/link";
import { LiquidGlass } from "./LiquidGlass";

export function Nav({
  variant = "home",
}: {
  variant?: "home" | "case" | "work" | "blog";
}) {
  return (
    <nav>
      <LiquidGlass
        className="nav-glass"
        radius={26}
        bezel={22}
        thickness={32}
        ior={2.1}
        scaleRatio={1.2}
      >
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            David Chystyi
          </Link>
        {variant === "home" ? (
          <ul className="nav-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#testimonials">Clients</a>
            </li>
            <li>
              <Link href="/audit">AI audit</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        ) : variant === "work" || variant === "blog" ? (
          <Link href="/" className="nav-back">
            ← Home
          </Link>
        ) : (
          <Link href="/work" className="nav-back">
            ← Back to work
          </Link>
        )}
        </div>
      </LiquidGlass>
    </nav>
  );
}
