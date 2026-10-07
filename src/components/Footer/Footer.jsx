import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CloverMark from '../Logo/CloverMark'
import Logo from '../Logo/Logo'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger)

const links = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M6.94 8.5H4V20h2.94V8.5zM5.47 4A1.7 1.7 0 1 0 5.5 7.4 1.7 1.7 0 0 0 5.47 4zM20 13.4c0-3-1.6-4.9-4.1-4.9-1.3 0-2.2.7-2.6 1.4V8.5h-2.9V20h2.9v-6.2c0-1.6.8-2.6 2.1-2.6 1.2 0 1.8.9 1.8 2.5V20H20v-6.6z',
  },
  {
    label: 'Facebook',
    href: '#',
    path: 'M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z',
  },
  {
    label: 'Twitter',
    href: '#',
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
]

export default function Footer() {
  const root = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ft-lockup',
        { y: () => window.innerWidth * 0.2, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 90%',
            end: 'bottom bottom',
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={root} className="ft">
      <div className="ft-m">
        <Logo />
        <p className="ft-m-about">
          One team. Every stage. Every landscape. Consulting, design, execution and maintenance.
        </p>
        <h2 className="ft-m-head">Contact us</h2>
        <a className="ft-m-line" href="mailto:hello@cocostudio.com">hello@cocostudio.com</a>
        <a className="ft-m-line" href="tel:+919845012345">+91 98450 12345</a>
        <ul className="ft-m-social">
          {['Linkedin', 'Facebook', 'Twitter'].map((s) => (
            <li key={s}><a href="#">{s}</a></li>
          ))}
        </ul>
        <p className="ft-m-copy">&copy; 2026 Coco Studio. All rights reserved.</p>
        <p className="ft-m-legal"><a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a></p>
      </div>
      <div className="ft-scene">
        <div className="ft-lockup">
          <CloverMark className="ft-mark" />
          <div className="ft-word">
            <span className="ft-tag">Consulting · Design · Execution · Maintenance</span>
            <span className="ft-name">COCO STUDIO</span>
          </div>
        </div>

        <img
          src="/assets/home/spacebelow.webp"
          alt=""
          aria-hidden="true"
          className="ft-bg"
          width="1920"
          height="1280"
          loading="lazy"
        />

        <nav className="ft-nav" aria-label="Footer">
          <ul className="ft-links">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} data-transition>{l.label}</a>
              </li>
            ))}
          </ul>
          <ul className="ft-social">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="ft-bar">
        <p className="ft-legal">
          <span>&copy; 2026 Coco Studio. All rights reserved.</span>
          <span>
            <a href="#">Privacy Policy</a> · <a href="#">Terms</a>
          </span>
        </p>
        <p className="ft-motto">One team. Every stage. Every landscape.</p>
      </div>
    </footer>
  )
}
