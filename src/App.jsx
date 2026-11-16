import { useEffect, useState } from 'react'
import { profile } from './data'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'
import { About, Education, Skills, Projects, Experience, Certifications } from './components/Sections.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#09090b' : '#F6FAFD')
  }, [theme])

  return (
    <>
      <Header theme={theme} toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero /><About /><Education /><Skills /><Experience /><Projects /><Certifications /><Contact />
      </main>
      <footer>
        <div className="wrap">
          <div className="foot">
            <div><strong style={{ font: '700 20px var(--f-head)' }}>{profile.name}</strong><p>{profile.tagline}</p></div>
            <div className="links2 mono">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>
          <p className="copy mono">© {new Date().getFullYear()} Iswarya S. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
