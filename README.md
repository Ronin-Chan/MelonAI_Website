# MelonAI Website

This repository contains a frontend landing page for the Melon AI platform. It is built with `Next.js`, styled with `Tailwind CSS`, and uses reusable UI components inspired by the `shadcn/ui` design system.

## Features

- Landing page for an AI agent platform
- Neutral UI theme with consistent styling
- Reusable components for buttons, cards, and badges
- Responsive layout and motion-based animations

## Tech Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `framer-motion`
- `lucide-react`

## Project Structure

- `app/`
  - `page.tsx` – main page content and layout
  - `layout.tsx` – root layout and metadata
  - `globals.css` – global styles and theme variables
- `components/ui/` – reusable UI components
  - `button.tsx`
  - `card.tsx`
  - `badge.tsx`
- `lib/utils.ts` – utility helpers

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser to view the site.

## Build and Deploy

```bash
npm run build
npm run start
```

## Development Notes

- Primary page editing: `app/page.tsx`
- Global theme adjustments: `app/globals.css`
- Shared UI components: `components/ui/*`

> The current UI is optimized for a neutral slate theme with medium border radius styling.

## Extending the Project

To expand the page content, edit `app/page.tsx` or add additional components under `components/ui/`.

For additional guidance, refer to the official documentation for `Next.js`, `Tailwind CSS`, and `shadcn/ui`.
