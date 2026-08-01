import { skills } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="section">
      <p className="section-eyebrow">Skills</p>
      <div ref={ref} className={`skills-grid reveal ${visible ? 'reveal-visible' : ''}`}>
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h4 className="skill-category">{group.category}</h4>
            <div className="stack-tags">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
