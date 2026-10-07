import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SectionTag from '../SectionTag/SectionTag'
import './SelectedSpaces.css'

gsap.registerPlugin(ScrollTrigger)

const spaces = [
  { src: '/assets/home/space1.webp', alt: 'Pergola, boulder and flowering shrubs beside a cobbled drive' },
  { src: '/assets/home/space2.webp', alt: 'Lawn with stepping stones, a cycad and a feature boulder' },
  { src: '/assets/home/space3.webp', alt: 'Frangipani tree and round stepping stones against a stone wall' },
  { src: '/assets/home/space4.webp', alt: 'Deck, paving and gravel garden under a teal umbrella' },
]

// two copies of the four photos so the strip can wrap without a gap
const tiles = [...spaces, ...spaces]

const CURVE_BASE = 428 / 523
const CURVE_RISE = 88 / 523
const CENTER_Y = 258.5 / 523
const SPEED = 0.022 // container widths per second

export default function SelectedSpaces() {
  const root = useRef(null)
  const arc = useRef(null)
  const tileEls = useRef([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const arcEl = arc.current
    let W = arcEl.clientWidth
    let offset = 0
    let visible = true

    const layout = () => {
      const curved = W >= 768
      const tw = curved ? W * 0.2417 : W * 0.48
      const gap = curved ? W * 0.011 : W * 0.03
      const pitch = tw + gap
      const span = pitch * tiles.length

      tileEls.current.forEach((el, i) => {
        if (!el) return
        let x = (((i * pitch + offset) % span) + span) % span
        if (x > span - pitch) x -= span
        el.style.width = `${tw}px`
        el.style.transform = `translate3d(${x}px,0,0)`

        if (!curved) {
          el.style.clipPath = ''
          return
        }
        const hAt = (px) => {
          const u = Math.min(1.6, Math.pow((px - W / 2) / (W / 2), 2))
          return CURVE_BASE + CURVE_RISE * u
        }
        const hl = hAt(x)
        const hr = hAt(x + tw)
        const p = (v) => `${(v * 100).toFixed(2)}%`
        el.style.clipPath = `polygon(0 ${p(CENTER_Y - hl / 2)}, 100% ${p(CENTER_Y - hr / 2)}, 100% ${p(CENTER_Y + hr / 2)}, 0 ${p(CENTER_Y + hl / 2)})`
      })
    }

    layout()

    const ro = new ResizeObserver(() => {
      W = arcEl.clientWidth
      layout()
    })
    ro.observe(arcEl)

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { rootMargin: '200px' })
    io.observe(arcEl)

    const tick = (_t, dtMs) => {
      if (!visible || reduced) return
      offset -= W * SPEED * (Math.min(dtMs, 100) / 1000)
      layout()
    }
    gsap.ticker.add(tick)

    const ctx = gsap.context(() => {
      if (reduced) return
      gsap.from('.ss-head > *', {
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
      })
      gsap.from(arcEl, {
        scrollTrigger: { trigger: arcEl, start: 'top 90%', once: true },
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: 'power3.out',
      })
    }, root)

    return () => {
      gsap.ticker.remove(tick)
      ro.disconnect()
      io.disconnect()
      ctx.revert()
    }
  }, [])

  return (
    <section ref={root} className="ss">
      <div className="ss-head">
        <SectionTag>SELECTED SPACES</SectionTag>
        <h2 className="ss-title">See the landscape take shape</h2>
        <p className="ss-sub">
          From planting and hardscape to complete outdoor environments — spaces shaped by Coco Studio
          across Bengaluru.
        </p>
      </div>

      <div ref={arc} className="ss-arc" role="group" aria-label="Selected outdoor spaces">
        {tiles.map((s, i) => (
          <figure
            key={i}
            ref={(el) => (tileEls.current[i] = el)}
            className="ss-tile"
            aria-hidden={i >= spaces.length ? 'true' : undefined}
          >
            <img src={s.src} alt={i >= spaces.length ? '' : s.alt} width="465" height="1006" loading="eager" decoding="async" draggable="false" />
          </figure>
        ))}
      </div>
    </section>
  )
}
