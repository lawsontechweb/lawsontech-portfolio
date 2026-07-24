"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "429c9d2b-9028-4822-83bf-98b62da66fa9");
    formData.append("subject", "New Site Audit Request — LawsonTech");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div className="form-row">
        <label htmlFor="business">Business name</label>
        <input id="business" name="business" type="text" required />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="form-row">
        <label htmlFor="details">What do you need?</label>
        <textarea
          id="details"
          name="details"
          rows="3"
          placeholder="New site, redesign, not sure yet..."
        />
      </div>
      <button type="submit" className="submit-btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Request Free Audit"}
      </button>
      {status === "success" && (
        <p className="form-note">Thanks! I&rsquo;ll get back to you within 24 hours.</p>
      )}
      {status === "error" && (
        <p className="form-note">Something went wrong. Try emailing adrianalaws28@gmail.com directly.</p>
      )}
    </form>
  );
}