import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero/PageHero'
import WorkIntro from '../components/WorkIntro/WorkIntro'
import WorkList from '../components/WorkList/WorkList'
import WorkCategories from '../components/WorkCategories/WorkCategories'
import SelectedSpaces from '../components/SelectedSpaces/SelectedSpaces'
import FinalCTA from '../components/FinalCTA/FinalCTA'

function useIsMobile() {
  const query = '(max-width: 767px)'
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', onChange)
    setIsMobile(mq.matches)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return isMobile
}

export default function Work() {
  const isMobile = useIsMobile()

  return (
    <>
      <PageHero title="Explore Projects" current="Work" image="/assets/work/hero.webp" spec />
      <div className="page-work">
        <WorkIntro />
        <WorkList />
        {isMobile ? (
          <WorkCategories />
        ) : (
          <>
            <SelectedSpaces />
            <FinalCTA />
          </>
        )}
      </div>
    </>
  )
}
