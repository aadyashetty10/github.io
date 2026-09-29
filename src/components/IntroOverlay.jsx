import { useEffect, useState } from 'react';
import PetalLayer from './PetalLayer.jsx';
import { easeOutCubic } from '../utils.js';

const LOAD_DURATION = 2000;
const HOLD_AT_100 = 400;

// Full-screen loader that counts 1 to 100, then hands off to the page.
export default function IntroOverlay({ leaving, onDone }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const start = performance.now();
    let raf;
    let timer;

    const tick = (now) => {
      const raw = Math.min((now - start) / LOAD_DURATION, 1);
      setCount(Math.max(1, Math.round(easeOutCubic(raw) * 100)));
      if (raw < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timer = setTimeout(onDone, HOLD_AT_100);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [onDone]);

  return (
    <div className={`intro-overlay${leaving ? ' intro-hidden' : ''}`}>
      <PetalLayer
        layerClass="intro-petals"
        petalClass="intro-petal"
        seed={8}
        seedStep={250}
        every={550}
        minDuration={6}
        maxDuration={11}
        spawning={!leaving}
      />
      <div className="intro-percent" aria-live="off">
        {count}
      </div>
    </div>
  );
}
