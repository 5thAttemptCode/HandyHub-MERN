import React, { useContext } from 'react'
import './style.css'
import { ModalContext } from '@/context/modalContext' 


export default function ModalButton({ id, text }) {

  const { toggleModal } = useContext(ModalContext)

  return (
    <button className='modal-button green-button' onClick={() => toggleModal(id)}>
      {text}
    </button>
  )
}