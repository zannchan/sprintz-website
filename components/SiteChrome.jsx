import Link from "next/link";
import { Building2, Boxes, Factory, Globe2, Ship } from "lucide-react";
import { companyEmailPrimary, nav, siteDomain, whatsappHref } from "@/components/site-data";

export function Logo() {
  return (
    <Link href="/" className="logo-wrap">
      <div className="logo-box">SPR</div>
      <div>
        <div className="logo-sub">Sprintz Holdings</div>
        <div className="logo-main">Global Supply & Trading Solutions</div>
      </div>
    </Link>
  );
}

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <span>{siteDomain}</span>
          <span>+65 8388 9168</span>
        </div>
        <div>
          <a href={`mailto:${companyEmailPrimary}`}>{companyEmailPrimary}</a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="header">
      <TopBar />
      <div className="container header-inner">
        <Logo />
        <nav className="nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {desc ? <p className="section-desc">{desc}</p> : null}
    </div>
  );
}

export function HeroGraphic({ variant = "network" }) {
  if (variant === "industrial") {
    return (
      <div className="hero-graphic">
        <div className="grid-2">
          <div className="gradient-panel">
            <Factory className="icon-wrap" />
            <h3>Industrial Procurement</h3>
            <p className="lead" style={{ fontSize: 14, marginTop: 12 }}>Factory equipment, replacement sourcing, and category-led procurement support.</p>
          </div>
          <div className="gradient-panel">
            <Boxes className="icon-wrap" />
            <h3>Electrical Solutions</h3>
            <p className="lead" style={{ fontSize: 14, marginTop: 12 }}>Power distribution, control systems, and industrial wiring support.</p>
          </div>
        </div>
        <div className="gradient-panel" style={{ marginTop: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
            <div>
              <div className="eyebrow">Coverage</div>
              <h3 style={{ marginTop: 8 }}>Multi-brand industrial capability</h3>
            </div>
            <Boxes className="icon-wrap" />
          </div>
          <div className="grid-3" style={{ marginTop: 16 }}>
            {["Automation", "Distribution", "Replacement"].map((item) => (
              <div key={item} className="hero-chip">{item}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "trade") {
    return (
      <div className="hero-graphic">
        <div className="gradient-panel">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
            <div>
              <div className="eyebrow">Trade flow</div>
              <h3 style={{ marginTop: 8 }}>Structured commercial process</h3>
            </div>
            <Ship className="icon-wrap" />
          </div>
          <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
            {["Inquiry", "Commercial Review", "Contract", "Shipment"].map((item, i) => (
              <div key={item} className="hero-chip" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 999, background: "white", color: "#0f172a", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 700, fontSize: 12 }}>{i + 1}</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid-2" style={{ marginTop: 16 }}>
          <div className="gradient-panel"><Globe2 className="icon-wrap" /><h3>International Markets</h3></div>
          <div className="gradient-panel"><Building2 className="icon-wrap" /><h3>Commercial Counterparties</h3></div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-graphic">
      <div className="gradient-panel">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
          <div>
            <div className="eyebrow">Business platform</div>
            <h3 style={{ marginTop: 8 }}>Professional corporate presence</h3>
          </div>
          <Building2 className="icon-wrap" />
        </div>
        <div className="grid-3" style={{ marginTop: 24 }}>
          {[
            { icon: Globe2, label: "Global Reach" },
            { icon: Factory, label: "Industrial Supply" },
            { icon: Ship, label: "Structured Trade" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="hero-chip" style={{ padding: 16 }}>
                <Icon className="icon-wrap" />
                <div style={{ marginTop: 12, fontWeight: 600 }}>{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid-2" style={{ marginTop: 16 }}>
        <div className="gradient-panel">
          <div className="eyebrow">Company positioning</div>
          <h3 style={{ marginTop: 8 }}>Cross-border sourcing and trade coordination</h3>
        </div>
        <div className="gradient-panel">
          <div className="eyebrow">Core objective</div>
          <h3 style={{ marginTop: 8 }}>Generate qualified business inquiries</h3>
        </div>
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, desc, graphic = "network" }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="lead">{desc}</p>
        </div>
        <HeroGraphic variant={graphic} />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div style={{ fontWeight: 600, color: "#e2e8f0" }}>Sprintz Holdings Pte Ltd</div>
          <div>Industrial sourcing, procurement coordination, and structured commodity trade support.</div>
          <div style={{ marginTop: 4 }}>{siteDomain}</div>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="floating-actions">
      <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-whatsapp">WhatsApp Us</a>
      <Link href="/contact" className="btn btn-primary">Request Quote</Link>
    </div>
  );
}
