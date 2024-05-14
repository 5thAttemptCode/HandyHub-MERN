import React from 'react'
import AsideContainer from '@/components/asideContainer'
import ModalButton from '@/components/modal/components/modalButton'
import SubHeaderSmall from '@/components/subHeaderSmall'


export default function JoinToday() {

  const authlId = "authModal"
  const modalText = "Join HandyHub"

  return (
    <AsideContainer backgroundColor="#3252d3">
      <SubHeaderSmall text="Sign up and create your first Gig today" />
      <ModalButton id={authlId} text={modalText} />
    </AsideContainer>
  )
}
