import React from 'react'
import './style.css'


export default function GridContainer({ backgroundColor, children }) {
  return (
    <div className='grid-container' style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  )
}
