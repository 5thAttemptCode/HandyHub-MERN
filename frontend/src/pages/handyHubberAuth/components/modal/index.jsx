import React, { useContext, useEffect, useRef } from 'react'
import './style.css'
import { ModalContext } from '@/context/modalContext'
import TabsAuth from '@/components/tabsAuth'
import { useAuthStore } from '@/context/AuthContext'
import HandyLogin from '../login'
import HandyRegister from '../register'
import { useBodyScrollLock } from '@/utliz/useNoBodyScroll'
import useClickOutside from '@/utliz/useClickOutside'


export default function HandyModal() {

  // toggle the modal
  const { isActive, toggleModal } = useContext(ModalContext)
  const className = isActive ? "modal active" : "modal"

  // toggle the login/register
  const { activeTab, setActiveTab } = useAuthStore()

  // toggle the body-scroll
  useBodyScrollLock(isActive)

  // close on outsideCLick
  const modalRef = useRef(null)
  const authRef = useRef(null)
  useClickOutside({ 
    containerRef: modalRef, 
    childRef: authRef, 
    isActive: isActive, 
    toggle: toggleModal 
  })

  return (
    <div className={className} ref={modalRef}>
      <div className="handy-auth-container" ref={authRef}>
        <TabsAuth
          activeTab={activeTab}
          handleChange={(event, newValue) => setActiveTab(newValue)}
          TabComponentOne={ HandyLogin }
          TabComponentTwo={ HandyRegister }
        />
      </div>
    </div>
  )
}