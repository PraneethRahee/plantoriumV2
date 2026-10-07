import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionTag from '../SectionTag/SectionTag'
import './WhyWeWork.css'

gsap.registerPlugin(ScrollTrigger)

export default function WhyWeWork() {
  const root = useRef(null)
  const [pos, setPos] = useState(50)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.www-reveal', {
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="about" className="www">
      <div className="www-inner">
        <div className="www-copy">
          <SectionTag className="www-reveal">WHY WE WORK DIFFERENTLY</SectionTag>

          <h2 className="www-title www-reveal">
            When everyone is responsible, no one really is.
          </h2>

          <p className="www-text www-reveal">
            Designers design. Contractors build. Someone else maintains. And when a plant dies or a
            drain blocks, the responsibility moves with the handover — usually to whoever answers the
            phone last.
          </p>
          <p className="www-text www-strong www-reveal">
            Coco Studio keeps the whole chain connected. Consulting, design, execution and
            maintenance sit with one team, so nobody has to work out whose problem it is.
          </p>

          <p className="www-pill www-reveal">
            One team. One responsibility. A landscape that stays handled.
          </p>
        </div>

        <div className="www-compare www-reveal" style={{ '--pos': `${pos}%` }}>
          <img
            src="/assets/home/whywework2.webp"
            alt="Landscape after Coco Studio's work"
            className="www-img"
            loading="lazy"
            draggable="false"
          />
          <img
            src="/assets/home/whywework1.webp"
            alt="Landscape before Coco Studio's work"
            className="www-img www-before"
            loading="lazy"
            draggable="false"
          />

          <span className="www-label www-label-l">Before</span>
          <span className="www-label www-label-r">After</span>

          <span className="www-divider" aria-hidden="true">
            <span className="www-handle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12m0-1.5v-2a1.5 1.5 0 0 1 3 0V12m0-2.5a1.5 1.5 0 0 1 3 0V14c0 4-2.5 6-5.5 6S6 18 5 15.5l-1.4-3.6a1.5 1.5 0 0 1 2.6-1.3L8 13" />
              </svg>
            </span>
          </span>

          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="www-range"
            aria-label="Compare before and after"
          />
        </div>
      </div>
    </section>
  )
}
