# Vincentius Arnold Fridolin — Portfolio

A dark, editorial portfolio built with React + Vite, styled with Tailwind CSS.
Most of the site uses plain CSS (see `src/index.css`), but the photo-upload
avatar, event cards, and lightbox are built with **shadcn/ui** components
(Avatar, Card, Button, Dialog — all in `src/components/ui/`) on top of Radix
primitives, so they're easy to restyle or extend with more shadcn components
later (`npx shadcn@latest add <component>` will work out of the box thanks to
`components.json`).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a static production bundle:

```bash
npm run build
npm run preview   # serve the built files locally to sanity-check
```

The `dist/` folder that comes out of `npm run build` is ready to deploy to any
static host (Vercel, Netlify, GitHub Pages, S3, etc).

## Structure

```
src/
  data/profile.js          ← all copy & content lives here — edit this file first, includes `events`
  hooks/
    useReveal.js           ← scroll-reveal IntersectionObserver hook
    useLocalImage.js       ← persists an uploaded photo to localStorage
  lib/
    utils.js               ← shadcn's `cn()` class-merging helper
    image.js               ← resizes an uploaded photo before storing it
  components/
    ui/                    ← shadcn/ui primitives (avatar, card, button, dialog)
    Nav.jsx
    Hero.jsx
    DeviceFarmGrid.jsx     ← the animated signature element in the hero
    ProfilePhoto.jsx       ← click-to-upload avatar in the hero
    About.jsx
    Experience.jsx
    ExperienceCard.jsx
    ProjectHighlight.jsx
    Skills.jsx
    Education.jsx
    Events.jsx             ← "Highlights" section of photo cards
    EventCard.jsx          ← single highlight card with upload + lightbox
    Awards.jsx
    Footer.jsx
    Icons.jsx              ← small inline SVG icon set
  App.jsx
  main.jsx
  index.css                ← Tailwind directives + design tokens + all styles
```

## Profile photo & highlight photos

The hero avatar and the photo slots in the **Highlights** section are
click-to-upload placeholders:

- Click the avatar or any dashed "Add photo" box, pick an image, and it
  appears immediately, resized and saved to your browser's `localStorage`.
- It'll still be there next time you open the site **in that same browser**.

**Important:** this is a local preview tool, not a real upload — nothing
leaves your browser. If you deploy this site, visitors will *not* see the
photos you added this way; localStorage is private per-device. To make a
photo permanently visible to everyone:

1. Save the image into `public/` (e.g. `public/profile.jpg`).
2. In `src/components/ProfilePhoto.jsx` (or `EventCard.jsx` for a highlight),
   pass that path as a hardcoded `src` instead of relying on the upload, or
   simply reference it directly from `src/data/profile.js` and wire it in as
   a prop — whichever is easiest once you're happy with the photo.

## Editing content

Everything you'd want to update — name, roles, projects, skills, education,
awards — lives in `src/data/profile.js`. Components just render that data, so
you shouldn't need to touch component files for a content change.

## Design notes

- Palette: warm ink-black background with a copper/bronze accent and a teal
  "signal" color used for device-farm status indicators.
- Type: Fraunces (serif display) for headings, Inter for body copy,
  JetBrains Mono for labels, tags, and dates.
- The hero's animated grid (`DeviceFarmGrid.jsx`) is modeled directly on the
  real "Remote Device Farm" project from the résumé — it freezes to a static
  state for users with `prefers-reduced-motion` enabled instead of disabling
  itself.
