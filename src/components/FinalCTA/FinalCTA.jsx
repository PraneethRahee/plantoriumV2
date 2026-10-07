import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CloverMark from '../Logo/CloverMark'
import './FinalCTA.css'

gsap.registerPlugin(ScrollTrigger)

const needs = [
  'Landscape Design',
  'Build & Planting',
  'Office Plantscaping',
  'Maintenance (AMC)',
]

export default function FinalCTA() {
  const root = useRef(null)
  const [form, setForm] = useState({ name: '', phone: '', area: '', need: '' })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-mark',
        { yPercent: 105, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top 65%', end: 'top 12%', scrub: true },
        },
      )
      gsap.from('.cta-copy > *', {
        scrollTrigger: { trigger: root.current, start: 'top 60%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
      })
      gsap.from('.cta-card', {
        scrollTrigger: { trigger: root.current, start: 'top 60%', once: true },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = (e) => e.preventDefault()

  return (
    <section ref={root} id="contact" className="cta">
      <div className="cta-scene" aria-hidden="true">
        <CloverMark className="cta-mark" />
        <img
          src="/assets/home/last.webp"
          alt=""
          className="cta-bg"
          width="1920"
          height="1216"
          loading="lazy"
        />
      </div>

      <div className="cta-inner">
        <div className="cta-copy">
          <h2 className="cta-title">You bring the vision. We handle the landscape.</h2>
          <p className="cta-text">
            Consulting, design, execution and maintenance — connected from the first site visit to
            long-term care.
          </p>
          <a href="#contact" className="cta-btn">Book a site visit</a>
        </div>

        <div className="cta-cardwrap">
          <form className="cta-card" onSubmit={onSubmit} noValidate>
            <h3 className="cta-card-title">Get In Touch</h3>
            <p className="cta-card-sub">We are here for you! How can we help?</p>

            <input
              className="cta-field"
              type="text"
              name="name"
              placeholder="Enter your name"
              aria-label="Your name"
              autoComplete="name"
              value={form.name}
              onChange={onChange}
            />
            <input
              className="cta-field"
              type="tel"
              name="phone"
              placeholder="Phone"
              aria-label="Phone"
              autoComplete="tel"
              value={form.phone}
              onChange={onChange}
            />
            <input
              className="cta-field"
              type="text"
              name="area"
              placeholder="Area"
              aria-label="Area"
              value={form.area}
              onChange={onChange}
            />
            <div className="cta-select">
              <select
                className="cta-field"
                name="need"
                aria-label="What you need"
                value={form.need}
                onChange={onChange}
                data-empty={form.need === ''}
              >
                <option value="">What you need ?</option>
                {needs.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <svg className="cta-caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                <path d="M0 0h10L5 6z" fill="currentColor" />
              </svg>
            </div>

            <button type="submit" className="cta-submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  )
}
