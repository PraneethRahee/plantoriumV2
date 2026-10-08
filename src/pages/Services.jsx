import PageHero from '../components/PageHero/PageHero'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import SelectedSpaces from '../components/SelectedSpaces/SelectedSpaces'
import FinalCTA from '../components/FinalCTA/FinalCTA'

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        current="Services"
        separator="/"
        video="/assets/services/service.webm"
        poster="/assets/services/service-poster.webp"
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
