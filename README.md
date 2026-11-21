# Idris TheCurator Studio, portfolio

Next.js (App Router) + TypeScript + Tailwind v4 + next-intl + Motion + Lenis. Deploys on Vercel.

## Run
```bash
npm install
npm run dev     # http://localhost:3000
```

## Languages
`messages/{en,yo,fr,es,zh}.json`. To add one: create the JSON file and add its code in `src/i18n/routing.ts`.
No copy is hardcoded in components.

## Theme
Accent color and light/dark/system are CSS variables set in `ThemeProvider` and saved in localStorage.

## Images to add in `public/` (exported from Figma)
```
public/hero/   mountain-back.png, mountain-front.png, construction.svg, circle-text.svg
public/story/  card.png, handshake.svg, targets.svg, avatars.png
public/about/  portrait.png, worker.svg, school.svg, location.svg, language.svg, pen-tool.svg, hobby.svg
public/resume.pdf
```

## Sections built
Hero, Story, About. Next: Certifications, Roles, Services, Projects, Partners, Success Story, Testimonials, Pricing, FAQ, Footer.
