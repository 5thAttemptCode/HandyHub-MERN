import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function CompanyContainer({ children, to, company }) {
  return (
    <div className='company-container'>
      {children}
      <Link to={to} state={company} />
    </div>
  )
}