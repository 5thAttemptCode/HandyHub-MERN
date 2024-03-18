import React from 'react'
import './style.css'
import SubHeader from '@/components/subHeader'
import { IndustryData } from '@/components/data' 
import { Link } from 'react-router-dom'


export default function IconLinks() {

  return (
    <div className='icon-links'>
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
    </div>
  )
}

const IconLink = ({ to, icon, page}) => {
  return(
    <Link className='icon-link' to={to}>
      {icon}
      <h4>{page}</h4>
    </Link>
  )
}