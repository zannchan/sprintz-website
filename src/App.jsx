import { useMemo, useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from './config';

const capabilityCards = [
  {
    title: 'Structured Trade',
    text: 'Commercial coordination for commodities, raw materials, and regional distribution mandates.',
  },
  {
    title: 'Industrial Supply',
    text: 'Sourcing support for Siemens, technical components, equipment, and project-linked procurement.',
  },
  {
    title: 'Project Support',
    text: 'Commercial support across infrastructure, logistics, data centre, and business expansion requirements.',
  },
];

const sectorList = [
  'Commodities & agricultural products',
  'Energy products & industrial materials',
  'Industrial automation & technical sourcing',
  'Project coordination & strategic procurement',
];

function App() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });

  const whatsappUrl = useMemo(() => getWhatsAppUrl(), []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const buildMailto = () => {
    const subject = encodeURIComponent(
      formState.subject || `Website enquiry from ${formState.name || 'Website Visitor'}`
    );
    const body = encodeURIComponent([
      `Name: ${formState.name || '-'}`,
      `Company: ${formState.company || '-'}`,
      `Email: ${formState.email || '-'}`,
      `Phone / WhatsApp: ${formState.phone || '-'}`,
      '',
      formState.message || '',
    ].join('\n'));

    return `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState({ status: 'submitting', message: 'Sending your enquiry...' });

    try {
      const response = await fetch(SITE_CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          company: formState.company,
          email: formState.email,
          phone: formState.phone,
          subject: formState.subject,
          message: formState.message,
          _subject:
            formState.subject || `Website enquiry from ${formState.name || 'Website Visitor'}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitState({
        status: 'success',
        message: 'Thank you. Your enquiry has been sent successfully.',
      });
      setFormState({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitState({
        status: 'error',
        message:
          'The web form could not be submitted. Please use the email fallback below or contact Sprintz on WhatsApp.',
      });
      window.location.href = buildMailto();
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-bar">
          <a href="#top" className="brand-mark">
            <span className="brand-badge">S</span>
            <span>
              <strong>{SITE_CONFIG.companyName}</strong>
              <small>{SITE_CONFIG.companyTagline}</small>
            </span>
          </a>

          <nav className="nav-links">
            <a href="#capabilities">Capabilities</a>
            <a href="#coverage">Coverage</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a className="ghost-button" href={`mailto:${SITE_CONFIG.email}`}>
              Email Us
            </a>
            <a className="solid-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">SINGAPORE · INTERNATIONAL TRADE · PROJECT COORDINATION</p>
              <h1>Commercial coordination for serious buyers, suppliers, and project partners.</h1>
              <p className="hero-text">
                Sprintz Holdings supports structured enquiries across commodities, industrial supply,
                technical sourcing, and project-linked procurement. The site below is rebuilt with a
                working enquiry form, a direct email fallback, and a persistent floating WhatsApp button.
              </p>
              <div className="hero-actions">
                <a className="solid-button" href="#contact">
                  Submit Enquiry
                </a>
                <a className="ghost-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Open WhatsApp
                </a>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-stat-card">
                <span>Business Focus</span>
                <strong>Trade, supply, and project support</strong>
              </div>
              <div className="hero-stat-card">
                <span>Primary Contact</span>
                <strong>{SITE_CONFIG.email}</strong>
              </div>
              <div className="hero-stat-card">
                <span>Location</span>
                <strong>{SITE_CONFIG.address}</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section-block white-block">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">CAPABILITIES</p>
              <h2>Clean positioning with direct contact paths that actually work.</h2>
              <p>
                This rebuild keeps the site professional and lightweight while making the enquiry flow
                much more reliable for Vercel deployment.
              </p>
            </div>

            <div className="card-grid">
              {capabilityCards.map((card) => (
                <article key={card.title} className="info-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="coverage" className="section-block tinted-block">
          <div className="container coverage-grid">
            <div>
              <p className="eyebrow">COVERAGE</p>
              <h2>Suitable for a corporate landing page without overcomplicating deployment.</h2>
              <p>
                The form uses a Formspree endpoint already found in your earlier build, while the
                on-page buttons include direct email and WhatsApp paths for faster conversion.
              </p>
            </div>

            <ul className="sector-list">
              {sectorList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section-block white-block">
          <div className="container contact-grid">
            <div className="contact-panel">
              <p className="eyebrow">CONTACT</p>
              <h2>Corporate enquiries</h2>
              <p>
                Use the enquiry form for business requests, or use the direct buttons below for email
                and WhatsApp.
              </p>

              <div className="contact-card">
                <h3>{SITE_CONFIG.companyName}</h3>
                <p>{SITE_CONFIG.address}</p>
                <p>
                  <strong>Primary Email:</strong>{' '}
                  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </p>
                <p>
                  <strong>Secondary Email:</strong>{' '}
                  <a href={`mailto:${SITE_CONFIG.secondaryEmail}`}>{SITE_CONFIG.secondaryEmail}</a>
                </p>
                <div className="contact-actions">
                  <a className="ghost-button full-width" href={`mailto:${SITE_CONFIG.email}`}>
                    Open Email
                  </a>
                  <a
                    className="solid-button full-width"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="input-grid two-col">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={onChange}
                    required
                  />
                </label>
                <label>
                  Company
                  <input type="text" name="company" value={formState.company} onChange={onChange} />
                </label>
              </div>

              <div className="input-grid two-col">
                <label>
                  Business Email
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={onChange}
                    required
                  />
                </label>
                <label>
                  Phone / WhatsApp
                  <input type="text" name="phone" value={formState.phone} onChange={onChange} />
                </label>
              </div>

              <label>
                Subject
                <input type="text" name="subject" value={formState.subject} onChange={onChange} />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="7"
                  value={formState.message}
                  onChange={onChange}
                  required
                />
              </label>

              <button className="solid-button submit-button" type="submit" disabled={submitState.status === 'submitting'}>
                {submitState.status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
              </button>

              <p
                className={`status-message ${submitState.status}`}
                aria-live="polite"
              >
                {submitState.message}
              </p>

              <p className="helper-text">
                If the form does not submit, the page will automatically open your email app with the
                enquiry details as a fallback.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>{SITE_CONFIG.companyName}</strong>
            <p>{SITE_CONFIG.address}</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
      >
        <span className="whatsapp-icon">✆</span>
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export default App;
