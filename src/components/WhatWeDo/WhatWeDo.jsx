import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionTag from '../SectionTag/SectionTag'
import './WhatWeDo.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    n: '01',
    title: 'Landscape Design',
    text: 'Site measurement, layout, planting plan and a readable bill of quantities.',
    icon: '/assets/home/wwd-icon-1.webp',
  },
  {
    n: '02',
    title: 'Build & Planting',
    text: 'Paving, benches, planters, drainage, soil and planting.',
    icon: '/assets/home/wwd-icon-2.webp',
  },
  {
    n: '03',
    title: 'Office Plantscaping',
    text: 'Indoor greenery designed specifically around Bengaluru office conditions.',
    icon: '/assets/home/wwd-icon-3.webp',
  },
  {
    n: '04',
    title: 'Maintenance (AMC)',
    text: 'Scheduled visits and written reports so clients know what was done and what needs attention.',
    icon: '/assets/home/wwd-icon-4.webp',
  },
]

export default function WhatWeDo({
  tag = 'WHAT WE DO',
  title = 'Four things, in the order they usually happen.',
  aside = 'Most clients come to us for one of these and stay for the rest.',
  variant = 'home',
}) {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.wwd-head > *', {
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
      })
      gsap.from('.wwd-item', {
        scrollTrigger: { trigger: '.wwd-grid', start: 'top 80%', once: true },
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
      })
      gsap.fromTo(
        '.wwd-hang',
        { rotation: -3.5 },
        {
          rotation: 3.5,
          duration: 2.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          scrollTrigger: {
            trigger: root.current,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play pause resume pause',
          },
        },
      )
      gsap.from('.wwd-rocks', {
        scrollTrigger: { trigger: '.wwd-grid', start: 'top 70%', once: true },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id={variant === 'home' ? 'services' : undefined} className={`wwd wwd--${variant}`}>
      {variant === 'services' && (
        <img
          src="/assets/home/ourapproach1backdrop.webp"
          alt=""
          aria-hidden="true"
          className="wwd-hang"
          loading="lazy"
        />
      )}

      <div className="wwd-head">
        <div>
          <SectionTag>{tag}</SectionTag>
          <h2 className="wwd-title">{title}</h2>
        </div>
        <p className="wwd-aside">{aside}</p>
      </div>

      <div className="wwd-grid">
        {services.map((s) => (
          <div key={s.n} className="wwd-item">
            <article className="wwd-card">
              <img className="wwd-icon" src={s.icon} alt="" aria-hidden="true" width="48" height="48" loading="lazy" decoding="async" />
              <h3 className="wwd-card-title">{s.title}</h3>
              <p className="wwd-card-text">{s.text}</p>
              <span className="wwd-num" aria-hidden="true">{s.n}</span>
            </article>
          </div>
        ))}
      </div>

      <img
        src="/assets/home/whatwedo.webp"
        alt=""
        className="wwd-rocks"
        loading="lazy"
        aria-hidden="true"
      />
    </section>
  )
}
