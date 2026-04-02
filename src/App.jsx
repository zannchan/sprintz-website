const businessLines = [
  {
    title: 'Commodities & Raw Materials',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80',
    items: ['ICUMSA 45 Sugar', 'Non-GMO Soya Beans', 'Yellow Corns', 'Iron Ore Fines', 'Copper Cathodes', 'Nickel', 'Aluminium Ingot', 'Lithium', 'Scrap Metals', 'Coal Supply'],
  },
  {
    title: 'Energy & Power Projects',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
    items: ['EN590', 'LNG', 'LPG', 'Light Cycle Oil', 'Light Crude Oil', 'Solar-Related Projects', 'Solar Farm Opportunities in Indonesia', 'Biomass Generator Power Solutions', 'Power Generation Project Support'],
  },
  {
    title: 'Industrial, Technical & Equipment Supply',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    items: ['Siemens Industrial Products', 'Allen-Bradley / Rockwell', 'Factory Equipment', 'Electrical & Automation Solutions', 'Technical Procurement Support', 'Medical Equipment and Consumables', 'Aviation Equipment', 'Data Centre Related Supply Support'],
  },
  {
    title: 'Logistics, Storage & Project Support',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80',
    items: ['Warehouse Storage Services', 'Project Procurement', 'Strategic Sourcing', 'Cross-Border Supply Coordination', 'Distribution Support', 'Commercial Fulfilment Assistance', 'Storage and Handling Solutions'],
  },
  {
    title: 'Infrastructure & Construction Opportunities',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    items: ['Stadium Construction Support', 'Bridge and Road Infrastructure Opportunities', 'Residential Development Support', 'Commercial Building Projects', 'Data Centre Development Related Opportunities', 'General Infrastructure Supply and Coordination'],
  },
]

const markets = ['Singapore', 'Malaysia', 'Thailand', 'China', 'UAE', 'USA', 'Indonesia', 'Vietnam', 'India', 'Middle East']

const strengths = [
  'Professional coordination for buyers, suppliers, and institutional counterparties',
  'Coverage across commodities, energy, industrial supply, logistics, and infrastructure-related sectors',
  'Singapore-based platform with broader regional and global market positioning',
  'Structured enquiry handling for project-driven and cross-border transactions',
]

function ImageCard({ label, subtitle }) {
  return (
    <div className="image-card">
      <div className="image-card-overlay" />
      <div className="image-card-top-box" />
      <div className="image-card-brand">SPRINTZ HOLDINGS</div>
      <div className="image-card-title">{label}</div>
      <div className="image-card-subtitle">{subtitle}</div>
      <div className="image-card-accent" />
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <div className="brand-mark">S</div>
            <div>
              <div className="brand">SPRINTZ HOLDINGS</div>
              <div className="brand-sub">PTE. LTD.</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#business-lines">Business Lines</a>
            <a href="#markets">Markets</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="section-label">INTERNATIONAL TRADING COMPANY</div>
            <h1>Corporate enquiries for global trade and supply partnerships.</h1>
            <p className="lead">
              Sprintz Holdings Pte. Ltd. is a Singapore-based international trading company supporting
              commodities, energy products, industrial supply, logistics solutions, and
              infrastructure-related opportunities across regional and global markets.
            </p>
            <div className="button-row">
              <button className="btn btn-primary">Submit Corporate Enquiry</button>
              <button className="btn btn-secondary">Explore Business Lines</button>
            </div>
          </div>

          <ImageCard
            label="Global trade. Structured supply. Regional reach."
            subtitle="trade · logistics · infrastructure"
          />
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div>
            <div className="section-label">ABOUT</div>
            <h2>Professional international trade positioning for serious counterparties.</h2>
            <p className="body-copy">
              Sprintz Holdings Pte. Ltd. supports structured supply opportunities across Asia, the
              Middle East, the United States, and wider international markets. The company profile is
              designed to support serious buyer and supplier discussions with a stronger corporate
              presentation and more disciplined commercial profile.
            </p>

            <div className="panel">
              <div className="panel-title">WHY COUNTERPARTIES ENGAGE SPRINTZ</div>
              <ul className="strength-list">
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <ImageCard
            label="Executive coordination for supply, projects, and partnerships."
            subtitle="buyers · suppliers · institutions"
          />
        </div>
      </section>

      <section id="business-lines" className="section business-lines-section">
        <div className="container">
          <div className="section-label">BUSINESS LINES</div>
          <h2 className="wide-heading">Integrated capabilities across trade, energy, industrial supply, logistics, and infrastructure support.</h2>
          <p className="body-copy wide-copy">
            Sprintz Holdings Pte. Ltd. supports a broader commercial platform spanning commodities,
            conventional and renewable energy, industrial procurement, warehousing, and selected
            infrastructure-related opportunities across regional and international markets.
          </p>

          <div className="cards-grid">
            {businessLines.map((card) => (
              <article key={card.title} className="business-card">
                <div className="card-image-wrap">
                  <img src={card.image} alt={card.title} className="card-image" />
                </div>
                <div className="card-body">
                  <h3>{card.title}</h3>
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

      <section id="markets" className="section markets-section">
        <div className="container markets-grid">
          <div>
            <div className="section-label section-label-light">MARKETS</div>
            <h2 className="light-heading">Regional and international counterparties across key trade corridors.</h2>
          </div>

          <div className="market-tags">
            {markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <div className="section-label">CONTACT</div>
            <h2>Corporate enquiries and strategic trade discussions.</h2>
            <p className="body-copy">
              Sprintz Holdings Pte. Ltd. welcomes serious enquiries from buyers, suppliers, and
              business partners across international markets. Contact our team for product
              availability, sourcing support, cross-border supply coordination, and structured
              trade opportunities.
            </p>

            <div className="office-card">
              <div className="office-title">Sprintz Holdings Pte. Ltd.</div>
              <div>22 Sin Ming Lane, #06-76, Midview City, Singapore 573969</div>
              <div>Email: chanlp@sprintz.com.sg</div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-grid">
              <input placeholder="Full Name" />
              <input placeholder="Company" />
              <input className="full" placeholder="Business Email" />
              <input className="full" placeholder="Subject" />
              <textarea className="full" placeholder="Tell us about your enquiry" />
            </div>

            <div className="button-row">
              <button className="btn btn-primary">Submit Enquiry</button>
              <button className="btn btn-secondary">WhatsApp Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
