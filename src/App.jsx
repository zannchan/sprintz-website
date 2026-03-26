import { useState } from 'react'

const sectors = [
  {
    title: 'Commodities & Raw Materials',
    items: ['ICUMSA 45 Sugar', 'Non-GMO Soya Beans for Human Consumption', 'Yellow Corns (Animal Feeds)', 'Iron Ore Fines', 'Copper Cathodes', 'Nickel', 'Aluminium Ingot', 'Lithium', 'Gold', 'Scrap Metals', 'Coal'],
  },
  {
    title: 'Energy Products',
    items: ['EN590', 'LNG', 'LPG', 'Light Cycle Oil', 'Light Crude Oil'],
  },
  {
    title: 'Industrial & Technical Supply',
    items: ['Siemens Industrial Products', 'Allen-Bradley / Rockwell', 'Factory Equipment', 'Electrical & Automation Solutions', 'Technical Procurement Support'],
  },
  {
    title: 'Specialized Trade',
    items: ['Chicken Paws', 'Aviation and Equipment', 'Medical Equipment and Consumables', 'Project Procurement', 'Other Structured Trade Opportunities'],
  },
]

const countryCoverage = [
  'Singapore', 'Malaysia', 'Thailand', 'China', 'UAE', 'USA', 'Indonesia', 'Vietnam', 'India', 'Middle East'
]

const strengths = [
  'Singapore-based international trading company with a broader regional and global outlook',
  'Structured support for cross-border supply, procurement, and partner coordination',
  'Professional presentation designed for buyers, suppliers, and institutional counterparties',
  'Coverage across commodities, metals, energy products, industrial equipment, aviation, and medical sectors',
  'Commercially disciplined enquiry handling with a stronger corporate profile',
  'Positioning suitable for counterparties seeking a reliable trading and sourcing partner',
]

const writeups = [
  {
    title: 'Corporate Profile',
    text: 'Sprintz Holdings Pte. Ltd. is presented as a professional Singapore-based international trading company supporting structured supply opportunities across Asia, the Middle East, and broader global markets.',
  },
  {
    title: 'Market Footprint',
    text: 'The business profile is framed to support enquiries and relationships spanning Singapore, Malaysia, Thailand, China, the UAE, the USA, Indonesia, Vietnam, India, and other strategic regional corridors.',
  },
  {
    title: 'Commercial Focus',
    text: 'Sprintz is positioned around commodities, energy products, industrial supply, aviation equipment, medical consumables, and project procurement with emphasis on corporate discipline and practical execution support.',
  },
]

export default function App() {
  const [status, setStatus] = useState({ type: '', text: '' })
  const [submitting, setSubmitting] = useState(false)

  const whatsappNumber = '6583889168'
  const whatsappText = encodeURIComponent(
    'Hello Sprintz Holdings, I would like to make a business enquiry regarding your products, markets, and supply capabilities.'
  )
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappText}`

  const formAction = 'https://formspree.io/f/meepqlbo'

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
        headers: {
          Accept: 'application/json',
        },
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          text: 'Thank you. Your enquiry has been submitted successfully.',
        })
        form.reset()
      } else {
        setStatus({
          type: 'error',
          text: data?.errors?.[0]?.message || 'Unable to submit enquiry.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        text: 'Unable to submit enquiry.',
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
            <div className="brand">SPRINTZ HOLDINGS</div>
            <div className="brand-sub">PTE. LTD.</div>
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
        <img className="hero-image" src="/hero-world.svg" alt="Corporate global trade graphic" />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="badge">International Trading Company</div>
            <h1>Corporate Trade Positioning With Broader Global Reach.</h1>
            <p>
              Sprintz Holdings Pte. Ltd. is positioned as a Singapore-based international trading
              company supporting commodities, energy products, industrial supply, aviation,
              medical equipment, and strategic procurement with a stronger corporate identity
              and partner-facing presence.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Submit Corporate Enquiry</a>
              <a className="btn btn-secondary" href="#sectors">Explore Business Lines</a>
            </div>
            <div className="hero-metrics">
              <div className="metric-card"><span>Headquartered</span><strong>Singapore</strong></div>
              <div className="metric-card"><span>Orientation</span><strong>International Trade</strong></div>
              <div className="metric-card"><span>Approach</span><strong>Structured Supply</strong></div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-label">Why counterparties engage Sprintz</div>
            <ul className="strength-list">
              {strengths.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section section-light">
        <div className="container two-col">
          <div>
            <div className="section-label">About Sprintz</div>
            <h2>A more established corporate presence for serious trading relationships.</h2>
          </div>
          <div className="body-copy">
            {writeups.map((item) => (
              <div key={item.title} className="writeup-block">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-label">Corporate Visuals</div>
          <h2>Professional presentation designed for a stronger market impression.</h2>
          <div className="visual-grid">
            <article className="visual-card">
              <img src="/hero-world.svg" alt="Global trade network" />
              <div className="visual-content">
                <h3>International Trade Profile</h3>
                <p>Sharper visual language for cross-border sourcing, global connectivity, and structured supply positioning.</p>
              </div>
            </article>
            <article className="visual-card">
              <img src="/industrial-visual.svg" alt="Industrial supply" />
              <div className="visual-content">
                <h3>Industrial Supply Positioning</h3>
                <p>Cleaner presentation for Siemens, Allen-Bradley / Rockwell, factory equipment, and technical procurement support.</p>
              </div>
            </article>
            <article className="visual-card">
              <img src="/corporate-grid.svg" alt="Corporate layout" />
              <div className="visual-content">
                <h3>Partner-Facing Credibility</h3>
                <p>A more professional business image for counterparties evaluating Sprintz across multiple product and market categories.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="sectors" className="section section-light">
        <div className="container">
          <div className="section-label">Business Lines</div>
          <h2>Core sectors presented with a stronger international trading framework.</h2>
          <div className="card-grid">
            {sectors.map((group) => (
              <article className="info-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="section section-dark">
        <div className="container market-block">
          <div>
            <div className="section-label section-label-dark">Geographic Reach</div>
            <h2>Aligned for counterparties across Asia, the Middle East, and broader international markets.</h2>
          </div>
          <div className="market-tags">
            {countryCoverage.map((market) => <span key={market}>{market}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-light">
        <div className="container contact-grid">
          <div>
            <div className="section-label">Contact</div>
            <h2>Corporate enquiry channel.</h2>
            <p className="body-copy">
              This version uses Formspree for website enquiries and WhatsApp for direct messaging,
              providing a simpler and more reliable contact flow without DNS-based email sending issues.
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
          <div>International Trade · Structured Supply · Regional & Global Market Coverage</div>
        </div>
      </footer>
    </div>
  )
}
