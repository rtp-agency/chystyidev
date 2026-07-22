"use client";

import { useEffect, useState } from "react";

const CAL_URL = "https://cal.com/david-chistiy-lmbu8n";

// Persistent "book an audit" button that slides in once the user scrolls past
// the hero. Fixed bottom-right on desktop, a bottom bar on mobile.
export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fab${show ? " fab-on" : ""}`}
      aria-label="Book a free audit"
    >
      <span className="fab-dot" aria-hidden="true" />
      <span className="fab-text">Book a free audit</span>
      <span className="arrow">→</span>
    </a>
  );
}
