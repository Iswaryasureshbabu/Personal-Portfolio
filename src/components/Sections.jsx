import { useState } from 'react'
import { about, education, skills, projects, projectFilters, experience, certs } from '../data'
import { Section, Reveal, Chips, asset, Github, ExternalLink, Award, Code, Database, Layout, Pen, Chip, Tools } from './ui.jsx'

const skillIcons = { code: Code, database: Database, layout: Layout, pen: Pen, chip: Chip, tools: Tools }

export const About = () => (
  <Section id="about" alt title="Software development, grounded in design" sub="A Computer Science Engineering student building a strong foundation for a career in software development.">
    <div className="about-grid">
      <Reveal><p>{about.text}</p></Reveal>
      <Reveal as="ul" className="strengths">{about.strengths.map((s) => <li key={s}>{s}</li>)}</Reveal>
    </div>
  </Section>
)

export const Education = () => (
  <Section id="education" title="Education" sub="Academic foundation in computer science and engineering.">
    <ol className="timeline">
      {education.map((e) => (
        <Reveal as="li" key={e.school}>
          <div className="card edu-card">
            <div className="tl-top"><h3>{e.school}</h3><span className="chip">{e.years}</span></div>
            <p className="where mono">{e.degree}</p>
            <div className="edu-meta">
              <span className="edu-score">{e.score}</span>
              {e.note && <span className="mono edu-note">{e.note}</span>}
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  </Section>
)

export const Skills = () => (
  <Section id="skills" alt title="Technical skills" sub="The foundations, tools and practices I use to build and design software.">
    <div className="grid skills-grid">
      {skills.map((s) => {
        const Icon = skillIcons[s.icon]
        return (
          <Reveal key={s.category} className="card skill-card">
            <div className="skill-head"><span className="skill-icon"><Icon /></span><h3>{s.category}</h3></div>
            <Chips items={s.items} />
          </Reveal>
        )
      })}
    </div>
  </Section>
)

export const Experience = () => (
  <Section id="experience" title="Experience" sub="Hands-on experience applying user-centered design to digital products.">
    <ol className="timeline">
      {experience.map((x) => (
        <Reveal as="li" key={x.org}>
          <div className="card">
            <div className="tl-top"><h3>{x.role}</h3><span className="chip">{x.meta}</span></div>
            <p className="where mono">{x.org}</p>
            <ul>{x.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
          </div>
        </Reveal>
      ))}
    </ol>
  </Section>
)

export const Projects = () => {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="projects" alt title="Projects" sub="A selection of academic and personal work across web development, full-stack engineering and UI/UX.">
      <div className="proj-toolbar">
        <div className="filters" role="group" aria-label="Filter projects by category">
          {projectFilters.map((f) => (
            <button key={f} type="button" className={`filter ${filter === f ? 'active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <span className="proj-count mono" aria-live="polite">{shown.length} of {projects.length} projects</span>
      </div>
      <div className="grid proj-grid">
        {shown.map((p) => (
          <Reveal as="article" key={p.id} className="card proj">
            <div className={`proj-media ${p.image ? '' : 'no-image'}`}>
              {p.image && <img src={asset(p.image)} alt={p.imageAlt || `${p.title} preview`} loading="lazy" width="1200" height="750" onError={(e) => { e.currentTarget.style.display = 'none' }} />}
              <span className="proj-fallback mono" aria-hidden="true">{p.title}</span>
              <span className="proj-cat mono">{p.category}</span>
            </div>
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              {p.note && <p className="proj-note mono">{p.note}</p>}
              <Chips items={p.tech} />
              <div className="proj-actions">
                {p.demo && <a className="btn btn-primary btn-sm" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink />View Project</a>}
                <a className={`btn btn-sm ${p.demo ? 'btn-ghost' : 'btn-primary'}`} href={p.github} target="_blank" rel="noopener noreferrer"><Github />GitHub</a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export const Certifications = () => (
  <Section id="certifications" title="Certifications" sub="Certifications in programming and UI/UX design.">
    <div className="grid cert-grid">
      {certs.map((c) => (
        <Reveal key={c.org + c.name} className="card cert">
          <div className="cert-top"><span className="cert-icon"><Award /></span><span className="mono">{c.org}</span></div>
          <strong>{c.name}</strong>
          <p className="cert-detail">{c.detail}</p>
          {(c.score || c.image || c.link) && (
            <div className="cert-foot">
              {c.score && <span className="cert-score">{c.score}</span>}
              {c.image && <img src={asset(c.image)} alt={`${c.name} certificate`} loading="lazy" />}
              {c.link && <a className="mono cert-link" href={c.link} target="_blank" rel="noopener noreferrer">Verify certificate <ExternalLink /></a>}
            </div>
          )}
        </Reveal>
      ))}
    </div>
  </Section>
)
