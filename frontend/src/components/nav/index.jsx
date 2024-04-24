import React, { useContext } from 'react'
import './style.css'
import { IndustryData } from '../data'
import { Link } from 'react-router-dom'
import DropdownMenu from '../dropdownMenu'
import ExploreLink from './components/exploreLink'
import { useAuthStore } from '@/context/AuthContext'
import { Hamburger } from '@phosphor-icons/react'
import ResponsiveMenu from './components/responsiveMenu'


export default function Navbar() {

  //AuthContext for login/register
  const { activeTab, setActiveTab } = useAuthStore()

  return (
    <nav>
      <Link className='logo' to="/">Handy<span>Hub</span></Link>
      <ul>
        <DropdownMenu
          buttonContent="Explore "
        >
          {IndustryData.map(item => 
            <ExploreLink 
              to={`/${item.url}`} 
              title={item.industryName} 
              phrase={item.subText} 
              key={item.industryName}
            /> 
          )}
        </DropdownMenu>
        <Link className='hanhub' to="/become-a-handyhubber">HandyHubber</Link>
        <Link to="/auth" onClick={() => setActiveTab(1)}>Login</Link>
        <Link to="/auth" onClick={() => setActiveTab(2)}>Sign Up</Link>
        <ResponsiveMenu />
      </ul>
    </nav>
  )
}
