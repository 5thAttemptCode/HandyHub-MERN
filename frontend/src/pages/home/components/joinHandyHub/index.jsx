import React from 'react'
import './style.css'
import GridContainer from '../../../../components/gridContainer'
import { Link } from 'react-router-dom'


export default function JoinHandyHub() {
  return (
    <GridContainer>
      <div className="help">
        <h1>Take your business to the <br /> <span>next level</span></h1>
        <Link to="/">Join HandyHub</Link>
        <img src="/public/image.png" alt="" />
      </div>
    </GridContainer>
  )
}
