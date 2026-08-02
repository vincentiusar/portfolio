import { profile } from '../data/profile'
import { MailIcon, PhoneIcon, LinkedInIcon, GithubIcon } from './Icons'
import DeviceFarmGrid from './DeviceFarmGrid'
import ProfilePhoto from './ProfilePhoto'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <ProfilePhoto initials="VF" />
        <p className="eyebrow">{profile.role} — {profile.team}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-meta">
          <span className="status-pill">
            <span className="dot dot-online" />
            {profile.status}
          </span>
          <span className="hero-location">{profile.location}</span>
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <MailIcon /> Say hello
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
        </div>

        <div className="hero-contact">
          <a href={`mailto:${profile.email}`}>
            <MailIcon width={15} height={15} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            <PhoneIcon width={15} height={15} /> {profile.phone}
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <DeviceFarmGrid />
      </div>
    </section>
  )
}
