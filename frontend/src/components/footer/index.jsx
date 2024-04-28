import React from 'react'
import './style.css'
import Logo from '../logo'
import { InstagramLogo, LinkedinLogo, MetaLogo, PinterestLogo, TiktokLogo, TwitterLogo } from '@phosphor-icons/react'


export default function Footer() {

  const logoSize = 25

  return (
    <footer>
      <div className="footer-container"></div>
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
