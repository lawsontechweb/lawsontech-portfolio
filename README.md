# Portfolio — Adriana Lawson

A Next.js (App Router) portfolio site with 5 pages: Home, Work, Analytics, About, Contact.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy

Push to a GitHub repo, import into [Vercel](https://vercel.com) — free, auto-detects Next.js.

## Structure

- `app/layout.js` — shared Nav + Footer, loads Space Grotesk / Inter / IBM Plex Mono fonts
- `app/Nav.js` — nav bar with mobile menu toggle (client component)
- `app/page.js` — Home
- `app/work/page.js` — Case studies for Rooted Grounds + Café Marlow
- `app/analytics/page.js` — The 5 GitHub analytics projects, translated into business value
- `app/about/page.js` — About / bio
- `app/contact/page.js` + `app/contact/ContactForm.js` — Contact form (client component)
- `app/globals.css` — all styling

## Before this goes live

- Replace the "Photo" placeholder on the About page with a real headshot
- Update `hello@adrianalawson.dev` to your real contact email
- Wire the contact form to email/a CRM instead of local state
- Once the Rooted Grounds and Café Marlow demos are deployed to Vercel, swap the "View Live Demo →" placeholder links on the Work page for the real URLs
- Update the case study thumbnails to real screenshots once you have them
