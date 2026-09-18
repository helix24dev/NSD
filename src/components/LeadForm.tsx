"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Variant = "investor" | "general";

const tickets = ["Under AED 250,000", "AED 250,000 – 1,000,000", "AED 1,000,000 – 5,000,000", "AED 5,000,000+"];
const topics = ["Fleet & workforce supply", "Platform partnership", "Investor enquiry", "Careers / riders", "Other"];

export default function LeadForm({ variant = "investor" }: { variant?: Variant }) {
  const [status, setStatus] = useState(
    "Sending opens your email client with these details, addressed to NSD's " +
      (variant === "investor" ? "investor line." : "team."),
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const fd = new FormData(form);
    const g = (k: string) => String(fd.get(k) || "").trim();
    const lines = [
      `Name: ${g("name")}`,
      `Company / fund: ${g("company") || "—"}`,
      `Email: ${g("email")}`,
      `Phone: ${g("phone") || "—"}`,
      variant === "investor" ? `Investment interest: ${g("ticket") || "—"}` : `Topic: ${g("topic") || "—"}`,
      "",
      "Message:",
      g("message") || "—",
    ].join("\n");
    const subject = (variant === "investor" ? "Investor Enquiry — " : "Enquiry — ") + g("name");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    setStatus("Opening your email client to send this to NSD …");
    window.location.href = mailto;
  };

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate>
      <div className="lf-row">
        <div className="lf-field">
          <label htmlFor="lf-name">Full name</label>
          <input id="lf-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="lf-field">
          <label htmlFor="lf-company">{variant === "investor" ? "Company / fund" : "Company"}</label>
          <input id="lf-company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>
      <div className="lf-row">
        <div className="lf-field">
          <label htmlFor="lf-email">Email</label>
          <input id="lf-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="lf-field">
          <label htmlFor="lf-phone">Phone</label>
          <input id="lf-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      {variant === "investor" ? (
        <div className="lf-field">
          <label htmlFor="lf-ticket">Investment interest</label>
          <select id="lf-ticket" name="ticket" defaultValue="">
            <option value="">Select a range</option>
            {tickets.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="lf-field">
          <label htmlFor="lf-topic">What is this about?</label>
          <select id="lf-topic" name="topic" defaultValue="">
            <option value="">Select a topic</option>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      )}
      <div className="lf-field">
        <label htmlFor="lf-msg">Message</label>
        <textarea id="lf-msg" name="message" rows={3} placeholder="Anything specific you'd like to discuss" />
      </div>
      <div>
        <button type="submit" className="btn btn-solid">
          Send enquiry →
        </button>
      </div>
      <div className="lf-note" aria-live="polite">
        {status}
      </div>
    </form>
  );
}
