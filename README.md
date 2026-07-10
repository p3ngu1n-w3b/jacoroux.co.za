# Jaco Roux — Personal Brand Website

Dark, neon-accented portfolio + lead-gen site for **Jaco Roux**: sell website builds to South African SMEs while showcasing senior frontend credibility.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Contact API with optional [Resend](https://resend.com) delivery (falls back to `mailto:`)

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

Without Resend, submitting the form opens the visitor’s mail client with a pre-filled enquiry to `email@jacoroux.co.za`.

To send email server-side, create `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=email@jacoroux.co.za
CONTACT_FROM_EMAIL=Jaco Roux <email@jacoroux.co.za>
```

After verifying a domain in Resend, keep `CONTACT_FROM_EMAIL` aligned to the address you want recipients to see, for example `Jaco Roux <email@jacoroux.co.za>`.

## Deploy (recommended: Vercel)

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add the env vars above if using Resend.
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
- Services (packages with “from” pricing)
- How it works
- Portfolio (JT Field, Generator Services, Wildfire Support)
- Why me / Experience / About
- Contact (form + WhatsApp + phone + email + POPIA note)

## Contact details on the site

- Email: email@jacoroux.co.za
- Phone / WhatsApp: 065 809 5070 → `https://wa.me/27658095070`
- LinkedIn: https://www.linkedin.com/in/jaco-roux/

## Licence

Private project — all rights reserved.
