import { PageHero } from "@/components/SiteChrome";
import { industrialCategories } from "@/components/site-data";

export const metadata = { title: "Industrial Supply | Sprintz Holdings" };

export default function IndustrialPage() {
  return (
    <>
      <PageHero
        eyebrow="Industrial Supply"
        title="Category-based positioning for a broader and stronger industrial identity."
        desc="Sprintz is presented as a flexible industrial sourcing partner across automation, electrical products, drives, sensors, cables, and replacement requirements."
        graphic="industrial"
      />
      <section className="section">
        <div className="container grid-3">
          {industrialCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="card">
                <Icon className="icon-wrap" />
                <h3>{category.title}</h3>
                <p style={{ marginTop: 10 }}>{category.desc}</p>
                <ul className="list">
                  {category.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
