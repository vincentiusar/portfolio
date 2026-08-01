import { education } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const [ref, visible] = useReveal()

  return (
    <section id="education" className="section">
      <p className="section-eyebrow">Education</p>
      <div ref={ref} className={`edu-card reveal ${visible ? 'reveal-visible' : ''}`}>
        <div className="edu-head">
          <div>
            <h3 className="edu-degree">{education.degree}</h3>
            <p className="edu-school">{education.school}</p>
          </div>
          <div className="edu-gpa">
            <span className="edu-gpa-number">{education.gpa}</span>
            <span className="edu-gpa-label">GPA · {education.graduation}</span>
          </div>
        </div>

        <div className="edu-body">
          <div>
            <h4 className="edu-subhead">Coursework</h4>
            <div className="stack-tags">
              {education.courses.map((course) => (
                <span key={course} className="tag">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="edu-subhead">Activities</h4>
            <ul className="edu-activities">
              {education.activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
