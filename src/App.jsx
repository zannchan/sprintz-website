import { useState } from 'react'

const businessGroups = [
  {
    title: 'Commodities & Raw Materials',
    items: ['ICUMSA 45 Sugar','Non-GMO Soya Beans for Human Consumption','Yellow Corns (Animal Feeds)','Iron Ore Fines','Copper Cathodes','Nickel','Aluminium Ingot','Lithium','Gold','Scrap Metals','Coal'],
  },
  {
    title: 'Energy Products',
    items: ['EN590','LNG','LPG','Light Cycle Oil','Light Crude Oil'],
  },
  {
    title: 'Industrial & Technical Supply',
    items: ['Siemens Industrial Products','Allen-Bradley / Rockwell','Factory Equipment','Electrical & Automation Solutions','Industrial Components Available Through Sonepar-related Supply Enquiries'],
  },
  {
    title: 'Specialized Trade',
    items: ['Chicken Paws','Aviation and Equipment','Medical Equipment and Consumables','Project Procurement','Other Structured Trade Opportunities'],
  },
]

const professionalCards = [
  { title: 'Global Trade Network', text: 'Sharper positioning for cross-border commodity, energy, and equipment opportunities.', image: '/hero-world.svg' },
  { title: 'Industrial Supply Capability', text: 'A more professional presentation for automation, factory equipment, and technical procurement.', image: '/industrial-visual.svg' },
  { title: 'Structured Partner Engagement', text: 'A cleaner enquiry experience for buyers, suppliers, and institutional counterparties.', image: '/corporate-grid.svg' },
]

const markets = ['Singapore','China','Middle East','Southeast Asia','South Asia']

export default function App() {
  const whatsappNumber = '6583889168'
  const whatsappText = encodeURIComponent('Hello Sprintz Holdings, I would like to make a business enquiry regarding your products and supply capabilities.')
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappText}`

  const [form, setForm] = useState({ name: '', company: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', text: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ type: 'error', text: 'Please fill in all required fields.' })
      return
    }
    setSubmitting(true)
    setStatus({ type: '', text: '' })
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message || 'Unable to submit enquiry.')
      setStatus({ type: 'success', text: 'Thank you. Your enquiry has been submitted successfully.' })
      setForm({ name: '', company: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'Unable to submit enquiry.' })
    } finally {
      setSubmitting(false)
    }
  }

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
        <img className="hero-image" src="/hero-world.svg" alt="Global trade network graphic" />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="badge">International Trading Corporation</div>
            <h1>Professional Cross-Border Trade With Corporate Discipline.</h1>
            <p>
              Sprintz Holdings Pte. Ltd. supports buyers, suppliers, and project counterparties across commodities,
              energy products, industrial automation, aviation, and medical supply with a stronger corporate presentation
              and structured execution approach.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Request Corporate Enquiry</a>
              <a className="btn btn-secondary" href="#business">Explore Business Lines</a>
            </div>
            <div className="hero-metrics">
              <div className="metric-card"><span>Based In</span><strong>Singapore</strong></div>
              <div className="metric-card"><span>Coverage</span><strong>Global Trade</strong></div>
              <div className="metric-card"><span>Focus</span><strong>Structured Supply</strong></div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-label">Why counterparties engage Sprintz</div>
            <ul className="strength-list">
              <li>Singapore-based international trading corporation</li>
              <li>Cross-border sourcing and supply coordination</li>
              <li>Corporate presentation suitable for serious counterparties</li>
              <li>Coverage across commodities, metals, energy, industrial, aviation, and medical sectors</li>
              <li>Professional enquiry workflow for buyers, suppliers, and partners</li>
              <li>Sharper positioning for industrial automation and equipment supply</li>
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
              This revamp positions Sprintz as a more credible Singapore-headquartered trading company
              with a cleaner corporate profile, stronger sector coverage, and a more institutional visual language.
            </p>
            <p>
              The site is designed to give buyers, suppliers, and strategic partners a clearer understanding of
              Sprintz business scope while improving confidence, enquiry quality, and international corporate perception.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-label">Corporate Presentation</div>
          <h2>More professional visuals built into the website package.</h2>
          <div className="visual-grid">
            {professionalCards.map((card) => (
              <article className="visual-card" key={card.title}>
                <img src={card.image} alt={card.title} />
                <div className="visual-content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="section section-light">
        <div className="container">
          <div className="section-label">Business Lines</div>
          <h2>Core sectors presented with a cleaner corporate structure.</h2>
          <div className="card-grid">
            {businessGroups.map((group) => (
              <article className="info-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section section-dark">
        <div className="container market-block">
          <div>
            <div className="section-label section-label-dark">Market Reach</div>
            <h2>Built for regional and international counterparties.</h2>
          </div>
          <div className="market-tags">
            {markets.map((market) => <span key={market}>{market}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-light">
        <div className="container contact-grid">
          <div>
            <div className="section-label">Contact</div>
            <h2>Corporate enquiry channel.</h2>
            <p className="body-copy">
              A cleaner contact section with direct website submission and stronger business language
              helps convert visitors into more serious enquiries.
            </p>
            <div className="office-card">
              <strong>Sprintz Holdings Pte. Ltd.</strong>
              <div>22 Sin Ming Lane, #06-76, Midview City, Singapore 573969</div>
              <div>Email: chanlp@sprintz.com.sg</div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
              <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
              <input className="full" name="email" type="email" placeholder="Business Email" value={form.email} onChange={handleChange} />
              <input className="full" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
              <textarea className="full" name="message" placeholder="Tell us about your enquiry" value={form.message} onChange={handleChange} />
            </div>
            {status.text ? <div className={`form-status ${status.type}`}>{status.text}</div> : null}
            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
              <a className="btn btn-secondary-dark" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </div>
          </form>
        </div>
      </section>

      <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
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
