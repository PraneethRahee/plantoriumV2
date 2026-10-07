import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionTag from '../SectionTag/SectionTag'
import './WorkIntro.css'

gsap.registerPlugin(ScrollTrigger)

export default function WorkIntro() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.wi-copy > *', {
        scrollTrigger: { trigger: root.current, start: 'top 80%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
      })
      gsap.from('.wi-media', {
        scrollTrigger: { trigger: root.current, start: 'top 80%', once: true },
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.15,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="wi">
      <div className="wi-copy">
        <SectionTag>SELECTED WORK</SectionTag>
        <h2 className="wi-title">Our work in Bengaluru</h2>
        <p className="wi-text">
          Gardens, courtyards, terraces and office interiors we&rsquo;ve measured, built and now look
          after. Each project shows what was actually built because the details behind a landscape
          matter as much as the finished space.
        </p>
      </div>

      <div className="wi-media">
        <img
          src="/assets/work/work-intro.webp"
          alt="Banana palms behind a clipped hedge beside a lawn"
          width="1376"
          height="768"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
