import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export const ROUTES = ['/', '/work', '/services', '/about', '/contact']

const TITLES = {
  '/': 'COCO Studio - Landscape Design & Maintenance',
  '/work': 'Selected Work - COCO Studio',
  '/services': 'Services - COCO Studio',
  '/about': 'About - COCO Studio',
  '/contact': 'Contact - COCO Studio',
}

export const normalize = (p) => {
  const x = p.replace(/\/+$/, '') || '/'
  return ROUTES.includes(x) ? x : '/'
}

const RouterContext = createContext({ path: '/', navigate: () => {} })

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname))

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    document.title = TITLES[path] || TITLES['/']
  }, [path])

  const navigate = useCallback((to) => {
    const next = normalize(to)
    if (next !== normalize(window.location.pathname)) window.history.pushState(null, '', next)
    setPath(next)
  }, [])

  const value = useMemo(() => ({ path, navigate }), [path, navigate])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export const useRouter = () => useContext(RouterContext)
