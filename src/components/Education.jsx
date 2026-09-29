import { EDUCATION } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Education() {
  return (
    <Reveal id="education">
      <h2>Education</h2>
      <div className="exp-list">
        {EDUCATION.map((item) => (
          <div className="edu-item" key={item.school}>
            <div>
              <div className="exp-title">{item.school}</div>
              <div className="exp-sub">{item.degree}</div>
            </div>
            <div className="exp-date">
              {item.years}
              <br />
              <span className="edu-score">{item.score}</span>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
