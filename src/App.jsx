import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import PageLoader from './components/PageLoader/PageLoader'
import { PAGES } from './pages/Pages'
import { RouterProvider, useRouter } from './utils/router'
import { getLenis } from './utils/lenis'
import useLenis from './hooks/useLenis'

gsap.registerPlugin(ScrollTrigger)

function Shell() {
  const { path } = useRouter()
  const Page = PAGES[path]
  const first = useRef(true)

  useLenis()

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    window.scrollTo(0, 0)
    getLenis()?.scrollTo(0, { immediate: true, force: true })
    const id = setTimeout(() => ScrollTrigger.refresh(), 150)
    return () => clearTimeout(id)
  }, [path])

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <Page key={path} />
      <Footer />
      {!['/work', '/services', '/about', '/contact'].includes(path) && <WhatsAppButton />}
      <PageLoader />
    </div>
  )
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  )
}
