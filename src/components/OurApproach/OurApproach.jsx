import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionTag from '../SectionTag/SectionTag'
import './OurApproach.css'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    n: '01',
    title: 'Understand',
    icon: '/assets/home/ourapproachlogo1.webp',
    text: 'We start with the site — light through the day, drainage, access, soil — and with what you actually want the space to do.',
  },
  {
    n: '02',
    title: 'Plan',
    icon: '/assets/home/ourapproachlogo2.webp',
    text: 'We design around the specific conditions of the site, then cost it properly. You see the quantities and the rates, not just a total.',
  },
  {
    n: '03',
    title: 'Build',
    icon: '/assets/home/ourapproachlogo3.webp',
    text: 'We coordinate execution with our own vendors and supervise on site, so what gets built is what was drawn.',
  },
  {
    n: '04',
    title: 'Maintain',
    icon: '/assets/home/ourapproachlogo4.webp',
    text: 'We keep looking after it. Scheduled visits, written reports, and plants that are healthier in year three than at handover.',
  },
]

function Step({ s }) {
  return (
    <div className="oa-item oa-card-wrap">
      <article className="oa-card">
        <div className="oa-card-in">
          <img className="oa-icon" src={s.icon} alt="" aria-hidden="true" />
          <h3 className="oa-card-title">{s.title}</h3>
          <p className="oa-card-text">{s.text}</p>
        </div>
        <span className="oa-num" aria-hidden="true">{s.n}</span>
      </article>
    </div>
  )
}

function Photo({ src, alt, className = '' }) {
  return (
    <div className={`oa-item oa-photo ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

export default function OurApproach() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.oa-head > *', {
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
      })
      gsap.utils.toArray('.oa-row').forEach((row) => {
        gsap.from(row.querySelectorAll('.oa-item'), {
          scrollTrigger: { trigger: row, start: 'top 85%', once: true },
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
        })
      })
      gsap.fromTo(
        '.oa-hang',
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
      gsap.from('.oa-closing', {
        scrollTrigger: { trigger: '.oa-closing', start: 'top 92%', once: true },
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="oa">
      <img src="/assets/home/ourapproach1backdrop.webp" alt="" aria-hidden="true" className="oa-hang" loading="lazy" />

      <div className="oa-head">
        <div>
          <SectionTag>OUR APPROACH</SectionTag>
          <h2 className="oa-title">From first conversation to long-term care.</h2>
        </div>
        <p className="oa-aside">
          We stay involved at every stage, so the landscape remains one continuous responsibility
          rather than four separate handovers.
        </p>
      </div>

      <div className="oa-row oa-row-a">
        <Step s={steps[0]} />
        <Step s={steps[1]} />
        <Photo src="/assets/home/ourapproach1.webp" alt="Banana palms and a clipped hedge beside a lawn" className="oa-photo-a" />
      </div>

      <div className="oa-row oa-row-b">
        <Photo src="/assets/home/ourapproach2.webp" alt="A garden path through lawn and flower beds" className="oa-photo-b" />
        <Step s={steps[2]} />
        <Step s={steps[3]} />
      </div>

      <div className="oa-closing">
        <p>One continuous process. One accountable team.</p>
        <img src="/assets/home/sign.webp" alt="" aria-hidden="true" />
      </div>
    </section>
  )
}
