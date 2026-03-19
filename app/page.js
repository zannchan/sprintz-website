import Link from "next/link";
import { Building2, Globe2, Handshake, PackageCheck, Ship, Boxes, Factory } from "lucide-react";
import { PageHero, SectionTitle } from "@/components/SiteChrome";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Singapore-based procurement and trading platform"
        title="Professional industrial sourcing and structured commodity trade support."
        desc="Sprintz Holdings Pte Ltd supports industrial buyers, contractors, project stakeholders, and qualified commodity counterparties through commercially focused sourcing, procurement coordination, and transaction workflow support."
        graphic="network"
      />

      <section className="section-tight">
        <div className="container grid-4">
          {[
            ["Multi-Brand", "industrial sourcing model", Globe2],
            ["Cross-Border", "commercial coordination", Handshake],
            ["Structured", "trade process support", Ship],
            ["Singapore", "business base", Building2],
          ].map(([value, label, Icon]) => (
            <div key={value} className="card">
              <Icon className="icon-wrap" />
              <h3 style={{ fontSize: 20 }}>{value}</h3>
              <p style={{ marginTop: 8 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid-3">
          {[
            ["Company Profile", "Strong corporate introduction for buyers and partners", "/company", Building2],
            ["Industrial Supply", "Category-led industrial sourcing and procurement positioning", "/industrial-supply", Factory],
            ["Commodities", "Structured trade presentation for commercial counterparties", "/commodities", Ship],
          ].map(([title, desc, href, Icon]) => (
            <Link key={title} href={href} className="card">
              <Icon className="icon-wrap" />
              <h3>{title}</h3>
              <p style={{ marginTop: 10 }}>{desc}</p>
              <p style={{ marginTop: 16, color: "white", fontWeight: 700 }}>Explore Page</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Core Services"
            title="Built to generate serious inquiries across supply, sourcing, and trade."
            desc="The website is designed as a corporate lead-generation platform with professional visual treatment suited to industrial and trading activities."
          />
          <div className="grid-4">
            {[
              ["Industrial Equipment Supply", "Automation, electrical, wiring, and factory procurement support", Boxes],
              ["Global Sourcing & Procurement", "Urgent, bulk, and project-based sourcing workflow", Globe2],
              ["Commodities Trading", "Structured transaction-facing presentation and deal support", Ship],
              ["Logistics & Commercial Coordination", "Documentation, workflow, and shipment support", PackageCheck],
            ].map(([title, desc, Icon]) => (
              <div key={title} className="card">
                <Icon className="icon-wrap" />
                <h3 style={{ fontSize: 22 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
