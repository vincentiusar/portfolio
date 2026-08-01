import { experience } from '../data/profile'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-eyebrow">Experience</p>
      <div className="timeline">
        {experience.map((role) => (
          <ExperienceCard key={role.company} role={role} />
        ))}
      </div>
    </section>
  )
}
