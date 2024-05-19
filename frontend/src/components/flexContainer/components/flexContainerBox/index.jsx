import React from 'react'
import './style.css'


export default function FlexContainerBox({ children, className }) {
  return (
    <div className={`flex-container-box ${className}`}>
      {children}
    </div>
  )
}
