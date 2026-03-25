const businessGroups = [
  {
    title: 'Commodities & Raw Materials',
    items: [
      'ICUMSA 45 Sugar',
      'Non-GMO Soya Beans for Human Consumption',
      'Yellow Corns (Animal Feeds)',
      'Iron Ore Fines',
      'Copper Cathodes',
      'Nickel',
      'Aluminium Ingot',
      'Lithium',
      'Gold',
      'Scrap Metals',
      'Coal',
    ],
  },
  {
    title: 'Energy Products',
    items: ['EN590', 'LNG', 'LPG', 'Light Cycle Oil', 'Light Crude Oil'],
  },
  {
    title: 'Industrial & Technical Supply',
    items: [
      'Siemens Industrial Products',
      'Allen-Bradley / Rockwell',
      'Factory Equipment',
      'Electrical & Automation Solutions',
      'Industrial Components Available Through Sonepar-related Supply Enquiries',
    ],
  },
  {
    title: 'Specialized Trade',
    items: [
      'Chicken Paws',
      'Aviation and Equipment',
      'Medical Equipment and Consumables',
      'Project Procurement',
      'Other Structured Trade Opportunities',
    ],
  },
]

const strengths = [
  'Singapore-based international trading corporation',
  'Cross-border sourcing and supply coordination',
  'Corporate presentation suitable for serious counterparties',
  'Coverage across commodities, metals, energy, industrial, aviation, and medical sectors',
  'Professional enquiry workflow for buyers, suppliers, and partners',
  'Stronger positioning for industrial automation and equipment supply',
]

const markets = ['Singapore', 'China', 'Middle East', 'Southeast Asia', 'South Asia']

export default function App() {
  const whatsappNumber = '6583889168'

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <div className="brand">SPRINTZ HOLDINGS</div>
            <div className="brand-sub">PTE. LTD.</div>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#business">Business Lines</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="badge">International Trading Corporation</div>
            <h1>Professional Cross-Border Trade With Corporate Discipline.</h1>
            <p>
              Sprintz Holdings Pte. Ltd. supports buyers, suppliers, and project counterparties
              across commodities, energy products, industrial automation, aviation, and medical
              supply with a stronger corporate presentation and structured execution approach.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Request Corporate Enquiry</a>
              <a className="btn btn-secondary" href="#business">Explore Business Lines</a>
            </div>

            <div className="hero-metrics">
              <div className="metric-card">
                <span>Based In</span>
                <strong>Singapore</strong>
              </div>
              <div className="metric-card">
                <span>Coverage</span>
                <strong>Global Trade</strong>
              </div>
              <div className="metric-card">
                <span>Focus</span>
                <strong>Structured Supply</strong>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-label">Why counterparties engage Sprintz</div>
            <ul className="strength-list">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section section-light">
        <div className="container two-col">
          <div>
            <div className="section-label">About Sprintz</div>
            <h2>A stronger website identity for serious international trade.</h2>
          </div>
          <div className="body-copy">
            <p>
              This revamp positions Sprintz as a more credible Singapore-headquartered trading
              company with a cleaner corporate profile, stronger sector coverage, and a more
              institutional visual language.
            </p>
            <p>
              The site is designed to give buyers, suppliers, and strategic partners a clearer
              understanding of Sprintz business scope while improving confidence, enquiry quality,
              and international corporate perception.
            </p>
          </div>
        </div>
      </section>

      <section id="business" className="section section-soft">
        <div className="container">
          <div className="section-label">Business Lines</div>
          <h2>Core sectors presented with a cleaner corporate structure.</h2>

          <div className="card-grid">
            {businessGroups.map((group) => (
              <article className="info-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section section-light">
        <div className="container">
          <div className="section-label">Capabilities</div>
          <h2>Positioned for structured trade and industrial procurement enquiries.</h2>

          <div className="capability-grid">
            <article className="capability-card">
              <h3>Trade Structuring</h3>
              <p>
                Support for commercial discussions, supply positioning, and transaction-oriented
                coordination across multiple product classes.
              </p>
            </article>

            <article className="capability-card">
              <h3>Industrial Supply Positioning</h3>
              <p>
                Clear highlighting of Siemens and Allen-Bradley / Rockwell relevance, alongside
                factory equipment and technical procurement support.
              </p>
            </article>

            <article className="capability-card">
              <h3>Partner-Facing Corporate Profile</h3>
              <p>
                A sharper company website for counterparties to understand scope, submit enquiries,
                and evaluate Sprintz as a serious international trading platform.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container market-block">
          <div>
            <div className="section-label section-label-dark">Market Reach</div>
            <h2>Built for regional and international counterparties.</h2>
          </div>
          <div className="market-tags">
            {markets.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-light">
        <div className="container contact-grid">
          <div>
            <div className="section-label">Contact</div>
            <h2>Corporate enquiry channel.</h2>
            <p className="body-copy">
              A cleaner contact section with stronger business language helps convert website
              visitors into more serious enquiries.
            </p>

            <div className="office-card">
              <strong>Sprintz Holdings Pte. Ltd.</strong>
              <div>22 Sin Ming Lane, #06-76, Midview City, Singapore 573969</div>
              <div>Email: chanlp@sprintz.com.sg</div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-grid">
              <input placeholder="Full Name" />
              <input placeholder="Company" />
              <input className="full" placeholder="Business Email" />
              <input className="full" placeholder="Subject" />
              <textarea className="full" placeholder="Tell us about your enquiry" />
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-primary">Submit Enquiry</button>
              <a className="btn btn-secondary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </div>
          </form>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="wa-icon">◉</span>
        <span>Chat on WhatsApp</span>
      </a>

      <footer className="footer">
        <div className="container footer-inner">
          <div>Sprintz Holdings Pte. Ltd.</div>
          <div>International Trade · Supply Coordination · Industrial Procurement</div>
        </div>
      </footer>
    </div>
  )
}
