import React from 'react'
import './style.css'
import Modal from '@/components/modal'
import HubberStoriesData from '@/components/data/hubberStoriesData'
import SubHeaderSmall from '@/components/subHeaderSmall'


export default function HubberStories() {

  return (
    <>
      {HubberStoriesData.map((story, index) => (
        <Modal id={story.modalID} key={story.id} width="90vw">
          <div className="hubber-stories-wrapper">
            <img src={story.image} alt="" />
            <div className="hubber-quote">
              <span>{story.story} </span>
              <h5>| {story.name}</h5>
            </div>
            <div className="hubber-stories-container">
              <SubHeaderSmall text={`HandyHubber since ${story.year}`} />
              <h4><span>profession:</span>&nbsp;&nbsp;{story.industry}&nbsp;&nbsp;{story.icon}</h4>
              <p>{story.stats}</p>
            </div>
          </div>
        </Modal>
      ))}
    </>
  )
}
