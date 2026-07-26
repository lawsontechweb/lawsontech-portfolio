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
        <div>
          <div
            style={{
              position: "relative",
              width: "220px",
              aspectRatio: "4 / 5",
              borderRadius: "8px",
              overflow: "hidden",
              marginBottom: "24px",
            }}
          >
            <Image
              src="/images/about-photo.jpg"
              alt="Adriana Lawson, founder of LawsonTech"
              fill
              sizes="220px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="about-photo">
            <svg viewBox="0 0 200 250" width="80%" height="80%">
              <g transform="translate(100,75)">
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ff5da2" strokeWidth="1.3" opacity="0.75" transform="rotate(0)" />
                <circle cx="0" cy="-50" r="2" fill="#ff5da2" opacity="0.85" transform="rotate(0)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ffffff" strokeWidth="1.3" opacity="0.65" transform="rotate(30)" />
                <circle cx="0" cy="-50" r="2" fill="#ffffff" opacity="0.75" transform="rotate(30)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ff5da2" strokeWidth="1.3" opacity="0.75" transform="rotate(60)" />
                <circle cx="0" cy="-50" r="2" fill="#ff5da2" opacity="0.85" transform="rotate(60)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ffffff" strokeWidth="1.3" opacity="0.65" transform="rotate(90)" />
                <circle cx="0" cy="-50" r="2" fill="#ffffff" opacity="0.75" transform="rotate(90)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ff5da2" strokeWidth="1.3" opacity="0.75" transform="rotate(120)" />
                <circle cx="0" cy="-50" r="2" fill="#ff5da2" opacity="0.85" transform="rotate(120)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ffffff" strokeWidth="1.3" opacity="0.65" transform="rotate(150)" />
                <circle cx="0" cy="-50" r="2" fill="#ffffff" opacity="0.75" transform="rotate(150)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ff5da2" strokeWidth="1.3" opacity="0.75" transform="rotate(180)" />
                <circle cx="0" cy="-50" r="2" fill="#ff5da2" opacity="0.85" transform="rotate(180)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ffffff" strokeWidth="1.3" opacity="0.65" transform="rotate(210)" />
                <circle cx="0" cy="-50" r="2" fill="#ffffff" opacity="0.75" transform="rotate(210)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ff5da2" strokeWidth="1.3" opacity="0.75" transform="rotate(240)" />
                <circle cx="0" cy="-50" r="2" fill="#ff5da2" opacity="0.85" transform="rotate(240)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ffffff" strokeWidth="1.3" opacity="0.65" transform="rotate(270)" />
                <circle cx="0" cy="-50" r="2" fill="#ffffff" opacity="0.75" transform="rotate(270)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ff5da2" strokeWidth="1.3" opacity="0.75" transform="rotate(300)" />
                <circle cx="0" cy="-50" r="2" fill="#ff5da2" opacity="0.85" transform="rotate(300)" />
                <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ffffff" strokeWidth="1.3" opacity="0.65" transform="rotate(330)" />
                <circle cx="0" cy="-50" r="2" fill="#ffffff" opacity="0.75" transform="rotate(330)" />
              </g>
              <g transform="translate(55,45)">
                <line x1="0" y1="-4" x2="0" y2="-20" stroke="#ffffff" strokeWidth="0.9" opacity="0.55" transform="rotate(0)" />
                <line x1="0" y1="-4" x2="0" y2="-20" stroke="#ff5da2" strokeWidth="0.9" opacity="0.55" transform="rotate(45)" />
                <line x1="0" y1="-4" x2="0" y2="-20" stroke="#ffffff" strokeWidth="0.9" opacity="0.55" transform="rotate(90)" />
                <line x1="0" y1="-4" x2="0" y2="-20" stroke="#ff5da2" strokeWidth="0.9" opacity="0.55" transform="rotate(135)" />
                <line x1="0" y1="-4" x2="0" y2="-20" stroke="#ffffff" strokeWidth="0.9" opacity="0.55" transform="rotate(180)" />
                <line x1="0" y1="-4" x2="0" y2="-20" stroke="#ff5da2" strokeWidth="0.9" opacity="0.55" transform="rotate(225)" />
                <line x1="0" y1="-4" x2="0" y2="-20" stroke="#ffffff" strokeWidth="0.9" opacity="0.55" transform="rotate(270)" />
                <line x1="0" y1="-4" x2="0" y2="-20" stroke="#ff5da2" strokeWidth="0.9" opacity="0.55" transform="rotate(315)" />
              </g>
              <g transform="translate(150,95)">
                <line x1="0" y1="-4" x2="0" y2="-18" stroke="#ff5da2" strokeWidth="0.9" opacity="0.55" transform="rotate(0)" />
                <line x1="0" y1="-4" x2="0" y2="-18" stroke="#ffffff" strokeWidth="0.9" opacity="0.55" transform="rotate(60)" />
                <line x1="0" y1="-4" x2="0" y2="-18" stroke="#ff5da2" strokeWidth="0.9" opacity="0.55" transform="rotate(120)" />
                <line x1="0" y1="-4" x2="0" y2="-18" stroke="#ffffff" strokeWidth="0.9" opacity="0.55" transform="rotate(180)" />
                <line x1="0" y1="-4" x2="0" y2="-18" stroke="#ff5da2" strokeWidth="0.9" opacity="0.55" transform="rotate(240)" />
                <line x1="0" y1="-4" x2="0" y2="-18" stroke="#ffffff" strokeWidth="0.9" opacity="0.55" transform="rotate(300)" />
              </g>
              <line x1="55" y1="210" x2="145" y2="210" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
              <rect x="63" y="175" width="18" height="35" rx="2" fill="#ff5da2" opacity="0.9" />
              <rect x="91" y="145" width="18" height="65" rx="2" fill="#ffffff" opacity="0.9" />
              <rect x="119" y="115" width="18" height="95" rx="2" fill="#ff5da2" />
              <circle cx="128" cy="110" r="3" fill="#ffffff" />
            </svg>
          </div>
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