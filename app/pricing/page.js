export const metadata = {
  title: "Pricing",
  description:
    "Simple, transparent website pricing for small businesses: Starter, Growth, and Premium packages starting at $300, with add-ons available.",
};

export default function Pricing() {
  return (
    <>
      <section className="section-tint-indigo" style={{ paddingBottom: 20 }}>
        <div className="wrap section-head">
          <div className="eyebrow">Pricing</div>
          <h2>Straightforward pricing, built around your business</h2>
         <p>Every project starts with a conversation about what you actually need. These are starting points, not fixed quotes.</p>
        </div>
      </section>

      <div className="wrap">
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="price-tier-name">Starter</div>
            <div className="price-amount">Starting at $300</div>
            <p className="price-desc">Perfect for businesses that need a professional online presence without a large investment.</p>
            <div className="price-plus">Includes</div>
            <ul className="price-features">
              <li>Up to 5 pages</li>
              <li>Custom homepage</li>
              <li>Services page</li>
              <li>About page</li>
              <li>Contact page</li>
              <li>Photo gallery</li>
              <li>Contact form</li>
              <li>Mobile optimization</li>
              <li>Basic SEO setup</li>
            </ul>
            <div className="best-for">
              <div className="label">Best For</div>
              <div className="best-for-tags">
                <span className="best-for-tag">Painters</span>
                <span className="best-for-tag">Landscapers</span>
                <span className="best-for-tag">Pressure Washing</span>
                <span className="best-for-tag">Cleaning Companies</span>
                <span className="best-for-tag">Small Contractors</span>
              </div>
            </div>
          </div>

          <div className="pricing-card">
            <div className="price-tier-name">Growth</div>
            <div className="price-amount">Starting at $650</div>
            <p className="price-desc">Designed for businesses that want a stronger online presence and more opportunities to generate leads.</p>
            <div className="price-plus">Everything in Starter, plus</div>
            <ul className="price-features">
              <li>Up to 10 pages</li>
              <li>Individual service pages</li>
              <li>Testimonials section</li>
              <li>FAQ section</li>
              <li>Before &amp; after gallery</li>
              <li>Conversion-focused page layouts</li>
              <li>Expanded SEO structure</li>
            </ul>
            <div className="best-for">
              <div className="label">Best For</div>
              <div className="best-for-tags">
                <span className="best-for-tag">Roofing</span>
                <span className="best-for-tag">HVAC</span>
                <span className="best-for-tag">Plumbing</span>
                <span className="best-for-tag">Concrete</span>
                <span className="best-for-tag">Remodeling</span>
              </div>
            </div>
          </div>

          <div className="pricing-card">
            <div className="price-tier-name">Premium</div>
            <div className="price-amount">Starting at $1,200</div>
            <p className="price-desc">For businesses that need a fully customized website with advanced functionality.</p>
            <div className="price-plus">Includes</div>
            <ul className="price-features">
              <li>Unlimited pages</li>
              <li>Fully custom layouts</li>
              <li>Booking or appointment requests</li>
              <li>Advanced galleries</li>
              <li>Team pages</li>
              <li>Blog / news section</li>
              <li>Multiple locations</li>
              <li>Advanced SEO structure</li>
              <li>Custom integrations</li>
            </ul>
            <div className="best-for">
              <div className="label">Note</div>
              <p style={{ fontSize: "0.88rem", color: "var(--muted)" }}>Custom quote required — every Premium project is scoped individually.</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Add-Ons</div>
            <h2>Optional add-ons</h2>
          </div>
          <table className="addons-table">
            <thead>
              <tr><th>Service</th><th>Price</th></tr>
            </thead>
            <tbody>
              <tr><td>Logo design</td><td>$150</td></tr>
              <tr><td>Additional page</td><td>$50</td></tr>
              <tr><td>Google Business Profile optimization</td><td>$150</td></tr>
              <tr><td>Monthly website care (updates &amp; backups)</td><td>$40/month</td></tr>
              <tr><td>Monthly SEO</td><td>Starting at $150/month</td></tr>
              <tr><td>Additional revision round</td><td>$40</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-tint-teal">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Our Process</div>
            <h2>How a project actually goes</h2>
          </div>
          <div className="process-steps">
            <div className="process-step-row">
              <div className="process-step-num">01</div>
              <div><h3>Discovery</h3><p>We learn about your business, goals, and target customers.</p></div>
            </div>
            <div className="process-arrow">↓</div>
            <div className="process-step-row">
              <div className="process-step-num">02</div>
              <div><h3>Design</h3><p>A custom homepage is designed for your review and feedback.</p></div>
            </div>
            <div className="process-arrow">↓</div>
            <div className="process-step-row">
              <div className="process-step-num">03</div>
              <div><h3>Development</h3><p>Your complete website is built with performance and usability in mind.</p></div>
            </div>
            <div className="process-arrow">↓</div>
            <div className="process-step-row">
              <div className="process-step-num">04</div>
              <div><h3>Launch</h3><p>Your website goes live and is ready for customers.</p></div>
            </div>
            <div className="process-arrow">↓</div>
            <div className="process-step-row">
              <div className="process-step-num">05</div>
              <div><h3>Support</h3><p>Every project includes one month of post-launch support.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint-coral">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Why LawsonTech</div>
            <h2>Why work with us</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">Custom-built websites tailored to your business</div>
            <div className="why-item">Designed to generate leads, not just look good</div>
            <div className="why-item">Mobile-first and optimized for speed</div>
            <div className="why-item">Clear communication throughout every project</div>
            <div className="why-item">Affordable solutions for local businesses</div>
            <div className="why-item">Personal, one-on-one service from start to finish</div>
          </div>
        </div>
      </section>
    </>
  );
}