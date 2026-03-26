import { useState } from 'react'

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
  )
}
