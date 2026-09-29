import { memo, useEffect, useState } from 'react';
import { GITHUB_USERNAME, HEATMAP_COLORS } from '../data.js';
import Reveal from './Reveal.jsx';

const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const ERROR_TEXT = "Couldn't load live GitHub activity — check your connection or username.";

const parseDate = (iso) => new Date(`${iso}T00:00:00`);

// Group the flat day list into weeks (Sun–Sat columns), padding the ends with nulls.
function buildWeeks(contributions) {
  const cells = [];
  const startPad = parseDate(contributions[0].date).getDay();
  for (let i = 0; i < startPad; i++) cells.push(null);
  contributions.forEach((c) => cells.push(c));
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

// A month name goes above the first week that starts in that month.
function buildMonthLabels(weeks) {
  let last = '';
  return weeks.map((week) => {
    const first = week.find(Boolean);
    if (!first) return '';
    const date = parseDate(first.date);
    const label = date.toLocaleDateString('en-US', { month: 'short' });
    if (label !== last && date.getDate() <= 7) {
      last = label;
      return label;
    }
    return '';
  });
}

function tooltipText(day) {
  const date = parseDate(day.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  if (day.count === 0) return `No contributions on ${date}.`;
  return `${day.count} contribution${day.count === 1 ? '' : 's'} on ${date}.`;
}

// Memoized so hovering a cell (which updates the tooltip) doesn't re-render every cell.
const Heatmap = memo(function Heatmap({ weeks, onTip }) {
  const months = buildMonthLabels(weeks);
  return (
    <>
      <div className="gh-months">
        {months.map((label, w) => (
          <span key={w} style={{ width: 14 }}>
            {label}
          </span>
        ))}
      </div>
      <div className="gh-grid">
        {weeks.flatMap((week, w) =>
          week.map((day, d) =>
            day ? (
              <div
                key={`${w}-${d}`}
                className="gh-cell"
                style={{ background: HEATMAP_COLORS[day.level], animationDelay: `${w * 0.006}s` }}
                onMouseEnter={() => onTip(tooltipText(day))}
                onMouseLeave={() => onTip('')}
              />
            ) : (
              <div key={`${w}-${d}`} className="gh-cell" style={{ visibility: 'hidden' }} />
            )
          )
        )}
      </div>
    </>
  );
});

export default function GitHubActivity() {
  const [state, setState] = useState({ status: 'loading' });
  const [tip, setTip] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        if (!res.ok) throw new Error('request failed');
        const data = await res.json();
        const total = Object.values(data.total || {}).reduce((a, b) => a + b, 0);
        if (!cancelled) setState({ status: 'ready', weeks: buildWeeks(data.contributions), total });
      } catch {
        if (!cancelled) setState({ status: 'error' });
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  let summary = '';
  if (state.status === 'ready') summary = `${state.total} contributions in the last year`;
  if (state.status === 'error') summary = ERROR_TEXT;

  return (
    <Reveal>
      <h2>GitHub Activity</h2>
      <p className="gh-total">{summary}</p>
      <div className="gh-box">
        <div className="gh-tooltip" style={{ display: tip ? 'block' : 'none' }}>
          {tip}
        </div>
        <div className="gh-scroll">
          <div className="gh-daylabels">
            {DAY_LABELS.map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>
          <div>{state.status === 'ready' && <Heatmap weeks={state.weeks} onTip={setTip} />}</div>
        </div>
        <div className="gh-footer">
          <a
            href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile"
            target="_blank"
            rel="noreferrer"
          >
            Learn how we count contributions
          </a>
          <span className="legend">
            Less
            {HEATMAP_COLORS.map((color) => (
              <span key={color} className="gh-cell" style={{ background: color }} />
            ))}
            More
          </span>
        </div>
      </div>
    </Reveal>
  );
}
