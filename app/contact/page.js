import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Ready to get a website for your business? Reach out to LawsonTech for a quote, no pressure, just a quick conversation about what you need.",
};

export default function Contact() {
  return (
    <section className="section-tint-indigo">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Contact</div>
          <h2>Get a free 15-minute site audit</h2>
          <p>I&rsquo;ll take a look at your current site (or lack of one) and send back a few honest, specific suggestions. No obligation.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
           <div className="info-row">
  <div className="label">Email</div>
  <div className="value">adrianalaws28@gmail.com</div>
</div>
            <div className="info-row">
              <div className="label">GitHub</div>
              <div className="value">github.com/lawsontechweb</div>
            </div>
            <div className="info-row">
              <div className="label">Response Time</div>
              <div className="value">Within 24 hours</div>
            </div>
            
            <a href="https://www.linkedin.com/in/adriana-lawson-456638344/" target="_blank" rel="noreferrer" className="btn-ghost">Find Me on LinkedIn →</a>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}