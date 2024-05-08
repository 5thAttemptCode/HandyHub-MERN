import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { CaretDown } from '@phosphor-icons/react'
import useClickOutside from '../../utliz/useClickOutside'


export default function DropdownMenu(props) {

  const { buttonContent, children, menuVisible: propMenuVisible = false } = props
  
  const dropdownRef = useRef(null)
  const menuRef = useRef(null)
  const [ menuVisible, setMenuVisible ] = useState(propMenuVisible)

  useClickOutside({
    containerRef: dropdownRef,
    childRef: menuRef,
    isActive: menuVisible,
    toggle: () => setMenuVisible(false)
  })

  const handleSelection = (event) => {
    setMenuVisible(false)
  }
    
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={() => setMenuVisible(prevMenuVisible => !prevMenuVisible)}>
        {buttonContent}
        <CaretDown className='caret' style={{ rotate: menuVisible ? '180deg' : ''}} />
      </button>
      <div className="dropdown-menu" ref={menuRef} onClick={handleSelection} style={{ display: menuVisible ? 'flex' : 'none'}}>
        {children}
      </div>
    </div>
  )
}


