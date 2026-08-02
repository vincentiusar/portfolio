import { events } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
import EventCard from './EventCard'

export default function Events() {
  const [ref, visible] = useReveal()

  return (
    <section id="highlights" className="section">
      <p className="section-eyebrow">Highlights</p>
      <p className="events-intro">
        A few moments worth a photo. Click any placeholder below to add your own — it's saved locally in your
        browser so it's ready whenever you come back to edit this page.
      </p>
      <div ref={ref} className={`events-grid reveal ${visible ? 'reveal-visible' : ''}`}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}
