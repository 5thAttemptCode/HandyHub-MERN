import { House } from '@phosphor-icons/react'
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function PageHeader({ textH1, textH4 }) {
  return (
    <div className='page-header'>
      <Link to="/">
        <House size={20} />
      </Link>
      <h1>{textH1}</h1>
      <h4>{textH4}</h4>
    </div>
  )
}
