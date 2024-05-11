import React from 'react'
import './style.css'
import SubHeader from '@/components/subHeader'
import SubHeaderSmall from '@/components/subHeaderSmall'
import HowItWorks from './components/howItWorks'
import AsideContainer from '@/components/asideContainer'
import FAQ from './components/faq'
import ModalButton from '@/components/modal/components/modalButton'
import HubberGrid from './components/hubberGrid'


export default function HandyHubber() {

  const authlId = "authModal"
  const modalText = "Join HandyHub"
  
  return (
    <>
      <section className='handy-auth'>
        <SubHeader text="Work Your Way" />
        <SubHeaderSmall text="You bring the skill. We'll make earning easy." />
        <ModalButton id={authlId} text={modalText} />
      </section>
      <HubberGrid />
      <HowItWorks />
      <FAQ />
      <AsideContainer backgroundColor="var(--gridContainerThree)">
        <SubHeaderSmall text="Sign up and create your first Gig today" />
        <ModalButton id={authlId} text={modalText} />
      </AsideContainer>
    </>
  )
}
