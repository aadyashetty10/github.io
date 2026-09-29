import { SKILLS } from '../data.js';
import Reveal from './Reveal.jsx';

export default function TechStack() {
  // The list is doubled so the marquee can loop seamlessly (-50% translate).
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <Reveal id="skills">
      <h2>Tech Stack</h2>
      <div className="stack-marquee">
        <div className="stack-track">
          {doubled.map((skill, i) => (
            <span
              className="chip"
              key={`${skill.name}-${i}`}
              aria-hidden={i >= SKILLS.length ? true : undefined}
            >
              {`${skill.icon} ${skill.name}`}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
