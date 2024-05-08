import React from 'react'
import './style.css'


export default function AsideContainer({ children, backgroundColor }) {
  return (
    <aside style={{background: backgroundColor}}>
      {children}
    </aside>
  )
}
