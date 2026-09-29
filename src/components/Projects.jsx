import { PROJECTS } from '../data.js';
import { hideOnError } from '../utils.js';
import Reveal from './Reveal.jsx';

export default function Projects() {
  return (
    <Reveal id="projects">
      <h2>Projects</h2>
      <div className="exp-list">
        {PROJECTS.map((project) => (
          <div className="exp-item" key={project.title}>
            <div className="exp-header">
              <div>
                <div className="exp-title">{project.title}</div>
                <div className="exp-sub">{project.stack}</div>
              </div>
              <div className="exp-date">{project.dates}</div>
            </div>
            <div className="exp-body">
              <div className="project-thumb" style={{ background: project.thumbBg }}>
                <img src={project.image} alt={project.imageAlt} onError={hideOnError} />
              </div>
              <p className="project-caption">{project.caption}</p>
              {project.description}
              {project.link && (
                <>
                  {' '}
                  <a className="project-link" href={project.link.href} target="_blank" rel="noreferrer">
                    {project.link.label}
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
