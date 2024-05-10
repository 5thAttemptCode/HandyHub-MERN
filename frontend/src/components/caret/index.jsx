import React from 'react'
import './style.css'
import { CaretDown } from '@phosphor-icons/react'


export default function CaretIcon({ stateProp, size }) {
  return (
    <CaretDown size={size} className='caret' style={{ rotate: stateProp ? '180deg' : ''}} />
  )
}
