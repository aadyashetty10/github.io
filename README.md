<div align="center">

# 🌸 Aadya Shetty

### Software Developer · CS Undergrad @ RVITM · Bengaluru

Full-stack developer focused on clean architecture and thoughtful UI, turning ideas into real, working products, from REST APIs to the interfaces people actually use.

<br />

[![Live Site](https://img.shields.io/badge/Live-aadya--shetty.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://aadya-shetty.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

<!--
Add a screenshot: save it as docs/screenshot.png, then uncomment the line below.
<img src="docs/screenshot.png" alt="Portfolio preview" width="820" />
-->

</div>

---

## ✨ Highlights

- **Animated intro** with a 1 to 100 loader and drifting blossom petals
- **Typing role line** that cycles through my titles
- **Light and dark themes**, switchable from the header or footer
- **Live GitHub contribution heatmap** in a custom pink scale
- **Scroll-reveal sections** and a hover-to-pause tech stack marquee
- **Fully responsive**, and it respects `prefers-reduced-motion`
- **All content in one file** (`src/data.js`), so updates never touch component code

## 🛠️ Built With

| | |
| --- | --- |
| **Framework** | React 19 |
| **Tooling** | Vite 7 |
| **Styling** | Hand-written CSS with custom properties for theming |
| **Data** | GitHub contributions via a public API |
| **Hosting** | Vercel |

## 🚀 Getting Started

```bash
git clone https://github.com/aadyashetty10/github.io.git
cd github.io
npm install
npm run dev
```

Then open the local address printed in the terminal, usually `http://localhost:5173`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |

## 🗂️ Project Structure

```
public/                  avatar, banner video, project images, resume
src/
├── App.jsx              page layout, theme and intro state
├── data.js              all site content: projects, skills, links
├── utils.js             typewriter hook and small helpers
├── styles.css           light and dark themes, animations
└── components/
    ├── IntroOverlay     1 to 100 loading screen
    ├── PetalLayer       falling petals (intro and page-wide)
    ├── Hero             banner, avatar, name, typing role
    ├── About            Education   TechStack   Languages   Projects
    ├── GitHubActivity   live contribution heatmap
    └── Footer           Closing     ThemeToggle Reveal
```

## 🎨 Make It Yours

- **Content:** edit `src/data.js` for projects, skills, education, links and image paths.
- **Colors:** change the CSS variables at the top of `src/styles.css`. The dark theme is a second set of the same variables.
- **GitHub heatmap:** set `GITHUB_USERNAME` in `src/data.js`.

## 📬 Get in Touch

Have an idea? Let's build something together.

[![Email](https://img.shields.io/badge/Email-aadyabshetty10@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:aadyabshetty10@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aadya--shetty-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/aadya-shetty-86990139b)
[![GitHub](https://img.shields.io/badge/GitHub-aadyashetty10-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/aadyashetty10)

<div align="center">

<sub>Made with 💗 by Aadya Shetty</sub>

</div>
