import { NAV_LINKS, SOCIALS } from '../data.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Footer({ dark, onToggleTheme }) {
  return (
    <>
      <div className="footer-nav">
        <div className="brand">aadyashetty</div>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={link.active ? 'active' : undefined}>
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle dark={dark} onToggle={onToggleTheme} />
      </div>

      <div className="socials">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            className="social-pill"
            href={s.href}
            {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {`${s.icon} ${s.label}`}
          </a>
        ))}
      </div>
    </>
  );
}
