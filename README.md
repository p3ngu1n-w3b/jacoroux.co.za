# Jaco Roux — Personal Brand Website

Dark, neon-accented portfolio + lead-gen site for **Jaco Roux**: sell website builds to South African SMEs while showcasing senior frontend credibility.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Contact API with [EmailJS](https://www.emailjs.com) delivery (falls back to `mailto:`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Contact form

Without EmailJS configured, submitting the form opens the visitor’s mail client with a pre-filled enquiry to `jaco.roux9@gmail.com`.

To send email server-side, create `.env.local`:

```env
EMAIL_SERVICE=service_xxxxxxxx
EMAIL_TEMPLATE=template_xxxxxxxx
EMAIL_PUBLIC_KEY=your_public_key
EMAIL_PRIVATE_KEY=your_private_key
```

Get these from the [EmailJS dashboard](https://dashboard.emailjs.com). Enable **API requests for non-browser apps** under Account → Security, and turn on **Use Private Key** (required for server-side sending).

Add all four variables to your hosting provider too (e.g. Vercel → Project → Settings → Environment Variables). Local `.env` is not deployed automatically.

## Deploy (recommended: Vercel)

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add the EmailJS env vars above.
4. Deploy — Vercel provides HTTPS and a `*.vercel.app` URL immediately.

### Custom domain ideas

| Domain | Fit |
|--------|-----|
| `jacoroux.co.za` | Best for SA business clients |
| `jacoroux.dev` | Tech / hire credibility |
| `jacoroux.web.za` / `getjacoroux.co.za` | Fallbacks |

Point DNS to Vercel once registered (A/CNAME per Vercel’s domain UI). Keep using Gmail until you add Google Workspace or similar on the domain.

Alternatives if not using Vercel: Netlify or Cloudflare Pages.

## Site map

- Hero (quote + work CTAs)
- Services (packages)
- How it works
- Portfolio (JT Field, Generator Services, Wildfire Support)
- Why me / Experience / About
- Contact (form + WhatsApp + phone + email + POPIA note)

## Contact details on the site

- Email: jaco.roux9@gmail.com
- Phone / WhatsApp: 061 514 0414 → `https://wa.me/27615140414`
- Contact form: `#contact` on the homepage
- LinkedIn: https://www.linkedin.com/in/jaco-roux/

## Licence

Private project — all rights reserved.
