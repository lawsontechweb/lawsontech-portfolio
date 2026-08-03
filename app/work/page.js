import Image from "next/image";

export const metadata = {
  title: "Our Work",
  description:
    "See LawsonTech's recent web design work, including Rooted Grounds Landscaping and Café Marlow, two custom small business sites built to convert visitors into customers.",
};

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
                <Image
  src="https://images.unsplash.com/photo-1592595896616-c37162298647?fm=jpg&q=70&w=1200&auto=format&fit=crop"
  alt="Rooted Grounds Landscaping site preview"
  width={800}
  height={600}
  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
  sizes="(max-width: 860px) 100vw, 50vw"
/>
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
                <p>When someone searches "landscaper near me," they click the first clean result and forget the rest exist. An outdated site, a slow load, or a page that&rsquo;s a mess on a phone doesn&rsquo;t just look bad, it actively sends paying customers straight to a competitor.</p>
              </div>
              <div className="case-block">
                <div className="label">What I Built</div>
                <p>A mobile-first site with a sticky call button always in reach, an itemized "estimate ticket" hero that shows exactly what a quote includes, a before/after project gallery that proves the work, and a 4-step process section that answers "what happens after I call" before the visitor even has to ask.</p>
              </div>
              <div className="case-block">
                <div className="label">Why It Matters</div>
                <p>Most local searches happen on a phone, in the moment someone needs a service done. A site that loads slow or buries the phone number doesn&rsquo;t just lose a visit, it loses the job, the referral, and every future search that visitor would have run again.</p>
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
               <Image
  src="https://images.unsplash.com/photo-1775059956734-78ffd2075cec?fm=jpg&q=70&w=1200&auto=format&fit=crop"
  alt="Café Marlow site preview"
  width={800}
  height={600}
  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
  sizes="(max-width: 860px) 100vw, 50vw"
/>
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
                <p>A menu buried in a PDF means pinching and zooming on a tiny screen while deciding where to eat tonight. A phone-only reservation process means an actual phone call during dinner rush, if anyone picks up at all. Both add friction at the exact moment a hungry customer is deciding.</p>
              </div>
              <div className="case-block">
                <div className="label">What I Built</div>
                <p>A site with a styled, readable menu (no PDF, no pinching), a hand-lettered daily specials board as the visual centerpiece, an 8-photo gallery that sells the atmosphere before anyone walks in, and a built-in reservation form with date, time, and party size, no phone call required.</p>
              </div>
              <div className="case-block">
                <div className="label">Why It Matters</div>
                <p>Every extra tap, every unanswered call, every minute of hunting for information costs a restaurant a booking. A fast, on-site reservation form keeps that decision moving toward "booked" instead of losing it to the next search result.</p>
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