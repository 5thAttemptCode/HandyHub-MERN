import React from 'react'
import './style.css'


export default function FlexContainerBox({ children }) {
  return (
    <div className='flex-container-box'>
      {children}
    </div>
  )
}
