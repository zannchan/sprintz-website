import { useMemo, useState } from 'react'

const FORM_ENDPOINT = 'https://formspree.io/f/meepqlbo'
const WHATSAPP_NUMBER = '6583889168'

const content = {
  nav: ['About', 'Business Lines', 'Markets', 'Contact'],
  heroTitle: 'Corporate enquiries for global trade and supply partnerships.',
  heroBody:
    'Sprintz Holdings Pte. Ltd. is a Singapore-based international trading company supporting commodities, energy products, industrial supply, IT projects, AI solutioning, logistics solutions, and infrastructure-related opportunities across regional and global markets.',
  aboutTitle: 'Professional international trade positioning for serious counterparties.',
  aboutBody:
    'Sprintz Holdings Pte. Ltd. supports structured supply opportunities across Asia, the Middle East, the United States, and wider international markets. The company profile is built to support serious buyer, supplier, and project-led discussions with stronger corporate presentation, disciplined commercial positioning, and more structured counterpart engagement.',
  strengths: [
    'Professional coordination for buyers, suppliers, and institutional counterparties',
    'Coverage across commodities, energy, industrial supply, IT projects, AI solutioning, logistics, and infrastructure-related sectors',
    'Singapore-based platform with broader regional and global market positioning',
    'Structured enquiry handling for project-driven and cross-border transactions',
  ],
  businessTitle:
    'Integrated capabilities across trade, energy, industrial supply, IT projects, AI solutioning, logistics, and infrastructure support.',
  businessBody:
    'Sprintz Holdings Pte. Ltd. supports a broader commercial platform spanning commodities, conventional and renewable energy, industrial procurement, IT implementation, AI solutioning, warehousing, and selected infrastructure-related opportunities across regional and international markets.',
  businessLines: [
    { title: 'Commodities, Agro Products & Raw Materials', items: ['ICUMSA 45 Sugar', 'Palm Kernel', 'PKE', 'Non-GMO Soya Beans', 'Yellow Corns', 'Iron Ore Fines', 'Copper Cathodes', 'Nickel', 'Aluminium Ingot', 'Lithium', 'Scrap Metals', 'Coal Supply'] },
    { title: 'Rice Supply & Food Staples', items: ['Basmati Rice', 'Japonica Rice', 'Thai Rice', 'Vietnam Rice', 'Myanmar Rice', 'Regional Sourcing Support', 'Cross-Border Food Commodity Supply'] },
    { title: 'Energy & Power Projects', items: ['EN590', 'LNG', 'LPG', 'Light Cycle Oil', 'Light Crude Oil', 'Solar-Related Projects', 'Solar Farm Opportunities in Indonesia', 'Biomass Generator Power Solutions', 'Power Generation Project Support'] },
    { title: 'Industrial, Technical & Equipment Supply', items: ['Siemens Industrial Products', 'Allen-Bradley / Rockwell', 'Factory Equipment', 'Electrical & Automation Solutions', 'Technical Procurement Support', 'Medical Equipment and Consumables', 'Aviation Equipment', 'Data Centre Related Supply Support'] },
    { title: 'IT Projects & Digital Infrastructure', items: ['System Testing Projects', 'Network Projects', 'IT Infrastructure Deployment', 'Data Centre Related Support', 'Enterprise Technology Implementation', 'Technical Delivery Coordination'] },
    { title: 'AI Solutioning', items: ['AI Solutions for Financial Services', 'AI Solutions for Healthcare', 'AI Solutions for Education', 'Workflow Automation Support', 'AI-Enabled Process Improvement'] },
    { title: 'Logistics, Storage & Project Support', items: ['Warehouse Storage Services', 'Project Procurement', 'Strategic Sourcing', 'Cross-Border Supply Coordination', 'Distribution Support', 'Commercial Fulfilment Assistance', 'Storage and Handling Solutions'] },
    { title: 'Infrastructure & Construction Opportunities', items: ['Stadium Construction Support', 'Bridge and Road Infrastructure Opportunities', 'Residential Development Support', 'Commercial Building Projects', 'Data Centre Development Related Opportunities', 'General Infrastructure Supply and Coordination'] },
  ],
  markets: ['Singapore', 'Malaysia', 'Thailand', 'China', 'UAE', 'Saudi Arabia', 'USA', 'Indonesia', 'Vietnam', 'India', 'Middle East'],
}

