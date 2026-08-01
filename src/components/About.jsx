import { about } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="section">
      <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''}`}>
        <p className="section-eyebrow">About</p>
        <p className="about-text">{about}</p>
      </div>
    </section>
  )
}
