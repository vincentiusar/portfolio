import { awards } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

export default function Awards() {
  const [ref, visible] = useReveal()

  return (
    <section id="awards" className="section">
      <p className="section-eyebrow">Awards & Competitions</p>
      <div ref={ref} className={`awards-grid reveal ${visible ? 'reveal-visible' : ''}`}>
        {awards.map((award) => (
          <div key={award.title} className="award-card">
            <span className="award-date">{award.date}</span>
            <h4 className="award-title">{award.title}</h4>
            <p className="award-org">{award.org}</p>
            <p className="award-detail">{award.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
