import Image from "next/image";

export const metadata = {
  title: "About",
  description:
    "Meet the person behind LawsonTech: a Business Analytics student building websites that combine clean design with real performance data.",
};

export default function About() {
  return (
    <section className="section-tint-teal">
      <div className="wrap about-grid">
        <div className="about-photo">
          <Image
            src="/images/about-photo.jpg"
            alt="Adriana Lawson, founder of LawsonTech"
            width={400}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            priority
          />
        </div>
        <div>
          <div className="eyebrow">About LawsonTech</div>
          <h2 style={{ fontSize: "2rem", marginBottom: 18 }}>
  We build websites like we&rsquo;d build a dataset: with a clear
  picture of what &ldquo;working&rdquo; actually looks like.
</h2>
          <p style={{ color: "var(--muted)", marginBottom: 16 }}>
  LawsonTech is a web design studio focused on fast, mobile-first
  websites for local businesses. Founded by Adriana Lawson, a
  Business Analytics student. Most web designers can make
  something look good, but the LawsonTech difference is figuring
  out whether it&rsquo;s actually working, which is the part most
  sites for small businesses skip entirely.
</p>
          <p style={{ color: "var(--muted)", marginBottom: 16 }}>
  That combination, design plus the analytics side, is why we
  don&rsquo;t just hand off a site and disappear. We set up the
  tracking, and we can tell you in plain language what it&rsquo;s
  showing.
</p>
          <div className="skill-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Power BI</span>
            <span className="skill-tag">Excel</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}