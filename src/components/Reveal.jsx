import { useEffect, useRef, useState } from 'react';

// A page section that fades in the first time it scrolls into view.
export default function Reveal({ className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ['section', 'reveal', visible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
}
