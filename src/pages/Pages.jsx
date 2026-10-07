import Hero from '../components/Hero/Hero'
import PageHero from '../components/PageHero/PageHero'
import AboutHero from '../components/AboutHero/AboutHero'
import ContactHero from '../components/ContactHero/ContactHero'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import ContactForm from '../components/ContactForm/ContactForm'
import AboutStory from '../components/AboutStory/AboutStory'
import AboutMission from '../components/AboutMission/AboutMission'
import WorkIntro from '../components/WorkIntro/WorkIntro'
import WorkList from '../components/WorkList/WorkList'
import WhyWeWork from '../components/WhyWeWork/WhyWeWork'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import OurApproach from '../components/OurApproach/OurApproach'
import SelectedWork from '../components/SelectedWork/SelectedWork'
import WhyCoco from '../components/WhyCoco/WhyCoco'
import SelectedSpaces from '../components/SelectedSpaces/SelectedSpaces'
import FinalCTA from '../components/FinalCTA/FinalCTA'
import './Pages.css'

export function Home() {
  return (
    <>
      <Hero />
      <WhyWeWork />
      <WhatWeDo />
      <SelectedWork />
      <OurApproach />
      <WhyCoco />
      <SelectedSpaces />
      <FinalCTA />
    </>
  )
}

export function Work() {
  return (
    <>
      <PageHero title="Explore Projects" current="Work" image="/assets/work/hero.webp" spec />
      <div className="page-work">
        <WorkIntro />
        <WorkList />
        <SelectedSpaces />
        <FinalCTA />
      </div>
    </>
  )
}

export function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        current="Services"
        separator="/"
        video="/assets/services/service.webm"
        spec
      />
      <div className="page-services">
        <WhatWeDo
          variant="services"
          tag="SELECTED WORK"
          title="Bringing your outdoor vision to life"
          aside="We offer a full range of gardening and landscaping services designed to transform your outdoor space into a beautiful, thriving oasis."
        />
        <SelectedSpaces />
        <FinalCTA />
      </div>
    </>
  )
}

export function About() {
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

export function Contact() {
  return (
    <>
      <ContactHero />
      <div className="contact-body">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  )
}

export const PAGES = {
  '/': Home,
  '/work': Work,
  '/services': Services,
  '/about': About,
  '/contact': Contact,
}
