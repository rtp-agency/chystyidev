import Link from "next/link";
import { LiquidGlass } from "./LiquidGlass";

export function Nav({
  variant = "home",
}: {
  variant?: "home" | "case" | "agencies";
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
              <Link href="/agencies">For agencies</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        ) : variant === "agencies" ? (
          <ul className="nav-links">
            <li>
              <a href="#automate">What I automate</a>
            </li>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Book an audit</a>
            </li>
          </ul>
        ) : (
          <Link href="/#work" className="nav-back">
            ← Back to work
          </Link>
        )}
        </div>
      </LiquidGlass>
    </nav>
  );
}
