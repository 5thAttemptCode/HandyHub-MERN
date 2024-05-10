import React, { useContext, useRef } from 'react'
import './style.css'
import useClickOutside from '@/utliz/useClickOutside'
import { ModalContext } from '@/context/modalContext'
import { useBodyScrollLock } from '@/utliz/useNoBodyScroll'


export default function Modal({ children , id}) {

  // toggle the modal
  const { modals, toggleModal } = useContext(ModalContext)
  const isActive = modals[id] || false
  const className = isActive ? "modal active" : "modal"

  // toggle the body-scroll
  useBodyScrollLock(isActive)

  // close on outsideCLick
  const modalRef = useRef(null)
  const authRef = useRef(null)

  // Adjusted toggle function to include the ID
  const handleToggle = () => toggleModal(id)

   useClickOutside({
     containerRef: modalRef,
     childRef: authRef,
     isActive: isActive,
     toggle: handleToggle 
   })

  return (
    <div className={className} ref={modalRef}>
      <div className="modal-container" ref={authRef}>
       {children}
      </div>
    </div>
  )
}