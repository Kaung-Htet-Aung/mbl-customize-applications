# MBL Customize Applications

A single-page portal that brings internal applications together in one place. Each app is presented as a card with its name, description, and logo, and opens in a new tab.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- CSS Modules
- Static export (`output: "export"`)

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the static site into `out/` |
| `npm run lint` | Run ESLint |
| `npm start` | Start the production server (not used with static export) |

## Project Structure

```text
src/
  app/
    layout.tsx        # Root layout, fonts, and metadata
    page.tsx          # Home page
    globals.css       # Global styles
    page.module.css   # Home page styles
  components/
    AppCard.tsx       # Individual application card
    DocumentManagement.tsx
  data/
    apps.ts           # Application list (name, description, URL, logo, accent)
public/
  icons/              # Application and branding assets
```

To add or change an application, edit `src/data/apps.ts`.

## Deployment

`next.config.ts` enables static export, so `npm run build` produces a fully static site in `out/`. The contents of `out/` can be hosted on any static hosting provider, including GitHub Pages, Netlify, or Vercel.
