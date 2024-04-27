import React from 'react'
import GridContainer from '../../../../components/gridContainer'
import EmblaCarousel from '../../../../components/carousel'
import { IndustryData } from '@/components/data'


export default function LinkCarousel() {
  return (
    <GridContainer backgroundColor="rgb(14, 60, 66)">
      <EmblaCarousel
        Slider={IndustryData} 
        ElementOne={IndustryData.map(item => item.industryName)}
        ElementTwo={IndustryData.map(item => item.image)}
        ElementThree={IndustryData.map(item => item.url)}
        LinkTo={true} 
      />
    </GridContainer>
  )
}
