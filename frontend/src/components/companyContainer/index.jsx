import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function CompanyContainer({ children, to }) {
  return (
    <div className='company-container'>
      {children}
      <Link to={to} />
    </div>
  )
}
