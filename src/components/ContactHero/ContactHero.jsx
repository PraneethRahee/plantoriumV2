import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './ContactHero.css'

export default function ContactHero() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.ch-title', { opacity: 0, y: 40, duration: 1 }, 0.1)
        .from('.ch-trees', { opacity: 0, y: 80, duration: 1.4 }, 0.2)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="ch">
      <h1 className="ch-title">
        Let&rsquo;s create your
        <br />
        dream landscape
      </h1>

      <img
        className="ch-trees"
        src="/assets/contact/hero.webp"
        alt=""
        aria-hidden="true"
        width="1949"
        height="807"
        fetchpriority="high"
        decoding="async"
      />
    </section>
  )
}
