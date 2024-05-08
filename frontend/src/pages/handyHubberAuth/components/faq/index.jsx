import React, { useState } from 'react'
import './style.css'
import AsideContainer from '@/components/asideContainer'
import SubHeader from '@/components/subHeader'
import SubHeaderSmall from '@/components/subHeaderSmall'
import faqData from '@/components/data/faq'
import useClickOutside from '@/utliz/useClickOutside'


export default function FAQ() {

  const [ openedIndex, setOpenedIndex ] = useState(false)

  const toggleItem = (index) => {
    if (index === openedIndex) {
      setOpenedIndex(null)
    } else {
      setOpenedIndex(index)
    }
  }

  return (
    <AsideContainer>
      <SubHeader text="Frequently asked questions" />
      <ul className='faq-ul'>
        {faqData.map((item, index) => (
          <li 
            onClick={() => toggleItem(index)} 
            key={item.id} 
            className="faq-container"
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
