import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="section-tint-indigo">
      <div className="wrap section-head" style={{ textAlign: "center", padding: "80px 0" }}>
        <div className="eyebrow">404</div>
        <h2>This page doesn&rsquo;t exist</h2>
        <p>The page you&rsquo;re looking for may have been moved or removed.</p>
        <div className="case-cta" style={{ marginTop: 24 }}>
          <Link href="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}