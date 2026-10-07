import { useEffect, useRef, useState } from 'react'
import Logo from '../Logo/Logo'
import { useRouter } from '../../utils/router'
import { getLenis } from '../../utils/lenis'
import './Navbar.css'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { path } = useRouter()
  const toggleRef = useRef(null)
  const closeRef = useRef(null)

  // lock page scroll and handle Escape while the drawer is open
  useEffect(() => {
    if (!open) return
    const lenis = getLenis()
    lenis?.stop()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      lenis?.start()
      toggleRef.current?.focus({ preventScroll: true })
    }
  }, [open])

  // close the drawer if the window grows to desktop width
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="nav-wrap">
      <nav className="nav-pill" aria-label="Primary">
        <Logo />

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="nav-link"
                data-transition
                aria-current={path === l.href ? 'page' : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="/contact" className="nav-cta" data-transition>Book Now</a>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="nav-drawer"
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-backdrop${open ? ' is-open' : ''}`} onClick={close} aria-hidden="true" />

      <aside
        id="nav-drawer"
        className={`nav-drawer${open ? ' is-open' : ''}`}
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open ? '' : undefined}
      >
        <div className="nav-drawer-head">
          <span className="nav-drawer-title">Menu</span>
          <button ref={closeRef} type="button" className="nav-close" aria-label="Close menu" onClick={close}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <ul className="nav-drawer-list">
          {links.map((l, i) => (
            <li key={l.label} style={{ '--i': i }}>
              <a
                href={l.href}
                data-transition
                aria-current={path === l.href ? 'page' : undefined}
                onClick={close}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/contact" className="nav-drawer-cta" data-transition onClick={close}>
          Book Now
        </a>
      </aside>
    </header>
  )
}
