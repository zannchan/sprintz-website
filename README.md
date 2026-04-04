# Sprintz website rebuild - email + WhatsApp fix

This package is a clean Vite + React rebuild of the Sprintz website contact flow.

## What is fixed

- Working enquiry form with Formspree submission
- On-page submit status messages
- Automatic email fallback using `mailto:` if the form submission fails
- Direct clickable email links
- Persistent floating WhatsApp button with a high z-index so it stays visible
- Vercel-friendly setup with no custom `vercel.json` required

## Before deploying

Open `src/config.js` and update these values:

1. `whatsappNumber`
   - Replace the placeholder with the real WhatsApp number in international format
   - Example: `6591234567`

2. `formspreeEndpoint`
   - The package currently uses the earlier endpoint found in your previous build:
     `https://formspree.io/f/meepqlbo`
   - Keep it if it is still your active Formspree form, or replace it with your latest endpoint

3. `email` and `secondaryEmail`
   - Confirm the public email addresses you want displayed

## Local run

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

## Deploy to Vercel

1. Upload this folder to GitHub or drag it into Vercel
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

## Important note

The floating WhatsApp button can only be fully live after the correct WhatsApp number is inserted in `src/config.js`.
