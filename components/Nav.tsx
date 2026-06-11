import Link from "next/link";
import { LiquidGlass } from "./LiquidGlass";

export function Nav({ variant = "home" }: { variant?: "home" | "case" }) {
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
              <a href="#contact">Contact</a>
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
