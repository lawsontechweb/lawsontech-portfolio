export default function Work() {
  return (
    <>
     <section className="section-tint-teal" style={{ paddingBottom: 20 }}>
        <div className="wrap section-head">
          <div className="eyebrow">Work</div>
          <h2>Case studies</h2>
          <p>Two demo builds, each shaped around what that type of business actually needs from a site.</p>
        </div>
      </section>

      <div className="wrap">
        <div className="case-study">
          <div className="case-grid">
            <div>
              <div className="case-thumb thumb-landscaping">
                <img src="https://images.unsplash.com/photo-1592595896616-c37162298647?fm=jpg&q=70&w=1200&auto=format&fit=crop" alt="Rooted Grounds Landscaping site preview" />
              </div>
              <div className="case-meta">
                <span className="mono">Industry: Landscaping / Contractor</span>
                <span className="mono">Stack: Next.js</span>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: 18 }}>Rooted Grounds Landscaping</h3>
              <div className="case-block">
                <div className="label">The Problem</div>
                <p>Local landscaping companies lose potential customers because most competitor sites are outdated, slow, or hard to use on a phone, and homeowners just leave for the next search result.</p>
              </div>
              <div className="case-block">
                <div className="label">What I Built</div>
                <p>A mobile-first site with a sticky call button, an itemized &ldquo;estimate ticket&rdquo; hero element, a before/after project gallery, and a 4-step process section that answers &ldquo;what happens after I call&rdquo; before the visitor even asks.</p>
              </div>
              <div className="case-block">
                <div className="label">Why It Matters</div>
                <p>Most local searches happen on mobile. A site that loads slow or buries the phone number costs the business real leads before the phone ever rings.</p>
              </div>
              <div className="case-cta">
                <a href="https://rooted-grounds-landscaping-446v.vercel.app" target="_blank" rel="noreferrer" className="btn-ghost">View Live Demo →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="case-study">
          <div className="case-grid">
            <div>
              <div className="case-thumb thumb-cafe">
                <img src="https://images.unsplash.com/photo-1775059956734-78ffd2075cec?fm=jpg&q=70&w=1200&auto=format&fit=crop" alt="Café Marlow site preview" />
              </div>
              <div className="case-meta">
                <span className="mono">Industry: Restaurant / Café</span>
                <span className="mono">Stack: Next.js</span>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: 18 }}>Café Marlow</h3>
              <div className="case-block">
                <div className="label">The Problem</div>
               <p>Restaurants often bury their menu in a PDF and make reservations a phone-only process, and both add friction right at the moment someone&rsquo;s deciding where to eat tonight.</p>
              </div>
              <div className="case-block">
                <div className="label">What I Built</div>
                <p>A site with a styled, readable menu (no PDF), a hand-lettered daily specials board as the visual centerpiece, an 8-photo gallery, and a built-in reservation form with date, time, and party size.</p>
              </div>
              <div className="case-block">
                <div className="label">Why It Matters</div>
               <p>Every extra tap or phone call between &ldquo;interested&rdquo; and &ldquo;booked&rdquo; loses customers. A fast, on-site reservation form keeps that decision moving instead of stalling it.</p>
              </div>
              <div className="case-cta">
                <a href="https://cafe-marlow.vercel.app" target="_blank" rel="noreferrer" className="btn-ghost">View Live Demo →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}