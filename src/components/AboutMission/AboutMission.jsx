import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionTag from '../SectionTag/SectionTag'
import './AboutMission.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { n: '05+', label: 'Years of experience' },
  { n: '04+', label: 'Connected services' },
  { n: '10+', label: 'Projects Completed' },
]

const values = [
  {
    title: 'Thoughtful Design',
    text: 'Every landscape begins with understanding the site, the property and how the space will be used. We design around real conditions, not a standard template.',
  },
  {
    title: 'Honest Advice',
    text: 'We communicate clearly, recommend what the site actually needs and provide costed options that help clients make informed decisions.',
  },
  {
    title: 'Measured Precision',
    text: 'We measure before we plan and price. From quantities and materials to planting and execution, attention to detail shapes every project.',
  },
  {
    title: 'One Accountable Team',
    text: 'Design, execution and maintenance stay connected under one team, so clients always know who is responsible for the work.',
  },
]

export default function AboutMission() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const reveal = (targets, trigger, extra = {}) =>
        gsap.from(targets, {
          scrollTrigger: { trigger, start: 'top 82%', once: true },
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out',
          ...extra,
        })

      reveal('.am-tag', root.current)
      reveal('.am-photo', '.am-top', { delay: 0.1 })
      reveal('.am-mission, .am-stats li', '.am-top', { stagger: 0.12, delay: 0.2 })
      reveal('.am-title, .am-sub', '.am-values', { stagger: 0.12 })
      reveal('.am-grid li', '.am-grid', { stagger: 0.12 })
      reveal('.am-moss', root.current, { y: -30, duration: 1.2 })
      reveal('.am-trunk', '.am-values', { y: 80, duration: 1.3 })
      reveal('.am-flowers', '.am-values', { y: 60, duration: 1.3, delay: 0.2 })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="am">
    <img
      className="am-moss"
      src="/assets/about/top.webp"
      alt=""
      aria-hidden="true"
      width="2048"
      height="697"
      loading="lazy"
    />

      <div className="am-stage">
      <div className="am-inner">
        <div className="am-tag">
          <SectionTag className="section-tag--dark">Our mission &amp; values</SectionTag>
        </div>

        <div className="am-top">
          <figure className="am-photo">
            <img
              src="/assets/about/man.webp"
              alt="A landscaper kneeling in a garden nursery holding a potted shrub"
              width="494"
              height="740"
              loading="lazy"
            />
            <figcaption className="am-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2 4 5.2v6.1c0 5 3.3 9 8 10.7 4.7-1.700 8-5.700 8-10.700V5.200L12 2z" fill="#f5b400" />
                <path d="m8.500 12.200 2.600 2.600 4.600-5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Quality Craftsmanship
            </figcaption>
          </figure>

          <div className="am-lead">
            <p className="am-mission">
              To make professional landscaping simple, accessible, and enjoyable by delivering outdoor
              spaces that are beautiful, sustainable, and easy to care for.
            </p>

            <ul className="am-stats">
              {stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.n}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="am-values">
          <h2 className="am-title">
            Thoughtful landscapes.
            <br />
            Responsible work.
          </h2>
          <p className="am-sub">
            Create a balanced, beautiful outdoor layout with plants, pathways, textures, and features
            that fit your home.
          </p>

          <ul className="am-grid">
            {values.map((v) => (
              <li key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <img
        className="am-flowers"
        src="/assets/about/wildflower-garden.webp"
        alt=""
        aria-hidden="true"
        width="1536"
        height="1024"
        loading="lazy"
      />
      <img
        className="am-trunk"
        src="/assets/about/bottom.webp"
        alt=""
        aria-hidden="true"
        width="1152"
        height="2048"
        loading="lazy"
      />
      </div>
    </section>
  )
}
