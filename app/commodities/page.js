import { PageHero, SectionTitle } from "@/components/SiteChrome";
import { commodityItems, processSteps } from "@/components/site-data";

export const metadata = { title: "Commodities | Sprintz Holdings" };

export default function CommoditiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Commodity Trading"
        title="A cleaner and more professional transaction-facing presentation."
        desc="The commodity pages are written to communicate seriousness and structure without over-promising, while still giving counterparties a clear sense of the commercial workflow."
        graphic="trade"
      />
      <section className="section">
        <div className="container grid-3">
          {commodityItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card">
                <Icon className="icon-wrap" />
                <h3>{item.title}</h3>
                <p style={{ marginTop: 10 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="container" style={{ marginTop: 32 }}>
          <div className="soft-card">
            <SectionTitle eyebrow="Commercial Process" title="Clear workflow from inquiry through documentation and shipment." />
            <div style={{ display: "grid", gap: 14 }}>
              {processSteps.map((step, index) => (
                <div key={step} className="hero-chip" style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 999, background: "white", color: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{index + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
