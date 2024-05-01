import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { CaretDown } from '@phosphor-icons/react'


export default function DropdownMenu(props) {

  const { buttonContent, children, menuVisible: propMenuVisible = false } = props
  
  const dropdownRef = useRef(null)
  const [ menuVisible, setMenuVisible ] = useState(propMenuVisible)

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

  const handleSelection = (event) => {
    setMenuVisible(false)
  }
    
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={() => setMenuVisible(prevMenuVisible => !prevMenuVisible)}>
        {buttonContent}
        <CaretDown className='caret' style={{ rotate: menuVisible ? '180deg' : ''}} />
      </button>
        <div className="dropdown-menu" onClick={handleSelection} style={{ display: menuVisible ? 'flex' : 'none'}}>
          {children}
        </div>
    </div>
  )
}


