import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { CaretDown } from '@phosphor-icons/react'
import DropdownMenu from './navComponents/dropdownMenu'


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
    <>
      <nav>
      <Link className='logo' to="/">Handy<span>Hub</span></Link>
      <ul>
        <DropdownMenu
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
            handleLinkClick={handleLinkClick}
        />
        <Link to="">Become a HandyHubber</Link>
        <button>Sign Up</button>
        <Link to="/register">Join</Link>
      </ul>
    </nav>
    </>
  )
}
