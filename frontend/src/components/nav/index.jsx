import React, { useContext, useEffect, useRef, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import DropdownMenu from '../dropdownMenu'
import ExploreLink from './navComponents/exploreLink'
import { AuthContext } from '../../context/AuthContext'


export default function Navbar() {

  //AuthContext for login/register
  const { activeTab, setActiveTab } = useContext(AuthContext)

  return (
    <nav>
      <Link className='logo' to="/">Handy<span>Hub</span></Link>
      <ul>
        <DropdownMenu
          buttonContent="Explore "
        >
          <ExploreLink to="/electrician" title="Electrician" phrase="Exquisite Electrical Solutions" />
          <ExploreLink to="/roofer" title="Roofer" phrase="Roofs done right, guaranteed tight!" />
          <ExploreLink to="/plumber" title="Plumber" phrase="A flush beats a full house" />
          <ExploreLink to="/carpenter" title="Carpenter" phrase="Elevating Spaces, Elevating Life" />
          <ExploreLink to="/painter" title="Painter" phrase="Making Your Vision a Vibrant Reality" />
          <ExploreLink to="/mason" title="Mason" phrase="Secrets hidden in plain sight" />
        </DropdownMenu>
        <Link className='hanhub' to="/become-a-handyhubber">Become a HandyHubber</Link>
        <Link to="/auth" onClick={() => setActiveTab(1)}>Login</Link>
        <Link to="/auth" onClick={() => setActiveTab(2)}>Sign Up</Link>
      </ul>
    </nav>
  )
}
