import React from 'react'
import './style.css'
import ModalButton from '@/components/modal/components/modalButton'
import HubberStoriesData from '@/components/data/hubberStoriesData'
import SubHeaderSmall from '@/components/subHeaderSmall'
import SubHeader from '@/components/subHeader'
import AsideContainer from '@/components/asideContainer'
import useWindowResize from '@/utliz/useWindowResize'


export default function HubberGrid() {

  const windowWidth = useWindowResize()

  return (
    <AsideContainer>
      <SubHeader text="Join our growing HandyHub community" />
      <div className="modal-button-wrapper">
        {HubberStoriesData.slice(0, windowWidth <= 550 ? 3 : undefined).map((story, index) => (
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
