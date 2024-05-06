import React, { useContext } from 'react'
import './style.css'
import { ModalContext } from '@/context/modalContext' 


export default function ModalButton() {
    
  const { toggleModal } = useContext(ModalContext)

  return (
    <button className='modal-button green-button' onClick={toggleModal}>
      Join HandyHub
    </button>
  )
}