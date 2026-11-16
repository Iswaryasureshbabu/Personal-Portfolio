import { useState } from 'react'
import { profile } from '../data'
import { Section, Reveal } from './ui.jsx'

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '' })
  const [errs, setErrs] = useState({})
  const [status, setStatus] = useState(null)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (v.name.trim().length < 2) er.name = 'Enter your name (at least 2 characters).'
    if (!emailRx.test(v.email.trim())) er.email = 'Enter a valid email address, like name@example.com.'
    if (v.subject.trim().length < 3) er.subject = 'Enter a subject (at least 3 characters).'
    if (v.message.trim().length < 10) er.message = 'Write a message of at least 10 characters.'
    setErrs(er)
    if (Object.keys(er).length) { setStatus({ ok: false, text: 'Fix the highlighted fields and try again.' }); return }
    const body = `${v.message.trim()}\n\n— ${v.name.trim()} (${v.email.trim()})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject.trim())}&body=${encodeURIComponent(body)}`
    setStatus({ ok: true, text: 'Your email app should open with the message filled in. Press send there to deliver it.' })
  }

  const F = ({ k, label, type = 'text', area }) => {
    const P = area ? 'textarea' : 'input'
    return (
      <div className="field">
        <label htmlFor={k}>{label}</label>
        <P id={k} name={k} type={area ? undefined : type} rows={area ? 5 : undefined} value={v[k]} onChange={set(k)} aria-invalid={!!errs[k]} aria-describedby={`${k}-e`} autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : 'off'} />
        <span className="err" id={`${k}-e`} role="alert">{errs[k]}</span>
      </div>
    )
  }

  return (
    <Section id="contact" alt title="Let's build something great together">
      <div className="contact-grid">
        <Reveal>
          <p className="sub" style={{ marginBottom: 0 }}>Open to software development internships and entry-level roles, with UI/UX as an added strength. Email is the fastest way to reach me.</p>
          <ul className="contact-list">
            <li><span className="mono">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span className="mono">Phone</span><a href={profile.phoneHref}>{profile.phone}</a></li>
            <li><span className="mono">Location</span><span>{profile.location}</span></li>
            <li><span className="mono">LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/iswaryas0805</a></li>
            <li><span className="mono">GitHub</span><a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/Iswaryasureshbabu</a></li>
          </ul>
        </Reveal>
        <Reveal className="card">
          <form onSubmit={submit} noValidate>
            <F k="name" label="Name" /><F k="email" label="Email" type="email" /><F k="subject" label="Subject" /><F k="message" label="Message" area />
            <button className="btn btn-primary" type="submit" style={{ justifySelf: 'start' }}>Send via email app</button>
            {status && <p className={`note ${status.ok ? 'ok' : ''}`} role="status">{status.text}</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
