import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './WorkList.css'

gsap.registerPlugin(ScrollTrigger)

const FILTERS = [
  { id: 'all', label: 'ALL' },
  { id: 'design', label: 'LANDSCAPE DESIGN' },
  { id: 'build', label: 'BUILD & PLANTING' },
  { id: 'office', label: 'OFFICE PLANTSCAPINGS' },
  { id: 'maintenance', label: 'MAINTENANCE' },
]

const PROJECTS = [
  {
    title: 'Courtyard, Sarjapura Road',
    text: 'A plain concrete utility yard transformed into a usable sit-out with checkered tile, an L-shaped bench, open-joint paving and planting woven through the hardscape.',
    tags: ['Landscape', '2026'],
    image: '/assets/work/project-courtyard.webp',
    alt: 'Villa entrance with stepping stones set in a lawn',
    service: 'design',
  },
  {
    title: 'Rooftop Garden, Whitefield',
    text: 'A vibrant green space atop an urban building featuring native plants, seating areas, and a small water feature that enhances biodiversity.',
    tags: ['Green Architecture', '2025'],
    image: '/assets/work/project-rooftop.webp',
    alt: 'Courtyard lawn with paving and a small water feature',
    service: 'build',
  },
  {
    title: 'Community Park, HSR Layout',
    text: 'A revitalized community space with walking trails, picnic spots, and a playground, designed to foster social interactions and leisure activities.',
    tags: ['Public Space', '2024'],
    image: '/assets/work/project-community.webp',
    alt: 'Garden with a sculpted tree and stepping stones',
    service: 'design',
  },
  {
    title: 'Botanical Garden, Indiranagar',
    text: 'An educational garden showcasing native flora, interactive exhibits, and a serene pond, aiming to promote environmental awareness and conservation.',
    tags: ['Ecosystem', '2027'],
    image: '/assets/work/project-botanical.webp',
    alt: 'Formal villa entrance with a curved planter and paving',
    service: 'maintenance',
  },
  {
    title: 'Urban Plaza, Koramangala',
    text: 'A bustling urban plaza reimagined with shaded seating, art installations, and open-air markets creating a vibrant atmosphere for community gatherings.',
    tags: ['Civic Design', '2025'],
    image: '/assets/work/project-courtyard.webp',
    alt: 'Villa entrance with stepping stones set in a lawn',
    service: 'build',
  },
]

export default function WorkList() {
  const root = useRef(null)
  const [filter, setFilter] = useState('all')

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.service === filter)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.wl-filters', {
        scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.wl-row').forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: { trigger: row, start: 'top 88%', once: true },
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: 'power3.out',
          delay: i === 0 ? 0.05 : 0,
        })
      })
    }, root)
    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [filter])

  return (
    <section ref={root} className="wl">
      <div className="wl-filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`wl-pill ${filter === f.id ? 'is-active' : ''}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="wl-list">
        {visible.map((p) => (
          <article key={p.title} className="wl-row">
            <div className="wl-media">
              <img src={p.image} alt={p.alt} width="2000" height="1116" loading="lazy" decoding="async" />
            </div>

            <div className="wl-body">
              <h3 className="wl-title">{p.title}</h3>
              <p className="wl-text">{p.text}</p>
              <ul className="wl-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a href="#" className="wl-btn">
                View project
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </article>
        ))}

        {visible.length === 0 && <p className="wl-empty">No projects in this category yet.</p>}
      </div>
    </section>
  )
}
