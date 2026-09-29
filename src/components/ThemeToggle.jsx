export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button type="button" className="theme-toggle" onClick={onToggle} aria-label="Toggle dark mode">
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
