import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './ContactInfo.css'

gsap.registerPlugin(ScrollTrigger)

const PHRASES = ['COCO STUDIO', 'GET IN TOUCH', 'BOOK FREE VISIT', 'PREMIUM SERVICES']

function Sparkle() {
  return (
    <svg className="ci-spark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" fill="currentColor" />
    </svg>
  )
}

function MarqueeSet({ hidden }) {
  return (
    <ul className="ci-set" aria-hidden={hidden ? 'true' : undefined}>
      {PHRASES.map((p) => (
        <li key={p}>
          <span>{p}</span>
          <Sparkle />
        </li>
      ))}
    </ul>
  )
}

export default function ContactInfo() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.ci-card', {
        scrollTrigger: { trigger: '.ci-cards', start: 'top 85%', once: true },
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="ci">
      <div className="ci-marquee" role="presentation">
        <div className="ci-track">
          <MarqueeSet />
          <MarqueeSet hidden />
        </div>
      </div>

      <div className="ci-cards">
        <article className="ci-card">
          <svg className="ci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="m4.500 7.500 7.500 6 7.500-6" />
          </svg>
          <h2 className="ci-title">Email assistance</h2>
          <p className="ci-text">
            Connect with our team for landscaping advice, project details, or general questions.
          </p>
          <ul className="ci-lines">
            <li>
              <span>General Inquiries: </span>
              <a href="mailto:hello@cocostudio.com">hello@cocostudio.com</a>
            </li>
            <li>
              <span>Project Support: </span>
              <a href="mailto:projects@cocostudio.com">projects@cocostudio.com</a>
            </li>
          </ul>
        </article>

        <article className="ci-card">
          <svg className="ci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 4h3l2 5-2.500 1.500a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
          </svg>
          <h2 className="ci-title">Call our team</h2>
          <p className="ci-text">
            Speak with our team for quick guidance, project planning, or service support.
          </p>
          <ul className="ci-lines">
            <li>
              <span>Project Consultation: </span>
              <a href="tel:+919845027364">+91 98450 27364</a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
