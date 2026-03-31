import { useState } from 'react'

const valuePoints = [
  'Professional coordination for buyers, suppliers, and institutional counterparties',
  'Cross-border trade support with disciplined commercial presentation',
  'Coverage across commodities, energy, industrial supply, logistics, and infrastructure-related sectors',
  'Singapore-based profile with broader regional and global market positioning',
]

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

const markets = ['Singapore', 'Malaysia', 'Thailand', 'China', 'UAE', 'USA', 'Indonesia', 'Vietnam', 'India', 'Middle East']

export default function App() {
  const [status, setStatus] = useState({ type: '', text: '' })
  const [submitting, setSubmitting] = useState(false)

  const formAction = 'https://formspree.io/f/meepqlbo'
  const whatsappNumber = '6583889168'
  const whatsappText = encodeURIComponent(
    'Hello Sprintz Holdings, I would like to make a business enquiry regarding your products, markets, and supply capabilities.'
  )
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappText}`

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', text: '' })
    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      const data = await response.json()
      if (response.ok) {
        setStatus({ type: 'success', text: 'Thank you. Your enquiry has been submitted successfully.' })
        form.reset()
      } else {
        setStatus({ type: 'error', text: data?.errors?.[0]?.message || 'Unable to submit enquiry.' })
      }
    } catch {
      setStatus({ type: 'error', text: 'Unable to submit enquiry.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <div className="brand-mark"><span>S</span></div>
            <div className="brand-copy">
              <div className="brand">SPRINTZ HOLDINGS</div>
              <div className="brand-sub">PTE. LTD.</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#sectors">Business Lines</a>
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
              commodities, energy products, industrial supply, aviation equipment, medical consumables,
              logistics solutions, and infrastructure-related opportunities across regional and global markets.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Submit Corporate Enquiry</a>
              <a className="btn btn-secondary" href="#sectors">Explore Business Lines</a>
            </div>
          </div>

          <div className="hero-image-card">
            {true ? <img src="/hero-shipping.png" alt="Global trade and shipping" /> : <img src="/hero-shipping.svg" alt="Global trade and shipping" />}
          </div>
        </div>
      </section>

      <section id="about" className="section section-light">
        <div className="container about-grid">
          <div>
            <div className="section-label">ABOUT</div>
            <h2>Professional international trade positioning for serious counterparties.</h2>
            <p className="section-intro">
              Sprintz Holdings Pte. Ltd. supports structured supply opportunities across Asia, the Middle East,
              the United States, and wider international markets. The company profile is designed to support serious
              buyer and supplier discussions with a more established corporate presentation.
            </p>

            <div className="value-panel">
              <div className="panel-title">Why counterparties engage Sprintz</div>
              <ul className="value-list">
                {valuePoints.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="about-image-card">
            {true ? <img src="/boardroom.png" alt="Executive business meeting" /> : <img src="/boardroom.svg" alt="Executive business meeting" />}
          </div>
        </div>
      </section>

      <section id="sectors" className="section section-green">
        <div className="container">
          <div className="section-label">BUSINESS LINES</div>
          <h2>Integrated capabilities across trade, energy, industrial supply, logistics, and infrastructure support.</h2>
          <p className="section-intro wide">
            Sprintz Holdings Pte. Ltd. supports a broader commercial platform spanning commodities,
            conventional and renewable energy, industrial procurement, warehousing, and selected
            infrastructure-related opportunities across regional and international markets.
          </p>

          <div className="cards-grid">
            {businessLines.map((card) => (
              <article className="business-card" key={card.title}>
                <img className="card-image" src={card.image} alt={card.title} />
                <div className="card-body">
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="section section-dark">
        <div className="container market-grid">
          <div>
            <div className="section-label section-label-dark">MARKETS</div>
            <h2 className="light">Regional and international counterparties across key trade corridors.</h2>
          </div>
          <div className="market-tags">
            {markets.map((m) => <span key={m}>{m}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-light">
        <div className="container contact-grid">
          <div>
            <div className="section-label">CONTACT</div>
            <h2>Corporate enquiries and strategic trade discussions.</h2>
            <p className="section-intro">
              Sprintz Holdings Pte. Ltd. welcomes serious enquiries from buyers, suppliers, and business partners
              across international markets. Contact our team for product availability, sourcing support, cross-border
              supply coordination, and structured trade opportunities.
            </p>

            <div className="office-card">
              <strong>Sprintz Holdings Pte. Ltd.</strong>
              <div>22 Sin Ming Lane, #06-76, Midview City, Singapore 573969</div>
              <div>Email: chanlp@sprintz.com.sg</div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input name="name" placeholder="Full Name" required />
              <input name="company" placeholder="Company" />
              <input className="full" name="email" type="email" placeholder="Business Email" required />
              <input className="full" name="subject" placeholder="Subject" required />
              <textarea className="full" name="message" placeholder="Tell us about your enquiry" required />
              <input type="hidden" name="_subject" value="Sprintz Website Enquiry" />
            </div>

            {status.text ? <div className={`form-status ${status.type}`}>{status.text}</div> : null}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              <a className="btn btn-secondary-plain" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </div>
          </form>
        </div>
      </section>

      <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <span className="wa-ring">◉</span>
      </a>
    </main>
  )
}
