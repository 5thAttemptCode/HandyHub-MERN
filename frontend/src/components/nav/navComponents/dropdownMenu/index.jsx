import React, { useEffect, useRef } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { CaretDown } from '@phosphor-icons/react'


export default function DropdownMenu(props) {

  const {menuVisible, setMenuVisible, handleLinkClick} = props
  const dropdownRef = useRef(null)

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
        document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
    
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={() => setMenuVisible(!menuVisible)}>
        Explore <CaretDown className='caret' style={{ rotate: menuVisible? '180deg' : ''}} />
      </button>
      <div className="dropdown-menu" style={{ display: menuVisible? 'flex' : 'none'}}>
        <Link to="/electrician" onClick={handleLinkClick}>
          Electrician 
          <p>Exquisite Electrical Solutions</p>
        </Link>
        <Link to="/roofer" onClick={handleLinkClick}>
          Roofer
          <p>Roofs done right, guaranteed tight!</p>
        </Link>
        <Link to="/plumber" onClick={handleLinkClick}>
          Plumber
          <p>A flush beats a full house</p>
        </Link>
        <Link to="/carpenter" onClick={handleLinkClick}>
          Carpenter
          <p>Elevating Spaces, Elevating Life</p>
        </Link>
        <Link to="/painter" onClick={handleLinkClick}>
          Painter
          <p>Making Your Vision a Vibrant Reality</p>
        </Link>
        <Link to="/mason" onClick={handleLinkClick}>
          Mason
          <p>Secrets hidden in plain sight</p>
        </Link>
      </div>
    </div>
  )
}