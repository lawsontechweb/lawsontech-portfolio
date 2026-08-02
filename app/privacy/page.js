export const metadata = {
  title: "Privacy Policy",
  description: "How LawsonTech collects, uses, and protects information from visitors to lawsontech.dev.",
};

export default function Privacy() {
  return (
    <section className="section-tint-teal">
      <div className="wrap section-head">
        <div className="eyebrow">Privacy Policy</div>
        <h2>How we handle your information</h2>
        <p>Last updated: July 26, 2026</p>
      </div>

      <div className="wrap" style={{ maxWidth: 760, paddingBottom: 60 }}>
        <p style={{ marginBottom: 20 }}>
          LawsonTech (&ldquo;LawsonTech,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy explains what information we collect through lawsontech.dev (the &ldquo;Site&rdquo;), how we use it, and the choices you have.
        </p>

        <h3 style={{ marginTop: 32, marginBottom: 12 }}>Information We Collect</h3>
        <p style={{ marginBottom: 12 }}>We collect information in the following ways:</p>
        <ul style={{ marginBottom: 20, paddingLeft: 20, color: "var(--muted)" }}>
          <li style={{ marginBottom: 8 }}>Contact form submissions: When you submit our contact form, we collect the name, email address, business name, and message you provide. Submissions are processed through Web3Forms and delivered to our email inbox.</li>
          <li style={{ marginBottom: 8 }}>Analytics: We use Google Analytics to understand how visitors use the Site, including pages viewed, time on site, and general location (city/region level, not precise address). Google Analytics uses cookies to collect this information.</li>
          <li style={{ marginBottom: 8 }}>We do not collect payment information through the Site. Any payments for services are arranged separately and are not processed through this website.</li>
        </ul>

        <h3 style={{ marginTop: 32, marginBottom: 12 }}>How We Use Your Information</h3>
        <ul style={{ marginBottom: 20, paddingLeft: 20, color: "var(--muted)" }}>
          <li style={{ marginBottom: 8 }}>To respond to inquiries submitted through the contact form.</li>
          <li style={{ marginBottom: 8 }}>To understand and improve how visitors use the Site.</li>
          <li style={{ marginBottom: 8 }}>To communicate with current or prospective clients about LawsonTech services.</li>
        </ul>

        <h3 style={{ marginTop: 32, marginBottom: 12 }}>Sharing Your Information</h3>
        <p style={{ marginBottom: 12 }}>We do not sell, rent, or trade your personal information. We share information only with the third-party service providers necessary to operate the Site:</p>
        <ul style={{ marginBottom: 20, paddingLeft: 20, color: "var(--muted)" }}>
          <li style={{ marginBottom: 8 }}>Web3Forms, to process and deliver contact form submissions.</li>
          <li style={{ marginBottom: 8 }}>Vercel, to host the Site.</li>
          <li style={{ marginBottom: 8 }}>Google Analytics, to measure Site traffic and usage.</li>
        </ul>
        <p style={{ marginBottom: 20 }}>These providers may process information on servers located outside your home state or country. Each operates under its own privacy policy.</p>

        <h3 style={{ marginTop: 32, marginBottom: 12 }}>Cookies</h3>
        <p style={{ marginBottom: 20 }}>Google Analytics places cookies on your device to distinguish visitors and sessions. You can disable cookies through your browser settings, or opt out of Google Analytics tracking using the Google Analytics Opt-out Browser Add-on.</p>

        <h3 style={{ marginTop: 32, marginBottom: 12 }}>Data Retention</h3>
        <p style={{ marginBottom: 20 }}>Contact form submissions are retained in our email inbox for as long as needed to respond to your inquiry and maintain business records. Analytics data is retained according to Google Analytics&rsquo; standard retention settings.</p>

        <h3 style={{ marginTop: 32, marginBottom: 12 }}>Children&rsquo;s Privacy</h3>
        <p style={{ marginBottom: 20 }}>The Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>

        <h3 style={{ marginTop: 32, marginBottom: 12 }}>Your Choices</h3>
        <ul style={{ marginBottom: 20, paddingLeft: 20, color: "var(--muted)" }}>
          <li style={{ marginBottom: 8 }}>You may request that we delete any personal information you&rsquo;ve submitted by emailing us at the address below.</li>
          <li style={{ marginBottom: 8 }}>You may opt out of analytics tracking using your browser&rsquo;s cookie settings or a browser extension.</li>
        </ul>

        <h3 style={{ marginTop: 32, marginBottom: 12 }}>Changes to This Policy</h3>
        <p style={{ marginBottom: 20 }}>We may update this policy from time to time. The &ldquo;Last Updated&rdquo; date above reflects the most recent version.</p>

        <h3 style={{ marginTop: 32, marginBottom: 12 }}>Contact Us</h3>
        <p>Questions about this policy can be sent to adrianalaws28@gmail.com.</p>
      </div>
    </section>
  );
}