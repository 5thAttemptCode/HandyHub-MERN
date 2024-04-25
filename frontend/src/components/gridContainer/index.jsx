import React from 'react'
import './style.css'


export default function GridContainer({ children }) {
  return (
    <div className='grid-container'>
      {children}
    </div>
  )
}
