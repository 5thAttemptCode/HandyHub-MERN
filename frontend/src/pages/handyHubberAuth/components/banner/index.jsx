import React from 'react'
import './style.css'
import AsideContainer from '@/components/asideContainer'


export default function Banner() {
  return (
    <AsideContainer backgroundColor="var(--gridContainerOne">
      <div className="banner">
        <div className="banner-container">
          <p>A Gig is bought every</p>
          <h1>5 Seconds</h1>
        </div>
        <div className="banner-container">
          <p>Transactions</p>
          <h1>30Mil+</h1>
        </div>
        <div className="banner-container">
          <p>Highest payed gig</p>
          <h1>$1.3Mil</h1>
        </div>
      </div>
    </AsideContainer>
  )
}
