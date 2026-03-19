import { PageHero } from "@/components/SiteChrome";
import { markets, sourcingPoints } from "@/components/site-data";

export const metadata = { title: "Global Sourcing | Sprintz Holdings" };

export default function GlobalSourcingPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Sourcing"
        title="A page built around procurement strength, not only products."
        desc="This section positions Sprintz as a practical sourcing partner for urgent requirements, price-sensitive procurement, replacement parts, and project-driven supply coordination."
        graphic="industrial"
      />
      <section className="section">
        <div className="container grid-3">
          {sourcingPoints.map((item) => (
            <div key={item} className="card"><p>{item}</p></div>
          ))}
        </div>
        <div className="container grid-3" style={{ marginTop: 32 }}>
          {markets.map((item) => (
            <div key={item} className="soft-card"><h3 style={{ margin: 0 }}>{item}</h3></div>
          ))}
        </div>
      </section>
    </>
  );
}
