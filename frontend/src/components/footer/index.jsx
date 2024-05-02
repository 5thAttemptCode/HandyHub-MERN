import React from 'react'
import './style.css'
import Logo from '../logo'
import { InstagramLogo, LinkedinLogo, MetaLogo, PinterestLogo, TiktokLogo, TwitterLogo } from '@phosphor-icons/react'
import FooterUL from './footerUL'
import { IndustryData } from '../data'


export default function Footer() {

  const logoSize = 25

  return (
    <footer>
      <div className="footer-container">
      <FooterUL text="Categories" dataArray={IndustryData} propName="industryName" url="url" />
      </div>
      <div className="footer-container">
        <div className="footer-box">
          <Logo />
          <p>&copy; HandyHub International Ltd. 2024</p>
        </div>
        <div className="footer-box">
          <a href="#"><TiktokLogo size={logoSize} /></a>
          <a href="#"><InstagramLogo size={logoSize} /></a>
          <a href="#"><LinkedinLogo size={logoSize} /></a>
          <a href="#"><MetaLogo size={logoSize} /></a>
          <a href="#"><PinterestLogo size={logoSize} /></a>
          <a href="#"><TwitterLogo size={logoSize} /></a>
        </div>
      </div>
    </footer>
  )
}
