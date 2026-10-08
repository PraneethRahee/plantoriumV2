import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out', duration: 1 } })
        .from('.hero-eyebrow', { opacity: 0, y: 16 })
        .from('.hero-title', { opacity: 0, y: 40 }, '-=0.7')
        .from('.hero-sub', { opacity: 0, y: 24 }, '-=0.7')
        .from('.hero-actions > *', { opacity: 0, y: 20, stagger: 0.1 }, '-=0.7')
        .from('.hero-points > *', { opacity: 0, y: 14, stagger: 0.1 }, '-=0.7')
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={root} className="hero">
      <video
        className="hero-media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/home-poster.webp"
        aria-hidden="true"
      >
        <source src="/videos/home.webm" type="video/webm" />
      </video>
      <div className="hero-shade" />

      <div className="hero-inner">
        <p className="hero-eyebrow">
          <span className="dot" />
          Landscape Consultancy · Bengaluru
        </p>

        <h1 className="hero-title">One team. Every stage.</h1>

        <p className="hero-sub">
          From the first conversation to long-term maintenance, Coco Studio takes responsibility for
          the landscape as a whole.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-solid">Book a site visit</a>
          <a href="tel:+919845027364" className="btn-light">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              <path d="M15 3a6 6 0 0 1 6 6M15 7a2 2 0 0 1 2 2" />
            </svg>
            +91 98450 27364
          </a>
        </div>

        <ul className="hero-points">
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
            </svg>
            10+ years building gardens in Bengaluru
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4" y="5" width="16" height="16" rx="3" />
              <path d="M8 3v4M16 3v4M4 10h16" />
            </svg>
            Free site visit and written brief
          </li>
        </ul>
      </div>
    </section>
  )
}
