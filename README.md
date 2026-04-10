# Sprintz WhatsApp Fixed Deploy Pack

This is a clean static deploy pack for `www.sprintz.com.sg` with:

- fixed WhatsApp links on header, contact section, footer, and floating button
- AJAX Formspree submission that stays on the same page
- valid `vercel.json`
- no framework dependency and no build step required

## Files

- `index.html` – main site page
- `styles.css` – all styling
- `script.js` – WhatsApp config and form handler
- `vercel.json` – valid Vercel project config
- `favicon.svg` – simple favicon

## Important setting

Open `script.js` and edit this line if you want a different WhatsApp number:

```js
whatsappNumber: '6598810636'
```

## Deploy to Vercel

1. Unzip the package.
2. Upload the folder contents to your GitHub repository root, replacing the old site files if needed.
3. In Vercel, redeploy the project.
4. No build command is required for this pack.

## Notes

- The form uses the current Formspree endpoint already seen in the previous Sprintz contact component: `https://formspree.io/f/meepqlbo`.
- The WhatsApp destination is configured centrally in `script.js` so you only need to change it once.
