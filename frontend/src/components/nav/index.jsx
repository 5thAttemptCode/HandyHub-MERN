import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import DropdownMenu from '../dropdownMenu'
import ExploreLink from './navComponents/exploreLink'


export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false)
  const dropdownRef = useRef(null)

  const handleLinkClick = () => {
    setMenuVisible(null)
  }

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  return (
    <nav>
      <Link className='logo' to="/">Handy<span>Hub</span></Link>
      <ul>
        <DropdownMenu
          buttonContent="Explore "
          menuVisible={menuVisible}
          setMenuVisible={setMenuVisible}
          handleLinkClick={handleLinkClick}
        >
          <ExploreLink to="/electrician" clickHandler={handleLinkClick} title="Electrician" phrase="Exquisite Electrical Solutions" />
          <ExploreLink to="/roofer" clickHandler={handleLinkClick} title="Roofer" phrase="Roofs done right, guaranteed tight!" />
          <ExploreLink to="/plumber" clickHandler={handleLinkClick} title="Plumber" phrase="A flush beats a full house" />
          <ExploreLink to="/carpenter" clickHandler={handleLinkClick} title="Carpenter" phrase="Elevating Spaces, Elevating Life" />
          <ExploreLink to="/painter" clickHandler={handleLinkClick} title="Painter" phrase="Making Your Vision a Vibrant Reality" />
          <ExploreLink to="/mason" clickHandler={handleLinkClick} title="Mason" phrase="Secrets hidden in plain sight" />
        </DropdownMenu>
        <Link className='hanhub' to="/become-a-handyhubber">Become a HandyHubber</Link>
        <button>Sign Up</button>
        <Link to="/register">Join</Link>
      </ul>
    </nav>
  )
}
