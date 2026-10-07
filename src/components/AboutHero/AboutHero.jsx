import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './AboutHero.css'

export default function AboutHero() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.ah-title', { opacity: 0, y: 40, duration: 1 }, 0.1)
        .from('.ah-actions > *', { opacity: 0, y: 24, duration: 0.8, stagger: 0.1 }, 0.35)
        .from('.ah-media', { opacity: 0, y: 60, duration: 1.2 }, 0.45)
        .from('.ah-media img', { scale: 1.12, duration: 1.8, ease: 'power2.out' }, 0.45)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="ah">
      <h1 className="ah-title">
        Maintain outdoor spaces
        <br />
        feel beautiful every day
      </h1>

      <div className="ah-actions">
        <a href="/contact" className="ah-btn ah-btn-solid" data-transition>
          Get a free quote
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12h15M13 6l6 6-6 6" />
          </svg>
        </a>
        <a href="/services" className="ah-btn ah-btn-light" data-transition>
          Explore Services
        </a>
      </div>

      <div className="ah-media">
        <img
          src="/assets/about/hero.webp"
          alt="A rose-covered stone archway opening onto a garden path and wooden gate"
          width="2048"
          height="1147"
          fetchpriority="high"
          decoding="async"
        />
      </div>
    </section>
  )
}
