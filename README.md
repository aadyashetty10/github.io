# Aadya Shetty — Portfolio (React + Vite)

The same portfolio as the original `index.html`, split into React components.

## Setup

1. Copy your existing files into the `public/` folder:
   - `avatar.png`
   - `banner-blossom.mp4`
   - `project-gaming.png`
   - `project-splitreceipt.png`
   - `aadya-shetty-resume.pdf`
2. Install and run:

   ```bash
   npm install
   npm run dev      # local dev server
   npm run build    # production build into dist/
   npm run preview  # serve the production build locally
   ```

## Deploying to Vercel

Vercel detects Vite automatically. If it asks: build command `npm run build`, output directory `dist`.

## Editing content

Text, projects, skills, links, and image paths all live in `src/data.js`.
Colors and layout are in `src/styles.css`.

## Structure

```
src/
  App.jsx              page layout, theme + intro state
  data.js              all site content
  utils.js             typewriter and count-up hooks
  styles.css           all styles (light + dark themes)
  components/
    IntroOverlay.jsx   loading screen + "Show Portfolio" button
    PetalLayer.jsx     falling petals (intro and page-wide)
    Hero.jsx           banner, avatar, name, typing role, view counter
    About.jsx  Education.jsx  TechStack.jsx  Languages.jsx  Projects.jsx
    GitHubActivity.jsx live contribution heatmap
    Footer.jsx  Closing.jsx  ThemeToggle.jsx  Reveal.jsx
```
