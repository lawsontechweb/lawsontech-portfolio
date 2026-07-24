export default function About() {
  return (
    <section className="section-tint-teal">
      <div className="wrap about-grid">
       <div className="about-photo">
  <svg viewBox="0 0 200 200" width="70%" height="70%" style={{ opacity: 0.9 }}>
    <line x1="20" y1="170" x2="180" y2="170" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <rect x="35" y="120" width="18" height="50" rx="2" fill="var(--lime)" opacity="0.9" />
    <rect x="65" y="95" width="18" height="75" rx="2" fill="var(--white)" opacity="0.85" />
    <rect x="95" y="60" width="18" height="110" rx="2" fill="var(--lime)" opacity="0.7" />
    <rect x="125" y="80" width="18" height="90" rx="2" fill="var(--white)" opacity="0.6" />
    <rect x="155" y="40" width="18" height="130" rx="2" fill="var(--lime)" opacity="0.95" />
    <circle cx="164" cy="34" r="5" fill="var(--white)" />
  </svg>
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
