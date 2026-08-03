import Link from "next/link";
import BeforeAfterSlider from "./BeforeAfterSlider";

export const metadata = {
  title: "Why Your Business Needs a Website",
  description:
    "Still relying on Facebook or Yelp alone? See why a real website builds more trust and converts more customers than social pages for your business.",
};

function FacebookMock() {
  return (
    <div className="mock-fb">
      <div className="mock-fb-cover">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?fm=jpg&q=70&w=1200&auto=format&fit=crop"
          alt=""
        />
      </div>
      <div className="mock-fb-header">
        <div className="mock-fb-avatar">
          <img
            src="https://images.unsplash.com/photo-1592595896616-c37162298647?fm=jpg&q=70&w=200&auto=format&fit=crop"
            alt=""
          />
        </div>
        <div>
          <div className="mock-fb-name">Rooted Grounds Landscaping</div>
          <div className="mock-fb-sub">Landscaping Company · 12 reviews</div>
        </div>
      </div>
      <div className="mock-fb-tabs">
        <span className="active">Home</span><span>Reviews</span><span>Photos</span><span>About</span>
      </div>
      <div className="mock-fb-post">
        <div className="mock-fb-post-head">Posted 3 weeks ago</div>
        <div className="mock-fb-post-body">Still doing spring cleanups. Call or message for pricing.</div>
        <div className="mock-fb-comment">
          <span className="mock-fb-comment-name">Karen M.</span> Do you service the north side?
        </div>
        <div className="mock-fb-comment">
          <span className="mock-fb-comment-name">Dave R.</span> Sent a message 2 weeks ago, no reply yet
        </div>
      </div>
      <div className="mock-fb-post">
        <div className="mock-fb-post-head">Posted 2 months ago</div>
        <div className="mock-fb-post-body">Are you open Saturdays?</div>
        <div className="mock-fb-comment">
          <span className="mock-fb-comment-name">Priya S.</span> +1 also wondering this
        </div>
      </div>
      <div className="mock-fb-post">
        <div className="mock-fb-post-head">Posted 4 months ago</div>
        <div className="mock-fb-post-body">Fall cleanup slots filling up, message us to book.</div>
        <div className="mock-fb-comment">
          <span className="mock-fb-comment-name">Tom W.</span> What&rsquo;s the price range for a half acre?
        </div>
      </div>
    </div>
  );
}

function WebsiteMock() {
  return (
    <div className="mock-site">
      <div className="mock-site-nav">
        <span className="mock-site-brand">Rooted Grounds</span>
        <div className="mock-site-navlinks">
          <span>Services</span><span>Gallery</span><span>Reviews</span>
        </div>
        <span className="mock-site-cta">Get a Quote</span>
      </div>

      <div className="mock-site-hero">
        <div className="mock-site-badge">★★★★★ 4.9 rated locally</div>
        <div className="mock-site-eyebrow">Licensed &amp; Insured</div>
        <div className="mock-site-h1">Spring cleanups, done right.</div>
        <div className="mock-site-sub">Request a free estimate. Most requests get a same-day reply.</div>
        <div className="mock-site-btnrow">
          <span className="mock-site-btn-primary">Call Now</span>
          <span className="mock-site-btn-ghost">Get Estimate</span>
        </div>
      </div>

      <div className="mock-site-gallery">
        <div className="mock-site-photo mock-site-photo-1" />
        <div className="mock-site-photo mock-site-photo-2" />
        <div className="mock-site-photo mock-site-photo-3" />
      </div>

      <div className="mock-site-quote">
        &ldquo;Called at 8am, they were out by 2pm. Yard looks incredible.&rdquo;
        <span>— Jenna T., verified customer</span>
      </div>

      <div className="mock-site-stats">
        <div><b>4.9★</b><span>32 Reviews</span></div>
        <div><b>Fast</b><span>Response Time</span></div>
        <div><b>100%</b><span>Mobile-Ready</span></div>
      </div>
    </div>
  );
}

export default function WhyAWebsite() {
  return (
    <>
      <section className="section-tint-indigo" style={{ paddingBottom: 20 }}>
        <div className="wrap section-head">
          <div className="eyebrow">Why a Real Website</div>
          <h2>A Facebook page isn&rsquo;t a storefront. It&rsquo;s a waiting room.</h2>
          <p>Drag the slider to see the difference between what most local businesses have now, and what customers actually see when there&rsquo;s a real site behind the name.</p>
        </div>
      </section>

      <div className="wrap">
        <BeforeAfterSlider before={<FacebookMock />} after={<WebsiteMock />} />
      </div>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Same Story, Yelp</div>
            <h2>Yelp has the same problem</h2>
            <p>A Yelp listing is controlled by Yelp, not you. Ads for competitors can show up on your own page.</p>
          </div>
          <div className="compare-grid">
            <div className="compare-card">
              <div className="compare-label">Yelp Listing</div>
              <ul className="compare-list">
                <li>Layout and ranking controlled by Yelp&rsquo;s algorithm</li>
                <li>Competitor ads can appear on your own listing</li>
                <li>No way to add a booking form, gallery, or custom pages</li>
                <li>You don&rsquo;t own the traffic or the data</li>
              </ul>
            </div>
            <div className="compare-card compare-card-highlight">
              <div className="compare-label">Your Own Website</div>
              <ul className="compare-list">
                <li>You control the layout, message, and calls to action</li>
                <li>No competitor ever appears on your own page</li>
                <li>Booking forms, galleries, and pages built around your business</li>
                <li>You own the traffic, and I set up the tracking to prove it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tint-coral">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">The Real Difference</div>
            <h2>What actually changes</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">Shows up in Google search, not just social feeds</div>
            <div className="why-item">Looks credible the moment someone lands on it</div>
            <div className="why-item">Captures leads directly instead of losing them to a comment thread</div>
            <div className="why-item">Comes with real tracking, so you know what&rsquo;s working</div>
          </div>
          <div className="case-cta" style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn-primary">Get a Free Site Audit</Link>
          </div>
        </div>
      </section>
    </>
  );
}