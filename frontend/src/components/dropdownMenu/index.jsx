import React, { useEffect, useRef } from 'react'
import './style.css'
import { CaretDown } from '@phosphor-icons/react'
import ExploreLink from '../nav/navComponents/exploreLink'


export default function DropdownMenu(props) {

  const {buttonContent, children, menuVisible, setMenuVisible, handleLinkClick} = props
  
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
        {buttonContent}
        <CaretDown className='caret' style={{ rotate: menuVisible? '180deg' : ''}} />
      </button>
      <div className="dropdown-menu" style={{ display: menuVisible? 'flex' : 'none'}}>
        {children}
      </div>
    </div>
  )
}