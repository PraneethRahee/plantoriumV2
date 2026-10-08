import AboutHero from '../components/AboutHero/AboutHero'
import AboutStory from '../components/AboutStory/AboutStory'
import AboutMission from '../components/AboutMission/AboutMission'
import SelectedSpaces from '../components/SelectedSpaces/SelectedSpaces'
import FinalCTA from '../components/FinalCTA/FinalCTA'

export default function About() {
  return (
    <>
      <AboutHero />
      <div className="page-about">
        <AboutStory />
        <AboutMission />
        <SelectedSpaces />
        <FinalCTA />
      </div>
    </>
  )
}
