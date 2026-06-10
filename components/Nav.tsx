import Link from "next/link";

export function Nav({ variant = "home" }: { variant?: "home" | "case" }) {
  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          David Chystyi
        </Link>
        {variant === "home" ? (
          <ul className="nav-links">
            <li>
              <a href="#approach">Approach</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#services">Services</a>
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
    </nav>
  );
}
