import React from 'react'
import './style.css'
import GridContainer from '@/components/gridContainer'
import FlexContainerBox from '@/components/flexContainer/components/flexContainerBox'
import SubHeader from '@/components/subHeader'
import SubHeaderSmall from '../../../../components/subHeaderSmall' 
import GuideForYouData from '../../../../components/data/guidesForYouData'
import { Link } from 'react-router-dom'


export default function GuideForYou() {
  return (
    <GridContainer>
      <SubHeader marginBottom="2rem" text="Guides for your home project" />
      <ul className='guide-for-you-ul'>
        {GuideForYouData.map(item => (
          <FlexContainerBox key={item.id}>
            <img src={item.image} alt="" />
            <SubHeaderSmall text={item.headline} />
            <Link to={`/${item.url}`} />
          </FlexContainerBox>
        ))}
      </ul>
    </GridContainer>
  )
}
