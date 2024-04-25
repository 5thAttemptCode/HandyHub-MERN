import React from 'react'
import './style.css'


export default function FlexContainer({ children }) {
  return (
    <div className='flex-container'>
      {children}
    </div>
  )
}
