import { EMAIL } from '../data.js';

// The call-to-action below the main card.
export default function Closing() {
  return (
    <div className="cta">
      <h2>
        Have an idea?
        <br />
        Let's build something together.
      </h2>
      <a className="btn btn-dark" href={`mailto:${EMAIL}`}>
        Let's Talk →
      </a>
      <div className="made-with">Made with 💗 by Aadya Shetty</div>
    </div>
  );
}
