# Sprintz Corporate Deploy Package v2

This package includes:
- corporate homepage revamp
- direct website contact form via `/api/contact`
- WhatsApp buttons with professional default message
- built-in professional SVG visuals for a more corporate look

## Upload to GitHub
Upload these items directly to the root of your GitHub repo:
- `package.json`
- `vite.config.js`
- `vercel.json`
- `index.html`
- `src/`
- `public/`
- `api/`

## Vercel environment variables
Set these in Project Settings -> Environment Variables:
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_TO_EMAIL`
- `CONTACT_CC_EMAIL`

Email sending will only work after Resend domain verification is complete and the project is redeployed.
