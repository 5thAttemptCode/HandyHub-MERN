import React from 'react'
import './style.css'
import Logo from '../logo'
import { InstagramLogo, LinkedinLogo, MetaLogo, PinterestLogo, TiktokLogo, TwitterLogo } from '@phosphor-icons/react'
import FooterUL from './footerUL'
import { IndustryData } from '../data'
import SupportData from '../data/footerData/supportData'
import CommunityData from '../data/footerData/communityData'
import AboutData from '../data/footerData/aboutData'
import BusinessData from '../data/footerData/businessData'


export default function Footer() {

  const logoSize = 25

  return (
    <footer>
      <div className="footer-container">
        <FooterUL text="Categories" dataArray={IndustryData} propName="industryName" url="url" />
        <FooterUL text="About" dataArray={AboutData} propName="linkValue" url="/" />
        <FooterUL text="Support and Education" dataArray={SupportData} propName="linkValue" url="/" />
        <FooterUL text="Community" dataArray={CommunityData} propName="linkValue" url="/" />
        <FooterUL text="Business Solutions" dataArray={BusinessData} propName="linkValue" url="/" />
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
