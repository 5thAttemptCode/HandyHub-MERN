import React from 'react'
import './style.css'
import FlexContainer from '../../../../components/flexContainer'
import FlexContainerBox from '../../../../components/flexContainer/components/flexContainerBox'
import SubHeader from '../../../../components/subHeader'
import SubHeaderSmall from '../../../../components/subHeaderSmall' 
import { CheckCircle } from '@phosphor-icons/react'
import { bestPartData } from '../../../../components/data/bestPartData'


export default function BestPart() {
  return (
    <FlexContainer>
      <FlexContainerBox>
        <SubHeader marginBottom="2rem" text="The best part? Everything." />
        <ul className='best-part-ul'>
          {bestPartData.map(item => (
            <li key={item.id}>
              <SubHeaderSmall 
                icon={<CheckCircle size={27} />} 
                text={item.title} 
              />
              <p>{item.bestText}</p>
            </li>
          ))}
        </ul>
      </FlexContainerBox>
      <FlexContainerBox>
        <img className='best-part-img' src="https://images.pexels.com/photos/3569601/pexels-photo-3569601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </FlexContainerBox>
    </FlexContainer>
  )
}
