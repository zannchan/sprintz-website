import { PageHero } from "@/components/SiteChrome";
import { companyAddress, companyEmailPrimary, companyEmailSecondary, siteDomain } from "@/components/site-data";

export const metadata = { title: "Company | Sprintz Holdings" };

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Profile"
        title="A corporate profile built to strengthen commercial credibility."
        desc="Sprintz Holdings Pte Ltd is a Singapore-based business platform focused on industrial supply, sourcing coordination, procurement support, and structured commodity trade opportunities."
        graphic="network"
      />
      <section className="section">
        <div className="container grid-2">
          {[
            ["Company Name", "Sprintz Holdings Pte Ltd"],
            ["Website Domain", siteDomain],
            ["Business Address", companyAddress],
            ["Primary Contact", companyEmailPrimary],
            ["WhatsApp", "+65 8388 9168"],
            ["Core Focus", "Industrial sourcing, electrical supply, factory requirements, and selected commodity trade support"],
            ["Primary Objective", "Create confidence, generate qualified inquiries, and support international business development"],
            ["Internal Notification", `Inquiry emails BCC to ${companyEmailSecondary}`],
          ].map(([title, value]) => (
            <div key={title} className="card">
              <div className="eyebrow">{title}</div>
              <p style={{ marginTop: 14 }}>{value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
