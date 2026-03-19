# Sprintz Holdings — Final Production Package

This is a production-ready Next.js website package for **www.sprintz.com.sg**.

## Included
- Multi-page business website
- Professional industrial/trading visual design
- Single CTA set: **WhatsApp Us** and **Request Quote**
- Visible contact email: **chanlp@sprintz.com.sg**
- Hidden internal copy on form submissions: **BCC to zannchan@gmail.com**
- Server-side contact form API route using **Resend**

## Pages
- /
- /company
- /industrial-supply
- /commodities
- /global-sourcing
- /contact

## Local setup
1. Install Node.js 18+.
2. Run:
   npm install
3. Copy `.env.example` to `.env.local`
4. Add your Resend API key in `.env.local`
5. Run:
   npm run dev

## Deploy to Vercel
1. Create a GitHub repository.
2. Upload all files in this package.
3. Import the repo into Vercel.
4. In Vercel project settings, add environment variables from `.env.example`.
5. Deploy.

## DNS to Vercel
In your DNS manager / Plesk, set:
- A record: `@` -> `76.76.21.21`
- CNAME: `www` -> the value shown by Vercel in Project > Settings > Domains

## Important
- Replace the placeholder logo block later with the final logo artwork if desired.
- The form sends email using the server-side API route at `/api/contact`.
- If you want branded sending, configure your sending domain in Resend.
