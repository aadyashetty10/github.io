import { useEffect, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// Hide an <img> whose file is missing instead of showing a broken-image icon.
export const hideOnError = (e) => {
  e.currentTarget.style.display = 'none';
};

// Types each word out, pauses, deletes it, then moves to the next.
// `words` must be a stable reference (a module-level constant).
export function useTypewriter(words) {
  const [text, setText] = useState('');

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? 45 : 85);
    };

    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
