import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          404
        </div>
        <h1>This page doesn&apos;t exist.</h1>
        <p className="lead" style={{ margin: "0 auto 40px", maxWidth: 460 }}>
          The page you&apos;re looking for moved or never existed.
        </p>
        <Link href="/" className="btn btn-primary">
          Back home <span className="arrow">→</span>
        </Link>
      </div>
    </main>
  );
}
