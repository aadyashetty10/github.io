import { useEffect, useRef } from 'react';
import { ASSETS, ROLES } from '../data.js';
import { hideOnError, useTypewriter } from '../utils.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Hero({ dark, onToggleTheme }) {
  const role = useTypewriter(ROLES);
  const videoRef = useRef(null);

  // React doesn't reliably set the `muted` attribute, which can block autoplay.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <>
      <div className="banner">
        <video ref={videoRef} autoPlay muted loop playsInline poster={ASSETS.avatar}>
          <source src={ASSETS.banner} type="video/mp4" />
        </video>
      </div>

      <div className="profile-row">
        <div className="avatar">
          <img src={ASSETS.avatar} alt="Aadya's bitmoji" onError={hideOnError} />
        </div>
        <div className="header-actions">
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <a className="btn btn-dark" href="#projects">
            View Projects →
          </a>
          <a className="btn btn-outline" href={ASSETS.resume} target="_blank" rel="noreferrer">
            View Resume →
          </a>
        </div>
      </div>

      <div className="identity">
        <div className="name-row">
          <div>
            <div className="name">
              Aadya Shetty <span className="verified">✔️</span>
            </div>
            <div className="role">
              <span>{role}</span>
              <span className="cursor">&nbsp;</span>
            </div>
            <div className="location">Bengaluru, India</div>
          </div>
        </div>
      </div>
    </>
  );
}
