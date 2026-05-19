# Rêve Landing Page — Next.js App Router

Pixel-focused responsive landing page built with:

- Next.js App Router
- JavaScript / JSX only
- Tailwind CSS v4
- shadcn/ui-style reusable components
- Framer Motion animations
- Next/Image optimized assets
- Poppins font for the whole site
- English/French localization with a header language switcher
- Empty icon slots so final custom icons can be added later

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Localization

All visible English/French copy is inside:

```bash
lib/translations.js
```

The language provider is here:

```bash
components/common/LanguageProvider.jsx
```

The header includes an `EN / FR` switcher and saves the selected language in `localStorage`.

## Replace dummy images

All image placeholders are inside:

```bash
public/images/
```

Keep the same file names if you want to replace images without editing code:

- `hero-left.jpg`
- `hero-center.jpg`
- `hero-right.jpg`
- `about-handshake.jpg`
- `free-zone.jpg`
- `mainland.jpg`
- `avatar-1.jpg` to `avatar-6.jpg`

## Add icons later

The service cards intentionally use empty icon space. Update this file when final icons are ready:

```bash
components/common/IconSlot.jsx
```

You can also place SVG/PNG assets in:

```bash
public/icons/
```

## Main editable files

- `app/page.js` — page section order
- `lib/data.js` — arrays for navigation, services, options, steps, testimonials
- `lib/translations.js` — all English/French copy
- `components/sections/` — all landing page sections
- `components/layout/Header.jsx` — desktop/mobile header with smooth fixed state after 100px scroll
- `app/globals.css` — global spacing utilities and base styling

## Tailwind CSS

This project uses Tailwind CSS v4. The PostCSS config uses `@tailwindcss/postcss`.

If you already installed packages before this update, delete `node_modules` and `package-lock.json`, then run `npm install` again.
