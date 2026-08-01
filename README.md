# Vincentius Arnold Fridolin — Portfolio

A dark, editorial portfolio built with React + Vite. No UI framework or extra
animation library — motion is handled with plain CSS transitions/keyframes and
a couple of small hooks, so the project stays light and easy to read.

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
  data/profile.js        ← all copy & content lives here — edit this file first
  hooks/useReveal.js      ← scroll-reveal IntersectionObserver hook
  components/
    Nav.jsx
    Hero.jsx
    DeviceFarmGrid.jsx    ← the animated signature element in the hero
    About.jsx
    Experience.jsx
    ExperienceCard.jsx
    ProjectHighlight.jsx
    Skills.jsx
    Education.jsx
    Awards.jsx
    Footer.jsx
    Icons.jsx             ← small inline SVG icon set
  App.jsx
  main.jsx
  index.css               ← design tokens + all styles
```

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
