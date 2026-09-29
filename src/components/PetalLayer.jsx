import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../utils.js';

// Spawns falling petals. Each petal removes itself when its animation ends.
export default function PetalLayer({
  layerClass,
  petalClass,
  seed,
  seedStep,
  every,
  minDuration,
  maxDuration,
  spawning = true,
}) {
  const [petals, setPetals] = useState([]);
  const nextId = useRef(0);

  useEffect(() => {
    if (!spawning || prefersReducedMotion()) return undefined;

    const spawn = () => {
      const id = nextId.current++;
      setPetals((list) => [
        ...list,
        {
          id,
          size: 6 + Math.random() * 8,
          left: Math.random() * 100,
          sway: Math.random() * 120 - 60,
          duration: minDuration + Math.random() * (maxDuration - minDuration),
        },
      ]);
    };

    // Seed a few right away so the layer doesn't start empty.
    const seeds = Array.from({ length: seed }, (_, i) => setTimeout(spawn, i * seedStep));
    const timer = setInterval(spawn, every);

    return () => {
      seeds.forEach(clearTimeout);
      clearInterval(timer);
    };
  }, [spawning, seed, seedStep, every, minDuration, maxDuration]);

  const remove = (id) => setPetals((list) => list.filter((p) => p.id !== id));

  return (
    <div className={layerClass}>
      {petals.map((p) => (
        <span
          key={p.id}
          className={petalClass}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            '--sway': `${p.sway}px`,
            animationDuration: `${p.duration}s`,
          }}
          onAnimationEnd={() => remove(p.id)}
        />
      ))}
    </div>
  );
}
