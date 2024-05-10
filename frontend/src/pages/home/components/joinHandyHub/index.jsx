import React from 'react'
import './style.css'
import GridContainer from '@/components/gridContainer'
import ModalButton from '@/components/modal/components/modalButton'


export default function JoinHandyHub() {

  const authlId = "authModal"
  
  return (
    <GridContainer>
      <div className="help">
        <h1>Take your business to the <span>next level</span></h1>
        <ModalButton id={authlId} text="Join HandyHub" />
        <img src="/public/image.png" alt="" />
      </div>
    </GridContainer>
  )
}
