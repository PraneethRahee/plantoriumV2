import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionTag from '../SectionTag/SectionTag'
import './SelectedWork.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { image: '/assets/home/selectedwork1.webp', title: 'Tropical Villa Garden', tags: ['Landscape', '2026'] },
  { image: '/assets/home/selectedwork2.webp', title: 'Private Courtyard Garden', tags: ['Landscape', '2025'] },
  { image: '/assets/home/selectedwork3.webp', title: 'Mature Residential Garden', tags: ['Landscape Design & Maintenance', '2026'] },
  { image: '/assets/home/selectedwork4.webp', title: 'Formal Villa Entrance', tags: ['Landscape Design & Execution', '2026'] },
]

export default function SelectedWork() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.sw-head > *', {
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
      })
      gsap.utils.toArray('.sw-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 85%', once: true },
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="work" className="sw">
      <div className="sw-head">
        <div>
          <SectionTag>SELECTED WORK</SectionTag>
          <h2 className="sw-title">Landscapes designed to live well.</h2>
          <p className="sw-sub">
            Every site has its own light, soil, access and purpose. These are a few we&rsquo;ve
            measured, built and now maintain.
          </p>
        </div>

        <a href="/work" className="sw-btn" data-transition>
          View All
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" />
            <path className="sw-btn-arrow" d="M10.5 8.5 14 12l-3.5 3.5" />
          </svg>
        </a>
      </div>

      <div className="sw-list">
        {projects.map((p) => (
          <article key={p.title} className="sw-card">
            <div className="sw-media">
              <img src={p.image} alt={p.title} width="1760" height="715" loading="lazy" />
            </div>
            <div className="sw-info">
              <h3 className="sw-card-title">{p.title}</h3>
              <ul className="sw-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
