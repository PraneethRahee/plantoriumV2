import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './ContactForm.css'

gsap.registerPlugin(ScrollTrigger)

const needs = ['Landscape Design', 'Build & Planting', 'Office Plantscaping', 'Maintenance (AMC)']

export default function ContactForm() {
  const root = useRef(null)
  const [form, setForm] = useState({ name: '', phone: '', area: '', need: '' })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.cf-box', {
        scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: 'power3.out',
      })
      gsap.from('.cf-title, .cf-card', {
        scrollTrigger: { trigger: root.current, start: 'top 70%', once: true },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.2,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = (e) => e.preventDefault()

  return (
    <section ref={root} id="contact" className="cf">
      <div className="cf-box">
        <img
          className="cf-bg"
          src="/assets/contact/garden-tool-pruning.webp"
          alt=""
          aria-hidden="true"
          width="2048"
          height="716"
          loading="lazy"
          decoding="async"
        />
        <div className="cf-shade" />

        <h2 className="cf-title">
          Tell us about your
          <br />
          project
        </h2>

        <div className="cf-cardwrap">
          <form className="cf-card" onSubmit={onSubmit} noValidate>
            <h3 className="cf-card-title">Get In Touch</h3>
            <p className="cf-card-sub">We are here for you! How can we help?</p>

            <input
              className="cf-field"
              type="text"
              name="name"
              placeholder="Enter your name"
              aria-label="Your name"
              autoComplete="name"
              value={form.name}
              onChange={onChange}
            />
            <input
              className="cf-field"
              type="tel"
              name="phone"
              placeholder="Phone"
              aria-label="Phone"
              autoComplete="tel"
              value={form.phone}
              onChange={onChange}
            />
            <input
              className="cf-field"
              type="text"
              name="area"
              placeholder="Area"
              aria-label="Area"
              value={form.area}
              onChange={onChange}
            />
            <div className="cf-select">
              <select
                className="cf-field"
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
              <svg className="cf-caret" viewBox="0 0 10 6" aria-hidden="true">
                <path d="M0 0h10L5 6z" fill="currentColor" />
              </svg>
            </div>

            <button type="submit" className="cf-submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  )
}
