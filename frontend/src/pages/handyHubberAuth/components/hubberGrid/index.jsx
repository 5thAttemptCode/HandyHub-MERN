import React from 'react'
import './style.css'
import ModalButton from '@/components/modal/components/modalButton'
import HubberStoriesData from '../../../../components/data/hubberStoriesData'
import SubHeaderSmall from '@/components/subHeaderSmall'
import SubHeader from '@/components/subHeader'
import AsideContainer from '@/components/asideContainer'


export default function HubberGrid() {

  return (
    <AsideContainer>
      <SubHeader text="Join our growing HandyHub community" />
      <div className="modal-button-wrapper">
        {HubberStoriesData.map((story, index) => (
          <ModalButton 
            key={story.id} 
            id={story.modalID}  
          >
            <SubHeaderSmall text={`I am ${story.name}`} />
            <img src={story.image} alt="" />
          </ModalButton>
        ))}
      </div>
      <p>What's your skill?</p>
      <ModalButton text="Become a HandyHubber" id="authModal"/>
    </AsideContainer>
  )
}