const images = [
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
]

export default function App() {
  const [status, setStatus] = useState({ type: '', text: '' })
  const [submitting, setSubmitting] = useState(false)

  const businessLines = useMemo(
    () => content.businessLines.map((item, index) => ({ ...item, image: images[index] })),
    []
  )

  const whatsappText = encodeURIComponent(
    'Hello Sprintz Holdings, I would like to make a business enquiry regarding your products, projects, and markets.'
  )
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setStatus({ type: '', text: '' })

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        form.reset()
        setStatus({
          type: 'success',
          text: 'Thank you. Your enquiry has been submitted successfully.',
        })
      } else {
        setStatus({
          type: 'error',
          text: 'Unable to submit your enquiry. Please try again or use WhatsApp.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        text: 'Unable to submit your enquiry. Please try again or use WhatsApp.',
      })
    } finally {
      setSubmitting(false)
    }
  }

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
            <a href="#about">{content.nav[0]}</a>
            <a href="#business-lines">{content.nav[1]}</a>
            <a href="#markets">{content.nav[2]}</a>
            <a href="#contact">{content.nav[3]}</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="section-label">INTERNATIONAL TRADING COMPANY</div>
            <h1>{content.heroTitle}</h1>
            <p className="lead">{content.heroBody}</p>
            <div className="button-row">
              <a className="btn btn-primary" href="#contact">Submit Corporate Enquiry</a>
              <a className="btn btn-secondary" href="#business-lines">Explore Business Lines</a>
            </div>
          </div>

          <div className="photo-card">
            <img src="https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?auto=format&fit=crop&w=1400&q=80" alt="Global trade and logistics" />
            <div className="photo-card-caption">
              <div className="caption-small">SPRINTZ HOLDINGS</div>
              <div className="caption-title">Global trade, structured supply, and wider market reach.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div>
            <div className="section-label">ABOUT</div>
            <h2>{content.aboutTitle}</h2>
            <p className="body-copy">{content.aboutBody}</p>

            <div className="panel">
              <div className="panel-title">WHY COUNTERPARTIES ENGAGE SPRINTZ</div>
              <ul className="strength-list">
                {content.strengths.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="photo-card photo-card-about">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80" alt="Professional business meeting" />
            <div className="photo-card-caption">
              <div className="caption-small">SPRINTZ HOLDINGS</div>
              <div className="caption-title">Executive coordination for suppliers, projects, and institutional counterparties.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="business-lines" className="section business-lines-section">
        <div className="container">
          <div className="section-label">BUSINESS LINES</div>
          <h2 className="wide-heading">{content.businessTitle}</h2>
          <p className="body-copy wide-copy">{content.businessBody}</p>

          <div className="cards-grid">
            {businessLines.map((card) => (
              <article key={card.title} className="business-card">
                <div className="card-image-wrap">
                  <img src={card.image} alt={card.title} className="card-image" />
                </div>
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

      <section id="markets" className="section markets-section">
        <div className="container markets-grid">
          <div>
            <div className="section-label section-label-light">MARKETS</div>
            <h2 className="light-heading">Regional and international counterparties across key trade corridors.</h2>
          </div>
          <div className="market-tags">
            {content.markets.map((market) => <span key={market}>{market}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <div className="section-label">CONTACT</div>
            <h2>Corporate enquiries and strategic trade discussions.</h2>
            <p className="body-copy">
              Sprintz Holdings Pte. Ltd. welcomes serious enquiries from buyers, suppliers, and business partners across international markets. Contact our team for product availability, sourcing support, cross-border supply coordination, project discussions, and structured trade opportunities.
            </p>
            <div className="office-card">
              <div className="office-title">Sprintz Holdings Pte. Ltd.</div>
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

            {status.text ? (
              <div className={status.type === 'success' ? 'status-box success' : 'status-box error'}>
                {status.text}
              </div>
            ) : null}

            <div className="button-row">
              <button className="btn btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
              <a className="btn btn-secondary" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </div>
          </form>
        </div>
      </section>

      <a className="floating-wa" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Open WhatsApp chat">
        <span className="floating-wa-icon">◉</span>
        <span className="floating-wa-text">Chat on WhatsApp</span>
      </a>
    </div>
  )
}
