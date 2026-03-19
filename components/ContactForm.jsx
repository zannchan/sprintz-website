"use client";

import { useState } from "react";
import { companyEmailPrimary, companyEmailSecondary } from "@/components/site-data";

const initialForm = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  inquiryType: "Industrial Equipment",
  category: "",
  brand: "",
  quantity: "",
  details: "",
  country: "",
  payment: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const onChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Unable to submit your inquiry right now.");
      setStatus({ loading: false, success: "Your inquiry has been submitted successfully. Our team will review it and respond shortly.", error: "" });
      setForm(initialForm);
    } catch (error) {
      setStatus({ loading: false, success: "", error: error.message || "Submission failed." });
    }
  }

  return (
    <div className="soft-card">
      <div className="eyebrow">Request for quotation / inquiry</div>
      <form className="form-grid" style={{ marginTop: 24 }} onSubmit={handleSubmit}>
        <div>
          <label className="label">Company Name</label>
          <input value={form.company} onChange={(e) => onChange("company", e.target.value)} className="input" placeholder="Your company" />
        </div>
        <div>
          <label className="label">Contact Person</label>
          <input value={form.contact} onChange={(e) => onChange("contact", e.target.value)} className="input" placeholder="Full name" />
        </div>
        <div>
          <label className="label">Email Address</label>
          <input type="email" value={form.email} onChange={(e) => onChange("email", e.target.value)} className="input" placeholder="name@company.com" />
        </div>
        <div>
          <label className="label">WhatsApp / Phone</label>
          <input value={form.phone} onChange={(e) => onChange("phone", e.target.value)} className="input" placeholder="Contact number" />
        </div>
        <div>
          <label className="label">Inquiry Type</label>
          <select value={form.inquiryType} onChange={(e) => onChange("inquiryType", e.target.value)} className="select">
            <option>Industrial Equipment</option>
            <option>Commodity Trade</option>
            <option>Project Sourcing</option>
            <option>General Business Inquiry</option>
          </select>
        </div>
        <div>
          <label className="label">Product Category / Commodity</label>
          <input value={form.category} onChange={(e) => onChange("category", e.target.value)} className="input" placeholder="e.g. electrical components / rice / sugar" />
        </div>
        <div>
          <label className="label">Brand / Origin</label>
          <input value={form.brand} onChange={(e) => onChange("brand", e.target.value)} className="input" placeholder="Optional" />
        </div>
        <div>
          <label className="label">Quantity / Volume</label>
          <input value={form.quantity} onChange={(e) => onChange("quantity", e.target.value)} className="input" placeholder="Required quantity" />
        </div>
        <div className="form-span-2">
          <label className="label">Part Number / Requirement Details</label>
          <input value={form.details} onChange={(e) => onChange("details", e.target.value)} className="input" placeholder="Provide part numbers, specifications, or trade details" />
        </div>
        <div>
          <label className="label">Destination Country</label>
          <input value={form.country} onChange={(e) => onChange("country", e.target.value)} className="input" placeholder="Delivery / destination country" />
        </div>
        <div>
          <label className="label">Preferred Payment Method</label>
          <input value={form.payment} onChange={(e) => onChange("payment", e.target.value)} className="input" placeholder="LC / TT / Others" />
        </div>
        <div className="form-span-2">
          <label className="label">Message</label>
          <textarea value={form.message} onChange={(e) => onChange("message", e.target.value)} className="textarea" placeholder="Share your inquiry, sourcing request, project details, or commercial interest" />
        </div>
        <div className="form-span-2 btn-row">
          <button type="submit" disabled={status.loading} className="btn btn-primary">
            {status.loading ? "Submitting..." : "Submit Request for Quote"}
          </button>
          <div className="muted" style={{ fontSize: 12, lineHeight: 1.7 }}>
            Visible contact email: {companyEmailPrimary}. Internal copy will be sent to {companyEmailSecondary} via BCC.
          </div>
        </div>
        {status.success ? <div className="notice-ok">{status.success}</div> : null}
        {status.error ? <div className="notice-err">{status.error}</div> : null}
      </form>
    </div>
  );
}
