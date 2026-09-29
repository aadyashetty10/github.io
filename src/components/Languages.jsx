import { LANGUAGES } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Languages() {
  return (
    <Reveal id="languages" className="languages">
      <h2>Languages</h2>
      <div className="stack-scroll">
        {LANGUAGES.map((lang) => (
          <span className="chip" key={lang.name}>
            {`${lang.flag} ${lang.name}`}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
