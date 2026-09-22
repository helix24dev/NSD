"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Variant = "investor" | "general";

const tickets = ["Under AED 250,000", "AED 250,000 – 1,000,000", "AED 1,000,000 – 5,000,000", "AED 5,000,000+"];
const topics = ["Riders and bikes for my delivery app", "Investing in a fleet", "Riding with NSD", "Something else"];

export default function LeadForm({ variant = "investor" }: { variant?: Variant }) {
  const [status, setStatus] = useState("Pressing send opens your email app with your details filled in.");

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
      `Company: ${g("company") || "-"}`,
      `Email: ${g("email")}`,
      `Phone: ${g("phone") || "-"}`,
      variant === "investor" ? `Investment range: ${g("ticket") || "-"}` : `Topic: ${g("topic") || "-"}`,
      "",
      "Message:",
      g("message") || "-",
    ].join("\n");
    const subject = (variant === "investor" ? "Investor enquiry from " : "Enquiry from ") + g("name");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    setStatus("Opening your email app…");
    window.location.href = mailto;
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="lf-name">Full name</label>
          <input id="lf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="lf-company">{variant === "investor" ? "Company or fund" : "Company"}</label>
          <input id="lf-company" name="company" type="text" autoComplete="organization" placeholder="Optional" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="lf-email">Email</label>
          <input id="lf-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </div>
        <div className="field">
          <label htmlFor="lf-phone">Phone</label>
          <input id="lf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+971" />
        </div>
      </div>
      {variant === "investor" ? (
        <div className="field">
          <label htmlFor="lf-ticket">How much are you looking to invest?</label>
          <select id="lf-ticket" name="ticket" defaultValue="">
            <option value="">Select a range</option>
            {tickets.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="field">
          <label htmlFor="lf-topic">What can we help with?</label>
          <select id="lf-topic" name="topic" defaultValue="">
            <option value="">Select a topic</option>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      )}
      <div className="field">
        <label htmlFor="lf-msg">Message</label>
        <textarea id="lf-msg" name="message" rows={4} placeholder="Tell us a little about what you need" />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Send message
        </button>
      </div>
      <div className="form-note" aria-live="polite">
        {status}
      </div>
    </form>
  );
}
