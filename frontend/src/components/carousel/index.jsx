import React from 'react'
import './style.css'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from './components/arrowButtons'
import { Link } from 'react-router-dom'
import SubHeader from '../subHeader'


const EmblaCarousel = ({ Slider, ElementOne, ElementTwo, ElementThree, ElementFour, LinkTo = false, SubText = false, ...props}) => {
    
  const options = {
    ...props,
    loop: true  // enable infinite sliding
  }
  
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Slider.map((item, index) => (
            <div className="embla__slide" key={`slide-${index}`}>
              {SubText && <p>{ElementFour[index]} </p>} 
              <SubHeader text={ElementOne[index]} />
              <img src={ElementTwo[index]} alt="" />
              {LinkTo && <Link to={ElementThree[index]} />}
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
