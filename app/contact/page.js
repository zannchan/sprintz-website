import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/SiteChrome";
import { companyAddress, companyEmailPrimary, siteDomain, whatsappHref } from "@/components/site-data";

export const metadata = { title: "Contact | Sprintz Holdings" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & RFQ"
        title="Start a commercial discussion with Sprintz Holdings."
        desc="Use the inquiry form to submit quotation requests, sourcing briefs, product specifications, or commodity interest for commercial review."
        graphic="network"
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="card">
            <div className="eyebrow">Contact</div>
            <h3>Sprintz Holdings Pte Ltd</h3>
            <div style={{ display: "grid", gap: 18, marginTop: 24, lineHeight: 1.8 }}>
              <div><strong style={{ color: "white" }}>Website</strong><br />{siteDomain}</div>
              <div><strong style={{ color: "white" }}>Address</strong><br />{companyAddress}</div>
              <div><strong style={{ color: "white" }}>Email</strong><br /><a href={`mailto:${companyEmailPrimary}`}>{companyEmailPrimary}</a></div>
              <div><strong style={{ color: "white" }}>WhatsApp</strong><br /><a href={whatsappHref} target="_blank" rel="noreferrer">+65 8388 9168</a></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
