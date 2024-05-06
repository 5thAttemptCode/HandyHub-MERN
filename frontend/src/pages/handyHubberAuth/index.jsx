import React from 'react'
import './style.css'
import SubHeader from '@/components/subHeader'
import SubHeaderSmall from '@/components/subHeaderSmall'
import ModalButton from './components/modal/components/modalButton'


export default function HandyHubber() {

  return (
    <section className='handy-auth'>
      <SubHeader text="Work Your Way" />
      <SubHeaderSmall text="You bring the skill. We'll make earning easy." />
      <ModalButton />
    </section>
  )
}
