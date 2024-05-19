import React from 'react'
import './style.css'
import FlexContainer from '@/components/flexContainer'
import FlexContainerBox from '@/components/flexContainer/components/flexContainerBox'
import ModalButton from '@/components/modal/components/modalButton'


export default function JoinHandyHub() {

  const authlId = "authModal"
  
  return (
    <FlexContainer>
      <FlexContainerBox className="join-handyhub-flex-container-box">
        <h1>Take your business to the <span>next level</span></h1>
        <ModalButton id={authlId} text="Join HandyHub" />
      </FlexContainerBox>
      <FlexContainerBox className="join-handyhub-flex-container-box">
       <img src="/public/image.png" alt="" />
      </FlexContainerBox>
    </FlexContainer>
  )
}
