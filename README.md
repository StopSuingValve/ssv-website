# Stop Suing Valve

A static advocacy website that informs developers and consumers about collective actions and lawsuits against Valve (e.g. UK Steam You Owe Us, US Valve Antitrust class action). The site explains the claims, why we oppose them, and—where applicable—how to remove yourself from default-opt-in lawsuits. It does not support harassment of any company or person.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). The website and logo were created with AI.

## Commands

| Command         | Action                              |
| :-------------- | :---------------------------------- |
| `npm install`   | Install dependencies                |
| `npm run dev`   | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/`   |
| `npm run preview` | Preview the build locally          |

## Hosting

The website is hosted on **Cloudflare Workers/Pages**. Static output is built with Astro into `./dist/` and deployed via Wrangler (`wrangler.jsonc`). To deploy: run `npm run build`, then `npx wrangler deploy` (or connect the repo to Cloudflare Pages and use build command `npm run build` and deploy command `npx wrangler deploy` with output directory `dist`).

## Project structure

- `src/pages/` – Home, FAQ, Privacy
- `src/layouts/Layout.astro` – Shared layout with Header and Footer
- `src/components/` – Header, Footer, CookieBanner
- `public/images/` – Logo (SSV)

Contact: contact@stopsuingvalve.com
