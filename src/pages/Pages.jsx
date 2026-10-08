import { lazy } from 'react'
import Home from './Home'
import './Pages.css'

// Home loads eagerly (landing page / LCP); the rest split into their own chunks.
const Work = lazy(() => import('./Work'))
const Services = lazy(() => import('./Services'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))

export const PAGES = {
  '/': Home,
  '/work': Work,
  '/services': Services,
  '/about': About,
  '/contact': Contact,
}
