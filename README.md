# cv

Joseph Clegg's CV as a small website, served at https://joclegg.github.io/cv/.

The page shows a profile and summary, a swipeable deck of experience cards, then education, skills and interests, with a light and dark theme.

## How it's built

A static single-page app built with Vite, React and TypeScript, styled with Tailwind CSS and Base UI primitives. All CV content lives in `src/common/cv.constants.ts`; the components only lay it out.

## Develop

```sh
npm ci
npm run dev
```

## Test

```sh
npm run lint          # ESLint, including the repo's own rules
npm run format:check  # Prettier
npm test              # Vitest unit tests
npm run build         # type-check and build to dist
npm run test:e2e      # Playwright view tests and screenshot snapshots
```

Screenshot snapshots are regenerated on Linux with the "Update screenshot snapshots" workflow, or locally with `npm run test:e2e:update`, only for intended visual changes.

## Deploy

Every push to `main` runs the "Build and test" workflow; when it passes, the "Deploy" workflow builds the site and publishes `dist` to GitHub Pages.

See [AGENTS.md](AGENTS.md) for the project structure and coding conventions.
