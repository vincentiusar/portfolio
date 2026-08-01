import { profile } from '../data/profile'
import { MailIcon, PhoneIcon, LinkedInIcon, GithubIcon, ArrowUpRightIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <h3 className="footer-heading">Let's build something reliable.</h3>
        <p className="footer-sub">
          Open to conversations about platform engineering, developer tooling, and test infrastructure.
        </p>
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <MailIcon /> {profile.email}
        </a>
      </div>

      <div className="footer-links">
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
          <PhoneIcon width={15} height={15} /> {profile.phone}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon width={15} height={15} /> LinkedIn <ArrowUpRightIcon width={13} height={13} />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <GithubIcon width={15} height={15} /> GitHub <ArrowUpRightIcon width={13} height={13} />
        </a>
      </div>

      <p className="footer-copy">
        {profile.name} · {profile.location} · Built with React & Vite
      </p>
    </footer>
  )
}
