import React from 'react'
import './style.css'
import SubHeader from '@/components/subHeader'
import SubHeaderSmall from '@/components/subHeaderSmall'
import ModalButton from './components/modal/components/modalButton'
import HowItWorks from './components/howItWorks'
import AsideContainer from '../../components/asideContainer'


export default function HandyHubber() {

  return (
    <>
      <section className='handy-auth'>
        <SubHeader text="Work Your Way" />
        <SubHeaderSmall text="You bring the skill. We'll make earning easy." />
        <ModalButton />
      </section>
      <HowItWorks />
      <AsideContainer>
        <SubHeaderSmall text="Sign up and create your first Gig today" />
        <ModalButton />
        <AsideContainer></AsideContainer>
      </AsideContainer>
    </>
  )
}
