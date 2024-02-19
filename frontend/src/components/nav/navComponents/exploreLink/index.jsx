import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function ExploreLink(props) {

  const { to, clickHandler, title, phrase } = props

  return (
    <Link className='explore-link' to={to} onClick={clickHandler}>
      {title} 
      <p>{phrase}</p>
    </Link>
  )
}
