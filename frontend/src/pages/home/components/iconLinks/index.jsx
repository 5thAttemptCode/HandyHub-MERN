import React from 'react'
import './style.css'
import SubHeader from '@/components/subHeader'
import { IndustryData } from '@/components/data' 
import IconLink from './components/iconLink'
import GridContainer from '../../../../components/gridContainer'


export default function IconLinks() {

  return (
    <GridContainer>
      <SubHeader text="You need it, we've got it" />
      <div className="icon-links-container">
      {IndustryData.map(item => 
        <IconLink
          key={item.industryName}
          to={`/${item.url}`} 
          icon={item.icon}
          page={item.industryName}
        /> 
      )}
      </div>
    </GridContainer>
  )
}