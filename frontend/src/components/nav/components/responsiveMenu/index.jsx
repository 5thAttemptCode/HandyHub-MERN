import React from 'react'
import './style.css'
import DropdownMenu from '../../../dropdownMenu'
import { Link } from 'react-router-dom'
import ExploreLink from '../exploreLink'
import { IndustryData } from '../../../data'


export default function ResponsiveMenu() {
  return (
    <div className="resmenu">
        <DropdownMenu buttonContent="Menu ">
      <div className="responsive-menu">
        <ul>
          <Link to="/become-a-handyhubber">HandyHubber</Link>
          <Link to="/auth">Login</Link>
          <Link to="/auth">Sign Up</Link>
          {IndustryData.map(item => 
            <ExploreLink
              to={`/${item.url}`} 
              title={item.industryName} 
              phrase={item.subText} 
              key={item.industryName}
            /> 
          )}
        </ul>
      </div>
    </DropdownMenu>
    </div>
  )
}
