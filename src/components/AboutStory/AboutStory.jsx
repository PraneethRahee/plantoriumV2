import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionTag from '../SectionTag/SectionTag'
import './AboutStory.css'

gsap.registerPlugin(ScrollTrigger)

export default function AboutStory() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.as-inner > *', {
        scrollTrigger: { trigger: root.current, start: 'top 80%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="as">
      <div className="as-inner">
        <SectionTag>OUR STORY</SectionTag>
        <p className="as-text">
          We Are A Passionate Landscaping Team Dedicated To Transforming Outdoor Spaces Into
          Beautiful, Functional Environments. With 13 Years of Experience And A Strong Eye For
          Detail, We Help Homeowners Stunning Landscapes That Enhance Both Lifestyle And Property
          Value.
        </p>
      </div>
    </section>
  )
}
