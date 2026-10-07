import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionTag from '../SectionTag/SectionTag'
import './WhyCoco.css'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    n: '01',
    title: 'One accountable team',
    text: 'Consulting, design, execution and maintenance stay under one team. No passing responsibility between vendors, and no gap where a problem becomes nobody’s job.',
    cls: 'wc-card-1',
  },
  {
    n: '02',
    title: 'Measured, then quoted',
    text: 'We measure on site before we price. Drawings are optimistic and estimates built on them go wrong in one direction — yours. You get quantities, rates and three costed options.',
    cls: 'wc-card-2',
  },
  {
    n: '03',
    title: 'Built to last',
    text: 'Our relationship doesn’t end at handover. Maintenance is part of the process, which means the plants we specify are the ones we will have to keep alive.',
    cls: 'wc-card-3',
  },
]

export default function WhyCoco() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.wc-head > *', {
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
      })
      gsap.from('.wc-photo, .wc-card', {
        scrollTrigger: { trigger: '.wc-grid', start: 'top 80%', once: true },
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
      })
      gsap.from('.wc-moss', {
        scrollTrigger: { trigger: '.wc-grid', start: 'top 70%', once: true },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="wc">
      <div className="wc-head">
        <div>
          <SectionTag>WHY COCO</SectionTag>
          <h2 className="wc-title">The difference is responsibility.</h2>
        </div>
        <p className="wc-aside">
          We don&rsquo;t just design and build landscapes. We stay responsible for how they perform
          over time.
        </p>
      </div>

      <div className="wc-gridwrap"><div className="wc-grid">
        <div className="wc-photo">
          <img
            src="/assets/home/mycoco2.webp"
            alt="Foliage beds and a paved path along a white garden wall"
            loading="lazy"
          />
        </div>
        <div className="wc-panel" aria-hidden="true" />

        {cards.map((c) => (
          <article key={c.n} className={`wc-card ${c.cls}`}>
            <span className="wc-num">{c.n}</span>
            <h3 className="wc-card-title">{c.title}</h3>
            <p className="wc-card-text">{c.text}</p>
            {c.n === '01' && (
              <img
                src="/assets/home/mycoco1.webp"
                alt=""
                aria-hidden="true"
                className="wc-moss"
                loading="lazy"
              />
            )}
          </article>
        ))}
      </div></div>
    </section>
  )
}
