import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './PageHero.css'

export default function PageHero({ title, current, image, video, separator = '|', spec = false }) {
  const root = useRef(null)
  const videoEl = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      videoEl.current?.pause()
      return
    }
    videoEl.current?.play()?.catch(() => {})
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.wh-media', { scale: 1.1, duration: 1.8, ease: 'power2.out' }, 0)
        .from('.wh-crumbs', { opacity: 0, y: 16, duration: 0.9 }, 0.2)
        .from('.wh-title', { opacity: 0, y: 50, duration: 1.1 }, 0.3)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="wh">
      {video ? (
        <video
          ref={videoEl}
          className="wh-media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={video} type="video/webm" />
        </video>
      ) : (
        <img
          className="wh-media"
          src={image}
          alt=""
          width="2048"
          height="1024"
          fetchpriority="high"
          decoding="async"
        />
      )}
      <div className="wh-shade" />

      <div className="wh-inner">
        <nav className="wh-crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <a href="/" data-transition>Home</a>
            </li>
            <li className="wh-sep" aria-hidden="true">{separator}</li>
            <li aria-current="page">{current}</li>
          </ol>
        </nav>
        <h1 className={`wh-title${spec ? ' wh-title--spec' : ''}`}>{title}</h1>
      </div>
    </section>
  )
}
