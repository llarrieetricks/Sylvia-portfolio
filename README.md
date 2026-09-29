# Sylvia Isaboke Portfolio

A responsive, single-page professional portfolio for Sylvia Isaboke, counselling psychologist. Built with React, TypeScript, and Vite. Portfolio images are stored locally in `public/images`; no backend or API keys are needed.

## Project structure

```text
public/
  images/                 Portrait and project artwork from the supplied portfolio
src/
  components/
    SectionHeading.tsx    Shared numbered section heading
  data/
    portfolio.ts          Skills, experience, training, projects, and topics
  App.tsx                 Page sections and navigation
  App.css                 Layout, typography, colors, and responsive styles
  index.css               Global styles and design tokens
  main.tsx                React application entry point
index.html                Page title and SEO description
```

## Run locally

```sh
npm install
npm run dev
```

The terminal prints the local URL, usually `http://localhost:5173`.

## Check the project

```sh
npm run build
npm run lint
```

Edit `src/data/portfolio.ts` to update skills, experience, training, projects, or education topics. Replace images in `public/images` to update the portrait or project artwork.
