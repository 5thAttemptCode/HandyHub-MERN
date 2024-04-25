import React from 'react'
import './style.css'
import DropdownMenu from '../../../dropdownMenu'
import { Link } from 'react-router-dom'
import ExploreLink from '../exploreLink'
import { IndustryData } from '../../../data'


export default function ResponsiveMenu() {
  return (
    <div className="responsive-menu-wrapper">
      <DropdownMenu buttonContent="Menu ">
      <div className="responsive-menu-container">
        <ul>
          <Link to="/become-a-handyhubber">HandyHubber</Link>
          <Link to="/auth">Login</Link>
          <Link to="/auth">Sign Up</Link>
          <p>Explore</p>
          {IndustryData.map(item => 
            <ExploreLink
              to={`/${item.url}`} 
              title={item.industryName} 
              phrase={item.subText} 
              key={item.industryName}
              showPhrase={false}
            /> 
          )}
        </ul>
      </div>
    </DropdownMenu>
    </div>
  )
}
