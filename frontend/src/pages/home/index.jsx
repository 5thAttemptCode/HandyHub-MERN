import React from 'react'
import './style.css'
import IconLinks from './components/iconLinks'
import { IndustryData } from '@/components/data'
import { Link } from 'react-router-dom'
import BestPart from './components/bestPart'
import EmblaCarousel from '../../components/carousel'
import LinkCarousel from './components/linkCarousel'


export default function Home() {
  return (
    <>
      <section className='home'>
        <div className='header-container'>
          <h1>Find the right <span>experts</span> for your home-build</h1>
          <div className="quick-links">
            Popular:
            {IndustryData.slice(0, 4).map(item => (
              <Link key={item.industryName} to={`/${item.url}`}>{item.industryName}</Link>
            ))}
          </div>
        </div>
      </section>
      <IconLinks />
      <BestPart />
      <LinkCarousel />
    </>
  )
}