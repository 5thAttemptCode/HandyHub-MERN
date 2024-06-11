import React from 'react'
import './style.css'
import Modal from '@/components/modal'
import SubHeader from '@/components/subHeader'
import { LinkedinLogo, MetaLogo, TwitterLogo, WhatsappLogo, Link } from '@phosphor-icons/react'


export default function ShareModal() {
  return (
    <Modal>
      <div className="share-modal">
        <SubHeader text="Share this gig" />
        <p>Spread the word about this Gig on HandyHub</p>
        <ul className='share-modal-ul'>
          <li>
            <a href="#" className='share-modal-link'>
              <LinkedinLogo size={40} style={{ fill:"#0072b1"}} />
              Linkedin 
            </a>
          </li>
          <li>
            <a href="#" className='share-modal-link'>
              <MetaLogo size={40} style={{ fill:"#1877F2"}} />
              Meta
            </a>
          </li>
          <li>
            <a href="#" className='share-modal-link'>
              <WhatsappLogo size={40} style={{ fill:"#25D366"}} />
              WhatsApp
            </a>
          </li>
          <li>
            <a href="#" className='share-modal-link'>
              <TwitterLogo size={40} style={{ fill:"#008AD8"}} />
              Twitter
            </a>
          </li>
          <li className='share-modal-link '>
            <Link size={40} style={{ fill:"white"}} />
            Copy link
          </li>
        </ul>
      </div>
    </Modal>
  )
}
