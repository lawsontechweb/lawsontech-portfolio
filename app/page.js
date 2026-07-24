import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <div className="eyebrow">Web Design · Business Analytics</div>
            <h1>
              Websites for local businesses,<br />
              built by someone who <span className="hl">tracks what works.</span>
            </h1>
            <p className="lede">
              I design and build fast, mobile-first websites for local
              businesses. Because I&rsquo;m trained in data analytics, I
              also set up the tracking that shows you whether it&rsquo;s
              actually bringing in customers.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn-primary">Get a Free Site Audit</Link>
              <Link href="/work" className="btn-ghost">See the Work</Link>
            </div>
            <div className="stat-row">
              <div className="stat"><div className="num">2</div><div className="label">Sites Shipped</div></div>
              <div className="stat"><div className="num">5</div><div className="label">Analytics Projects</div></div>
              <div className="stat"><div className="num">100%</div><div className="label">Mobile-First</div></div>
            </div>
          </div>
          <div className="metric-card">
            <span className="mono tag">Sample Monthly Report</span>
            <div className="metric-title">Site Traffic — Last 30 Days</div>
            <div className="bars">
              <div style={{ height: "40%" }}></div>
              <div style={{ height: "55%" }}></div>
              <div style={{ height: "48%" }}></div>
              <div style={{ height: "70%" }}></div>
              <div style={{ height: "62%" }}></div>
              <div style={{ height: "85%" }}></div>
              <div style={{ height: "100%" }}></div>
            </div>
           <div className="metric-caption">This is the kind of dashboard I set up for clients on the Analytics plan. It&rsquo;s not just a pretty site, it&rsquo;s a way to see it working.</div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Recent Work</div>
            <h2>Two demo builds, two very different businesses</h2>
            <p>Built to show exactly what a site for your industry could look like.</p>
          </div>
          <div className="work-grid">
            <Link href="/work" className="work-card">
              <div className="work-thumb thumb-landscaping">
                <img src="https://images.unsplash.com/photo-1592595896616-c37162298647?fm=jpg&q=70&w=1200&auto=format&fit=crop" alt="Rooted Grounds Landscaping site preview" />
                <span>Rooted Grounds</span>
              </div>
              <div className="work-body">
                <div className="work-tag">Landscaping / Contractor</div>
                <h3>Rooted Grounds Landscaping</h3>
                <p>A mobile-first site built around one goal: get the phone to ring. Estimate-ticket hero, before/after gallery, sticky call bar.</p>
                <span className="work-link">View case study →</span>
              </div>
            </Link>
            <Link href="/work" className="work-card">
              <div className="work-thumb thumb-cafe">
                <img src="https://images.unsplash.com/photo-1775059956734-78ffd2075cec?fm=jpg&q=70&w=1200&auto=format&fit=crop" alt="Café Marlow site preview" />
                <span>Café Marlow</span>
              </div>
              <div className="work-body">
                <div className="work-tag">Restaurant / Café</div>
                <h3>Café Marlow</h3>
                <p>A bistro site built to drive reservations — styled menu, photo gallery, hand-lettered specials board, table booking form.</p>
                <span className="work-link">View case study →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tint-coral">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why Analytics Matters</div>
            <h2>Most web designers stop at &ldquo;it looks good.&rdquo;</h2>
           <p>
  I come from a Business Analytics background: SQL, Python, and
  Power BI. So I think about your site the way I&rsquo;d think
  about any dataset. What&rsquo;s actually driving results, and
  how do we know. <Link href="/analytics" className="work-link">See how that translates →</Link>
</p>
          </div>
        </div>
      </section>
    </>
  );
}
