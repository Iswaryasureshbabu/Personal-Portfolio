import { useEffect, useState } from 'react'
import { nav, profile } from '../data'
import { asset, Sun, Moon, Menu, Download } from './ui.jsx'

export default function Header({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    els.forEach((el) => io.observe(el))
    const onScroll = () => { const h = document.documentElement; setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) }
    onScroll(); addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#home" className="logo" aria-label="Iswarya S, home">ISWARYA S</a>
          <nav aria-label="Primary">
            <ul className="links">
              {nav.map((n) => <li key={n.id}><a href={`#${n.id}`} className={active === n.id ? 'active' : ''} aria-current={active === n.id ? 'true' : undefined}>{n.label}</a></li>)}
            </ul>
          </nav>
          <div className="actions">
            <a className="btn btn-primary btn-sm" href={asset(profile.resume)} download="Iswarya_S_Resume.pdf"><Download /><span>Resume</span></a>
            <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Moon /> : <Sun />}</button>
            <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu"><Menu open={open} /></button>
          </div>
        </div>
        <div id="mobile-menu" className={`menu ${open ? 'open' : ''}`}>
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>)}
        </div>
      </header>
    </>
  )
}
