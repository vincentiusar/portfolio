export default function ProjectHighlight({ project }) {
  return (
    <div className="project">
      <h4 className="project-name">{project.name}</h4>
      <p className="project-summary">{project.summary}</p>
      <ul className="project-bullets">
        {project.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
