# Sridhar Vembu — The Man Who Walked Back

An immersive single-page tribute site built as a cinematic anime-scrapbook documentary about Sridhar Vembu and the operating logic behind Zoho.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 entrypoint with custom global CSS
- GSAP ScrollTrigger
- Lenis smooth scroll
- Framer Motion
- SVG/CSS parallax, constellations, route drawing, torn-paper UI, and localStorage firefly wall

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Validate

```bash
npm run typecheck
npm run lint
npm run build
```

## Project Structure

```txt
src/
  components/
    sections/   # 14 cinematic scenes
    ui/         # shared controls, overlays, route, constellation, slider, firefly wall
  data/         # story copy, products, school milestones, non-rendered source notes
  hooks/        # Lenis, reduced motion, GSAP context helpers
  styles/       # global visual system
public/assets/
  backgrounds/
  cutouts/
  textures/
  objects/
  maps/
  icons/
```

## Notes

The site intentionally does not render public citations in the interface. Fact-sensitive notes are kept in `src/data/story.ts` for editorial accountability while preserving the film-like reading experience.
