import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function IconLink ({ to, icon, page}){
    return(
      <Link className='icon-link' to={to}>
        {icon}
        <h4>{page}</h4>
      </Link>
    )
  }