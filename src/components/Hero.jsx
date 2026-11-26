import { useRef, useState } from 'react'
import { profile } from '../data'
import { asset, Download, Linkedin, Github, Upload, Reset } from './ui.jsx'

const PHOTO_KEY = 'portfolio-photo'
const MAX_PHOTO_BYTES = 1.5 * 1024 * 1024

const storedPhoto = () => {
  try { return localStorage.getItem(PHOTO_KEY) || '' } catch { return '' }
}

export default function Hero() {
  const [customPhoto, setCustomPhoto] = useState(storedPhoto)
  const [photoOk, setPhotoOk] = useState(true)
  const [photoMsg, setPhotoMsg] = useState('')
  const fileRef = useRef(null)
  const photoSrc = customPhoto || asset(profile.photo)

  const clearStoredPhoto = () => {
    try { localStorage.removeItem(PHOTO_KEY) } catch { /* storage unavailable */ }
  }

  const pickPhoto = (e) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    if (!/^image\/(png|jpe?g|webp)$/i.test(file.type)) {
      setPhotoMsg('Choose a JPG, PNG or WebP image.')
      return
    }
    if (file.size > MAX_PHOTO_BYTES) {
      setPhotoMsg('Choose an image smaller than 1.5 MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const url = String(reader.result)
      setCustomPhoto(url)
      setPhotoOk(true)
      try {
        localStorage.setItem(PHOTO_KEY, url)
        setPhotoMsg('Photo updated in this browser.')
      } catch {
        setPhotoMsg('Photo updated for this visit. The file is too large to save permanently.')
      }
    }
    reader.onerror = () => setPhotoMsg('That image could not be read. Try another file.')
    reader.readAsDataURL(file)
  }

  const resetPhoto = () => {
    clearStoredPhoto()
    setCustomPhoto('')
    setPhotoOk(true)
    setPhotoMsg('Default photo restored.')
  }

  const photoFailed = () => {
    if (customPhoto) {
      clearStoredPhoto()
      setCustomPhoto('')
      setPhotoMsg('The saved photo could not be loaded. Showing the default photo.')
    } else {
      setPhotoOk(false)
    }
  }

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div>
          <span className="status mono"><i className="dot" />Open to software development internships &amp; entry-level roles</span>
          <span className="hello mono">HELLO, I'M</span>
          <h1>{profile.name}</h1>
          <p className="role">{profile.title}</p>
          <p className="role-sub mono">{profile.subtitle}</p>
          <p className="intro">{profile.intro}</p>
          <div className="cta">
            <a className="btn btn-primary" href={asset(profile.resume)} download="Iswarya_S_Resume.pdf"><Download />Download Resume</a>
            <a className="btn btn-ghost" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
          </div>
          <div className="hero-links">
            <div className="socials" aria-label="Professional profiles">
              <a className="social" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><Linkedin /></a>
              <a className="social" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub"><Github size={18} /></a>
            </div>
            <div className="meta mono">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </div>
        
<figure className="profile-photo">
  <div className="photo-frame">
   <img
  src={`${import.meta.env.BASE_URL}profile.jpg`}
  alt="Iswarya S"
  className="profile-image"
/>
  </div>

  <figcaption className="photo-cap mono">
    <span>Iswarya S</span>
    <span>{profile.location.split(',')[0]}</span>
  </figcaption>
</figure>

      </div>
    </section>
  )
}
