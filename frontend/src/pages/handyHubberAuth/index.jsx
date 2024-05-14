import React from 'react'
import './style.css'
import Banner from './components/banner'
import FAQ from './components/faq'
import HowItWorks from './components/howItWorks'
import HubberGrid from './components/hubberGrid'
import JoinToday from './components/joinToday'
import ModalButton from '@/components/modal/components/modalButton'
import SubHeader from '@/components/subHeader'
import SubHeaderSmall from '@/components/subHeaderSmall'


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
      <Banner />
      <HubberGrid />
      <HowItWorks />
      <FAQ />
      <JoinToday />
    </>
  )
}
