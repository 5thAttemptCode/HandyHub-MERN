import React, { useState, useRef } from 'react'
import './style.css'
import AsideContainer from '@/components/asideContainer'
import faqData from '@/components/data/faq'
import SubHeader from '@/components/subHeader'
import SubHeaderSmall from '@/components/subHeaderSmall'
import useClickOutside from '@/utliz/useClickOutside'


export default function FAQ() {

  const [ openedIndex, setOpenedIndex ] = useState(null)

  const faqRef = useRef(null)

  const active = openedIndex !== null

  // toggle the list-items
  const toggleItem = (index) => {
    if (index === openedIndex) {
      setOpenedIndex(null)
    } else {
      setOpenedIndex(index)
    }
  }

  // using custom hook
  useClickOutside({
    containerRef: faqRef,
    childRef: faqRef,
    isActive: active,
    toggle: () => setOpenedIndex(null)
  })

  return (
    <AsideContainer>
      <SubHeader text="Frequently asked questions" />
      <ul className='faq-ul' ref={faqRef}>
        {faqData.map((item, index) => (
          <li 
            onClick={() => toggleItem(index)} 
            key={item.id} 
            className={`faq-container ${openedIndex === index ? "active" : ""}`}
          >
            <SubHeaderSmall text={item.question} />
            {openedIndex === index && (
              <p>{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </AsideContainer>
  )
}