import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import CloverMark from '../Logo/CloverMark'
import { getLenis } from '../../utils/lenis'
import { normalize, useRouter } from '../../utils/router'
import './PageLoader.css'

const glideTo = (top) => {
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(top)
  else window.scrollTo({ top, behavior: 'smooth' })
}

export default function PageLoader() {
  const overlay = useRef(null)
  const busy = useRef(false)
  const { navigate } = useRouter()
  const navigateRef = useRef(navigate)
  navigateRef.current = navigate

  useEffect(() => {
    const el = overlay.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.set(el, { autoAlpha: 0 })

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest?.('a[href]')
      if (!a || a.target === '_blank') return
      const href = a.getAttribute('href')
      if (!href || href === '#') return

      // in-page anchors: plain smooth scroll
      if (href.startsWith('#')) {
        const t = document.querySelector(href)
        if (!t) return
        e.preventDefault()
        glideTo(t.getBoundingClientRect().top + window.scrollY)
        return
      }

      // internal pages: loader, then a full page change
      if (!href.startsWith('/') || !a.hasAttribute('data-transition')) return
      e.preventDefault()

      const next = normalize(href)
      if (next === normalize(window.location.pathname)) {
        glideTo(0)
        return
      }
      if (busy.current) return
      busy.current = true

      const lenis = getLenis()
      lenis?.stop()

      const tl = gsap.timeline({
        onComplete: () => {
          busy.current = false
          lenis?.start()
        },
      })

      if (reduced) {
        tl.to(el, { autoAlpha: 1, duration: 0.15 })
          .add(() => navigateRef.current(next))
          .to({}, { duration: 0.2 })
          .to(el, { autoAlpha: 0, duration: 0.2 })
        return
      }

      tl.set('.pl-mark', { scale: 0.5, opacity: 0, rotation: 0 })
        .set('.pl-name', { opacity: 0, x: -14 })
        .to(el, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' })
        .to('.pl-mark', { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }, 0.25)
        .to('.pl-mark', { rotation: 540, duration: 1.3, ease: 'power2.inOut' }, 0.25)
        .to('.pl-name', { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }, 0.45)
        .add(() => navigateRef.current(next), 0.95)
        .to(el, { autoAlpha: 0, duration: 0.5, ease: 'power2.inOut' }, 1.6)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return (
    <div ref={overlay} className="pl" aria-hidden="true">
      <div className="pl-logo">
        <CloverMark className="pl-mark" />
        <span className="pl-name">COCO STUDIO</span>
      </div>
    </div>
  )
}
