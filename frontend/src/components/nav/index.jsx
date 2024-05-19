import React from 'react'
import './style.css'
import { IndustryData } from '../data'
import { Link } from 'react-router-dom'
import DropdownMenu from '../dropdownMenu'
import ExploreLink from './components/exploreLink'
import { useAuthStore } from '@/context/AuthContext'
import ResponsiveMenu from './components/responsiveMenu'
import SearchBar from '../searchBar'
import useScrollVisibility from '@/utliz/useScrollVisibility'


export default function Navbar() {

  //AuthContext for login/register
  const { activeTab, setActiveTab } = useAuthStore()

  // toggle .sub-nav visibility
  const showSubNav = useScrollVisibility(0.5)

  return (
    <>
      <nav>
        <div className="nav-container">
          <Link className='link-logo' to="/">Handy<span>Hub</span></Link>
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
          </ul>
          <ResponsiveMenu />
        </div>
        {showSubNav &&
          <div className="sub-nav">
            <SearchBar />
          </div>
        }
      </nav>
    </>
  )
}
