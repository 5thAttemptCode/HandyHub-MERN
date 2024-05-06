import React from 'react'
import './style.css'
import GridContainer from '@/components/gridContainer'
import ModalButton from '../../../handyHubberAuth/components/modal/components/modalButton'


export default function JoinHandyHub() {
  return (
    <GridContainer>
      <div className="help">
        <h1>Take your business to the <span>next level</span></h1>
        <ModalButton />
        <img src="/public/image.png" alt="" />
      </div>
    </GridContainer>
  )
}
