import { useReveal } from '../hooks/useReveal'
import ProjectHighlight from './ProjectHighlight'

export default function ExperienceCard({ role }) {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`timeline-node reveal ${visible ? 'reveal-visible' : ''}`}>
      <div className="timeline-marker">
        <span className="timeline-dot" />
        <span className="timeline-line" />
      </div>

      <div className="timeline-content">
        <span className="timeline-period">{role.period}</span>
        <h3 className="timeline-role">{role.role}</h3>
        <p className="timeline-company">
          {role.company} <span className="timeline-location">· {role.location}</span>
        </p>
        <p className="timeline-intro">{role.intro}</p>

        <div className="stack-tags">
          {role.stack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-grid">
          {role.projects.map((project) => (
            <ProjectHighlight key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
