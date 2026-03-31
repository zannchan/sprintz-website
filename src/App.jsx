const businessLines = [
  {
    title: 'Commodities & Raw Materials',
    image: '/card-commodities.png',
    items: [
      'ICUMSA 45 Sugar',
      'Non-GMO Soya Beans',
      'Yellow Corns',
      'Iron Ore Fines',
      'Copper Cathodes',
      'Nickel',
      'Aluminium Ingot',
      'Lithium',
      'Scrap Metals',
      'Coal Supply',
    ],
  },
  {
    title: 'Energy & Power Projects',
    image: '/card-energy.png',
    items: [
      'EN590',
      'LNG',
      'LPG',
      'Light Cycle Oil',
      'Light Crude Oil',
      'Solar-Related Projects',
      'Solar Farm Opportunities in Indonesia',
      'Biomass Generator Power Solutions',
      'Power Generation Project Support',
    ],
  },
  {
    title: 'Industrial, Technical & Equipment Supply',
    image: '/card-industrial.png',
    items: [
      'Siemens Industrial Products',
      'Allen-Bradley / Rockwell',
      'Factory Equipment',
      'Electrical & Automation Solutions',
      'Technical Procurement Support',
      'Medical Equipment and Consumables',
      'Aviation Equipment',
      'Data Centre Related Supply Support',
    ],
  },
  {
    title: 'Logistics, Storage & Project Support',
    image: '/card-logistics.png',
    items: [
      'Warehouse Storage Services',
      'Project Procurement',
      'Strategic Sourcing',
      'Cross-Border Supply Coordination',
      'Distribution Support',
      'Commercial Fulfilment Assistance',
      'Storage and Handling Solutions',
    ],
  },
  {
    title: 'Infrastructure & Construction Opportunities',
    image: '/card-infra.png',
    items: [
      'Stadium Construction Support',
      'Bridge and Road Infrastructure Opportunities',
      'Residential Development Support',
      'Commercial Building Projects',
      'Data Centre Development Related Opportunities',
      'General Infrastructure Supply and Coordination',
    ],
  },
]

export default function App() {
  return (
    <main className="page">
      <section className="business-lines-section">
        <div className="container">
          <div className="section-label">BUSINESS LINES</div>
          <h1>Integrated capabilities across trade, energy, industrial supply, logistics, and infrastructure support.</h1>
          <p className="section-intro">
            Sprintz Holdings Pte. Ltd. supports a broader commercial platform spanning commodities,
            conventional and renewable energy, industrial procurement, warehousing, and selected
            infrastructure-related opportunities across regional and international markets.
          </p>

          <div className="cards-grid">
            {businessLines.map((card) => (
              <article className="business-card" key={card.title}>
                <img className="card-image" src={card.image} alt={card.title} />
                <div className="card-body">
                  <h2>{card.title}</h2>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
