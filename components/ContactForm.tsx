"use client";

import { useState } from "react";

// Posts to Web3Forms, which emails the submission to you — no backend needed.
// Web3Forms access keys are public by design (client-side, with built-in spam
// protection), so it's fine to ship in the bundle. Env var overrides if set.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
  "72ef2613-5e6d-486f-921f-7fd614e8c494";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New inquiry from chystyi.dev");
    data.append("from_name", "chystyi.dev");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea
        name="message"
        placeholder="What are you building, and where does AI cost or reliability hurt?"
        rows={4}
        required
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending" || status === "ok"}
      >
        {status === "sending"
          ? "Sending…"
          : status === "ok"
            ? "Sent ✓"
            : "Send message"}
        {status === "idle" && <span className="arrow">→</span>}
      </button>
      {status === "ok" && (
        <p className="contact-form-status">
          Thanks — I&apos;ll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="contact-form-status">
          Something went wrong. Email me directly at{" "}
          <a href="mailto:david@chystyi.dev">david@chystyi.dev</a>.
        </p>
      )}
    </form>
  );
}
