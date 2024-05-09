import React, { useRef, useState } from 'react'
import './style.css'
import useClickOutside from '@/utliz/useClickOutside'
import { CaretDown } from '@phosphor-icons/react'


export default function DropdownMenu(props) {

  // Props
  const { buttonContent, children, menuVisible: propMenuVisible = false } = props

  const dropdownRef = useRef(null)

  const [ menuVisible, setMenuVisible ] = useState(propMenuVisible)

  // using the custom hook
  useClickOutside({
    containerRef: dropdownRef,
    childRef: dropdownRef,
    isActive: menuVisible,
    toggle: () => setMenuVisible(false)
  })

  // toggle the menu
  const toggleMenuVisibility = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible)
  }

  // close menu when clicking link
  const handleSelection = (event) => {
    setMenuVisible(false)
    event.stopPropagation()
  }
    
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleMenuVisibility}>
        {buttonContent}
        <CaretDown className='caret' style={{ rotate: menuVisible ? '180deg' : ''}} />
      </button>
      <div 
        className="dropdown-menu"  
        onClick={handleSelection}  
        style={{ display: menuVisible ? 'flex' : 'none'}}
      >
        {children}
      </div>
    </div>
  )
}


