import { useCallback, useEffect, useState } from 'react';
import IntroOverlay from './components/IntroOverlay.jsx';
import PetalLayer from './components/PetalLayer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import TechStack from './components/TechStack.jsx';
import Languages from './components/Languages.jsx';
import Projects from './components/Projects.jsx';
import GitHubActivity from './components/GitHubActivity.jsx';
import Footer from './components/Footer.jsx';
import Closing from './components/Closing.jsx';

export default function App() {
  const [dark, setDark] = useState(false);
  // 'active' = intro showing, 'leaving' = fading out, 'gone' = removed.
  const [introPhase, setIntroPhase] = useState('active');

  // Theme is applied to <body> so the CSS variables cascade everywhere.
  useEffect(() => {
    document.body.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Lock page scroll while the intro is on screen.
  useEffect(() => {
    const locked = introPhase === 'active';
    document.documentElement.classList.toggle('intro-locked', locked);
    document.body.classList.toggle('intro-locked', locked);
    return () => {
      document.documentElement.classList.remove('intro-locked');
      document.body.classList.remove('intro-locked');
    };
  }, [introPhase]);

  // Remove the overlay from the DOM once its fade-out has finished.
  useEffect(() => {
    if (introPhase !== 'leaving') return undefined;
    const timer = setTimeout(() => setIntroPhase('gone'), 950);
    return () => clearTimeout(timer);
  }, [introPhase]);

  const toggleTheme = () => setDark((d) => !d);
  const finishIntro = useCallback(() => setIntroPhase('leaving'), []);

  return (
    <>
      {introPhase !== 'gone' && (
        <IntroOverlay leaving={introPhase === 'leaving'} onDone={finishIntro} />
      )}

      <PetalLayer
        layerClass="page-petals"
        petalClass="page-petal"
        seed={6}
        seedStep={700}
        every={1400}
        minDuration={9}
        maxDuration={17}
      />

      <div className="wrap">
        <div className="card">
          <Hero dark={dark} onToggleTheme={toggleTheme} />
          <About />
          <Education />
          <TechStack />
          <Languages />
          <Projects />
          <GitHubActivity />
          <Footer dark={dark} onToggleTheme={toggleTheme} />
        </div>
        <Closing />
      </div>
    </>
  );
}
