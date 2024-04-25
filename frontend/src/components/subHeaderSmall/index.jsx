import React from 'react'
import './style.css'


export default function SubHeaderSmall({ icon, text }) {
  return (
    <h3>
      {icon}
      {text}
    </h3>
  )
}
