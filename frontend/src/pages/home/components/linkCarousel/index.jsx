import React from 'react'
import GridContainer from '../../../../components/gridContainer'
import EmblaCarousel from '../../../../components/carousel'
import { IndustryData } from '@/components/data'
import SubHeader from '../../../../components/subHeader'


export default function LinkCarousel() {
  return (
    <GridContainer backgroundColor="var(--gridContainerTwo)">
      <SubHeader marginBottom="2rem" text="Popular services" />
      <EmblaCarousel
        Slider={IndustryData} 
        ElementOne={IndustryData.map(item => item.industryName)}
        ElementTwo={IndustryData.map(item => item.image)}
        ElementThree={IndustryData.map(item => item.url)}
        ElementFour={IndustryData.map(item => item.subText)}
        LinkTo={true} 
        SubText={true}
      />
    </GridContainer>
  )
}
